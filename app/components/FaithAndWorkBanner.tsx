import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CalendarDays, Clock, MapPin } from 'lucide-react';
import { FAITH_AND_WORK_2026 as EVENT, isFaithAndWorkRegistrationOpen } from '@/data/faith-and-work';

// Homepage feature for the Faith & Work networking event. Renders nothing once
// the event has finished (the homepage revalidates hourly).
export default function FaithAndWorkBanner() {
    if (!isFaithAndWorkRegistrationOpen()) return null;

    return (
        <section className="w-full bg-slate-50">
            <div className="max-w-5xl mx-auto px-4 py-12 md:py-16">
                <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-asi-extraDarkBlue via-asi-darkBlue to-asi-blue text-white shadow-lg md:flex">
                    {EVENT.posterUrl && (
                        <div className="relative md:w-2/5 aspect-[3/4] md:aspect-auto shrink-0">
                            <Image
                                src={EVENT.posterUrl}
                                alt={`${EVENT.title} flyer`}
                                fill
                                sizes="(min-width: 768px) 400px, 100vw"
                                className="object-cover"
                            />
                        </div>
                    )}
                    <div className="flex flex-col gap-5 p-6 md:p-10">
                        <span className="self-start bg-white/15 text-sm font-medium px-4 py-1 rounded-full">
                            Free networking event
                        </span>
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                                Faith <span className="font-serif italic font-normal text-amber-300">&amp;</span> Work
                            </h2>
                            <p className="mt-2 text-lg text-white/90">{EVENT.tagline}</p>
                        </div>
                        <ul className="flex flex-wrap gap-2">
                            {EVENT.highlights.map((h) => (
                                <li key={h} className="rounded-full bg-white/10 ring-1 ring-white/20 px-3 py-1 text-sm">
                                    {h}
                                </li>
                            ))}
                        </ul>
                        <div className="space-y-2 text-white/90">
                            <p className="flex items-center gap-2">
                                <CalendarDays className="h-5 w-5 text-amber-300" />
                                {EVENT.dateLabel}
                            </p>
                            <p className="flex items-center gap-2">
                                <Clock className="h-5 w-5 text-amber-300" />
                                {EVENT.timeLabel}
                            </p>
                            <p className="flex items-center gap-2">
                                <MapPin className="h-5 w-5 text-amber-300" />
                                {EVENT.venue}, {EVENT.venueAddress}
                            </p>
                        </div>
                        <p className="text-sm text-white/70">
                            Speakers: {EVENT.speakers.map((s) => s.name).join(', ')}
                        </p>
                        <Link
                            href={`${EVENT.path}#register`}
                            className="mt-auto inline-flex items-center justify-center gap-2 self-start rounded-lg bg-amber-400 hover:bg-amber-300 text-asi-extraDarkBlue font-bold py-3 px-6 transition-colors"
                        >
                            Register for free
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
