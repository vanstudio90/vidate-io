import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const code = searchParams.get("code");
  const tokenHash = searchParams.get("token_hash");
  const type = searchParams.get("type");
  const baseUrl = request.nextUrl.origin;
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

  // Handle token_hash flow
  if (tokenHash && type) {
    const res = await fetch(`${supabaseUrl}/auth/v1/verify`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: serviceKey,
        Authorization: `Bearer ${serviceKey}`,
      },
      body: JSON.stringify({ token_hash: tokenHash, type }),
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      const msg = err.error_description || err.msg || "Verification failed";
      return NextResponse.redirect(
        `${baseUrl}/auth/confirm?error=verify_failed&error_description=${encodeURIComponent(msg)}`
      );
    }

    return NextResponse.redirect(
      `${baseUrl}/auth/confirm?message=${encodeURIComponent("Your email has been updated successfully.")}`
    );
  }

  // Handle PKCE code flow — verify via Supabase's verify endpoint
  if (code) {
    const res = await fetch(`${supabaseUrl}/auth/v1/verify`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: serviceKey,
        Authorization: `Bearer ${serviceKey}`,
      },
      body: JSON.stringify({ token_hash: code, type: "email_change" }),
    });

    if (!res.ok) {
      // Try other types if email_change fails
      for (const t of ["signup", "recovery", "magiclink"]) {
        const retry = await fetch(`${supabaseUrl}/auth/v1/verify`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            apikey: serviceKey,
            Authorization: `Bearer ${serviceKey}`,
          },
          body: JSON.stringify({ token_hash: code, type: t }),
        });
        if (retry.ok) {
          return NextResponse.redirect(
            `${baseUrl}/auth/confirm?message=${encodeURIComponent("Verified successfully.")}`
          );
        }
      }

      const err = await res.json().catch(() => ({}));
      const msg = err.error_description || err.msg || "Link is invalid or has expired";
      return NextResponse.redirect(
        `${baseUrl}/auth/confirm?error=verify_failed&error_description=${encodeURIComponent(msg)}`
      );
    }

    return NextResponse.redirect(
      `${baseUrl}/auth/confirm?message=${encodeURIComponent("Your email has been updated successfully.")}`
    );
  }

  return NextResponse.redirect(
    `${baseUrl}/auth/confirm?error=missing_params&error_description=No+authorization+code+or+token+provided`
  );
}
