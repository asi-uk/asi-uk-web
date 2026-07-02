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
    youtubeUrl?: string; // recording watch URL, e.g. "https://youtu.be/<id>"; set once a past session is available on demand
}

export const FTGU_SERIES_DESCRIPTION =
    "A live webinar series where ministries share the stories behind how they started, " +
    "how they were built, and what they've learned along the way — followed by an open Q&A.";

// Add one entry per "From the Ground Up" event. Past events are filtered out
// automatically by getUpcomingFtguEvents(), so old sessions can be left here as a record.
export const ftguEvents: FtguEvent[] = [
    // ── TODO(content): past sessions — fill in real dates, poster URLs and
    // `youtubeUrl` recordings, then remove these TODO markers. Session #2 was
    // "Alistair Huong — AudioVerse" (see app/components/WebinarBanner.tsx).
    // Past events without a `youtubeUrl` render a "recording coming soon" state.
    {
        id: 'ftgu-session-1',
        session: 'Session #1',
        title: 'Scotty Mayer & Keith Detwieler - Little Light Studios', //
        date: new Date('2026-04-10T19:00:00+01:00'),
        dateLabel: '10th April 2026, 7:00 PM BST',
        location: 'Online',
        posterUrl:
            'https://res.cloudinary.com/disrkguox/image/upload/v1774513138/friday-webinar-little-light-square_pmg548.png',
        lumaEventId: '',
        lumaUrl: '',
        youtubeUrl: 'https://youtu.be/ZVgterTs_YQ',
    },
    {
        id: 'ftgu-session-2',
        session: 'Session #2',
        title: 'Alistair Huong — AudioVerse',
        date: new Date('2026-05-01T19:00:00+01:00'),
        dateLabel: '1st May 2026, 7:00 PM BST',
        location: 'Online',
        posterUrl:
            'https://res.cloudinary.com/disrkguox/image/upload/v1776588124/asiuk-ftgu-session2-square-sposter_kil2ot.png',
        lumaEventId: '',
        lumaUrl: '',
        youtubeUrl: 'https://youtu.be/0QWrN2NDJFs',
    },
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
        youtubeUrl: 'https://youtu.be/_BJ7wvJZTMo',
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
        youtubeUrl: 'https://youtu.be/H6POxac5w4g',
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

// Past events only, most recent first.
export function getPastFtguEvents(now: Date = new Date()): FtguEvent[] {
    return ftguEvents
        .filter((event) => event.date.getTime() < now.getTime())
        .sort((a, b) => b.date.getTime() - a.date.getTime());
}

// Convert a YouTube watch URL ("youtu.be/<id>" or "youtube.com?v=<id>") into an
// embeddable URL. Returns null for unrecognised input.
export function getYouTubeEmbedUrl(url: string): string | null {
    try {
        const parsed = new URL(url);
        let videoId: string | null = null;
        if (parsed.hostname === 'youtu.be') {
            videoId = parsed.pathname.slice(1);
        } else if (parsed.hostname.includes('youtube.com')) {
            videoId = parsed.searchParams.get('v');
        }
        return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
    } catch {
        return null;
    }
}
