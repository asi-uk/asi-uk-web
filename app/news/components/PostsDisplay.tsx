"use client";

import { useState, useMemo, useEffect } from "react";
import { ArrowUpDown, ChevronLeft, ChevronRight } from "lucide-react";
import PostCard from "./PostCard";
import type { Post, Tag } from "@/lib/sanity/types";

const POSTS_PER_PAGE = 9;

function generatePageNumbers(currentPage: number, totalPages: number): (number | "...")[] {
    if (totalPages <= 7) {
        return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const pages: (number | "...")[] = [1];

    if (currentPage > 3) {
        pages.push("...");
    }

    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);

    for (let i = start; i <= end; i++) {
        pages.push(i);
    }

    if (currentPage < totalPages - 2) {
        pages.push("...");
    }

    pages.push(totalPages);

    return pages;
}

export default function PostsDisplay({ posts, tags }: { posts: Post[]; tags: Tag[] }) {
    const [activeTag, setActiveTag] = useState<string | null>(null);
    const [sortNewest, setSortNewest] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);

    // Reset to page 1 when filters change
    useEffect(() => {
        setCurrentPage(1);
    }, [activeTag, sortNewest]);

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

    const totalPages = Math.ceil(filteredAndSorted.length / POSTS_PER_PAGE);
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    const endIndex = startIndex + POSTS_PER_PAGE;
    const paginatedPosts = filteredAndSorted.slice(startIndex, endIndex);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

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
            {paginatedPosts.length > 0 ? (
                <>
                    {/* Post count */}
                    <p className="text-sm text-slate-500 mb-4">
                        Showing {startIndex + 1}–{Math.min(endIndex, filteredAndSorted.length)} of {filteredAndSorted.length} posts
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {paginatedPosts.map((post) => (
                            <PostCard key={post._id} post={post} />
                        ))}
                    </div>

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <nav className="flex items-center justify-center gap-1 mt-10">
                            <button
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                                className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 disabled:opacity-30 disabled:pointer-events-none transition-colors"
                                aria-label="Previous page"
                            >
                                <ChevronLeft className="h-5 w-5" />
                            </button>

                            {generatePageNumbers(currentPage, totalPages).map((page, i) =>
                                page === "..." ? (
                                    <span key={`ellipsis-${i}`} className="px-2 text-slate-400">
                                        ...
                                    </span>
                                ) : (
                                    <button
                                        key={page}
                                        onClick={() => handlePageChange(page)}
                                        className={`min-w-[2.5rem] h-10 rounded-lg text-sm font-medium transition-colors ${
                                            currentPage === page
                                                ? "bg-asi-blue text-white"
                                                : "text-slate-600 hover:bg-slate-100"
                                        }`}
                                    >
                                        {page}
                                    </button>
                                )
                            )}

                            <button
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalPages}
                                className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 disabled:opacity-30 disabled:pointer-events-none transition-colors"
                                aria-label="Next page"
                            >
                                <ChevronRight className="h-5 w-5" />
                            </button>
                        </nav>
                    )}
                </>
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
