import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar } from "lucide-react";
import { getPostBySlug, getAllPostSlugs } from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/image";
import PostBody from "../components/PostBody";

export async function generateStaticParams() {
    const slugs = await getAllPostSlugs();
    return slugs.map((s) => ({ slug: s.slug.current }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);
    if (!post) return {};

    const ogImage = post.image
        ? urlFor(post.image).width(1200).height(630).url()
        : "https://www.asiuk.org/thumbnail.png";

    return {
        title: `ASI UK | ${post.title}`,
        description: `Read "${post.title}" on the ASI UK news page.`,
        openGraph: {
            title: `ASI UK | ${post.title}`,
            description: `Read "${post.title}" on the ASI UK news page.`,
            images: [{ url: ogImage, width: 1200, height: 630, alt: post.title }],
        },
        twitter: {
            card: "summary_large_image",
            title: `ASI UK | ${post.title}`,
            description: `Read "${post.title}" on the ASI UK news page.`,
            images: [{ url: ogImage, width: 1200, height: 630, alt: post.title }],
        },
    };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) notFound();

    const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    return (
        <div className="relative w-full overflow-x-hidden">
            <div className="max-w-3xl mx-auto px-4 py-8">
                {/* Back link */}
                <Link
                    href="/news"
                    className="inline-flex items-center text-sm text-slate-500 hover:text-asi-blue mb-6 transition-colors"
                >
                    <ArrowLeft className="h-4 w-4 mr-1" />
                    Back to News
                </Link>

                {/* Featured image */}
                {post.image && (
                    <div className="mb-8 max-w-xl">
                        <Image
                            src={urlFor(post.image).width(600).height(340).url()}
                            alt={post.title}
                            width={600}
                            height={340}
                            priority
                            className="w-full rounded-xl object-cover"
                        />
                    </div>
                )}

                {/* Title */}
                <h1 className="text-3xl md:text-4xl font-bold text-asi-blue mb-4">
                    {post.title}
                </h1>

                {/* Date and tags */}
                <div className="flex flex-wrap items-center gap-3 mb-6">
                    <div className="flex items-center text-sm text-slate-500">
                        <Calendar className="h-4 w-4 mr-1.5" />
                        {formattedDate}
                    </div>
                    {post.tags && post.tags.length > 0 && (
                        <>
                            <span className="text-slate-300">|</span>
                            <div className="flex flex-wrap gap-1.5">
                                {post.tags.map((tag) => (
                                    <span
                                        key={tag._id}
                                        className="inline-block bg-slate-100 text-asi-blue text-xs px-2.5 py-0.5 rounded-full"
                                    >
                                        {tag.name}
                                    </span>
                                ))}
                            </div>
                        </>
                    )}
                </div>

                {/* Body */}
                {post.body && <PostBody body={post.body} />}
            </div>
        </div>
    );
}
