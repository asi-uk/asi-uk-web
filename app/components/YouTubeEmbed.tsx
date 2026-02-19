interface YouTubeEmbedProps {
    embedUrl: string;
    title: string;
    watchUrl?: string;
    className?: string;
}

export default function YouTubeEmbed({ embedUrl, title, watchUrl, className = "" }: YouTubeEmbedProps) {
    return (
        <div className={className}>
            <div className="w-full aspect-video rounded-md overflow-hidden shadow-md">
                <iframe
                    className="w-full h-full"
                    src={embedUrl}
                    title={title}
                    style={{ border: 'none' }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                />
            </div>
            {watchUrl && (
                <div className="mt-4 flex justify-end">
                    <a
                        href={watchUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-asi-blue hover:text-blue-700 text-sm font-medium flex items-center gap-1"
                    >
                        <span>Watch on YouTube</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4"
                             fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                        </svg>
                    </a>
                </div>
            )}
        </div>
    );
}
