'use client';

import Image from 'next/image';
import Script from 'next/script';
import { Calendar, Video } from 'lucide-react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import {
    FTGU_SERIES_DESCRIPTION,
    getUpcomingFtguEvents,
    type FtguEvent,
} from '@/data/events';

function EventCard({ event }: { event: FtguEvent }) {
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
        </div>
    );
}

export default function EventsCarousel() {
    const events = getUpcomingFtguEvents();

    if (events.length === 0) return null;

    return (
        <section className="w-full bg-white">
            <div className="max-w-5xl mx-auto px-4 py-16 md:py-20">
                <div className="text-center mb-10">
                    <span className="bg-asi-blue/10 text-asi-blue text-sm font-medium px-4 py-1 rounded-full">
                        Upcoming Events
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-asi-blue mt-4">
                        From the Ground Up
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto mt-3">
                        {FTGU_SERIES_DESCRIPTION}
                    </p>
                </div>

                <Carousel opts={{ align: 'start' }} className="relative">
                    <CarouselContent>
                        {events.map((event) => (
                            <CarouselItem
                                key={event.id}
                                className="basis-full sm:basis-1/2 lg:basis-1/3"
                            >
                                <EventCard event={event} />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-2 bg-white/90" />
                    <CarouselNext className="right-2 bg-white/90" />
                </Carousel>
            </div>

            <Script
                id="luma-checkout"
                src="https://embed.lu.ma/checkout-button.js"
                strategy="lazyOnload"
            />
        </section>
    );
}
