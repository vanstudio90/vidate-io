import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: NextRequest) {
  const { user_id } = await req.json();
  if (!user_id) {
    return NextResponse.json({ error: "user_id is required" }, { status: 400 });
  }

  // Verify the user exists
  const { data: user, error: fetchError } = await supabase.auth.admin.getUserById(user_id);
  if (fetchError || !user?.user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  // Delete the auth user (cascade will handle profile data if RLS/triggers are set up)
  const { error: deleteError } = await supabase.auth.admin.deleteUser(user_id);
  if (deleteError) {
    return NextResponse.json({ error: deleteError.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true, message: "Account deleted" });
}
