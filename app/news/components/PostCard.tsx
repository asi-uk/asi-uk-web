import Link from "next/link";
import Image from "next/image";
import { Calendar } from "lucide-react";
import { urlFor } from "@/lib/sanity/image";
import type { Post } from "@/lib/sanity/types";

function extractPlainText(body: Post["body"]): string {
    if (!body) return "";
    return body
        .filter((block) => block._type === "block")
        .map((block) =>
            (block.children as { text: string }[])
                ?.map((child) => child.text)
                .join("") ?? ""
        )
        .join(" ");
}

export default function PostCard({ post }: { post: Post }) {
    const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    const plainTextPreview = extractPlainText(post.body);

    return (
        <Link href={`/news/${post.slug.current}`} className="group block">
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden transition-shadow hover:shadow-md h-full flex flex-col">
                {/* Image */}
                <div className="aspect-video overflow-hidden bg-slate-100">
                    {post.image ? (
                        <Image
                            src={urlFor(post.image).width(600).height(340).url()}
                            alt={post.title}
                            width={600}
                            height={340}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-slate-300">
                            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                            </svg>
                        </div>
                    )}
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col flex-1">
                    {/* Date */}
                    <div className="flex items-center text-sm text-slate-500 mb-2">
                        <Calendar className="h-3.5 w-3.5 mr-1.5" />
                        {formattedDate}
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-semibold text-asi-blue line-clamp-2 mb-2 group-hover:underline">
                        {post.title}
                    </h3>

                    {/* Preview */}
                    {plainTextPreview && (
                        <p className="text-sm text-slate-600 line-clamp-3 flex-1">
                            {plainTextPreview}
                        </p>
                    )}

                    {/* Tags */}
                    {post.tags && post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-slate-100">
                            {post.tags.map((tag) => (
                                <span
                                    key={tag._id}
                                    className="inline-block bg-slate-100 text-asi-blue text-xs px-2.5 py-0.5 rounded-full"
                                >
                                    {tag.name}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </Link>
    );
}
