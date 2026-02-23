import Image from 'next/image';
import type { Presenter } from '@/data/convention';

interface PresenterGridProps {
    presenters: readonly Presenter[];
}

export default function PresenterGrid({ presenters }: PresenterGridProps) {
    return (
        <div className="w-full mb-5">
            <h3 className="text-lg font-normal text-asi-blue mb-3 text-center">Featured Presenters</h3>
            <div className="flex flex-wrap justify-center gap-10">
                {presenters.map((presenter) => (
                    <div key={presenter.name} className="flex flex-col items-center">
                        <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-300 border-2 border-asi-blue mb-2">
                            <Image
                                src={presenter.imageUrl}
                                width={200}
                                height={200}
                                alt={presenter.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <span className="text-sm text-center">{presenter.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
