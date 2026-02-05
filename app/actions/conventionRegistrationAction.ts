"use server";

import { z } from "zod";
import Stripe from "stripe";
import {
    conventionRegistrationSchema,
    ConventionRegistrationData,
    toServiceData,
    calculateOrderTotal,
    isFreeRegistration,
    TICKET_LABELS,
    TICKET_PRICES,
    TicketType,
} from "@/lib/schemas/convention-registration";
import {
    createConventionRegistration,
    updateConventionRegistrationStatus,
    getNotionPageUrl,
} from "@/lib/notion-convention";
import { sendConventionDiscordNotification } from "@/lib/discord-convention";
import { sendFreeRegistrationConfirmationEmail } from "@/lib/email-convention";

// Initialize Stripe (will be undefined if not configured)
const stripe = process.env.STRIPE_SECRET_KEY
    ? new Stripe(process.env.STRIPE_SECRET_KEY)
    : null;

export interface ConventionRegistrationResult {
    success: boolean;
    errors: string[] | null;
    checkoutUrl?: string;
    registrationId?: string;
}

export async function conventionRegistrationAction(
    data: ConventionRegistrationData
): Promise<ConventionRegistrationResult> {
    try {
        // Validate the data
        const validatedData = conventionRegistrationSchema.parse(data);
        const serviceData = toServiceData(validatedData);

        // Create Notion entry
        const isFree = isFreeRegistration(validatedData.attendees);
        const status = isFree ? "Confirmed" : "Pending Payment";

        const notionResult = await createConventionRegistration(serviceData, status);

        if (!notionResult.success) {
            console.error("Notion creation failed:", notionResult.error);
            return {
                success: false,
                errors: [notionResult.error || "Failed to save registration. Please try again."],
            };
        }

        const notionPageUrl = notionResult.pageId
            ? getNotionPageUrl(notionResult.pageId)
            : undefined;

        // If free registration, send confirmation email, Discord notification, and return success
        if (isFree) {
            // Send Discord notification for free registrations only
            // Paid registrations get Discord notification after Stripe webhook confirms payment
            if (notionPageUrl) {
                await sendConventionDiscordNotification({
                    email: serviceData.email,
                    attendeeCount: serviceData.attendeeCount,
                    orderTotal: serviceData.orderTotal,
                    notionPageUrl,
                    status,
                });
            }
            // Send confirmation email for free registrations (with QR codes if available)
            await sendFreeRegistrationConfirmationEmail({
                email: serviceData.email,
                attendeeCount: serviceData.attendeeCount,
                attendees: notionResult.attendeesWithTokens?.map((a) => ({
                    name: a.name,
                    ticketType: a.ticketType,
                    checkInUrl: a.checkInUrl,
                })),
            });

            return {
                success: true,
                errors: null,
                registrationId: notionResult.pageId,
            };
        }

        // Create Stripe Checkout session for paid registrations
        if (!stripe) {
            console.warn("Stripe not configured - registration saved but payment not processed");
            return {
                success: true,
                errors: null,
                registrationId: notionResult.pageId,
            };
        }

        // Use explicit BASE_URL if set, otherwise fallback to production domain
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://www.asiuk.org";

        // Build line items for Stripe
        const lineItems = buildStripeLineItems(validatedData.attendees);

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: lineItems,
            mode: "payment",
            success_url: `${baseUrl}/convention/register/confirmation?status=success&session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${baseUrl}/convention/register?cancelled=true`,
            customer_email: serviceData.email,
            metadata: {
                notionPageId: notionResult.pageId || "",
                email: serviceData.email,
                attendeeCount: String(serviceData.attendeeCount),
                type: "convention_registration",
            },
        });

        // Update Notion with Stripe session ID
        if (notionResult.pageId && session.id) {
            await updateConventionRegistrationStatus(notionResult.pageId, "Pending Payment", session.id);
        }

        return {
            success: true,
            errors: null,
            checkoutUrl: session.url || undefined,
            registrationId: notionResult.pageId,
        };
    } catch (error: unknown) {
        if (error instanceof z.ZodError) {
            const errorMessages = error.errors.map(
                (issue) => `${issue.path.join(".")} - ${issue.message}`
            );
            console.error("Validation errors:", errorMessages);
            return {
                success: false,
                errors: errorMessages,
            };
        }

        console.error("Convention registration error:", error);
        return {
            success: false,
            errors: [
                `An error occurred: ${error instanceof Error ? error.message : String(error)}`,
            ],
        };
    }
}

// Helper to build Stripe line items from attendees
function buildStripeLineItems(
    attendees: ConventionRegistrationData["attendees"]
): Stripe.Checkout.SessionCreateParams.LineItem[] {
    // Group attendees by ticket type
    const grouped = attendees.reduce((acc, attendee) => {
        const type = attendee.ticketType as TicketType;
        acc[type] = (acc[type] || 0) + 1;
        return acc;
    }, {} as Record<TicketType, number>);

    // Create line items for each ticket type (excluding free tickets)
    return (Object.entries(grouped) as [TicketType, number][])
        .filter(([type]) => TICKET_PRICES[type] > 0)
        .map(([type, quantity]) => ({
            price_data: {
                currency: "gbp",
                product_data: {
                    name: `ASI UK Convention 2026 - ${TICKET_LABELS[type]}`,
                    description: "20-21 June 2026 at Newbold College, Bracknell",
                },
                unit_amount: TICKET_PRICES[type] * 100, // Stripe uses smallest currency unit (pence)
            },
            quantity,
        }));
}
