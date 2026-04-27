import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const code = searchParams.get("code");
  const baseUrl = request.nextUrl.origin;

  if (!code) {
    return NextResponse.redirect(
      `${baseUrl}/auth/confirm?error=missing_code&error_description=No+authorization+code+provided`
    );
  }

  // Exchange the PKCE code with Supabase
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const { error } = await supabase.auth.exchangeCodeForSession(code);

  if (error) {
    return NextResponse.redirect(
      `${baseUrl}/auth/confirm?error=exchange_failed&error_description=${encodeURIComponent(error.message)}`
    );
  }

  return NextResponse.redirect(
    `${baseUrl}/auth/confirm?message=${encodeURIComponent("Your email has been updated successfully.")}`
  );
}
