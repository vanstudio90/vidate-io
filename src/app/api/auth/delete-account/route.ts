import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: NextRequest) {
  // Verify authorization
  const authHeader = req.headers.get("authorization");
  if (!authHeader?.startsWith("Bearer ")) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const token = authHeader.replace("Bearer ", "");

  // Verify the token and get the authenticated user
  const { data: tokenUser, error: tokenError } = await supabase.auth.getUser(token);
  if (tokenError || !tokenUser?.user) {
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }

  const { user_id } = await req.json();
  if (!user_id) {
    return NextResponse.json({ error: "user_id is required" }, { status: 400 });
  }

  // Ensure the authenticated user can only delete their own account
  if (tokenUser.user.id !== user_id) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  // Delete the auth user
  const { error: deleteError } = await supabase.auth.admin.deleteUser(user_id);
  if (deleteError) {
    return NextResponse.json({ error: deleteError.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true, message: "Account deleted" });
}
