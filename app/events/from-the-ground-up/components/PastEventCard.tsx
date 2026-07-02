import Image from 'next/image';
import { Calendar, Video } from 'lucide-react';
import YouTubeEmbed from '@/app/components/YouTubeEmbed';
import { getYouTubeEmbedUrl, type FtguEvent } from '@/data/events';

// Card for a past "From the Ground Up" session. When a recording is available
// it embeds the YouTube player inline; otherwise it shows the poster with a
// "recording coming soon" note.
export default function PastEventCard({ event }: { event: FtguEvent }) {
    const embedUrl = event.youtubeUrl
        ? getYouTubeEmbedUrl(event.youtubeUrl)
        : null;

    return (
        <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col h-full">
            {embedUrl ? (
                <YouTubeEmbed
                    embedUrl={embedUrl}
                    watchUrl={event.youtubeUrl}
                    title={`From the Ground Up — ${event.title}`}
                    className="p-4 pb-0"
                />
            ) : (
                <div className="relative aspect-video w-full">
                    <Image
                        src={event.posterUrl}
                        alt={`From the Ground Up — ${event.title}`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover"
                    />
                </div>
            )}

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

                {!embedUrl && (
                    <p className="text-sm text-slate-500 mt-auto">
                        Recording coming soon.
                    </p>
                )}
            </div>
        </div>
    );
}
