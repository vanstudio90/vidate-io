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
    const [profile, videos, reports, authUser] = await Promise.all([
      supabaseAdmin.from("profiles").select("*").eq("id", userId).single(),
      supabaseAdmin.from("profile_videos").select("*").eq("user_id", userId).order("slot_number"),
      supabaseAdmin.from("reports").select("*").eq("reported_id", userId).order("created_at", { ascending: false }),
      supabaseAdmin.auth.admin.getUserById(userId),
    ]);
    return NextResponse.json({
      profile: profile.data,
      auth: authUser.data?.user ? {
        email: authUser.data.user.email,
        phone: authUser.data.user.phone,
        provider: authUser.data.user.app_metadata?.provider,
        providers: authUser.data.user.app_metadata?.providers,
        email_confirmed_at: authUser.data.user.email_confirmed_at,
        last_sign_in_at: authUser.data.user.last_sign_in_at,
        created_at: authUser.data.user.created_at,
      } : null,
      videos: videos.data || [],
      reports: reports.data || [],
    });
  }

  // Fetch both profiles and auth users to merge email into list
  const [profilesRes, authUsersRes] = await Promise.all([
    supabaseAdmin
      .from("profiles")
      .select("id, display_name, gender, date_of_birth, city, is_active, is_verified, created_at, last_active, onboarding_completed")
      .order("created_at", { ascending: false }),
    supabaseAdmin.auth.admin.listUsers({ perPage: 1000 }),
  ]);

  if (profilesRes.error) return NextResponse.json({ error: profilesRes.error.message }, { status: 500 });

  const emailMap = new Map<string, string>();
  const phoneMap = new Map<string, string>();
  const providerMap = new Map<string, string>();
  for (const u of authUsersRes.data?.users || []) {
    if (u.email) emailMap.set(u.id, u.email);
    if (u.phone) phoneMap.set(u.id, u.phone);
    if (u.app_metadata?.provider) providerMap.set(u.id, u.app_metadata.provider);
  }

  const merged = (profilesRes.data || []).map(p => ({
    ...p,
    email: emailMap.get(p.id) || null,
    phone: phoneMap.get(p.id) || null,
    provider: providerMap.get(p.id) || null,
  }));

  return NextResponse.json(merged);
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
