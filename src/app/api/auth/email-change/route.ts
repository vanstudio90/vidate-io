import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { createClient } from "@supabase/supabase-js";
import crypto from "crypto";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// POST: Request email change — sends verification email via Resend
export async function POST(req: NextRequest) {
  const authHeader = req.headers.get("authorization");
  if (!authHeader?.startsWith("Bearer ")) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const token = authHeader.slice(7);
  const { data: { user }, error: authError } = await supabase.auth.getUser(token);
  if (authError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { newEmail } = await req.json();
  if (!newEmail) {
    return NextResponse.json({ error: "New email is required" }, { status: 400 });
  }

  // Check if email is already taken
  const { data: existing } = await supabase.auth.admin.listUsers();
  const taken = existing?.users?.some(u => u.email === newEmail && u.id !== user.id);
  if (taken) {
    return NextResponse.json({ error: "A user with this email address has already been registered" }, { status: 409 });
  }

  // Generate a secure verification token
  const verifyToken = crypto.randomBytes(32).toString("hex");

  // Store the pending change in a simple table or use user metadata
  await supabase.auth.admin.updateUserById(user.id, {
    user_metadata: {
      ...user.user_metadata,
      pending_email: newEmail,
      email_change_token: verifyToken,
    },
  });

  // Send verification email via Resend
  const verifyUrl = `https://vidate.io/api/auth/email-change?token=${verifyToken}&user_id=${user.id}`;

  const emailRes = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Vidate <love@vidate.io>",
      to: newEmail,
      subject: "Confirm your new email address",
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 480px; margin: 0 auto; padding: 40px 20px;">
          <div style="text-align: center; margin-bottom: 32px;">
            <h1 style="font-size: 28px; font-weight: 800; color: #1a1a2e; margin: 0;">Vidate</h1>
          </div>
          <div style="background: #ffffff; border-radius: 16px; padding: 32px; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
            <h2 style="font-size: 20px; font-weight: 700; color: #1a1a2e; margin: 0 0 12px;">Confirm your new email</h2>
            <p style="color: #666; font-size: 15px; line-height: 1.5; margin: 0 0 24px;">
              Someone requested to change their Vidate account email to this address. Click the button below to confirm.
            </p>
            <a href="${verifyUrl}" style="display: block; text-align: center; background: linear-gradient(135deg, #F45474, #C13C9F); color: white; text-decoration: none; padding: 14px 24px; border-radius: 12px; font-weight: 600; font-size: 16px;">
              Confirm Email Change
            </a>
            <p style="color: #999; font-size: 13px; line-height: 1.5; margin: 24px 0 0; text-align: center;">
              If you didn't request this, you can safely ignore this email.
            </p>
          </div>
        </div>
      `,
    }),
  });

  if (!emailRes.ok) {
    const err = await emailRes.json().catch(() => ({}));
    return NextResponse.json({ error: "Failed to send verification email", details: err }, { status: 500 });
  }

  return NextResponse.json({ ok: true, message: "Verification email sent" });
}

// GET: Verify email change — called when user clicks the link
export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const token = searchParams.get("token");
  const userId = searchParams.get("user_id");
  const baseUrl = req.nextUrl.origin;

  if (!token || !userId) {
    return NextResponse.redirect(
      `${baseUrl}/auth/confirm?error=missing_params&error_description=${encodeURIComponent("Invalid verification link.")}`
    );
  }

  // Get the user and check the token
  const { data: userData } = await supabase.auth.admin.getUserById(userId);

  if (!userData?.user) {
    return NextResponse.redirect(
      `${baseUrl}/auth/confirm?error=user_not_found&error_description=${encodeURIComponent("User not found.")}`
    );
  }

  const meta = userData.user.user_metadata;
  if (!meta?.email_change_token || meta.email_change_token !== token) {
    return NextResponse.redirect(
      `${baseUrl}/auth/confirm?error=invalid_token&error_description=${encodeURIComponent("This link is invalid or has already been used.")}`
    );
  }

  const newEmail = meta.pending_email;
  if (!newEmail) {
    return NextResponse.redirect(
      `${baseUrl}/auth/confirm?error=no_pending&error_description=${encodeURIComponent("No pending email change found.")}`
    );
  }

  // Apply the email change
  const { error } = await supabase.auth.admin.updateUserById(userId, {
    email: newEmail,
    email_confirm: true,
    user_metadata: {
      ...meta,
      pending_email: null,
      email_change_token: null,
    },
  });

  if (error) {
    return NextResponse.redirect(
      `${baseUrl}/auth/confirm?error=update_failed&error_description=${encodeURIComponent(error.message)}`
    );
  }

  return NextResponse.redirect(
    `${baseUrl}/auth/confirm?message=${encodeURIComponent("Your email has been updated successfully.")}`
  );
}
