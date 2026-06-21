import { Suspense } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ProjectsHero from '@/app/components/ProjectsHero';
import FeaturedProjects from '@/app/components/FeaturedProjects';
import EventsCarousel from '@/app/components/EventsCarousel';
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
            {/* Hero — 2026 project funding drive */}
            <ProjectsHero />

            {/* Featured 2026 projects */}
            <FeaturedProjects />

            {/* From the Ground Up — upcoming events */}
            <EventsCarousel />

            {/* Latest News */}
            <Suspense fallback={<RecentPostsSkeleton />}>
                <RecentPosts />
            </Suspense>

            {/* Newsletter */}
            <NewsletterSignup variant="homepage" />
        </div>
    );
}
