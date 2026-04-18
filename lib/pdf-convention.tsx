import { readFile } from "fs/promises";
import path from "path";
import React from "react";
import {
    Document,
    Page,
    View,
    Text,
    Image,
    StyleSheet,
    renderToBuffer,
} from "@react-pdf/renderer";
import { generateQRCodeDataUrl } from "@/lib/qr-code";
import { TICKET_LABELS, TicketType } from "@/lib/schemas/convention-registration";

/**
 * PDF ticket generator for convention registration confirmations.
 *
 * Produces an A4 PDF with one ticket page per attendee, each containing the
 * ASI UK logo, event details, attendee name, ticket type, and a large QR code
 * that encodes the same check-in URL used by the inline email QR codes.
 */

interface AttendeeWithQRInfo {
    name: string;
    ticketType: string;
    checkInUrl: string;
}

interface ConventionPdfParams {
    email: string;
    attendeeCount: number;
    orderTotal: number;
    attendees: AttendeeWithQRInfo[];
}

const ASI_BLUE = "#1e3a5f";
const ASI_TEXT_GREY = "#4b5563";
const ASI_MUTED_GREY = "#6b7280";

const styles = StyleSheet.create({
    page: {
        flexDirection: "column",
        backgroundColor: "#ffffff",
        padding: 48,
        fontFamily: "Helvetica",
    },
    header: {
        alignItems: "center",
        marginBottom: 24,
    },
    logo: {
        width: 140,
        height: "auto",
        marginBottom: 8,
    },
    tagline: {
        fontSize: 10,
        color: ASI_MUTED_GREY,
    },
    title: {
        fontSize: 20,
        fontFamily: "Helvetica-Bold",
        color: ASI_BLUE,
        textAlign: "center",
        marginBottom: 4,
    },
    subtitle: {
        fontSize: 12,
        color: ASI_TEXT_GREY,
        textAlign: "center",
        marginBottom: 20,
    },
    eventBox: {
        backgroundColor: "#f5f7fa",
        borderRadius: 8,
        padding: 14,
        marginBottom: 24,
    },
    eventRow: {
        fontSize: 11,
        color: ASI_TEXT_GREY,
        marginBottom: 4,
    },
    eventLabel: {
        fontFamily: "Helvetica-Bold",
        color: ASI_BLUE,
    },
    attendeeCard: {
        alignItems: "center",
        border: `1pt solid #e5e7eb`,
        borderRadius: 12,
        padding: 20,
    },
    attendeeName: {
        fontSize: 22,
        fontFamily: "Helvetica-Bold",
        color: ASI_BLUE,
        marginBottom: 4,
        textAlign: "center",
    },
    attendeeTicket: {
        fontSize: 13,
        color: ASI_TEXT_GREY,
        marginBottom: 20,
        textAlign: "center",
    },
    qrCode: {
        width: 260,
        height: 260,
        marginBottom: 12,
    },
    qrCaption: {
        fontSize: 10,
        color: ASI_MUTED_GREY,
        textAlign: "center",
        marginBottom: 10,
    },
    checkInUrl: {
        fontSize: 8,
        color: ASI_MUTED_GREY,
        textAlign: "center",
        marginTop: 4,
    },
    footer: {
        position: "absolute",
        bottom: 32,
        left: 48,
        right: 48,
        textAlign: "center",
        fontSize: 9,
        color: ASI_MUTED_GREY,
    },
});

// Lazily load the ASI logo from disk exactly once per server instance. Returns
// null if the asset cannot be read — the PDF still renders without the logo.
let logoDataUrlPromise: Promise<string | null> | null = null;

function getLogoDataUrl(): Promise<string | null> {
    if (!logoDataUrlPromise) {
        logoDataUrlPromise = (async () => {
            try {
                const logoPath = path.join(process.cwd(), "public", "asiLogo.png");
                const buffer = await readFile(logoPath);
                return `data:image/png;base64,${buffer.toString("base64")}`;
            } catch (error) {
                console.error("Failed to load ASI logo for PDF:", error);
                return null;
            }
        })();
    }
    return logoDataUrlPromise;
}

interface RenderAttendee extends AttendeeWithQRInfo {
    qrDataUrl: string;
    ticketLabel: string;
}

function TicketsDocument({
    attendees,
    logoDataUrl,
}: {
    attendees: RenderAttendee[];
    logoDataUrl: string | null;
}) {
    return (
        <Document title="ASI UK Convention 2026 — Tickets">
            {attendees.map((attendee, index) => (
                <Page key={index} size="A4" style={styles.page}>
                    <View style={styles.header}>
                        {logoDataUrl ? <Image src={logoDataUrl} style={styles.logo} /> : null}
                        <Text style={styles.tagline}>Adventist-laymen&apos;s Services and Industries</Text>
                    </View>

                    <Text style={styles.title}>ASI UK Convention 2026</Text>
                    <Text style={styles.subtitle}>Entry Ticket</Text>

                    <View style={styles.eventBox}>
                        <Text style={styles.eventRow}>
                            <Text style={styles.eventLabel}>Date: </Text>
                            20–21 June 2026
                        </Text>
                        <Text style={styles.eventRow}>
                            <Text style={styles.eventLabel}>Location: </Text>
                            Newbold College, Bracknell
                        </Text>
                        <Text style={styles.eventRow}>
                            <Text style={styles.eventLabel}>Attendee: </Text>
                            {index + 1} of {attendees.length}
                        </Text>
                    </View>

                    <View style={styles.attendeeCard}>
                        <Text style={styles.attendeeName}>{attendee.name}</Text>
                        <Text style={styles.attendeeTicket}>{attendee.ticketLabel}</Text>
                        <Image src={attendee.qrDataUrl} style={styles.qrCode} />
                        <Text style={styles.qrCaption}>Scan at event check-in</Text>
                        <Text style={styles.checkInUrl}>{attendee.checkInUrl}</Text>
                    </View>

                    <Text style={styles.footer}>
                        Questions? Contact info@asiuk.org · www.asiuk.org
                    </Text>
                </Page>
            ))}
        </Document>
    );
}

/**
 * Generate a PDF ticket buffer for a convention registration. One page per
 * attendee. Caller must ensure `attendees` is non-empty.
 */
export async function generateConventionTicketsPdf(
    params: ConventionPdfParams
): Promise<Buffer> {
    if (!params.attendees || params.attendees.length === 0) {
        throw new Error("generateConventionTicketsPdf requires at least one attendee");
    }

    const [logoDataUrl, renderAttendees] = await Promise.all([
        getLogoDataUrl(),
        Promise.all(
            params.attendees.map(async (attendee) => {
                const qrDataUrl = await generateQRCodeDataUrl(attendee.checkInUrl);
                const ticketLabel =
                    TICKET_LABELS[attendee.ticketType as TicketType] || attendee.ticketType;
                return { ...attendee, qrDataUrl, ticketLabel };
            })
        ),
    ]);

    return renderToBuffer(
        <TicketsDocument attendees={renderAttendees} logoDataUrl={logoDataUrl} />
    );
}
