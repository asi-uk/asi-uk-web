import Image from 'next/image';
import type { Presenter } from '@/data/convention';

interface SpeakerCardProps {
    presenter: Presenter;
    /** "portrait" = 3:4 rounded rectangle (default); "circle" = round headshot with centred text. */
    shape?: 'portrait' | 'circle';
}

function getInitials(name: string): string {
    return name
        .split(/\s+/)
        .filter(Boolean)
        .slice(0, 2)
        .map((part) => part[0]?.toUpperCase() ?? '')
        .join('');
}

export default function SpeakerCard({ presenter, shape = 'portrait' }: SpeakerCardProps) {
    const hasImage = Boolean(presenter.imageUrl);
    const isCircle = shape === 'circle';

    return (
        <div className={`group flex flex-col gap-4 ${isCircle ? 'items-center text-center' : ''}`}>
            <div
                className={
                    isCircle
                        ? 'relative aspect-square w-full max-w-[240px] overflow-hidden rounded-full bg-gradient-to-br from-asi-blue to-asi-darkBlue shadow-sm ring-4 ring-white transition group-hover:shadow-md'
                        : 'relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-asi-blue to-asi-darkBlue shadow-sm transition group-hover:shadow-md'
                }
            >
                {hasImage ? (
                    <Image
                        src={presenter.imageUrl}
                        alt={presenter.name}
                        fill
                        sizes={isCircle ? '240px' : '(min-width: 1024px) 320px, (min-width: 640px) 45vw, 90vw'}
                        className="object-cover"
                    />
                ) : (
                    <div
                        aria-label={presenter.name}
                        className="flex h-full w-full items-center justify-center text-white"
                    >
                        <span className="text-6xl font-bold tracking-tight opacity-90">
                            {getInitials(presenter.name)}
                        </span>
                    </div>
                )}
            </div>
            <div className="flex flex-col gap-1 px-1">
                <h3 className="text-xl md:text-2xl font-semibold text-asi-darkBlue leading-tight">
                    {presenter.name}
                </h3>
                {presenter.title && (
                    <p className="text-sm font-medium text-asi-blue">{presenter.title}</p>
                )}
                {presenter.organization && (
                    <p className="text-sm text-slate-500">{presenter.organization}</p>
                )}
                {presenter.bio && (
                    <p className="text-sm text-slate-600 mt-2 leading-relaxed">{presenter.bio}</p>
                )}
            </div>
        </div>
    );
}
