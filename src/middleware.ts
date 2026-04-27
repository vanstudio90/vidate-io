import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { searchParams, pathname } = request.nextUrl;
  const message = searchParams.get("message");

  // Redirect Supabase auth callbacks with ?message= to /auth/confirm
  if (pathname === "/" && message) {
    const url = request.nextUrl.clone();
    url.pathname = "/auth/confirm";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/"],
};
