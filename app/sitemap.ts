import { getAllPostSlugs } from "@/lib/sanity/queries";

export default async function sitemap() {
    const postSlugs = await getAllPostSlugs();

    const postEntries = postSlugs.map((s) => ({
        url: `https://www.asiuk.org/news/${s.slug.current}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.5,
    }));

    return [
        {
            url: 'https://www.asiuk.org',
            lastModified: new Date(),
            changeFrequency: 'yearly' as const,
            priority: 1,
        },
        {
            url: 'https://www.asiuk.org/about',
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: 'https://www.asiuk.org/convention',
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        },
        {
            url: 'https://www.asiuk.org/projects',
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.6,
        },
        {
            url: 'https://www.asiuk.org/news',
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.6,
        },
        {
            url: 'https://www.asiuk.org/membership',
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.5,
        },
        {
            url: 'https://www.asiuk.org/constitution',
            lastModified: new Date(),
            changeFrequency: 'yearly' as const,
            priority: 0.2,
        },
        ...postEntries,
    ];
}
