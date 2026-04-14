import Link from 'next/link';
import {
    CalendarDays,
    MapPin,
    Ticket,
    ArrowRight,
    Compass,
    Users,
    HeartHandshake,
    ArrowUpRight,
    Sparkles,
    PlayCircle,
} from 'lucide-react';
import ConventionHero from '@/app/convention/components/ConventionHero';
import SpeakerCard from '@/app/convention/components/SpeakerCard';
import FAQSection from '@/app/convention/components/FAQSection';
import { CONVENTION_2026 } from '@/data/convention';
import {
    TICKET_PRICES,
    TICKET_LABELS,
    type TicketType,
} from '@/lib/schemas/convention-registration';

const TICKET_ORDER: TicketType[] = ['member', 'non-member', 'student', 'youth'];

export const metadata = {
    title: 'ASI UK | Faith at Work — Convention 2026',
    description:
        'Join ASI UK on 20–21 June 2026 at Newbold College for the Faith at Work convention — a weekend for Adventist professionals, entrepreneurs, and ministry leaders.',
    keywords: [
        'ASI UK Convention',
        'Faith at Work',
        'ASI Convention 2026',
        'Newbold College',
        'Adventist Convention UK',
        'ASI UK',
        'ASI',
    ],
    openGraph: {
        url: 'https://asiuk.org/convention',
        type: 'website',
        title: 'ASI UK | Faith at Work — Convention 2026',
        description:
            'Join ASI UK on 20–21 June 2026 at Newbold College for the Faith at Work convention.',
        images: [
            {
                url: 'https://www.asiuk.org/thumbnail.png',
                width: 1200,
                height: 630,
                alt: 'ASI UK Convention 2026 — Faith at Work',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'ASI UK | Faith at Work — Convention 2026',
        description:
            'Join ASI UK on 20–21 June 2026 at Newbold College for the Faith at Work convention.',
        images: [
            {
                url: 'https://www.asiuk.org/thumbnail.png',
                width: 1200,
                height: 630,
                alt: 'ASI UK Convention 2026 — Faith at Work',
            },
        ],
    },
};

export default function ConventionPage() {
    return (
        <div className="w-full">
            {/* 1 — Hero */}
            <ConventionHero variant="page" />

            {/* 2 — At a glance */}
            <section className="w-full bg-white">
                <div className="mx-auto max-w-6xl px-6 py-12 md:px-8 md:py-16">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                        <div className="flex items-start gap-4 rounded-2xl border border-slate-200 p-6">
                            <div className="rounded-xl bg-asi-blue/10 p-3 text-asi-blue">
                                <CalendarDays className="h-6 w-6" />
                            </div>
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Dates</p>
                                <p className="mt-1 text-lg font-semibold text-asi-darkBlue">
                                    {CONVENTION_2026.dates}
                                </p>
                                <p className="text-sm text-slate-500">{CONVENTION_2026.daysOfWeek}</p>
                            </div>
                        </div>

                        <a
                            href={CONVENTION_2026.venueMapUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-start gap-4 rounded-2xl border border-slate-200 p-6 transition hover:border-asi-blue/50 hover:bg-slate-50"
                        >
                            <div className="rounded-xl bg-asi-blue/10 p-3 text-asi-blue">
                                <MapPin className="h-6 w-6" />
                            </div>
                            <div className="flex-1">
                                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Venue</p>
                                <p className="mt-1 flex items-center gap-1 text-lg font-semibold text-asi-darkBlue">
                                    {CONVENTION_2026.venue}
                                    <ArrowUpRight className="h-4 w-4 text-slate-400 transition group-hover:text-asi-blue" />
                                </p>
                                <p className="text-sm text-slate-500">{CONVENTION_2026.venueLocation}</p>
                            </div>
                        </a>

                        <Link
                            href={CONVENTION_2026.registrationUrl}
                            className="group flex items-start gap-4 rounded-2xl bg-asi-blue p-6 text-white transition hover:bg-asi-darkBlue"
                        >
                            <div className="rounded-xl bg-white/15 p-3 text-white">
                                <Ticket className="h-6 w-6" />
                            </div>
                            <div className="flex-1">
                                <p className="text-xs font-semibold uppercase tracking-wider text-white/80">Registration</p>
                                <p className="mt-1 flex items-center gap-1 text-lg font-semibold">
                                    Register Now
                                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                                </p>
                                <p className="text-sm text-white/80">Places are limited</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* 3 — About */}
            <section className="w-full bg-slate-50">
                <div className="mx-auto max-w-6xl px-6 py-20 md:px-8 md:py-24">
                    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-asi-blue">
                                About the weekend
                            </p>
                            <h2 className="mt-4 text-3xl font-bold leading-tight text-asi-darkBlue md:text-4xl">
                                A weekend to integrate faith with daily work.
                            </h2>
                        </div>
                        <div className="flex flex-col gap-8">
                            <p className="text-lg leading-relaxed text-slate-700">
                                {CONVENTION_2026.description}
                            </p>
                            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                                <li className="flex flex-col gap-2 rounded-xl bg-white p-5 shadow-sm">
                                    <Compass className="h-6 w-6 text-asi-blue" />
                                    <p className="font-semibold text-asi-darkBlue">Learn</p>
                                    <p className="text-sm text-slate-600">
                                        Practical teaching on living faith in the marketplace.
                                    </p>
                                </li>
                                <li className="flex flex-col gap-2 rounded-xl bg-white p-5 shadow-sm">
                                    <Users className="h-6 w-6 text-asi-blue" />
                                    <p className="font-semibold text-asi-darkBlue">Connect</p>
                                    <p className="text-sm text-slate-600">
                                        Meet fellow Adventist professionals and ministry leaders.
                                    </p>
                                </li>
                                <li className="flex flex-col gap-2 rounded-xl bg-white p-5 shadow-sm">
                                    <HeartHandshake className="h-6 w-6 text-asi-blue" />
                                    <p className="font-semibold text-asi-darkBlue">Worship</p>
                                    <p className="text-sm text-slate-600">
                                        Share in fellowship, prayer, and inspired preaching.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4 — Speakers */}
            <section className="w-full bg-white">
                <div className="mx-auto max-w-6xl px-6 py-20 md:px-8 md:py-24">
                    <div className="mb-12 text-center">
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-asi-blue">
                            Featured speakers
                        </p>
                        <h2 className="mt-3 text-3xl font-bold text-asi-darkBlue md:text-4xl">
                            Voices for the weekend
                        </h2>
                    </div>
                    <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {CONVENTION_2026.presenters.map((presenter) => (
                            <SpeakerCard key={presenter.name} presenter={presenter} />
                        ))}
                        {/* "More to come" placeholder card */}
                        <div className="flex flex-col gap-4">
                            <div className="relative flex aspect-[3/4] w-full items-center justify-center overflow-hidden rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50">
                                <div className="flex flex-col items-center gap-3 px-6 text-center">
                                    <Sparkles className="h-10 w-10 text-asi-blue/60" />
                                    <p className="text-base font-semibold text-asi-darkBlue">
                                        More speakers coming soon
                                    </p>
                                    <p className="text-sm text-slate-500">
                                        The line-up is still being finalised.
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-1 px-1">
                                <h3 className="text-xl md:text-2xl font-semibold text-asi-darkBlue leading-tight">
                                    To be announced
                                </h3>
                                <p className="text-sm text-slate-500">
                                    Check back soon for more names.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5 — Programme preview */}
            <section className="w-full bg-asi-darkBlue text-white">
                <div className="mx-auto max-w-6xl px-6 py-20 md:px-8 md:py-24">
                    <div className="mb-12 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
                                Programme
                            </p>
                            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                                Two days, many moments.
                            </h2>
                        </div>
                        <Link
                            href="/convention/programme"
                            className="inline-flex items-center gap-2 self-start rounded-lg bg-white px-5 py-3 font-semibold text-asi-darkBlue transition hover:bg-white/90 md:self-auto"
                        >
                            View Full Programme
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        {CONVENTION_2026.programmePreview.map((day) => (
                            <div
                                key={day.day}
                                className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur"
                            >
                                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                                    {day.dayShort}
                                </p>
                                <h3 className="mt-2 text-2xl font-bold">{day.day}</h3>
                                <ul className="mt-6 flex flex-col divide-y divide-white/10">
                                    {day.sessions.map((session) => (
                                        <li
                                            key={session.time}
                                            className="flex items-baseline gap-4 py-3 first:pt-0"
                                        >
                                            <span className="w-24 shrink-0 text-sm font-semibold uppercase tracking-wider text-white/60">
                                                {session.time}
                                            </span>
                                            <span className="text-base">{session.title}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6 — Tickets */}
            <section className="w-full bg-slate-50">
                <div className="mx-auto max-w-5xl px-6 py-16 md:px-8 md:py-20">
                    <div className="mb-10 text-center">
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-asi-blue">
                            Tickets
                        </p>
                        <h2 className="mt-3 text-3xl font-bold text-asi-darkBlue md:text-4xl">
                            Simple pricing
                        </h2>
                    </div>
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                        {TICKET_ORDER.map((type) => {
                            const price = TICKET_PRICES[type];
                            return (
                                <div
                                    key={type}
                                    className="flex flex-col items-center gap-2 rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-slate-100"
                                >
                                    <p className="text-sm font-medium text-asi-blue">
                                        {TICKET_LABELS[type]}
                                    </p>
                                    <p className="text-3xl font-bold text-asi-darkBlue">
                                        {price === 0 ? 'Free' : `£${price}`}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                    <div className="mt-8 flex justify-center">
                        <Link
                            href={CONVENTION_2026.registrationUrl}
                            className="inline-flex items-center gap-2 rounded-lg bg-asi-blue px-6 py-3 font-semibold text-white transition hover:bg-asi-darkBlue"
                        >
                            Register Now
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* 7 — FAQ */}
            <section className="w-full bg-white">
                <div className="mx-auto max-w-3xl px-6 py-20 md:px-8 md:py-24">
                    <div className="mb-6 text-center">
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-asi-blue">
                            Questions
                        </p>
                        <h2 className="mt-3 text-3xl font-bold text-asi-darkBlue md:text-4xl">
                            Frequently asked
                        </h2>
                    </div>
                    <FAQSection items={CONVENTION_2026.faq} />
                </div>
            </section>

            {/* 8 — Catch up: 2025 recordings */}
            <section className="w-full bg-slate-50">
                <div className="mx-auto max-w-5xl px-6 py-14 md:px-8 md:py-16">
                    <div className="flex flex-col items-start gap-6 rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-100 md:flex-row md:items-center md:justify-between md:p-10">
                        <div className="flex items-start gap-4">
                            <div className="rounded-xl bg-asi-blue/10 p-3 text-asi-blue">
                                <PlayCircle className="h-6 w-6" />
                            </div>
                            <div>
                                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-asi-blue">
                                    Catch up
                                </p>
                                <h2 className="mt-2 text-2xl font-bold text-asi-darkBlue md:text-3xl">
                                    Missed last year?
                                </h2>
                                <p className="mt-2 text-slate-600">
                                    Watch recordings from the 2025 ASI UK Convention.
                                </p>
                            </div>
                        </div>
                        <Link
                            href="/news/convention-2025-recordings"
                            className="inline-flex items-center gap-2 self-start rounded-lg bg-asi-blue px-5 py-3 font-semibold text-white transition hover:bg-asi-darkBlue md:self-auto"
                        >
                            Watch Recordings
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* 9 — Final CTA */}
            <section className="relative w-full overflow-hidden bg-gradient-to-br from-asi-blue to-asi-darkBlue text-white">
                <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-50"
                    style={{
                        backgroundImage:
                            'radial-gradient(ellipse 70% 60% at 80% 20%, rgba(244,197,55,0.2), transparent 60%)',
                    }}
                />
                <div className="relative mx-auto max-w-3xl px-6 py-20 text-center md:py-24">
                    <h2 className="text-3xl font-bold leading-tight md:text-5xl">
                        Ready to join us in June?
                    </h2>
                    <p className="mt-4 text-lg text-white/80">
                        Places are limited — early registration is recommended.
                    </p>
                    <Link
                        href={CONVENTION_2026.registrationUrl}
                        className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 text-lg font-semibold text-asi-blue shadow-lg transition hover:bg-white/90"
                    >
                        Register Now
                        <ArrowRight className="h-5 w-5" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
