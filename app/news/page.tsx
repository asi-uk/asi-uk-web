import { getAllPosts, getAllTags } from "@/lib/sanity/queries";
import PostsDisplay from "./components/PostsDisplay";

export const metadata = {
    title: "ASI UK | News",
    description:
        "Stay up to date with the latest news and updates from ASI UK.",
    openGraph: {
        url: "https://asiuk.org/news",
        type: "website",
        title: "ASI UK | News",
        description:
            "Stay up to date with the latest news and updates from ASI UK.",
        images: [
            {
                url: "https://www.asiuk.org/thumbnail.png",
                width: 1200,
                height: 630,
                alt: "ASIUK",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "ASI UK | News",
        description:
            "Stay up to date with the latest news and updates from ASI UK.",
        images: [
            {
                url: "https://www.asiuk.org/thumbnail.png",
                width: 1200,
                height: 630,
                alt: "ASIUK",
            },
        ],
    },
};

export default async function NewsPage() {
    const [posts, tags] = await Promise.all([getAllPosts(), getAllTags()]);

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
                <PostsDisplay posts={posts} tags={tags} />
            </div>
        </div>
    );
}
