import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, CalendarPlus, CheckCircle2, Clock, HeartHandshake, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FAITH_AND_WORK_2026 as EVENT, getFaithAndWorkCalendarUrl } from "@/data/faith-and-work";

export const metadata: Metadata = {
    title: `ASI UK | ${EVENT.title} — You're Registered`,
    robots: { index: false },
};

export default function FaithAndWorkConfirmationPage() {
    return (
        <div className="flex flex-col items-center bg-slate-50 px-4 py-12 md:py-20">
            <div className="w-full max-w-2xl space-y-6">
                <div className="text-center space-y-4">
                    <div className="flex justify-center">
                        <div className="rounded-full p-4 bg-green-100">
                            <CheckCircle2 className="h-12 w-12 text-green-600" />
                        </div>
                    </div>
                    <h1 className="text-3xl font-bold text-asi-blue md:text-4xl">You&apos;re registered!</h1>
                    <p className="text-slate-600 text-lg">We look forward to seeing you at {EVENT.title}.</p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm ring-1 ring-slate-100 flex items-start gap-4">
                    <div className="rounded-full bg-asi-blue/10 p-3 shrink-0">
                        <Mail className="h-6 w-6 text-asi-blue" />
                    </div>
                    <p className="text-slate-600">
                        A confirmation email is on its way. If you don&apos;t see it in a few minutes, please check your
                        spam folder.
                    </p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm ring-1 ring-slate-100 space-y-4">
                    <h2 className="font-semibold text-xl text-asi-blue">Event details</h2>
                    <p className="flex items-start gap-3 text-slate-700">
                        <Clock className="h-5 w-5 text-asi-blue shrink-0 mt-0.5" />
                        {EVENT.dateLabel}, {EVENT.timeLabel}
                    </p>
                    <p className="flex items-start gap-3 text-slate-700">
                        <MapPin className="h-5 w-5 text-asi-blue shrink-0 mt-0.5" />
                        <a href={EVENT.venueMapUrl} target="_blank" rel="noopener noreferrer" className="underline">
                            {EVENT.venue}, {EVENT.venueAddress}
                        </a>
                    </p>
                    <p className="flex items-start gap-3 text-slate-700">
                        <HeartHandshake className="h-5 w-5 text-asi-blue shrink-0 mt-0.5" />
                        {EVENT.donations}
                    </p>
                    <Button asChild variant="outline" className="w-full sm:w-auto">
                        <a href={getFaithAndWorkCalendarUrl()} target="_blank" rel="noopener noreferrer">
                            <CalendarPlus className="h-4 w-4 mr-2" />
                            Add to Google Calendar
                        </a>
                    </Button>
                </div>

                <div className="flex justify-center pt-2">
                    <Button asChild className="bg-asi-blue hover:bg-asi-darkBlue">
                        <Link href="/">
                            <ArrowLeft className="h-4 w-4 mr-2" />
                            Return to Home
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
