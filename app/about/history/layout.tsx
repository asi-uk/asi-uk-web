export const metadata = {
    title: "ASI UK | Our History",
    description:
        "The history of ASI - from Madison College in 1904 to the formation of the first overseas ASI chapter in the UK in 1983",
    keywords: [
        "ASI history",
        "Madison College",
        "ASI UK history",
        "self-supporting missions",
        "adventist history",
        "ASI formation",
        "ASI UK",
        "ASI-UK",
        "adventist",
        "adventist uk",
        "adventist laymen's services and industries",
    ],
    openGraph: {
        url: "https://asiuk.org/about/history",
        type: "website",
        title: "ASI UK | Our History",
        description:
            "The history of ASI - from Madison College in 1904 to the formation of the first overseas ASI chapter in the UK in 1983",
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
        title: "ASI UK | Our History",
        description:
            "The history of ASI - from Madison College in 1904 to the formation of the first overseas ASI chapter in the UK in 1983",
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

export default function HistoryLayout({
                                          children,
                                      }: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
