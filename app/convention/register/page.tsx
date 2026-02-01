import { Metadata } from "next";
import { Heading2 } from "@/app/components/Headings";
import { ConventionRegistrationForm } from "./form";
import { AlertCircle } from "lucide-react";

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
            <div className="max-w-screen-md mx-auto">
                <div className="p-5 pt-10 pb-20">
                    <Heading2 text="Convention Registration" />

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
