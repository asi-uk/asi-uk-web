import { Metadata } from "next";
import Link from "next/link";
import { ConventionRegistrationForm } from "./form";
import { AlertCircle, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
    title: "ASI UK | Convention 2026 Registration",
    description:
        "Register for the ASI UK Convention 2026 on 20-21 June at Newbold College, Bracknell. Join us for inspiring sessions and fellowship.",
    keywords: [
        "ASI UK Convention",
        "Convention Registration",
        "ASI UK 2026",
        "Newbold College",
        "Christian Conference",
        "ASI UK",
    ],
    openGraph: {
        url: "https://asiuk.org/convention/register",
        type: "website",
        title: "ASI UK | Convention 2026 Registration",
        description:
            "Register for the ASI UK Convention 2026 on 20-21 June at Newbold College, Bracknell.",
        images: [
            {
                url: "https://www.asiuk.org/thumbnail.png",
                width: 1200,
                height: 630,
                alt: "ASI UK Convention 2026",
            },
        ],
    },
};

interface PageProps {
    searchParams: Promise<{ cancelled?: string }>;
}

export default async function ConventionRegistrationPage({ searchParams }: PageProps) {
    const params = await searchParams;
    const wasCancelled = params.cancelled === "true";

    return (
        <div className="w-full min-h-full bg-slate-50 overflow-x-hidden">
            <div className="md:max-w-5xl mx-auto">
                <div className="p-5 pt-10 pb-20">
                    <Link
                        href="/convention"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-asi-blue hover:text-asi-darkBlue"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to Convention
                    </Link>

                    <header className="mt-6 mb-8">
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-asi-blue">
                            ASI UK Convention 2026
                        </p>
                        <h1 className="mt-3 text-4xl font-bold leading-tight text-asi-darkBlue md:text-5xl">
                            Register
                        </h1>
                        <p className="mt-4 max-w-2xl text-slate-600">
                            Join us on 20–21 June 2026 at Newbold College for Faith at Work — a weekend for Adventist professionals, entrepreneurs, and ministry leaders.
                        </p>
                    </header>

                    {wasCancelled && (
                        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6 flex items-start gap-3">
                            <AlertCircle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                            <div>
                                <p className="text-amber-800 font-medium">Payment was cancelled</p>
                                <p className="text-amber-700 text-sm mt-1">
                                    Your payment was not completed. Please fill out the form and try again to complete your registration.
                                </p>
                            </div>
                        </div>
                    )}

                    <ConventionRegistrationForm />
                </div>
            </div>
        </div>
    );
}
