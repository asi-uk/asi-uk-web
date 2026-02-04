"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import {
    Camera,
    CheckCircle2,
    XCircle,
    AlertCircle,
    User,
    Ticket,
    UtensilsCrossed,
    ArrowLeft,
    Loader2,
    RefreshCw,
    Keyboard,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface AttendeeInfo {
    pageId: string;
    name: string;
    firstName: string;
    lastName: string;
    ticketType: string;
    ticketLabel: string;
    dietaryRequirements?: string;
    checkInStatus: "Not Checked In" | "Checked In";
    checkInTime?: string;
    registrationEmail?: string;
}

type ScanState =
    | { type: "idle" }
    | { type: "scanning" }
    | { type: "loading" }
    | { type: "preview"; attendee: AttendeeInfo; token: string }
    | { type: "success"; attendee: AttendeeInfo; message: string }
    | { type: "already_checked_in"; attendee: AttendeeInfo; message: string }
    | { type: "error"; message: string };

export default function CheckInPage() {
    const [state, setState] = useState<ScanState>({ type: "idle" });
    const [manualToken, setManualToken] = useState("");
    const [showManualEntry, setShowManualEntry] = useState(false);
    const [cameraError, setCameraError] = useState<string | null>(null);
    const scannerRef = useRef<any>(null);
    const videoContainerRef = useRef<HTMLDivElement>(null);

    // Handle QR code scan result
    const handleScan = useCallback(async (decodedText: string) => {
        // Stop the scanner while we process
        if (scannerRef.current) {
            try {
                await scannerRef.current.stop();
            } catch (e) {
                // Ignore stop errors
            }
        }

        // Extract token from URL or use as-is
        let token = decodedText;
        try {
            const url = new URL(decodedText);
            const tokenParam = url.searchParams.get("token");
            if (tokenParam) {
                token = tokenParam;
            }
        } catch {
            // Not a URL, use as-is
        }

        await fetchAttendeePreview(token);
    }, []);

    // Fetch attendee info for preview
    const fetchAttendeePreview = async (token: string) => {
        setState({ type: "loading" });

        try {
            const response = await fetch(`/api/convention/check-in?token=${encodeURIComponent(token)}`);
            const data = await response.json();

            if (!response.ok) {
                setState({ type: "error", message: data.error || "Failed to validate ticket" });
                return;
            }

            const attendee = data.attendee as AttendeeInfo;

            if (attendee.checkInStatus === "Checked In") {
                setState({
                    type: "already_checked_in",
                    attendee,
                    message: `Already checked in at ${attendee.checkInTime ? new Date(attendee.checkInTime).toLocaleString("en-GB") : "an earlier time"}`,
                });
            } else {
                setState({ type: "preview", attendee, token });
            }
        } catch (error) {
            setState({ type: "error", message: "Failed to connect to server" });
        }
    };

    // Perform check-in
    const performCheckIn = async (token: string) => {
        setState({ type: "loading" });

        try {
            const response = await fetch("/api/convention/check-in", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ token }),
            });
            const data = await response.json();

            if (!response.ok) {
                setState({ type: "error", message: data.error || "Check-in failed" });
                return;
            }

            if (data.alreadyCheckedIn) {
                setState({
                    type: "already_checked_in",
                    attendee: data.attendee,
                    message: data.message,
                });
            } else {
                setState({
                    type: "success",
                    attendee: data.attendee,
                    message: data.message,
                });
            }
        } catch (error) {
            setState({ type: "error", message: "Failed to connect to server" });
        }
    };

    // Start the scanner
    const startScanner = useCallback(async () => {
        setCameraError(null);
        setState({ type: "scanning" });

        try {
            // Dynamic import to avoid SSR issues
            const { Html5Qrcode } = await import("html5-qrcode");

            if (!videoContainerRef.current) return;

            const scanner = new Html5Qrcode("qr-reader");
            scannerRef.current = scanner;

            await scanner.start(
                { facingMode: "environment" },
                {
                    fps: 10,
                    qrbox: { width: 250, height: 250 },
                },
                handleScan,
                () => {} // Ignore scan errors (no QR in frame)
            );
        } catch (error) {
            console.error("Camera error:", error);
            setCameraError(
                error instanceof Error
                    ? error.message
                    : "Failed to access camera. Please ensure camera permissions are granted."
            );
            setState({ type: "idle" });
        }
    }, [handleScan]);

    // Stop the scanner
    const stopScanner = useCallback(async () => {
        if (scannerRef.current) {
            try {
                await scannerRef.current.stop();
            } catch (e) {
                // Ignore stop errors
            }
            scannerRef.current = null;
        }
    }, []);

    // Reset to initial state
    const reset = useCallback(async () => {
        await stopScanner();
        setState({ type: "idle" });
        setManualToken("");
        setShowManualEntry(false);
        setCameraError(null);
    }, [stopScanner]);

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            stopScanner();
        };
    }, [stopScanner]);

    // Handle manual token submission
    const handleManualSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (manualToken.trim()) {
            // Extract token if it's a URL
            let token = manualToken.trim();
            try {
                const url = new URL(token);
                const tokenParam = url.searchParams.get("token");
                if (tokenParam) {
                    token = tokenParam;
                }
            } catch {
                // Not a URL, use as-is
            }
            fetchAttendeePreview(token);
        }
    };

    return (
        <main className="min-h-screen bg-slate-50 px-4 py-8">
            <div className="max-w-md mx-auto space-y-6">
                {/* Header */}
                <div className="flex items-center gap-4">
                    <Button asChild variant="ghost" size="sm">
                        <Link href="/convention">
                            <ArrowLeft className="h-4 w-4 mr-1" />
                            Back
                        </Link>
                    </Button>
                </div>

                <div className="text-center">
                    <h1 className="text-2xl font-bold text-asi-blue">Event Check-In</h1>
                    <p className="text-gray-600 mt-1">ASI UK Convention 2026</p>
                </div>

                {/* Main Content */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    {/* Idle State */}
                    {state.type === "idle" && (
                        <div className="p-6 space-y-4">
                            <div className="text-center space-y-4">
                                <div className="mx-auto w-16 h-16 rounded-full bg-asi-blue/10 flex items-center justify-center">
                                    <Camera className="h-8 w-8 text-asi-blue" />
                                </div>
                                <p className="text-gray-600">
                                    Scan an attendee's QR code to check them in
                                </p>
                            </div>

                            {cameraError && (
                                <div className="p-3 bg-red-50 border border-red-100 rounded-lg text-red-700 text-sm">
                                    {cameraError}
                                </div>
                            )}

                            <Button
                                onClick={startScanner}
                                className="w-full bg-asi-blue hover:bg-asi-darkBlue"
                            >
                                <Camera className="h-4 w-4 mr-2" />
                                Start Scanner
                            </Button>

                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <span className="w-full border-t" />
                                </div>
                                <div className="relative flex justify-center text-xs uppercase">
                                    <span className="bg-white px-2 text-gray-500">or</span>
                                </div>
                            </div>

                            <Button
                                variant="outline"
                                onClick={() => setShowManualEntry(true)}
                                className="w-full"
                            >
                                <Keyboard className="h-4 w-4 mr-2" />
                                Enter Code Manually
                            </Button>

                            {showManualEntry && (
                                <form onSubmit={handleManualSubmit} className="space-y-3">
                                    <input
                                        type="text"
                                        value={manualToken}
                                        onChange={(e) => setManualToken(e.target.value)}
                                        placeholder="Paste check-in code or URL..."
                                        className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-asi-blue"
                                    />
                                    <Button type="submit" className="w-full bg-asi-blue hover:bg-asi-darkBlue">
                                        Look Up Attendee
                                    </Button>
                                </form>
                            )}
                        </div>
                    )}

                    {/* Scanning State */}
                    {state.type === "scanning" && (
                        <div className="space-y-4">
                            <div
                                id="qr-reader"
                                ref={videoContainerRef}
                                className="w-full aspect-square"
                            />
                            <div className="p-4">
                                <Button
                                    variant="outline"
                                    onClick={reset}
                                    className="w-full"
                                >
                                    Cancel
                                </Button>
                            </div>
                        </div>
                    )}

                    {/* Loading State */}
                    {state.type === "loading" && (
                        <div className="p-8 text-center">
                            <Loader2 className="h-12 w-12 animate-spin text-asi-blue mx-auto" />
                            <p className="mt-4 text-gray-600">Processing...</p>
                        </div>
                    )}

                    {/* Preview State */}
                    {state.type === "preview" && (
                        <div className="p-6 space-y-6">
                            <div className="text-center">
                                <div className="mx-auto w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                                    <User className="h-8 w-8 text-blue-600" />
                                </div>
                                <h2 className="text-xl font-semibold text-gray-900">
                                    {state.attendee.name}
                                </h2>
                            </div>

                            <div className="space-y-3">
                                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                    <Ticket className="h-5 w-5 text-gray-500" />
                                    <div>
                                        <p className="text-sm text-gray-500">Ticket Type</p>
                                        <p className="font-medium">{state.attendee.ticketLabel}</p>
                                    </div>
                                </div>

                                {state.attendee.dietaryRequirements && (
                                    <div className="flex items-start gap-3 p-3 bg-amber-50 rounded-lg">
                                        <UtensilsCrossed className="h-5 w-5 text-amber-600 mt-0.5" />
                                        <div>
                                            <p className="text-sm text-amber-700 font-medium">Dietary Requirements</p>
                                            <p className="text-amber-900">{state.attendee.dietaryRequirements}</p>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="flex gap-3">
                                <Button
                                    variant="outline"
                                    onClick={reset}
                                    className="flex-1"
                                >
                                    Cancel
                                </Button>
                                <Button
                                    onClick={() => performCheckIn(state.token)}
                                    className="flex-1 bg-green-600 hover:bg-green-700"
                                >
                                    <CheckCircle2 className="h-4 w-4 mr-2" />
                                    Check In
                                </Button>
                            </div>
                        </div>
                    )}

                    {/* Success State */}
                    {state.type === "success" && (
                        <div className="p-6 space-y-6">
                            <div className="text-center">
                                <div className="mx-auto w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-4">
                                    <CheckCircle2 className="h-10 w-10 text-green-600" />
                                </div>
                                <h2 className="text-xl font-semibold text-green-700">
                                    Checked In!
                                </h2>
                                <p className="text-2xl font-bold text-gray-900 mt-2">
                                    {state.attendee.name}
                                </p>
                                <p className="text-gray-600 mt-1">{state.attendee.ticketLabel}</p>
                            </div>

                            {state.attendee.dietaryRequirements && (
                                <div className="flex items-start gap-3 p-3 bg-amber-50 rounded-lg">
                                    <UtensilsCrossed className="h-5 w-5 text-amber-600 mt-0.5" />
                                    <div>
                                        <p className="text-sm text-amber-700 font-medium">Dietary Requirements</p>
                                        <p className="text-amber-900">{state.attendee.dietaryRequirements}</p>
                                    </div>
                                </div>
                            )}

                            <Button
                                onClick={reset}
                                className="w-full bg-asi-blue hover:bg-asi-darkBlue"
                            >
                                <RefreshCw className="h-4 w-4 mr-2" />
                                Scan Next Attendee
                            </Button>
                        </div>
                    )}

                    {/* Already Checked In State */}
                    {state.type === "already_checked_in" && (
                        <div className="p-6 space-y-6">
                            <div className="text-center">
                                <div className="mx-auto w-20 h-20 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                                    <AlertCircle className="h-10 w-10 text-amber-600" />
                                </div>
                                <h2 className="text-xl font-semibold text-amber-700">
                                    Already Checked In
                                </h2>
                                <p className="text-2xl font-bold text-gray-900 mt-2">
                                    {state.attendee.name}
                                </p>
                                <p className="text-gray-600 mt-1">{state.attendee.ticketLabel}</p>
                                <p className="text-sm text-amber-600 mt-2">{state.message}</p>
                            </div>

                            <Button
                                onClick={reset}
                                className="w-full bg-asi-blue hover:bg-asi-darkBlue"
                            >
                                <RefreshCw className="h-4 w-4 mr-2" />
                                Scan Next Attendee
                            </Button>
                        </div>
                    )}

                    {/* Error State */}
                    {state.type === "error" && (
                        <div className="p-6 space-y-6">
                            <div className="text-center">
                                <div className="mx-auto w-20 h-20 rounded-full bg-red-100 flex items-center justify-center mb-4">
                                    <XCircle className="h-10 w-10 text-red-600" />
                                </div>
                                <h2 className="text-xl font-semibold text-red-700">
                                    Check-In Failed
                                </h2>
                                <p className="text-gray-600 mt-2">{state.message}</p>
                            </div>

                            <Button
                                onClick={reset}
                                className="w-full bg-asi-blue hover:bg-asi-darkBlue"
                            >
                                <RefreshCw className="h-4 w-4 mr-2" />
                                Try Again
                            </Button>
                        </div>
                    )}
                </div>

                {/* Footer */}
                <p className="text-center text-xs text-gray-500">
                    Staff check-in portal for ASI UK Convention
                </p>
            </div>
        </main>
    );
}
