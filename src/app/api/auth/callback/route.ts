import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const code = searchParams.get("code");
  const tokenHash = searchParams.get("token_hash");
  const type = searchParams.get("type");
  const baseUrl = request.nextUrl.origin;

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  // Handle token_hash flow (email change, signup, recovery)
  if (tokenHash && type) {
    const { error } = await supabase.auth.verifyOtp({
      token_hash: tokenHash,
      type: type as "email_change" | "signup" | "recovery" | "magiclink",
    });

    if (error) {
      return NextResponse.redirect(
        `${baseUrl}/auth/confirm?error=verify_failed&error_description=${encodeURIComponent(error.message)}`
      );
    }

    return NextResponse.redirect(
      `${baseUrl}/auth/confirm?message=${encodeURIComponent("Your email has been updated successfully.")}`
    );
  }

  // Handle PKCE code flow
  if (code) {
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

  return NextResponse.redirect(
    `${baseUrl}/auth/confirm?error=missing_params&error_description=No+authorization+code+or+token+provided`
  );
}
