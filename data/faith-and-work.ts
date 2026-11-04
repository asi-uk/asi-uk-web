import type { Presenter } from "@/data/convention";

// Faith & Work — free networking event for Christian professionals and
// entrepreneurs. Registration is handled by /events/faith-and-work and stored
// in Notion (see lib/notion-faith-and-work.ts).

export const FAITH_AND_WORK_2026 = {
    id: "faith-and-work-2026", // written to the Notion "Event" select
    title: "Faith & Work",
    tagline: "Join Christian Professionals and Entrepreneurs",
    description:
        "An afternoon of networking, inspirational insights from business leaders, and Q&A for Christian professionals, entrepreneurs, students and ministry leaders.",
    dateLabel: "Sunday 29th November 2026",
    dateShort: "Sun 29 Nov",
    timeLabel: "11:00am – 3:00pm",
    startDate: new Date("2026-11-29T11:00:00Z"), // GMT
    endDate: new Date("2026-11-29T15:00:00Z"),
    venue: "Camp Hill SDA Church",
    venueAddress: "198 Camp Hill, Birmingham B12 0JP",
    venueMapUrl: "https://www.google.com/maps/search/?api=1&query=Camp+Hill+SDA+Church+198+Camp+Hill+Birmingham+B12+0JP",
    path: "/events/faith-and-work",
    highlights: ["Networking", "Inspirational insights from business leaders", "Q&A", "Meet new people"],
    refreshments: "Light refreshments provided. Food available to buy on the day.",
    donations:
        "Entry is free. A voluntary donation will be collected on the day to help cover the cost of the event.",
    // TODO(content): upload the flyer / hero artwork to Cloudinary and paste the URLs here.
    // Leave empty to fall back to the gradient layout.
    posterUrl: "",
    heroImageUrl: "",
    speakers: [
        {
            name: "Adrian Mateas",
            title: "Entrepreneur | Dentist | Business Owner",
            imageUrl: "", // TODO(content): Cloudinary headshot
        },
        {
            name: "Craig Gooden",
            title: "Elder | IT Specialist | Evangelist",
            imageUrl: "", // TODO(content): Cloudinary headshot
        },
        {
            name: "Hugh Gray",
            title: "Entrepreneur | Construction | Engineering",
            imageUrl: "", // TODO(content): Cloudinary headshot
        },
    ] satisfies Presenter[],
} as const;

/** Registration stays open until the event ends. */
export function isFaithAndWorkRegistrationOpen(now: Date = new Date()): boolean {
    return now.getTime() < FAITH_AND_WORK_2026.endDate.getTime();
}

/** Google Calendar "add event" link for confirmation page + email. */
export function getFaithAndWorkCalendarUrl(): string {
    const fmt = (d: Date) => d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
    const e = FAITH_AND_WORK_2026;
    const params = new URLSearchParams({
        action: "TEMPLATE",
        text: `ASI UK — ${e.title}`,
        dates: `${fmt(e.startDate)}/${fmt(e.endDate)}`,
        details: `${e.tagline}. https://www.asiuk.org${e.path}`,
        location: `${e.venue}, ${e.venueAddress}`,
    });
    return `https://calendar.google.com/calendar/render?${params.toString()}`;
}
