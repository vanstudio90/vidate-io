import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { createClient } from "@supabase/supabase-js";
import crypto from "crypto";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();
  if (!email || !password) {
    return NextResponse.json({ error: "Email and password are required" }, { status: 400 });
  }

  if (password.length < 6) {
    return NextResponse.json({ error: "Password must be at least 6 characters" }, { status: 400 });
  }

  // Check if email is already taken
  const { data: users } = await supabase.auth.admin.listUsers();
  const existing = users?.users?.find(u => u.email === email);
  if (existing) {
    return NextResponse.json({ error: "An account with this email already exists" }, { status: 409 });
  }

  // Create user without confirming email
  const { data: newUser, error: createError } = await supabase.auth.admin.createUser({
    email,
    password,
    email_confirm: false,
  });

  if (createError || !newUser?.user) {
    return NextResponse.json({ error: createError?.message || "Failed to create account" }, { status: 500 });
  }

  // Generate verification token
  const verifyToken = crypto.randomBytes(32).toString("hex");

  await supabase.auth.admin.updateUserById(newUser.user.id, {
    user_metadata: {
      email_verify_token: verifyToken,
    },
  });

  const verifyUrl = `https://vidate.io/api/auth/verify-email?token=${verifyToken}&user_id=${newUser.user.id}`;

  // Send verification email via Resend
  const emailRes = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Vidate <love@vidate.io>",
      to: email,
      subject: "Verify your Vidate account",
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 480px; margin: 0 auto; padding: 40px 20px;">
          <div style="text-align: center; margin-bottom: 32px;">
            <h1 style="font-size: 28px; font-weight: 800; color: #1a1a2e; margin: 0;">Vidate</h1>
          </div>
          <div style="background: #ffffff; border-radius: 16px; padding: 32px; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
            <h2 style="font-size: 20px; font-weight: 700; color: #1a1a2e; margin: 0 0 12px;">Welcome to Vidate!</h2>
            <p style="color: #666; font-size: 15px; line-height: 1.5; margin: 0 0 24px;">
              Click the button below to verify your email and start meeting real people through video.
            </p>
            <a href="${verifyUrl}" style="display: block; text-align: center; background: linear-gradient(135deg, #F45474, #C13C9F); color: white; text-decoration: none; padding: 14px 24px; border-radius: 12px; font-weight: 600; font-size: 16px;">
              Verify Email
            </a>
            <p style="color: #999; font-size: 13px; line-height: 1.5; margin: 24px 0 0; text-align: center;">
              If you didn't create this account, you can safely ignore this email.
            </p>
          </div>
        </div>
      `,
    }),
  });

  if (!emailRes.ok) {
    return NextResponse.json({ error: "Account created but failed to send verification email" }, { status: 500 });
  }

  return NextResponse.json({ ok: true, message: "Verification email sent" });
}
