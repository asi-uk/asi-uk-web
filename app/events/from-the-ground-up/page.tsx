import { CalendarDays } from 'lucide-react';
import FtguEventCard from '@/app/components/FtguEventCard';
import PastEventCard from '@/app/events/from-the-ground-up/components/PastEventCard';
import {
    FTGU_SERIES_DESCRIPTION,
    getUpcomingFtguEvents,
    getPastFtguEvents,
} from '@/data/events';

export const metadata = {
    title: 'ASI UK | From the Ground Up',
    description:
        'From the Ground Up is a live webinar series where ministries share the stories behind how they started, how they were built, and what they have learned along the way. Register for upcoming sessions and watch recordings of past ones.',
    keywords: [
        'From the Ground Up',
        'ASI UK webinar',
        'Adventist ministry webinar',
        'ASI UK events',
        'ASI UK',
        'ASI',
    ],
    openGraph: {
        url: 'https://asiuk.org/events/from-the-ground-up',
        type: 'website',
        title: 'ASI UK | From the Ground Up',
        description:
            'A live webinar series where ministries share how they started and what they have learned. Register for upcoming sessions and watch past recordings.',
        images: [
            {
                url: 'https://www.asiuk.org/thumbnail.png',
                width: 1200,
                height: 630,
                alt: 'ASI UK — From the Ground Up',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'ASI UK | From the Ground Up',
        description:
            'A live webinar series where ministries share how they started and what they have learned.',
        images: [
            {
                url: 'https://www.asiuk.org/thumbnail.png',
                width: 1200,
                height: 630,
                alt: 'ASI UK — From the Ground Up',
            },
        ],
    },
};

export default function FromTheGroundUpPage() {
    const upcoming = getUpcomingFtguEvents();
    const past = getPastFtguEvents();

    return (
        <div className="w-full">
            {/* 1 — Header */}
            <section className="relative w-full overflow-hidden bg-asi-darkBlue text-white -mt-[100px] md:-mt-[110px] pt-[100px] md:pt-[110px]">
                <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-50"
                    style={{
                        backgroundImage:
                            'radial-gradient(ellipse 70% 60% at 20% 10%, rgba(255,255,255,0.12), transparent 60%), radial-gradient(ellipse 60% 50% at 85% 90%, rgba(244,197,55,0.18), transparent 60%)',
                    }}
                />
                <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-5 px-6 py-16 text-center md:px-8 md:py-20">
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white/90 backdrop-blur">
                        <CalendarDays className="h-4 w-4" /> Webinar Series
                    </span>
                    <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">
                        From the Ground Up
                    </h1>
                    <p className="max-w-2xl text-base text-white/80 md:text-lg">
                        {FTGU_SERIES_DESCRIPTION}
                    </p>
                </div>
            </section>

            {/* 2 — Upcoming */}
            <section className="w-full bg-white">
                <div className="max-w-5xl mx-auto px-4 py-16 md:py-20">
                    <div className="text-center mb-10">
                        <span className="bg-asi-blue/10 text-asi-blue text-sm font-medium px-4 py-1 rounded-full">
                            Upcoming
                        </span>
                        <h2 className="text-2xl md:text-3xl font-bold text-asi-blue mt-4">
                            Upcoming sessions
                        </h2>
                    </div>

                    {upcoming.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {upcoming.map((event) => (
                                <FtguEventCard key={event.id} event={event} />
                            ))}
                        </div>
                    ) : (
                        <p className="text-center text-slate-600">
                            No sessions are scheduled right now — check back soon
                            for the next one.
                        </p>
                    )}
                </div>
            </section>

            {/* 3 — Past sessions */}
            {past.length > 0 && (
                <section className="w-full bg-slate-50">
                    <div className="max-w-5xl mx-auto px-4 py-16 md:py-20">
                        <div className="text-center mb-10">
                            <span className="bg-asi-blue/10 text-asi-blue text-sm font-medium px-4 py-1 rounded-full">
                                Catch up
                            </span>
                            <h2 className="text-2xl md:text-3xl font-bold text-asi-blue mt-4">
                                Past sessions
                            </h2>
                            <p className="text-slate-600 max-w-2xl mx-auto mt-3">
                                Missed a session? Watch the recordings below.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {past.map((event) => (
                                <PastEventCard key={event.id} event={event} />
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
}
