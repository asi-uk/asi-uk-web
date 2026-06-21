import Link from 'next/link';
import { Heart, ArrowRight } from 'lucide-react';
import { approvedProjects2026 } from '@/data/projects';

const FEATURED_COUNT = 3;

export default function FeaturedProjects() {
    const projects = approvedProjects2026
        .filter((project) => !project.cancelled)
        .slice(0, FEATURED_COUNT);

    if (projects.length === 0) return null;

    return (
        <section className="w-full bg-slate-50">
            <div className="mx-auto max-w-5xl px-4 py-16 md:py-20">
                <div className="mb-10 text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-asi-blue">
                        2026 Projects
                    </p>
                    <h2 className="mt-3 text-3xl font-bold text-asi-darkBlue md:text-4xl">
                        Projects We&apos;re Supporting
                    </h2>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {projects.map((project) => (
                        <Link
                            key={project.title}
                            href="/projects"
                            className="group flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-asi-blue/40 hover:shadow-md"
                        >
                            <div className="mb-3 flex items-start justify-between gap-3">
                                <h3 className="text-lg font-bold text-asi-blue transition-colors group-hover:text-asi-darkBlue">
                                    {project.title}
                                </h3>
                                <div className="flex shrink-0 items-center gap-1.5">
                                    <Heart className="h-4 w-4 text-red-500" />
                                    <span className="text-lg font-bold text-asi-blue">
                                        £{project.amount.toLocaleString()}
                                    </span>
                                </div>
                            </div>

                            {project.organisation && (
                                <span className="mb-3 inline-flex w-fit items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-asi-blue">
                                    {project.organisation}
                                </span>
                            )}

                            <p className="line-clamp-3 text-sm leading-relaxed text-slate-600">
                                {project.shortDescription}
                            </p>
                        </Link>
                    ))}
                </div>

                <div className="mt-10 flex justify-center">
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-2 rounded-lg bg-asi-blue px-8 py-3 font-medium text-white shadow-sm transition-colors hover:bg-asi-darkBlue"
                    >
                        View All Projects
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
