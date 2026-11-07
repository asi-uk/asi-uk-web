import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, CalendarDays, Clock, Coffee, HeartHandshake, MapPin } from "lucide-react";
import SpeakerCard from "@/app/convention/components/SpeakerCard";
import LumaCheckoutButton from "@/app/components/LumaCheckoutButton";
import { FAITH_AND_WORK_2026 as EVENT, isFaithAndWorkRegistrationOpen } from "@/data/faith-and-work";

// Re-render hourly so registration closes on its own after the event.
export const revalidate = 3600;

const description = `${EVENT.tagline} — ${EVENT.dateLabel}, ${EVENT.timeLabel} at ${EVENT.venue}, Birmingham. Free entry.`;

export const metadata: Metadata = {
    title: `ASI UK | ${EVENT.title} — Networking Event`,
    description,
    keywords: ["ASI UK", "Faith and Work", "Christian networking", "Birmingham", "Christian entrepreneurs", "Christian professionals"],
    openGraph: {
        url: `https://www.asiuk.org${EVENT.path}`,
        type: "website",
        title: `ASI UK | ${EVENT.title}`,
        description,
        images: [
            {
                url: EVENT.posterUrl || "https://www.asiuk.org/thumbnail.png",
                alt: `ASI UK ${EVENT.title}`,
            },
        ],
    },
};

export default function FaithAndWorkPage() {
    const registrationOpen = isFaithAndWorkRegistrationOpen();

    return (
        <div className="w-full bg-slate-50">
            {/* Hero */}
            <section className="relative overflow-hidden bg-gradient-to-br from-asi-extraDarkBlue via-asi-darkBlue to-asi-blue text-white">
                {EVENT.heroImageUrl && (
                    <Image
                        src={EVENT.heroImageUrl}
                        alt=""
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover opacity-25"
                    />
                )}
                <div className="relative max-w-5xl mx-auto px-5 py-16 md:py-24">
                    <span className="inline-block bg-white/15 text-white text-sm font-medium px-4 py-1 rounded-full">
                        Free networking event
                    </span>
                    <h1 className="mt-5 text-5xl md:text-7xl font-bold tracking-tight">
                        Faith <span className="font-serif italic font-normal text-amber-300">&amp;</span> Work
                    </h1>
                    <p className="mt-4 text-xl md:text-2xl text-white/90">{EVENT.tagline}</p>

                    <ul className="mt-6 flex flex-wrap gap-2">
                        {EVENT.highlights.map((h) => (
                            <li key={h} className="rounded-full bg-white/10 ring-1 ring-white/20 px-4 py-1.5 text-sm">
                                {h}
                            </li>
                        ))}
                    </ul>

                    <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:items-center">
                        <div className="inline-flex items-center gap-2 rounded-xl bg-white text-asi-darkBlue px-4 py-3 font-semibold">
                            <CalendarDays className="h-5 w-5 text-asi-blue" />
                            {EVENT.dateLabel}
                            <span className="text-slate-300">|</span>
                            <Clock className="h-5 w-5 text-asi-blue" />
                            {EVENT.timeLabel}
                        </div>
                        {registrationOpen && (
                            <LumaCheckoutButton
                                eventId={EVENT.lumaEventId}
                                eventUrl={EVENT.lumaUrl}
                                className="!inline-flex !items-center !justify-center !rounded-xl !bg-amber-400 hover:!bg-amber-300 !text-asi-extraDarkBlue !font-bold !px-6 !py-3 !transition-colors"
                            >
                                Register for free
                            </LumaCheckoutButton>
                        )}
                    </div>
                </div>
            </section>

            <div className="max-w-5xl mx-auto px-5 py-12 md:py-16 space-y-16">
                {/* Key details */}
                <section className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    <a
                        href={EVENT.venueMapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-start gap-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100 transition hover:ring-asi-blue/50"
                    >
                        <div className="rounded-xl bg-asi-blue/10 p-3 text-asi-blue">
                            <MapPin className="h-6 w-6" />
                        </div>
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Venue</p>
                            <p className="mt-1 flex items-center gap-1 text-lg font-semibold text-asi-darkBlue">
                                {EVENT.venue}
                                <ArrowUpRight className="h-4 w-4 text-slate-400 transition group-hover:text-asi-blue" />
                            </p>
                            <p className="text-sm text-slate-500">{EVENT.venueAddress}</p>
                        </div>
                    </a>
                    <div className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
                        <div className="rounded-xl bg-asi-blue/10 p-3 text-asi-blue">
                            <Coffee className="h-6 w-6" />
                        </div>
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Food</p>
                            <p className="mt-1 text-lg font-semibold text-asi-darkBlue">Light refreshments</p>
                            <p className="text-sm text-slate-500">Food available to buy on the day</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
                        <div className="rounded-xl bg-asi-blue/10 p-3 text-asi-blue">
                            <HeartHandshake className="h-6 w-6" />
                        </div>
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Entry</p>
                            <p className="mt-1 text-lg font-semibold text-asi-darkBlue">Free</p>
                            <p className="text-sm text-slate-500">Voluntary donations collected on the day</p>
                        </div>
                    </div>
                </section>

                {/* Speakers */}
                <section>
                    <h2 className="text-2xl md:text-3xl font-bold text-asi-blue text-center mb-10">Our Speakers</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {EVENT.speakers.map((s) => (
                            <SpeakerCard key={s.name} presenter={s} shape="circle" />
                        ))}
                    </div>
                </section>

                {/* Registration */}
                <section id="register" className="scroll-mt-32 max-w-3xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-asi-blue">Register</h2>
                    {registrationOpen ? (
                        <>
                            <div className="mt-4 rounded-2xl bg-white p-6 md:p-8 shadow-sm ring-1 ring-slate-100 space-y-5">
                                <p className="text-slate-600">
                                    Entry is free, but please register so we can plan refreshments. Coming with
                                    friends, family or colleagues? You can register several people at once.
                                </p>
                                <LumaCheckoutButton
                                    eventId={EVENT.lumaEventId}
                                    eventUrl={EVENT.lumaUrl}
                                    className="!flex !w-full !items-center !justify-center !rounded-lg !bg-asi-blue hover:!bg-asi-darkBlue !text-white !text-lg !font-semibold !py-4 !transition-colors"
                                >
                                    Register — Free
                                </LumaCheckoutButton>
                                <p className="text-center text-sm text-slate-500">{EVENT.donations}</p>
                            </div>
                        </>
                    ) : (
                        <p className="mt-4 rounded-2xl bg-white p-6 text-slate-600 ring-1 ring-slate-100">
                            Registration for this event has now closed. Thank you to everyone who joined us!
                        </p>
                    )}
                </section>
            </div>
        </div>
    );
}
