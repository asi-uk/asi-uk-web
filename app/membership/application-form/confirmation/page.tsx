import Link from "next/link";
import { CheckCircle2, Mail, Clock, UserCheck, PartyPopper, ArrowLeft, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function MembershipConfirmationPage() {
    return (
        <main className="flex min-h-screen flex-col items-center bg-slate-50 px-4 py-12 md:py-20">
            <div className="w-full max-w-2xl space-y-8">
                {/* Success Header */}
                <div className="text-center space-y-4">
                    <div className="flex justify-center">
                        <div className="rounded-full bg-green-100 p-4">
                            <CheckCircle2 className="h-12 w-12 text-green-600" />
                        </div>
                    </div>
                    <h1 className="text-3xl font-bold text-asi-blue md:text-4xl">
                        Application Submitted
                    </h1>
                    <p className="text-gray-600 text-lg">
                        Thank you for applying to join ASI UK
                    </p>
                </div>

                {/* Check Your Email Card */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <div className="flex items-start gap-4">
                        <div className="rounded-full bg-asi-blue/10 p-3 shrink-0">
                            <Mail className="h-6 w-6 text-asi-blue" />
                        </div>
                        <div>
                            <h2 className="font-semibold text-lg text-gray-900">Check Your Email</h2>
                            <p className="text-gray-600 mt-1">
                                We've sent a confirmation email with a summary of your application.
                                If you don't see it, please check your spam folder.
                            </p>
                        </div>
                    </div>
                </div>

                {/* What Happens Next Card */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <h2 className="font-semibold text-xl text-asi-blue mb-6">What Happens Next?</h2>

                    <div className="space-y-6">
                        {/* Step 1 */}
                        <div className="flex gap-4">
                            <div className="flex flex-col items-center">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-asi-blue text-white font-semibold">
                                    1
                                </div>
                                <div className="w-0.5 flex-1 bg-gray-200 mt-2" />
                            </div>
                            <div className="pb-6">
                                <div className="flex items-center gap-2">
                                    <Clock className="h-5 w-5 text-asi-blue" />
                                    <h3 className="font-medium text-gray-900">Review</h3>
                                </div>
                                <p className="text-gray-600 mt-1">
                                    Our membership team will review your application details.
                                </p>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="flex gap-4">
                            <div className="flex flex-col items-center">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-asi-blue text-white font-semibold">
                                    2
                                </div>
                                <div className="w-0.5 flex-1 bg-gray-200 mt-2" />
                            </div>
                            <div className="pb-6">
                                <div className="flex items-center gap-2">
                                    <UserCheck className="h-5 w-5 text-asi-blue" />
                                    <h3 className="font-medium text-gray-900">Verification</h3>
                                </div>
                                <p className="text-gray-600 mt-1">
                                    We may contact your pastor to verify your church membership.
                                </p>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="flex gap-4">
                            <div className="flex flex-col items-center">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-asi-blue text-white font-semibold">
                                    3
                                </div>
                                <div className="w-0.5 flex-1 bg-gray-200 mt-2" />
                            </div>
                            <div className="pb-6">
                                <div className="flex items-center gap-2">
                                    <Mail className="h-5 w-5 text-asi-blue" />
                                    <h3 className="font-medium text-gray-900">Decision</h3>
                                </div>
                                <p className="text-gray-600 mt-1">
                                    You will receive a decision within <strong>2-4 weeks</strong>.
                                </p>
                            </div>
                        </div>

                        {/* Step 4 */}
                        <div className="flex gap-4">
                            <div className="flex flex-col items-center">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-600 text-white font-semibold">
                                    4
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center gap-2">
                                    <PartyPopper className="h-5 w-5 text-green-600" />
                                    <h3 className="font-medium text-gray-900">Welcome</h3>
                                </div>
                                <p className="text-gray-600 mt-1">
                                    If approved, you'll receive instructions on completing your membership.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Information */}
                <div className="bg-slate-100 rounded-2xl p-6">
                    <div className="flex items-start gap-3">
                        <Info className="h-5 w-5 text-gray-500 mt-0.5 shrink-0" />
                        <div>
                            <p className="text-gray-700">
                                Have questions about your application? Contact us at{" "}
                                <Link href="mailto:membership@asiuk.org" className="text-asi-blue underline font-medium">
                                    membership@asiuk.org
                                </Link>
                            </p>
                            <p className="text-gray-600 text-sm mt-2">
                                For general enquiries:{" "}
                                <Link href="mailto:info@asiuk.org" className="text-asi-blue underline">
                                    info@asiuk.org
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                    <Button asChild variant="default" className="bg-asi-blue hover:bg-asi-darkBlue">
                        <Link href="/">
                            <ArrowLeft className="h-4 w-4 mr-2" />
                            Return to Home
                        </Link>
                    </Button>
                    <Button asChild variant="outline">
                        <Link href="/about">
                            Learn More About ASI UK
                        </Link>
                    </Button>
                </div>
            </div>
        </main>
    );
}
