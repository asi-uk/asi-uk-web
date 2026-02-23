import type { PortableTextBlock } from "next-sanity";

export interface Tag {
    _id: string;
    name: string;
    slug: { current: string };
}

export interface Post {
    _id: string;
    title: string;
    slug: { current: string };
    publishedAt: string;
    image?: {
        asset: {
            _ref: string;
            _type: string;
        };
    };
    body?: PortableTextBlock[];
    tags?: Tag[];
}
