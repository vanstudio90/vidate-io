import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { searchParams, pathname } = request.nextUrl;
  const message = searchParams.get("message");
  const error = searchParams.get("error");
  const errorDescription = searchParams.get("error_description");
  const type = searchParams.get("type");

  // PKCE code exchange — route to API handler
  const code = searchParams.get("code");
  if (code && pathname === "/") {
    const url = request.nextUrl.clone();
    url.pathname = "/api/auth/callback";
    return NextResponse.redirect(url);
  }

  // Redirect any Supabase auth callback to /auth/confirm (but not if already there)
  if (pathname !== "/auth/confirm") {
    const hasAuthParams = message || error || type === "email_change" || type === "signup" || type === "recovery" || type === "magiclink";

    if (hasAuthParams) {
      const url = request.nextUrl.clone();
      url.pathname = "/auth/confirm";
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api|futu|admin|favicon|logo|icon|apple-icon).*)"],
};
