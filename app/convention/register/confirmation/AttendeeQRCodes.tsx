"use client";

import { useEffect, useState } from "react";
import { QrCode, Loader2, Download, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TICKET_LABELS, TicketType } from "@/lib/schemas/convention-registration";

interface AttendeeQRData {
    name: string;
    ticketType: string;
    qrCodeSvg: string;
}

interface AttendeeQRCodesProps {
    sessionId: string;
}

export default function AttendeeQRCodes({ sessionId }: AttendeeQRCodesProps) {
    const [attendees, setAttendees] = useState<AttendeeQRData[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchQRCodes() {
            try {
                const response = await fetch(`/api/convention/qr-codes?session_id=${encodeURIComponent(sessionId)}`);
                const data = await response.json();

                if (!response.ok) {
                    setError(data.error || "Failed to load QR codes");
                    return;
                }

                setAttendees(data.attendees || []);
            } catch (err) {
                setError("Failed to connect to server");
            } finally {
                setLoading(false);
            }
        }

        if (sessionId) {
            fetchQRCodes();
        } else {
            setLoading(false);
        }
    }, [sessionId]);

    const handlePrint = () => {
        window.print();
    };

    if (loading) {
        return (
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-center gap-3 py-8">
                    <Loader2 className="h-6 w-6 animate-spin text-asi-blue" />
                    <span className="text-gray-600">Loading your check-in codes...</span>
                </div>
            </div>
        );
    }

    if (error || attendees.length === 0) {
        return null; // Don't show anything if no QR codes available
    }

    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 print:shadow-none print:border-0">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                    <div className="rounded-full bg-asi-blue/10 p-2 shrink-0">
                        <QrCode className="h-5 w-5 text-asi-blue" />
                    </div>
                    <h2 className="font-semibold text-xl text-asi-blue">Your Check-In QR Codes</h2>
                </div>
                <Button
                    variant="outline"
                    size="sm"
                    onClick={handlePrint}
                    className="print:hidden"
                >
                    <Printer className="h-4 w-4 mr-2" />
                    Print
                </Button>
            </div>

            <p className="text-gray-600 mb-6 print:mb-4">
                Show these QR codes at the event for quick check-in. Each attendee has their own unique code.
            </p>

            <div className="grid gap-4 sm:grid-cols-2 print:grid-cols-2">
                {attendees.map((attendee, index) => {
                    const ticketLabel = TICKET_LABELS[attendee.ticketType as TicketType] || attendee.ticketType;

                    return (
                        <div
                            key={index}
                            className="bg-gray-50 rounded-xl p-4 text-center print:bg-white print:border print:border-gray-200"
                        >
                            <h3 className="font-semibold text-gray-900 mb-1">{attendee.name}</h3>
                            <p className="text-sm text-gray-500 mb-3">{ticketLabel}</p>
                            <div
                                className="mx-auto w-40 h-40 flex items-center justify-center"
                                dangerouslySetInnerHTML={{ __html: attendee.qrCodeSvg }}
                            />
                            <p className="text-xs text-gray-400 mt-2">Scan at check-in</p>
                        </div>
                    );
                })}
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg print:hidden">
                <p className="text-sm text-blue-800">
                    <strong>Tip:</strong> Save this page or take a screenshot of your QR codes for easy access at the event.
                </p>
            </div>
        </div>
    );
}
