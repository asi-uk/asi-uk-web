function SkeletonCard() {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden h-full flex flex-col">
            {/* Image */}
            <div className="aspect-video bg-slate-200 animate-pulse" />

            {/* Content */}
            <div className="p-4 flex flex-col flex-1">
                {/* Date */}
                <div className="flex items-center mb-2">
                    <div className="h-3.5 w-3.5 rounded bg-slate-200 animate-pulse mr-1.5" />
                    <div className="h-3.5 w-28 rounded bg-slate-200 animate-pulse" />
                </div>

                {/* Title */}
                <div className="h-5 w-4/5 rounded bg-slate-200 animate-pulse mb-1.5" />
                <div className="h-5 w-3/5 rounded bg-slate-200 animate-pulse mb-3" />

                {/* Preview lines */}
                <div className="space-y-2 flex-1">
                    <div className="h-3.5 w-full rounded bg-slate-200 animate-pulse" />
                    <div className="h-3.5 w-full rounded bg-slate-200 animate-pulse" />
                    <div className="h-3.5 w-2/3 rounded bg-slate-200 animate-pulse" />
                </div>

                {/* Tags */}
                <div className="flex gap-1.5 mt-3 pt-3 border-t border-slate-100">
                    <div className="h-5 w-16 rounded-full bg-slate-200 animate-pulse" />
                    <div className="h-5 w-20 rounded-full bg-slate-200 animate-pulse" />
                </div>
            </div>
        </div>
    );
}

export default function Loading() {
    return (
        <div className="relative w-full overflow-x-hidden">
            {/* Header Section */}
            <div className="border-b border-slate-200">
                <div className="max-w-5xl mx-auto px-4 py-12 md:py-10">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-asi-blue mb-4">
                            News
                        </h1>
                        <p className="text-sm md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                            The latest updates and stories from ASI UK and our member ministries.
                        </p>
                    </div>
                </div>
            </div>

            {/* Content Container */}
            <div className="max-w-5xl mx-auto px-4 py-8">
                {/* Skeleton filter pills */}
                <div className="flex flex-wrap items-center gap-2 mb-8">
                    <div className="h-8 w-14 rounded-full bg-slate-200 animate-pulse" />
                    <div className="h-8 w-24 rounded-full bg-slate-200 animate-pulse" />
                    <div className="h-8 w-20 rounded-full bg-slate-200 animate-pulse" />
                    <div className="h-8 w-28 rounded-full bg-slate-200 animate-pulse" />
                    <div className="ml-auto h-8 w-32 rounded-full bg-slate-200 animate-pulse" />
                </div>

                {/* Skeleton cards grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Array.from({ length: 9 }).map((_, i) => (
                        <SkeletonCard key={i} />
                    ))}
                </div>
            </div>
        </div>
    );
}
