import ProjectsTabs from "@/app/projects/components/ProjectsTabs";
import { projectCycles } from "@/data/projects";

export const metadata = {
    title: "ASI UK | Project Funding",
    description:
        "Apply for ASI UK project funding for your evangelistic initiatives. 2026 applications now open - deadline Thursday 23rd April 2026.",
    keywords: [
        "ASI UK Projects",
        "Evangelism",
        "ASI Evangelism",
        "ASI UK Evangelism",
        "ASI Projects",
        "ASI Ministries",
        "ASI",
        "ASI UK",
        "ASI-UK",
        "adventist projects",
        "adventist uk",
        "adventist laymen's services and industries",
        "ministry",
        "ministries",
        "2026",
        "project application",
        "apply for funding",
        "evangelistic funding",
    ],
    openGraph: {
        url: "https://asiuk.org/projects",
        type: "website",
        title: "ASI UK | Project Funding - 2026 Applications Open",
        description:
            "Apply for ASI UK project funding for your evangelistic initiatives. 2026 applications now open - deadline Thursday 23rd April 2026.",
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
        title: "ASI UK | Project Funding - 2026 Applications Open",
        description:
            "Apply for ASI UK project funding for your evangelistic initiatives. 2026 applications now open - deadline Thursday 23rd April 2026.",
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

export default function Projects() {
    return (
        <div className="relative w-full overflow-x-hidden">
            {/* Header Section */}
            <div className="border-b border-slate-200">
                <div className="max-w-5xl mx-auto px-4 py-12 md:py-10">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-asi-blue mb-4">
                            Project Funding
                        </h1>
                        <p className="text-sm md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        Supporting evangelistic initiatives across the UK through strategic funding and partnerships. Apply for funding to bring your ministry vision to life.
                        </p>
                    </div>
                </div>
            </div>

            {/* Content Container */}
            <div className="max-w-5xl mx-auto px-4 py-8">
                <ProjectsTabs cycles={projectCycles} />
            </div>
        </div>
    );
}
