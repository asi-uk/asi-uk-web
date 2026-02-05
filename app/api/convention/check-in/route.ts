import { NextRequest, NextResponse } from "next/server";
import { validateCheckInToken } from "@/lib/checkin-tokens";
import { getAttendeeByToken, checkInAttendee } from "@/lib/notion-convention";

/**
 * GET /api/convention/check-in?token=...
 * Validates a check-in token and returns attendee information
 */
export async function GET(request: NextRequest) {
    const token = request.nextUrl.searchParams.get("token");

    if (!token) {
        return NextResponse.json(
            { error: "Missing token parameter" },
            { status: 400 }
        );
    }

    // Validate the token signature
    const tokenValidation = validateCheckInToken(token);
    if (!tokenValidation.valid) {
        return NextResponse.json(
            { error: tokenValidation.error || "Invalid token" },
            { status: 400 }
        );
    }

    // Fetch attendee from Notion
    const result = await getAttendeeByToken(token);

    if (!result.success || !result.attendee) {
        return NextResponse.json(
            { error: result.error || "Attendee not found" },
            { status: 404 }
        );
    }

    return NextResponse.json({
        success: true,
        attendee: result.attendee,
    });
}

/**
 * POST /api/convention/check-in
 * Body: { token: string }
 * Performs the check-in operation
 */
export async function POST(request: NextRequest) {
    let body: { token?: string };

    try {
        body = await request.json();
    } catch {
        return NextResponse.json(
            { error: "Invalid JSON body" },
            { status: 400 }
        );
    }

    const { token } = body;

    if (!token) {
        return NextResponse.json(
            { error: "Missing token in request body" },
            { status: 400 }
        );
    }

    // Validate the token signature
    const tokenValidation = validateCheckInToken(token);
    if (!tokenValidation.valid) {
        return NextResponse.json(
            { error: tokenValidation.error || "Invalid token" },
            { status: 400 }
        );
    }

    // Fetch attendee to verify they exist and get their info
    const attendeeResult = await getAttendeeByToken(token);

    if (!attendeeResult.success || !attendeeResult.attendee) {
        return NextResponse.json(
            { error: attendeeResult.error || "Attendee not found" },
            { status: 404 }
        );
    }

    const attendee = attendeeResult.attendee;

    // Check if already checked in
    if (attendee.checkInStatus === "Checked In") {
        return NextResponse.json({
            success: false,
            alreadyCheckedIn: true,
            attendee,
            message: `${attendee.name} was already checked in at ${attendee.checkInTime ? new Date(attendee.checkInTime).toLocaleString("en-GB") : "an earlier time"}`,
        });
    }

    // Perform the check-in
    const checkInResult = await checkInAttendee(attendee.pageId);

    if (!checkInResult.success) {
        return NextResponse.json(
            { error: checkInResult.error || "Failed to check in attendee" },
            { status: 500 }
        );
    }

    // Return updated attendee info
    return NextResponse.json({
        success: true,
        alreadyCheckedIn: false,
        attendee: {
            ...attendee,
            checkInStatus: "Checked In" as const,
            checkInTime: new Date().toISOString(),
        },
        message: `${attendee.name} has been checked in successfully!`,
    });
}
