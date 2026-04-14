import Image from 'next/image';
import type { Presenter } from '@/data/convention';

interface SpeakerCardProps {
    presenter: Presenter;
}

function getInitials(name: string): string {
    return name
        .split(/\s+/)
        .filter(Boolean)
        .slice(0, 2)
        .map((part) => part[0]?.toUpperCase() ?? '')
        .join('');
}

export default function SpeakerCard({ presenter }: SpeakerCardProps) {
    const hasImage = Boolean(presenter.imageUrl);

    return (
        <div className="group flex flex-col gap-4">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-asi-blue to-asi-darkBlue shadow-sm transition group-hover:shadow-md">
                {hasImage ? (
                    <Image
                        src={presenter.imageUrl}
                        alt={presenter.name}
                        fill
                        sizes="(min-width: 1024px) 320px, (min-width: 640px) 45vw, 90vw"
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
