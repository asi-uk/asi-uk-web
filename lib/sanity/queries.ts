import { client } from "./client";
import type { Post, Tag } from "./types";

const postFields = `
    _id,
    title,
    slug,
    publishedAt,
    image,
    body,
    "tags": tags[]->{ _id, name, slug }
`;

export async function getAllPosts(): Promise<Post[]> {
    return client.fetch(
        `*[_type == "post"] | order(publishedAt desc) { ${postFields} }`
    );
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
    return client.fetch(
        `*[_type == "post" && slug.current == $slug][0] { ${postFields} }`,
        { slug }
    );
}

export async function getAllPostSlugs(): Promise<{ slug: { current: string } }[]> {
    return client.fetch(
        `*[_type == "post"]{ slug }`
    );
}

export async function getRecentPosts(limit: number = 3): Promise<Post[]> {
    return client.fetch(
        `*[_type == "post"] | order(publishedAt desc) [0...$limit] { ${postFields} }`,
        { limit }
    );
}

export async function getFeaturedPosts(limit: number = 3): Promise<Post[]> {
    return client.fetch(
        `*[_type == "post" && "featured" in tags[]->slug.current] | order(publishedAt desc) [0...$limit] { ${postFields} }`,
        { limit }
    );
}

export async function getAllTags(): Promise<Tag[]> {
    return client.fetch(
        `*[_type == "tag"] | order(name asc) { _id, name, slug }`
    );
}
