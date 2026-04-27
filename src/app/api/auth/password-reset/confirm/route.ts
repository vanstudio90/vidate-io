import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: NextRequest) {
  const { token, userId, password } = await req.json();

  if (!token || !userId || !password) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  if (password.length < 6) {
    return NextResponse.json({ error: "Password must be at least 6 characters" }, { status: 400 });
  }

  const { data: userData } = await supabase.auth.admin.getUserById(userId);
  if (!userData?.user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  const meta = userData.user.user_metadata;
  if (!meta?.password_reset_token || meta.password_reset_token !== token) {
    return NextResponse.json({ error: "Invalid or expired reset link" }, { status: 400 });
  }

  // Check if token is older than 24 hours
  const resetAt = meta.password_reset_at ? new Date(meta.password_reset_at) : null;
  if (resetAt && Date.now() - resetAt.getTime() > 24 * 60 * 60 * 1000) {
    return NextResponse.json({ error: "Reset link has expired. Please request a new one." }, { status: 400 });
  }

  // Update password and clear token
  const { error } = await supabase.auth.admin.updateUserById(userId, {
    password,
    user_metadata: {
      ...meta,
      password_reset_token: null,
      password_reset_at: null,
    },
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true, message: "Password updated" });
}
