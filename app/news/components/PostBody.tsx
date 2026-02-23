import { PortableText } from "@portabletext/react";
import type { PortableTextBlock } from "next-sanity";
import Image from "next/image";
import { urlFor } from "@/lib/sanity/image";
import YouTubeEmbed from "@/app/components/YouTubeEmbed";
import GalleryGrid from "./GalleryGrid";
import type { CloudinaryImage } from "@/lib/cloudinary";

function getYouTubeEmbedUrl(url: string): string | null {
    try {
        const parsed = new URL(url);
        let videoId: string | null = null;
        if (parsed.hostname === "youtu.be") {
            videoId = parsed.pathname.slice(1);
        } else if (parsed.hostname.includes("youtube.com")) {
            videoId = parsed.searchParams.get("v");
        }
        return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
    } catch {
        return null;
    }
}

interface PostBodyProps {
    body: PortableTextBlock[];
    galleryImages?: Record<string, CloudinaryImage[]>;
}

export default function PostBody({ body, galleryImages }: PostBodyProps) {
    const components = {
        block: {
            h1: ({ children }: { children?: React.ReactNode }) => (
                <h1 className="text-3xl font-bold text-asi-blue mt-8 mb-4">{children}</h1>
            ),
            h2: ({ children }: { children?: React.ReactNode }) => (
                <h2 className="text-2xl font-bold text-asi-blue mt-8 mb-3">{children}</h2>
            ),
            h3: ({ children }: { children?: React.ReactNode }) => (
                <h3 className="text-xl font-semibold text-asi-blue mt-6 mb-2">{children}</h3>
            ),
            h4: ({ children }: { children?: React.ReactNode }) => (
                <h4 className="text-lg font-semibold text-asi-blue mt-4 mb-2">{children}</h4>
            ),
            normal: ({ children }: { children?: React.ReactNode }) => (
                <p className="text-slate-700 leading-relaxed mb-4">{children}</p>
            ),
            blockquote: ({ children }: { children?: React.ReactNode }) => (
                <blockquote className="border-l-4 border-asi-blue pl-4 my-6 italic text-slate-600">
                    {children}
                </blockquote>
            ),
        },
        list: {
            bullet: ({ children }: { children?: React.ReactNode }) => (
                <ul className="list-disc list-inside space-y-1 mb-4 text-slate-700">{children}</ul>
            ),
            number: ({ children }: { children?: React.ReactNode }) => (
                <ol className="list-decimal list-inside space-y-1 mb-4 text-slate-700">{children}</ol>
            ),
        },
        listItem: {
            bullet: ({ children }: { children?: React.ReactNode }) => (
                <li className="leading-relaxed">{children}</li>
            ),
            number: ({ children }: { children?: React.ReactNode }) => (
                <li className="leading-relaxed">{children}</li>
            ),
        },
        marks: {
            link: ({ children, value }: { children?: React.ReactNode; value?: { href: string } }) => (
                <a
                    href={value?.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-asi-blue underline hover:text-asi-darkBlue"
                >
                    {children}
                </a>
            ),
            strong: ({ children }: { children?: React.ReactNode }) => (
                <strong className="font-semibold">{children}</strong>
            ),
            em: ({ children }: { children?: React.ReactNode }) => (
                <em>{children}</em>
            ),
        },
        types: {
            image: ({ value }: { value: { asset: { _ref: string } } }) => (
                <div className="my-6">
                    <Image
                        src={urlFor(value).width(800).url()}
                        alt=""
                        width={800}
                        height={450}
                        className="rounded-lg w-full"
                    />
                </div>
            ),
            youtube: ({ value }: { value: { url: string } }) => {
                const embedUrl = getYouTubeEmbedUrl(value.url);
                if (!embedUrl) return null;
                return (
                    <div className="my-6">
                        <YouTubeEmbed embedUrl={embedUrl} title="YouTube video" watchUrl={value.url} />
                    </div>
                );
            },
            galleryEmbed: ({ value }: { value: { title?: string; cloudinaryFolder: string; maxImages?: number } }) => {
                const images = galleryImages?.[value.cloudinaryFolder] ?? [];
                if (images.length === 0) return null;

                return (
                    <div className="my-8">
                        {value.title && (
                            <h3 className="text-xl font-semibold text-asi-blue mb-4">
                                {value.title}
                            </h3>
                        )}
                        <GalleryGrid
                            images={images}
                            maxImages={value.maxImages}
                        />
                    </div>
                );
            },
        },
    };

    return (
        <div className="prose-slate max-w-none">
            <PortableText value={body} components={components} />
        </div>
    );
}
