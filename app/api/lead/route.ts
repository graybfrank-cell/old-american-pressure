import { NextResponse } from "next/server";
import { leadSchema } from "@/lib/schema";

/**
 * v1 lead handler.
 * Validates with Zod, console.logs the payload, returns { ok: true }.
 * Do NOT wire up Resend, Sendgrid, Google Sheets, or any external service here.
 * Real delivery is a later pass.
 */
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON" },
      { status: 400 }
    );
  }

  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        error: "Validation failed",
        issues: parsed.error.flatten(),
      },
      { status: 400 }
    );
  }

  // v1: just log. Vercel logs will show this.
  console.log("[lead]", {
    receivedAt: new Date().toISOString(),
    ...parsed.data,
  });

  return NextResponse.json({ ok: true });
}
