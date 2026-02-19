import Image from 'next/image';
import { ChevronDown } from "lucide-react";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";
import YouTubeEmbed from "@/app/components/YouTubeEmbed";
import { CONVENTION_2025 } from '@/data/convention';

export default function MarketingMaterials() {
    const { marketingMaterials, promoVideos } = CONVENTION_2025;

    return (
        <div className="my-8 border-t border-b border-slate-200 py-6">
            <Collapsible className="w-full">
                <div className="flex items-center justify-between">
                    <h3 className="text-xl font-medium text-asi-blue">Additional Resources</h3>
                    <CollapsibleTrigger className="group flex items-center space-x-1 rounded-md px-3 py-2 text-sm font-medium text-asi-blue hover:bg-slate-100 transition-colors">
                        <span>View Marketing Materials</span>
                        <ChevronDown className="h-4 w-4 transition-transform group-data-[state=open]:rotate-180" />
                    </CollapsibleTrigger>
                </div>

                <CollapsibleContent className="mt-6">
                    <div className="space-y-6">
                        {/* Poster Preview */}
                        <div className="border rounded-lg p-4 bg-white shadow-sm">
                            <h4 className="text-lg font-medium text-asi-blue mb-3">Convention Poster</h4>
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="w-full md:w-1/3 flex justify-center">
                                    <div className="relative aspect-[3/4] w-full max-w-[200px] shadow-md rounded-md overflow-hidden">
                                        <Image
                                            src={marketingMaterials.poster.previewUrl}
                                            alt="ASI UK Convention Poster Preview"
                                            width={500}
                                            height={650}
                                            className="object-cover"
                                        />
                                    </div>
                                </div>

                                <div className="w-full md:w-2/3 flex flex-col">
                                    <p className="text-sm text-slate-600 mb-4">
                                        Download our official convention poster to display at your church, workplace, or community center.
                                    </p>
                                    <div className="flex flex-wrap gap-3 mt-auto">
                                        <a
                                            href={marketingMaterials.poster.downloadPdfUrl}
                                            target="_blank"
                                            className="bg-asi-blue/10 hover:bg-asi-blue/20 text-asi-blue py-2 px-4 rounded flex items-center gap-2 transition-colors"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4"
                                                 fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                      strokeWidth={2}
                                                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                                            </svg>
                                            <span>Download Main Poster PDF</span>
                                        </a>
                                        <a
                                            href={marketingMaterials.poster.socialMediaUrl}
                                            target="_blank"
                                            className="bg-asi-blue/10 hover:bg-asi-blue/20 text-asi-blue py-2 px-4 rounded flex items-center gap-2 transition-colors"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4"
                                                 fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                      strokeWidth={2}
                                                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                                            </svg>
                                            <span>Download Social Media Post JPG</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* YouTube Videos */}
                        <div className="border rounded-lg p-4 bg-white shadow-sm">
                            <h4 className="text-lg font-medium text-asi-blue mb-3">Promotional Video</h4>
                            <p className="text-sm text-slate-600 mb-4">
                                Watch and share our promotional videos for the ASI UK 2025 Convention.
                            </p>

                            {promoVideos.map((video, index) => (
                                <YouTubeEmbed
                                    key={index}
                                    embedUrl={video.embedUrl}
                                    watchUrl={video.watchUrl}
                                    title={video.title}
                                    className={index > 0 ? "mt-10" : ""}
                                />
                            ))}
                        </div>

                        {/* Bulletin Announcement */}
                        <div className="border rounded-lg p-4 bg-white shadow-sm">
                            <h4 className="text-lg font-medium text-asi-blue mb-2">Bulletin Announcement</h4>
                            <p className="text-sm text-slate-600 mb-2">Copy and paste this announcement into your church bulletin:</p>
                            <div className="bg-slate-50 p-3 rounded text-sm border border-slate-200">
                                <p>{marketingMaterials.bulletinAnnouncement}</p>
                            </div>
                        </div>
                    </div>
                </CollapsibleContent>
            </Collapsible>
        </div>
    );
}
