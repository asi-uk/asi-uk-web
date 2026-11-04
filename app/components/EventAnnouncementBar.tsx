'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowRight, X } from 'lucide-react';
import { FAITH_AND_WORK_2026 as EVENT, isFaithAndWorkRegistrationOpen } from '@/data/faith-and-work';

const DISMISS_KEY = `dismissed-announcement:${EVENT.id}`;

// Slim site-wide bar promoting the current headline event. Swap the event
// import (or render nothing) when the event is over.
export default function EventAnnouncementBar() {
    const pathname = usePathname();
    const [dismissed, setDismissed] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect -- sync from storage after hydration
        setDismissed(sessionStorage.getItem(DISMISS_KEY) === '1');
    }, []);

    if (dismissed || pathname?.startsWith(EVENT.path) || !isFaithAndWorkRegistrationOpen()) {
        return null;
    }

    return (
        // z-30 keeps it above full-bleed heroes that slide up under the header (e.g. ProjectsHero).
        <div className="relative z-30 bg-gradient-to-r from-asi-darkBlue to-asi-blue text-white print:hidden">
            <Link
                href={`${EVENT.path}#register`}
                className="group flex flex-wrap items-center justify-center gap-x-3 gap-y-1 px-10 py-2.5 text-sm md:text-base text-center"
            >
                <span className="font-bold">
                    Faith <span className="font-serif italic font-normal text-amber-300">&amp;</span> Work
                </span>
                <span className="text-white/85 sm:hidden">{EVENT.dateShort} · Birmingham · Free</span>
                <span className="text-white/85 hidden sm:inline">
                    {EVENT.dateShort} · {EVENT.venue}, Birmingham · Free networking event
                </span>
                <span className="inline-flex items-center gap-1 font-semibold text-amber-300 group-hover:underline">
                    Register now
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
            </Link>
            <button
                type="button"
                aria-label="Dismiss announcement"
                onClick={() => {
                    sessionStorage.setItem(DISMISS_KEY, '1');
                    setDismissed(true);
                }}
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-1 text-white/70 hover:text-white hover:bg-white/10"
            >
                <X className="h-4 w-4" />
            </button>
        </div>
    );
}
