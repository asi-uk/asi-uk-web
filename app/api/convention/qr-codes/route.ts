import { NextRequest, NextResponse } from "next/server";
import { getRegistrationByStripeSession, getAttendeesForRegistration } from "@/lib/notion-convention";
import { generateQRCodeSvg } from "@/lib/qr-code";

/**
 * GET /api/convention/qr-codes?session_id=...
 * Returns QR codes for all attendees in a registration
 */
export async function GET(request: NextRequest) {
    const sessionId = request.nextUrl.searchParams.get("session_id");

    if (!sessionId) {
        return NextResponse.json(
            { error: "Missing session_id parameter" },
            { status: 400 }
        );
    }

    // Find the registration by Stripe session ID
    const registrationResult = await getRegistrationByStripeSession(sessionId);

    if (!registrationResult.success || !registrationResult.pageId) {
        return NextResponse.json(
            { error: registrationResult.error || "Registration not found" },
            { status: 404 }
        );
    }

    // Fetch attendees for this registration
    const attendeesResult = await getAttendeesForRegistration(registrationResult.pageId);

    if (!attendeesResult.success || !attendeesResult.attendees) {
        return NextResponse.json(
            { error: attendeesResult.error || "Attendees not found" },
            { status: 404 }
        );
    }

    // Generate QR codes for each attendee
    const attendeesWithQR = await Promise.all(
        attendeesResult.attendees.map(async (attendee) => {
            try {
                const qrCodeSvg = await generateQRCodeSvg(attendee.checkInUrl);
                return {
                    name: attendee.name,
                    ticketType: attendee.ticketType,
                    qrCodeSvg,
                };
            } catch (error) {
                console.error(`Failed to generate QR code for ${attendee.name}:`, error);
                return {
                    name: attendee.name,
                    ticketType: attendee.ticketType,
                    qrCodeSvg: "",
                };
            }
        })
    );

    return NextResponse.json({
        success: true,
        attendees: attendeesWithQR,
    });
}
