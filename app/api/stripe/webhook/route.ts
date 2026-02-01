import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { markConventionRegistrationPaid } from "@/lib/notion-convention";
import { sendConventionConfirmationEmail } from "@/lib/email-convention";

const stripe = process.env.STRIPE_SECRET_KEY
    ? new Stripe(process.env.STRIPE_SECRET_KEY)
    : null;

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

export async function POST(request: NextRequest) {
    if (!stripe) {
        console.error("Stripe not configured");
        return NextResponse.json({ error: "Stripe not configured" }, { status: 500 });
    }

    if (!webhookSecret) {
        console.error("Stripe webhook secret not configured");
        return NextResponse.json({ error: "Webhook secret not configured" }, { status: 500 });
    }

    const body = await request.text();
    const signature = request.headers.get("stripe-signature");

    if (!signature) {
        return NextResponse.json({ error: "No signature" }, { status: 400 });
    }

    let event: Stripe.Event;

    try {
        event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
    } catch (err) {
        console.error("Webhook signature verification failed:", err);
        return NextResponse.json(
            { error: `Webhook Error: ${err instanceof Error ? err.message : "Unknown error"}` },
            { status: 400 }
        );
    }

    // Handle the event
    switch (event.type) {
        case "checkout.session.completed": {
            const session = event.data.object as Stripe.Checkout.Session;

            // Check if this is a convention registration
            if (session.metadata?.type !== "convention_registration") {
                console.log("Ignoring non-convention checkout session:", session.id);
                break;
            }

            const notionPageId = session.metadata?.notionPageId;
            const email = session.metadata?.email || session.customer_email;
            const attendeeCount = parseInt(session.metadata?.attendeeCount || "0", 10);

            console.log("Convention payment completed:", {
                sessionId: session.id,
                notionPageId,
                email,
                attendeeCount,
            });

            // Update Notion status to Paid
            if (notionPageId) {
                const updateResult = await markConventionRegistrationPaid(notionPageId, session.id);
                if (!updateResult.success) {
                    console.error("Failed to update Notion:", updateResult.error);
                }
            }

            // Send confirmation email
            if (email) {
                const emailResult = await sendConventionConfirmationEmail({
                    email,
                    attendeeCount,
                    orderTotal: (session.amount_total || 0) / 100, // Convert from pence
                });
                if (!emailResult.success) {
                    console.error("Failed to send confirmation email:", emailResult.error);
                }
            }

            break;
        }

        case "checkout.session.expired": {
            const session = event.data.object as Stripe.Checkout.Session;

            if (session.metadata?.type !== "convention_registration") {
                break;
            }

            console.log("Convention checkout expired:", session.id);
            // Optionally update Notion status to "Expired" or "Cancelled"
            break;
        }

        default:
            console.log(`Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true });
}
