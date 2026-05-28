export interface FtguEvent {
    id: string; // internal key, e.g. "ftgu-session-2"
    session?: string; // display label, e.g. "Session #2"
    title: string; // speaker — ministry, e.g. "Alistair Huong — AudioVerse"
    date: Date; // start datetime; used for sorting + the upcoming filter
    dateLabel: string; // human label, e.g. "1st May 2026, 7:00 PM BST"
    location: string; // e.g. "Online"
    posterUrl: string; // Cloudinary poster URL
    lumaEventId: string; // "evt-..." — drives the Luma checkout modal
    lumaUrl: string; // full Luma event page (fallback href)
}

export const FTGU_SERIES_DESCRIPTION =
    "A live webinar series where ministries share the stories behind how they started, " +
    "how they were built, and what they've learned along the way — followed by an open Q&A.";

// Add one entry per "From the Ground Up" event. Past events are filtered out
// automatically by getUpcomingFtguEvents(), so old sessions can be left here as a record.
export const ftguEvents: FtguEvent[] = [
    {
        id: 'ftgu-session-3',
        session: 'Session #3',
        title: 'Dr. Anguel Madjarov — Ivești Health Retreat Romania',
        date: new Date('2026-06-05T19:00:00+01:00'),
        dateLabel: '5th June 2026, 7:00 PM BST',
        location: 'Online',
        posterUrl:
            'https://res.cloudinary.com/disrkguox/image/upload/v1780001856/asiuk-ftgu-session3-thumbnail_smf9yc.png',
        lumaEventId: 'evt-26ddM9zT4BFyhw1',
        lumaUrl: 'https://luma.com/event/evt-26ddM9zT4BFyhw1',
    },    {
        id: 'ftgu-session-4',
        session: 'Session #4',
        title: 'Dr. Neil Nedley - Weimar University',
        date: new Date('2026-06-24T19:00:00+01:00'),
        dateLabel: '24th June 2026, 7:00 PM BST',
        location: 'Online',
        posterUrl:
            'https://res.cloudinary.com/disrkguox/image/upload/v1780001856/asiuk-ftgu-session4-thumbnail_s6qtss.png',
        lumaEventId: 'evt-tmG9WFD5Op8wEjV',
        lumaUrl: 'https://luma.com/event/evt-tmG9WFD5Op8wEjV',
    },    {
        id: 'ftgu-session-5',
        session: 'Session #5',
        title: 'Eric Camarillo - SALT Outreach',
        date: new Date('2026-07-03T19:00:00+01:00'),
        dateLabel: '3rd July 2026, 7:00 PM BST',
        location: 'Online',
        posterUrl:
            'https://res.cloudinary.com/disrkguox/image/upload/v1780001856/asiuk-ftgu-session5-thumbnail_cp3i6n.png',
        lumaEventId: 'evt-c6xhmO6vRJk7qVv',
        lumaUrl: 'https://luma.com/event/evt-c6xhmO6vRJk7qVv',
    },    {
        id: 'ftgu-session-6',
        session: 'Session #6',
        title: 'Cody Francis - ASI North America',
        date: new Date('2026-08-07T19:00:00+01:00'),
        dateLabel: '7th August 2026, 7:00 PM BST',
        location: 'Online',
        posterUrl:
            'https://res.cloudinary.com/disrkguox/image/upload/v1780001856/asiuk-ftgu-session6-thumbnail_szexsf.png',
        lumaEventId: 'evt-Sv5zSjyVU7wKsCR',
        lumaUrl: 'https://luma.com/event/evt-Sv5zSjyVU7wKsCR',
    },   {
        id: 'ftgu-session-7',
        session: 'Session #7',
        title: 'Tom Evans - Child Impact International',
        date: new Date('2026-09-04T19:00:00+01:00'),
        dateLabel: '4th September 2026, 7:00 PM BST',
        location: 'Online',
        posterUrl:
            'https://res.cloudinary.com/disrkguox/image/upload/v1780001856/asiuk-ftgu-session7-thumbnail_yej2d6.png',
        lumaEventId: 'evt-5rvPEiTbztyQaEp',
        lumaUrl: 'https://luma.com/event/evt-5rvPEiTbztyQaEp',
    },
];

// Upcoming events only, soonest first.
export function getUpcomingFtguEvents(now: Date = new Date()): FtguEvent[] {
    return ftguEvents
        .filter((event) => event.date.getTime() >= now.getTime())
        .sort((a, b) => a.date.getTime() - b.date.getTime());
}
