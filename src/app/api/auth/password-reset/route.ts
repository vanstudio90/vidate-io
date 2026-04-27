import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { createClient } from "@supabase/supabase-js";
import crypto from "crypto";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: NextRequest) {
  const { email } = await req.json();
  if (!email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  // Check if user exists
  const { data: users } = await supabase.auth.admin.listUsers();
  const user = users?.users?.find(u => u.email === email);
  if (!user) {
    // Don't reveal if email exists or not
    return NextResponse.json({ ok: true, message: "If an account exists, a reset link has been sent." });
  }

  // Generate reset token
  const resetToken = crypto.randomBytes(32).toString("hex");

  // Store token in user metadata
  await supabase.auth.admin.updateUserById(user.id, {
    user_metadata: {
      ...user.user_metadata,
      password_reset_token: resetToken,
      password_reset_at: new Date().toISOString(),
    },
  });

  const resetUrl = `https://vidate.io/auth/reset-password?token=${resetToken}&user_id=${user.id}`;

  // Send via Resend
  const emailRes = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Vidate <love@vidate.io>",
      to: email,
      subject: "Reset your Vidate password",
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 480px; margin: 0 auto; padding: 40px 20px;">
          <div style="text-align: center; margin-bottom: 32px;">
            <h1 style="font-size: 28px; font-weight: 800; color: #1a1a2e; margin: 0;">Vidate</h1>
          </div>
          <div style="background: #ffffff; border-radius: 16px; padding: 32px; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
            <h2 style="font-size: 20px; font-weight: 700; color: #1a1a2e; margin: 0 0 12px;">Reset your password</h2>
            <p style="color: #666; font-size: 15px; line-height: 1.5; margin: 0 0 24px;">
              We received a request to reset your password. Click the button below to choose a new one.
            </p>
            <a href="${resetUrl}" style="display: block; text-align: center; background: linear-gradient(135deg, #F45474, #C13C9F); color: white; text-decoration: none; padding: 14px 24px; border-radius: 12px; font-weight: 600; font-size: 16px;">
              Reset Password
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
    return NextResponse.json({ error: "Failed to send reset email" }, { status: 500 });
  }

  return NextResponse.json({ ok: true, message: "Reset link sent" });
}
