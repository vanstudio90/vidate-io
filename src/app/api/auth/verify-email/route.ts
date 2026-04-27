import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const token = searchParams.get("token");
  const userId = searchParams.get("user_id");
  const baseUrl = req.nextUrl.origin;

  if (!token || !userId) {
    return NextResponse.redirect(
      `${baseUrl}/auth/confirm?error=missing_params&error_description=Invalid+verification+link`
    );
  }

  const { data: userData } = await supabase.auth.admin.getUserById(userId);
  if (!userData?.user) {
    return NextResponse.redirect(
      `${baseUrl}/auth/confirm?error=user_not_found&error_description=User+not+found`
    );
  }

  const meta = userData.user.user_metadata;
  if (!meta?.email_verify_token || meta.email_verify_token !== token) {
    return NextResponse.redirect(
      `${baseUrl}/auth/confirm?error=invalid_token&error_description=This+link+is+invalid+or+has+already+been+used`
    );
  }

  // Confirm the email
  const { error } = await supabase.auth.admin.updateUserById(userId, {
    email_confirm: true,
    user_metadata: {
      ...meta,
      email_verify_token: null,
      email_verified: true,
    },
  });

  if (error) {
    return NextResponse.redirect(
      `${baseUrl}/auth/confirm?error=verify_failed&error_description=${encodeURIComponent(error.message)}`
    );
  }

  return NextResponse.redirect(
    `${baseUrl}/auth/confirm?message=${encodeURIComponent("Your email has been verified! You can now sign in to Vidate.")}`
  );
}
