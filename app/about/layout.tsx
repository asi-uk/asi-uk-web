


export const metadata = {
    title: "ASI UK | About",
    description:
        "Learn more about the UK chapter of Adventist Laymen's Services and Industries",
    keywords: [
        "About ASI UK",
        "About ASI",
        "ASI",
        "ASI UK",
        "ASI-UK",
        "ASI history",
        "Madison College",
        "adventist",
        "adventist uk",
        "adventist laymen's services and industries",
        "self-supporting missions",
        "ministry",
        "ministries",
    ],
    openGraph: {
        url: "https://asiuk.org/about",
        type: "website",
        title: "ASI UK | About",
        description:
            "Learn more about the UK chapter of Adventist Laymen's Services and Industries",
        images: [
            {
                url: "https://www.asiuk.org/thumbnail.png",
                width: 1200,
                height: 630,
                alt: "ASIUK"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "ASI UK | About",
        description:
            "Learn more about the UK chapter of Adventist Laymen's Services and Industries",
        images: [
            {
                url: "https://www.asiuk.org/thumbnail.png",
                width: 1200,
                height: 630,
                alt: "ASIUK"
            }
        ]
    },
}

export default function AboutLayout({
                                        children,
                                    }: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
