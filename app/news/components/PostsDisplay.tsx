"use client";

import { useState, useMemo } from "react";
import { ArrowUpDown } from "lucide-react";
import PostCard from "./PostCard";
import type { Post, Tag } from "@/lib/sanity/types";

export default function PostsDisplay({ posts, tags }: { posts: Post[]; tags: Tag[] }) {
    const [activeTag, setActiveTag] = useState<string | null>(null);
    const [sortNewest, setSortNewest] = useState(true);

    const filteredAndSorted = useMemo(() => {
        let filtered = posts;

        if (activeTag) {
            filtered = posts.filter((post) =>
                post.tags?.some((tag) => tag._id === activeTag)
            );
        }

        return [...filtered].sort((a, b) => {
            const dateA = new Date(a.publishedAt).getTime();
            const dateB = new Date(b.publishedAt).getTime();
            return sortNewest ? dateB - dateA : dateA - dateB;
        });
    }, [posts, activeTag, sortNewest]);

    return (
        <div>
            {/* Filters */}
            <div className="flex flex-wrap items-center gap-2 mb-8">
                <button
                    onClick={() => setActiveTag(null)}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                        activeTag === null
                            ? "bg-asi-blue text-white"
                            : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                >
                    All
                </button>
                {tags.map((tag) => (
                    <button
                        key={tag._id}
                        onClick={() => setActiveTag(tag._id)}
                        className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                            activeTag === tag._id
                                ? "bg-asi-blue text-white"
                                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                        }`}
                    >
                        {tag.name}
                    </button>
                ))}

                <button
                    onClick={() => setSortNewest((prev) => !prev)}
                    className="ml-auto flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-medium bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors"
                >
                    <ArrowUpDown className="h-3.5 w-3.5" />
                    {sortNewest ? "Newest first" : "Oldest first"}
                </button>
            </div>

            {/* Grid */}
            {filteredAndSorted.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredAndSorted.map((post) => (
                        <PostCard key={post._id} post={post} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-16">
                    <p className="text-slate-500 text-lg">No posts found.</p>
                    {activeTag && (
                        <button
                            onClick={() => setActiveTag(null)}
                            className="mt-2 text-asi-blue underline hover:text-asi-darkBlue"
                        >
                            Clear filter
                        </button>
                    )}
                </div>
            )}
        </div>
    );
}
