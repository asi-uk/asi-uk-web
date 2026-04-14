import Link from 'next/link';
import { ArrowLeft, CalendarDays, MapPin } from 'lucide-react';
import { CONVENTION_2026 } from '@/data/convention';

export const metadata = {
    title: 'ASI UK | Faith at Work — Programme 2026',
    description:
        'Two-day programme schedule for the ASI UK Convention 2026 at Newbold College, 20–21 June 2026.',
    keywords: [
        'ASI UK Convention Programme',
        'Faith at Work',
        'Programme',
        'Schedule',
        'Newbold College',
        'ASI UK 2026',
    ],
    openGraph: {
        url: 'https://asiuk.org/convention/programme',
        type: 'website',
        title: 'ASI UK | Faith at Work — Programme 2026',
        description:
            'Two-day programme schedule for the ASI UK Convention 2026 at Newbold College, 20–21 June 2026.',
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

interface SessionRow {
    time: string;
    title: string;
    speaker?: string;
    description?: string;
}

interface DayBlock {
    id: string;
    day: string;
    dayShort: string;
    sessions: SessionRow[];
}

const DAYS: DayBlock[] = [
    {
        id: 'saturday',
        day: 'Sabbath — Saturday 20 June',
        dayShort: 'SAT 20 JUN',
        sessions: [
            { time: '10:00', title: 'Welcome & Panel Discussion' },
            {
                time: '11:30',
                title: 'Main Service',
                description: 'Ministries spotlight, offering, and sermon.',
            },
            { time: '13:00', title: 'Lunch' },
            { time: '14:30', title: 'Mixer' },
            { time: '15:15', title: 'Seminar #1 — Ministries' },
            { time: '16:30', title: 'Seminar #2 — Professionals' },
            { time: '17:30', title: 'Seminar #3 — Business & Entrepreneurship' },
            { time: '18:30', title: 'Close' },
            {
                time: 'Evening',
                title: 'Informal Mixers & Social',
                description: 'Unstructured time to connect and continue the conversation.',
            },
        ],
    },
    {
        id: 'sunday',
        day: 'Sunday 21 June',
        dayShort: 'SUN 21 JUN',
        sessions: [
            {
                time: '10:00',
                title: 'Parallel Breakout Training Seminars',
                description:
                    'Topics include setting up a ministry (financial, legal), harnessing technology in business and ministry, and leadership.',
            },
            { time: '12:00', title: 'Final Charge & Goodbyes' },
            {
                time: '14:00',
                title: 'Annual General Meeting (AGM)',
                description: 'Open to ASI UK members only.',
            },
        ],
    },
];

export default function ConventionProgrammePage() {
    return (
        <div className="w-full bg-slate-50" style={{ scrollBehavior: 'smooth' }}>
            <div className="mx-auto max-w-4xl px-6 pt-10 pb-24 md:px-8">
                {/* Back link */}
                <Link
                    href="/convention"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-asi-blue hover:text-asi-darkBlue"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Back to Convention
                </Link>

                {/* Header */}
                <header className="mt-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-asi-blue">
                        Programme
                    </p>
                    <h1 className="mt-3 text-4xl font-bold leading-tight text-asi-darkBlue md:text-5xl">
                        Faith at Work — Convention 2026
                    </h1>
                    <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-600">
                        <span className="inline-flex items-center gap-2">
                            <CalendarDays className="h-4 w-4 text-asi-blue" />
                            {CONVENTION_2026.dates}
                        </span>
                        <span className="inline-flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-asi-blue" />
                            {CONVENTION_2026.venue}, {CONVENTION_2026.venueLocation}
                        </span>
                    </div>
                    <p className="mt-6 max-w-2xl text-base text-slate-600">
                        A provisional outline of the weekend. Session details, speakers, and exact
                        times will be added as the programme is finalised.
                    </p>
                </header>

                {/* Day tabs */}
                <nav className="sticky top-[96px] z-10 mt-10 -mx-6 bg-slate-50/90 px-6 py-3 backdrop-blur md:-mx-8 md:top-[106px] md:px-8">
                    <div className="flex gap-2">
                        {DAYS.map((d) => (
                            <a
                                key={d.id}
                                href={`#${d.id}`}
                                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-asi-darkBlue transition hover:border-asi-blue hover:text-asi-blue"
                            >
                                <span className="text-xs font-bold uppercase tracking-wider text-asi-blue">
                                    {d.dayShort}
                                </span>
                            </a>
                        ))}
                    </div>
                </nav>

                {/* Day sections */}
                <div className="mt-10 flex flex-col gap-10">
                    {DAYS.map((d) => (
                        <section
                            key={d.id}
                            id={d.id}
                            className="scroll-mt-[180px] overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200"
                        >
                            <div className="bg-asi-darkBlue px-6 py-5 text-white md:px-8">
                                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                                    {d.dayShort}
                                </p>
                                <h2 className="mt-1 text-2xl font-bold md:text-3xl">{d.day}</h2>
                            </div>

                            <ol className="divide-y divide-slate-100">
                                {d.sessions.map((session, i) => (
                                    <li
                                        key={`${d.id}-${i}`}
                                        className="grid grid-cols-[80px_1fr] gap-4 px-6 py-5 md:grid-cols-[110px_1fr] md:gap-8 md:px-8"
                                    >
                                        <span className="font-mono text-sm font-semibold text-asi-blue md:text-base">
                                            {session.time}
                                        </span>
                                        <div className="min-w-0">
                                            <p className="text-base font-semibold text-asi-darkBlue md:text-lg">
                                                {session.title}
                                            </p>
                                            {session.speaker && (
                                                <p className="mt-1 text-sm text-asi-blue">{session.speaker}</p>
                                            )}
                                            {session.description && (
                                                <p className="mt-1 text-sm text-slate-600">
                                                    {session.description}
                                                </p>
                                            )}
                                        </div>
                                    </li>
                                ))}
                            </ol>
                        </section>
                    ))}
                </div>

                <p className="mt-10 text-center text-sm text-slate-500">
                    Programme subject to change. Final schedule will be shared with registered
                    attendees ahead of the event.
                </p>
            </div>
        </div>
    );
}
