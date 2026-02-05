import Link from "next/link";
import { Metadata } from "next";
import {
    CheckCircle2,
    Mail,
    Calendar,
    MapPin,
    Coffee,
    UtensilsCrossed,
    ArrowLeft,
    Info,
    Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import AttendeeQRCodes from "./AttendeeQRCodes";

export const metadata: Metadata = {
    title: "ASI UK | Registration Confirmed",
    description: "Your registration for the ASI UK Convention 2026 has been confirmed.",
};

interface ConfirmationPageProps {
    searchParams: Promise<{ status?: string; session_id?: string }>;
}

export default async function ConventionConfirmationPage({ searchParams }: ConfirmationPageProps) {
    const params = await searchParams;
    const status = params.status || "success";
    const sessionId = params.session_id;
    const isConfirmed = status === "confirmed" || status === "success";

    return (
        <main className="flex min-h-screen flex-col items-center bg-slate-50 px-4 py-12 md:py-20 print:bg-white print:py-4">
            <div className="w-full max-w-2xl space-y-8 print:space-y-4">
                {/* Success Header */}
                <div className="text-center space-y-4 print:space-y-2">
                    <div className="flex justify-center print:hidden">
                        <div className={`rounded-full p-4 ${isConfirmed ? "bg-green-100" : "bg-amber-100"}`}>
                            {isConfirmed ? (
                                <CheckCircle2 className="h-12 w-12 text-green-600" />
                            ) : (
                                <Clock className="h-12 w-12 text-amber-600" />
                            )}
                        </div>
                    </div>
                    <h1 className="text-3xl font-bold text-asi-blue md:text-4xl print:text-2xl">
                        {isConfirmed ? "Registration Confirmed!" : "Registration Received"}
                    </h1>
                    <p className="text-gray-600 text-lg print:text-base">
                        {isConfirmed
                            ? "Thank you for registering for the ASI UK Convention 2026"
                            : "Your registration is being processed"}
                    </p>
                </div>

                {/* Check Your Email Card */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 print:hidden">
                    <div className="flex items-start gap-4">
                        <div className="rounded-full bg-asi-blue/10 p-3 shrink-0">
                            <Mail className="h-6 w-6 text-asi-blue" />
                        </div>
                        <div>
                            <h2 className="font-semibold text-lg text-gray-900">Check Your Email</h2>
                            <p className="text-gray-600 mt-1">
                                {isConfirmed
                                    ? "We've sent a confirmation email with your registration details, QR codes, and event information. If you don't see it, please check your spam folder."
                                    : "Once your payment is processed, you'll receive a confirmation email with your registration details."}
                            </p>
                        </div>
                    </div>
                </div>

                {/* QR Codes Section - Only show for confirmed registrations with session ID */}
                {isConfirmed && sessionId && <AttendeeQRCodes sessionId={sessionId} />}

                {/* Event Details Card */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 print:shadow-none print:border-0 print:p-4">
                    <h2 className="font-semibold text-xl text-asi-blue mb-6 print:mb-3 print:text-lg">Event Details</h2>

                    <div className="space-y-4 print:space-y-2">
                        <div className="flex items-start gap-4">
                            <div className="rounded-full bg-asi-blue/10 p-2 shrink-0 print:hidden">
                                <Calendar className="h-5 w-5 text-asi-blue" />
                            </div>
                            <div>
                                <h3 className="font-medium text-gray-900">Date & Time</h3>
                                <p className="text-gray-600">20-21 June 2026</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="rounded-full bg-asi-blue/10 p-2 shrink-0 print:hidden">
                                <MapPin className="h-5 w-5 text-asi-blue" />
                            </div>
                            <div>
                                <h3 className="font-medium text-gray-900">Location</h3>
                                <p className="text-gray-600">Newbold College, Bracknell</p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Meals & Refreshments Card */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 print:hidden">
                    <h2 className="font-semibold text-xl text-asi-blue mb-4">Meals & Refreshments</h2>
                    <ul className="space-y-3 text-gray-600">
                        <li className="flex items-start gap-2">
                            <span className="text-asi-blue">•</span>
                            <span>Light refreshments will be provided on both Sabbath and Sunday (drinks, cakes, snacks, etc.)</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-asi-blue">•</span>
                            <span>Main meals are available in the dining hall but need to be arranged separately with Newbold College</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-asi-blue">•</span>
                            <span>You are also welcome to bring packed lunches or food from home</span>
                        </li>
                    </ul>
                </div>

                {/* What to Bring Card */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 print:hidden">
                    <h2 className="font-semibold text-xl text-asi-blue mb-4">What to Bring</h2>
                    <ul className="space-y-3 text-gray-600">
                        <li className="flex items-start gap-2">
                            <span className="text-asi-blue">•</span>
                            <span>Your QR code (on your phone or printed)</span>
                        </li>
                    </ul>
                </div>

                {/* Contact Information */}
                <div className="bg-slate-100 rounded-2xl p-6 print:hidden">
                    <div className="flex items-start gap-3">
                        <Info className="h-5 w-5 text-gray-500 mt-0.5 shrink-0" />
                        <div>
                            <p className="text-gray-700">
                                Have questions about the convention? Contact us at{" "}
                                <Link
                                    href="mailto:info@asiuk.org"
                                    className="text-asi-blue underline font-medium"
                                >
                                    info@asiuk.org
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 print:hidden">
                    <Button asChild variant="default" className="bg-asi-blue hover:bg-asi-darkBlue">
                        <Link href="/">
                            <ArrowLeft className="h-4 w-4 mr-2" />
                            Return to Home
                        </Link>
                    </Button>
                    <Button asChild variant="outline">
                        <Link href="/convention">View Convention Details</Link>
                    </Button>
                </div>
            </div>
        </main>
    );
}
