import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

function checkAuth(req: NextRequest) {
  return req.cookies.get("admin_session")?.value === process.env.ADMIN_PASSWORD;
}

export async function GET(req: NextRequest) {
  if (!checkAuth(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("id");

  if (userId) {
    const [profile, videos, reports] = await Promise.all([
      supabaseAdmin.from("profiles").select("*").eq("id", userId).single(),
      supabaseAdmin.from("profile_videos").select("*").eq("user_id", userId).order("slot_number"),
      supabaseAdmin.from("reports").select("*").eq("reported_id", userId).order("created_at", { ascending: false }),
    ]);
    return NextResponse.json({
      profile: profile.data,
      videos: videos.data || [],
      reports: reports.data || [],
    });
  }

  const { data, error } = await supabaseAdmin
    .from("profiles")
    .select("id, display_name, gender, date_of_birth, city, is_active, is_verified, created_at, last_active, onboarding_completed")
    .order("created_at", { ascending: false });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

export async function DELETE(req: NextRequest) {
  if (!checkAuth(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { userId } = await req.json();

  // Delete in order: messages, matches, swipes, blocks, reports, videos, profile
  await supabaseAdmin.from("video_messages").delete().or(`sender_id.eq.${userId},match_id.in.(select id from matches where user1_id='${userId}' or user2_id='${userId}')`);
  await supabaseAdmin.from("matches").delete().or(`user1_id.eq.${userId},user2_id.eq.${userId}`);
  await supabaseAdmin.from("swipes").delete().or(`swiper_id.eq.${userId},swiped_id.eq.${userId}`);
  await supabaseAdmin.from("blocks").delete().or(`blocker_id.eq.${userId},blocked_id.eq.${userId}`);
  await supabaseAdmin.from("reports").delete().or(`reporter_id.eq.${userId},reported_id.eq.${userId}`);
  await supabaseAdmin.from("profile_videos").delete().eq("user_id", userId);
  const { error } = await supabaseAdmin.from("profiles").delete().eq("id", userId);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  // Also delete the auth user so the email is freed up
  await supabaseAdmin.auth.admin.deleteUser(userId);

  return NextResponse.json({ ok: true });
}
