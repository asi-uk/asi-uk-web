import { Suspense } from 'react';
import Link from 'next/link';
import { ArrowRight, FolderOpen, Heart, Lightbulb } from 'lucide-react';
import ConventionBanner from '@/app/components/ConventionBanner';
import ConventionHero from '@/app/convention/components/ConventionHero';
import NewsletterSignup from '@/app/components/NewsletterSignup';
import PostCard from '@/app/news/components/PostCard';
import { getRecentPosts } from '@/lib/sanity/queries';

async function RecentPosts() {
    const posts = await getRecentPosts(3);

    if (posts.length === 0) return null;

    return (
        <section className="w-full bg-white">
            <div className="max-w-5xl mx-auto px-4 py-16 md:py-20">
                <h2 className="text-2xl md:text-3xl font-bold text-asi-blue text-center mb-10">
                    Latest News
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {posts.map((post) => (
                        <PostCard key={post._id} post={post} />
                    ))}
                </div>
                <div className="flex justify-center mt-10">
                    <Link
                        href="/news"
                        className="inline-flex items-center gap-2 text-asi-blue hover:text-blue-700 font-medium transition-colors"
                    >
                        View All News
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}

function RecentPostsSkeleton() {
    return (
        <section className="w-full bg-white">
            <div className="max-w-5xl mx-auto px-4 py-16 md:py-20">
                <h2 className="text-2xl md:text-3xl font-bold text-asi-blue text-center mb-10">
                    Latest News
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden animate-pulse">
                            <div className="aspect-video bg-slate-200" />
                            <div className="p-4 space-y-3">
                                <div className="h-4 bg-slate-200 rounded w-1/3" />
                                <div className="h-5 bg-slate-200 rounded w-3/4" />
                                <div className="h-4 bg-slate-200 rounded w-full" />
                                <div className="h-4 bg-slate-200 rounded w-2/3" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default function Home() {
    return (
        <div className="w-full">
            {/* Hero — Faith at Work 2026 */}
            <ConventionHero variant="home" />

            {/* Convention & Project Funding */}
            <section className="w-full bg-slate-50">
                <div className="max-w-5xl mx-auto px-4 py-16 md:py-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Convention */}
                        <ConventionBanner />

                        {/* Project Funding */}
                        <div className="bg-white rounded-2xl shadow-md p-6 md:p-10 flex flex-col items-center gap-5 h-full">
                            <span className="bg-green-500 text-white text-sm font-semibold px-4 py-1 rounded-full w-fit">
                                Applications Open
                            </span>
                            <div className="flex items-center gap-3">
                                <Lightbulb className="h-6 w-6 text-asi-blue" />
                                <h2 className="text-2xl md:text-3xl font-bold text-asi-blue">
                                    2026 Project Cycle
                                </h2>
                            </div>
                            <p className="text-slate-600">
                                Do you have an evangelistic project that needs funding? ASI UK provides grants to support members making a difference through evangelism, outreach, and ministry.
                            </p>
                            <div className="border border-slate-200 rounded-xl p-4">
                                <p className="text-slate-700 font-medium text-center">
                                    Deadline: <span className="font-bold">Thursday 23rd April 2026</span>
                                </p>
                            </div>
                            <div className="flex flex-col gap-3 mt-auto w-full">
                                <Link
                                    href="/projects"
                                    className="bg-asi-blue text-white hover:bg-blue-700 py-3 px-6 rounded-lg font-semibold transition-colors duration-200 text-center inline-flex items-center justify-center gap-2 w-full"
                                >
                                    <FolderOpen className="h-5 w-5" />
                                    Learn More & Apply
                                </Link>
                                <Link
                                    href="/donate"
                                    className="border border-asi-blue text-asi-blue hover:bg-asi-blue/5 py-3 px-6 rounded-lg font-semibold transition-colors duration-200 text-center inline-flex items-center justify-center gap-2 w-full"
                                >
                                    <Heart className="h-4 w-4" />
                                    Donate to Projects
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Latest News */}
            <Suspense fallback={<RecentPostsSkeleton />}>
                <RecentPosts />
            </Suspense>

            {/* Newsletter */}
            <NewsletterSignup variant="homepage" />
        </div>
    );
}
