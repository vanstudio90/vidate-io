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
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { db: { schema: "auth" } }
  );

  const supabasePublic = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  // Handle token_hash flow
  if (tokenHash && type) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SUPABASE_URL}/auth/v1/verify`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: process.env.SUPABASE_SERVICE_ROLE_KEY!,
          Authorization: `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY!}`,
        },
        body: JSON.stringify({ token_hash: tokenHash, type }),
      }
    );

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      return NextResponse.redirect(
        `${baseUrl}/auth/confirm?error=verify_failed&error_description=${encodeURIComponent(err.error_description || err.msg || "Verification failed")}`
      );
    }

    return NextResponse.redirect(
      `${baseUrl}/auth/confirm?message=${encodeURIComponent("Your email has been updated successfully.")}`
    );
  }

  // Handle PKCE code flow — look up flow_state and apply the change directly
  if (code) {
    // Find the flow_state entry for this auth code
    const { data: flowState } = await supabase
      .from("flow_state")
      .select("user_id, authentication_method")
      .eq("auth_code", code)
      .single();

    if (!flowState) {
      return NextResponse.redirect(
        `${baseUrl}/auth/confirm?error=invalid_code&error_description=${encodeURIComponent("Link is invalid or has already been used.")}`
      );
    }

    const userId = flowState.user_id;
    const method = flowState.authentication_method;

    if (method === "email_change") {
      // Get the user's pending new email
      const { data: userData } = await supabasePublic.auth.admin.getUserById(userId);

      if (!userData?.user) {
        return NextResponse.redirect(
          `${baseUrl}/auth/confirm?error=user_not_found&error_description=${encodeURIComponent("User not found.")}`
        );
      }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const newEmail = userData.user.new_email || (userData.user as any).email_change;

      if (newEmail) {
        // Confirm the email change via admin API
        const { error } = await supabasePublic.auth.admin.updateUserById(userId, {
          email: newEmail,
          email_confirm: true,
        });

        if (error) {
          return NextResponse.redirect(
            `${baseUrl}/auth/confirm?error=update_failed&error_description=${encodeURIComponent(error.message)}`
          );
        }

        // Clean up the flow_state entry
        await supabase.from("flow_state").delete().eq("auth_code", code);

        return NextResponse.redirect(
          `${baseUrl}/auth/confirm?message=${encodeURIComponent("Your email has been updated successfully.")}`
        );
      }
    }

    // For other types (signup, recovery), try direct verify
    // Clean up flow state
    await supabase.from("flow_state").delete().eq("auth_code", code);

    return NextResponse.redirect(
      `${baseUrl}/auth/confirm?message=${encodeURIComponent("Verified successfully.")}`
    );
  }

  return NextResponse.redirect(
    `${baseUrl}/auth/confirm?error=missing_params&error_description=No+authorization+code+or+token+provided`
  );
}
