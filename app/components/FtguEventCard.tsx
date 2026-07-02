'use client';

import Image from 'next/image';
import Script from 'next/script';
import { Calendar, Video } from 'lucide-react';
import { type FtguEvent } from '@/data/events';

// Register card for an upcoming "From the Ground Up" session. The Luma checkout
// button requires the embed script, so it is bundled here — any page rendering
// this card automatically loads it.
export default function FtguEventCard({ event }: { event: FtguEvent }) {
    return (
        <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col h-full">
            <div className="relative aspect-square w-full">
                <Image
                    src={event.posterUrl}
                    alt={`From the Ground Up — ${event.title}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                />
            </div>

            <div className="flex flex-col gap-3 p-6 flex-1">
                {event.session && (
                    <span className="bg-asi-blue/10 text-asi-blue text-sm font-medium px-4 py-1 rounded-full w-fit">
                        {event.session}
                    </span>
                )}

                <h3 className="text-lg font-bold text-asi-blue">{event.title}</h3>

                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-slate-600">
                    <span className="inline-flex items-center gap-1.5">
                        <Calendar className="h-4 w-4 text-asi-blue" />
                        {event.dateLabel}
                    </span>
                    <span className="text-slate-300">|</span>
                    <span className="inline-flex items-center gap-1.5">
                        <Video className="h-4 w-4 text-asi-blue" />
                        {event.location}
                    </span>
                </div>

                <a
                    href={event.lumaUrl}
                    className="luma-checkout--button !bg-asi-blue !text-white hover:!bg-blue-700 !py-3 !px-6 !rounded-lg !font-semibold transition-colors duration-200 inline-flex items-center justify-center gap-2 mt-auto"
                    data-luma-action="checkout"
                    data-luma-event-id={event.lumaEventId}
                >
                    Register for Event
                </a>
            </div>

            <Script
                id="luma-checkout"
                src="https://embed.lu.ma/checkout-button.js"
                strategy="lazyOnload"
            />
        </div>
    );
}
