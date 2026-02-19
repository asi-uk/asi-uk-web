import { NextRequest, NextResponse } from "next/server";
import { newsletterSchema } from "@/lib/schemas/newsletter";
import { subscribeToNewsletter } from "@/lib/mailchimp";

export async function POST(request: NextRequest) {
  let body: { email?: string };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON body" },
      { status: 400 }
    );
  }

  const result = newsletterSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json(
      { error: result.error.errors[0].message },
      { status: 400 }
    );
  }

  const subscribeResult = await subscribeToNewsletter(result.data.email);

  if (!subscribeResult.success) {
    return NextResponse.json(
      { error: subscribeResult.error || "Failed to subscribe" },
      { status: 500 }
    );
  }

  if (subscribeResult.alreadySubscribed) {
    return NextResponse.json({
      success: true,
      alreadySubscribed: true,
    });
  }

  return NextResponse.json({ success: true });
}
