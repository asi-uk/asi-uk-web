import Image from 'next/image';
import { MapPin, Heart, Download, ExternalLink, CheckCircle2, Clock } from "lucide-react";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";
import type { Project } from "@/data/projects";

// Render lightweight inline **bold** markers and [label](url) links within description text.
function renderInline(text: string) {
    return text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g).map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={i} className="font-semibold text-slate-800">{part.slice(2, -2)}</strong>;
        }
        const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (link) {
            return (
                <a key={i} href={link[2]} target="_blank" rel="noopener noreferrer" className="text-asi-blue underline hover:text-asi-darkBlue transition">
                    {link[1]}
                </a>
            );
        }
        return <span key={i}>{part}</span>;
    });
}

function LongDescription({ content }: { content: NonNullable<Project['longDescription']> }) {
    if (typeof content === 'string') {
        return <p className="text-slate-700 leading-relaxed text-sm md:text-base">{content}</p>;
    }
    return (
        <div className="space-y-4">
            {content.map((block, i) => {
                if (block.type === 'heading') {
                    return <h4 key={i} className="text-base md:text-lg font-semibold text-asi-blue">{block.text}</h4>;
                }
                if (block.type === 'list') {
                    return (
                        <ul key={i} className="list-disc pl-5 space-y-2 text-slate-700 leading-relaxed text-sm md:text-base">
                            {block.items.map((item, j) => <li key={j}>{renderInline(item)}</li>)}
                        </ul>
                    );
                }
                return <p key={i} className="text-slate-700 leading-relaxed text-sm md:text-base">{renderInline(block.text)}</p>;
            })}
        </div>
    );
}

function formatDisbursementDate(date: string): string {
    const [day, month, year] = date.split('.');
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${parseInt(day)} ${months[parseInt(month) - 1]} 20${year}`;
}

function InstalmentBadge({ label, amount, paidDate }: { label?: string; amount: number; paidDate?: string }) {
    const prefix = label ? `${label}: ` : '';
    if (paidDate) {
        return (
            <span className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 text-xs font-medium px-2.5 py-1 rounded-full border border-green-200">
                <CheckCircle2 className="h-3.5 w-3.5" />
                {prefix}£{amount.toLocaleString()} paid {formatDisbursementDate(paidDate)}
            </span>
        );
    }
    return (
        <span className="inline-flex items-center gap-1.5 bg-amber-50 text-amber-700 text-xs font-medium px-2.5 py-1 rounded-full border border-amber-200">
            <Clock className="h-3.5 w-3.5" />
            {prefix}£{amount.toLocaleString()} pending
        </span>
    );
}

function DisbursementBadge({ disbursement }: { disbursement: NonNullable<Project['disbursement']> }) {
    const hasSecond = disbursement.secondInstalment != null;
    return (
        <div className="flex flex-wrap gap-1.5">
            <InstalmentBadge
                label={hasSecond ? "1st" : undefined}
                amount={disbursement.firstInstalment}
                paidDate={disbursement.firstInstalmentPaid}
            />
            {hasSecond && (
                <InstalmentBadge
                    label="2nd"
                    amount={disbursement.secondInstalment!}
                    paidDate={disbursement.secondInstalmentPaid}
                />
            )}
            {disbursement.complete && (
                <span className="inline-flex items-center gap-1.5 bg-slate-50 text-slate-600 text-xs font-medium px-2.5 py-1 rounded-full border border-slate-200">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    No further funding required
                </span>
            )}
        </div>
    );
}

export default function ProjectCard({ title, amount, location, shortDescription, longDescription, organisation, website, media, cancelled, disbursement }: Project) {
    const hasExpandableContent = !cancelled && (longDescription || (media && media.length > 0));

    return (
        <div className={`mb-8${cancelled ? ' opacity-60' : ''}`}>
            {hasExpandableContent ? (
                <Collapsible className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                    <CollapsibleTrigger className="group w-full text-left hover:bg-slate-50 transition-colors">
                        <div className="p-6">
                            {/* Project Header */}
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-4">
                                <div className="flex-1">
                                    <h3 className="text-lg md:text-xl font-bold text-asi-blue group-hover:text-asi-darkBlue transition-colors mb-1">{title}</h3>
                                    {(organisation || location) && (
                                        <div className="flex flex-col md:flex-row items-start md:items-center gap-2 mb-2">
                                            {organisation && website ? (
                                                <a href={website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 bg-slate-100 text-asi-blue text-xs font-medium px-3 py-1 rounded-full hover:bg-slate-200 transition">
                                                    {organisation}
                                                    <ExternalLink className="h-3 w-3" />
                                                </a>
                                            ) : organisation ? (
                                                <span className="inline-flex items-center gap-1 bg-slate-100 text-asi-blue text-xs font-medium px-3 py-1 rounded-full">{organisation}</span>
                                            ) : null}
                                            {location && (
                                                <span className="flex items-center text-xs text-slate-400">
                                                    <MapPin className="h-3 w-3 mr-1" />
                                                    {location}
                                                </span>
                                            )}
                                        </div>
                                    )}
                                </div>
                                <div className="md:text-right md:flex-shrink-0">
                                    <div className="flex items-center gap-2 md:justify-end">
                                        <Heart className="h-5 w-5 text-red-500"/>
                                        <span className="text-xl md:text-2xl font-bold text-asi-blue">£{amount.toLocaleString()}</span>
                                    </div>
                                    <p className="text-sm text-slate-500 mt-1">ASI UK Support</p>
                                    {disbursement && (
                                        <div className="mt-2">
                                            <DisbursementBadge disbursement={disbursement} />
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Project Description */}
                            <div>
                                <p className="text-slate-700 leading-relaxed text-sm md:text-base">{shortDescription}</p>
                                <div className="mt-2 text-xs text-slate-500 flex items-center gap-2">
                                    <span>Click to expand</span>
                                    {longDescription && <span>• Details</span>}
                                    {media && media.length > 0 && <span>• Media ({media.length})</span>}
                                </div>
                            </div>
                        </div>
                    </CollapsibleTrigger>

                    <CollapsibleContent>
                        <div className="px-6 pb-6 pt-0 space-y-6 border-t border-slate-100">
                            {longDescription && (
                                <div className="pt-4">
                                    <LongDescription content={longDescription} />
                                </div>
                            )}

                            {/* Project Media */}
                            {media && media.length > 0 && (
                                <div className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {media.map((item, index) => (
                                            <div key={index} className="border border-slate-200 rounded-lg overflow-hidden">
                                                {item.type === 'image' && (
                                                    <div className="aspect-video relative">
                                                        <Image
                                                            src={item.url}
                                                            alt={item.title || `${title} image ${index + 1}`}
                                                            fill
                                                            className="object-cover"
                                                        />
                                                    </div>
                                                )}

                                                {item.type === 'video' && (
                                                    <div className="aspect-video">
                                                        {item.url.includes('youtube.com') ? (
                                                            <iframe
                                                                src={item.url}
                                                                title={item.title || `${title} video ${index + 1}`}
                                                                className="w-full h-full"
                                                                style={{ border: 'none' }}
                                                                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                                allowFullScreen
                                                            />
                                                        ) : (
                                                            <video
                                                                src={item.url}
                                                                title={item.title || `${title} video ${index + 1}`}
                                                                className="w-full h-full object-cover"
                                                                controls
                                                                preload="metadata"
                                                                playsInline
                                                            />
                                                        )}
                                                    </div>
                                                )}

                                                {item.type === 'flyer' && (
                                                    <div className="p-4 bg-slate-50">
                                                        <a
                                                            href={item.url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="flex items-center gap-3 text-asi-blue hover:text-asi-darkBlue transition-colors"
                                                        >
                                                            <Download className="h-5 w-5"/>
                                                            <span
                                                                className="font-medium">{item.title || `Download Flyer ${index + 1}`}</span>
                                                            <ExternalLink className="h-4 w-4"/>
                                                        </a>
                                                    </div>
                                                )}

                                                {item.title && item.type !== 'flyer' && (
                                                    <div className="p-3 bg-slate-50">
                                                        <p className="text-sm font-medium text-slate-700">{item.title}</p>
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </CollapsibleContent>
                </Collapsible>
            ) : (
                // Static card for projects without expandable content or cancelled projects
                <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                    {/* Project Header */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-4">
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-1 flex-wrap">
                                <h3 className={`text-xl font-bold${cancelled ? ' line-through text-slate-400' : ' text-asi-blue'}`}>{title}</h3>
                                {cancelled && (
                                    <span className="inline-flex items-center bg-red-50 text-red-700 text-xs font-medium px-2.5 py-1 rounded-full border border-red-200">
                                        Project Cancelled
                                    </span>
                                )}
                            </div>
                            {(organisation || location) && (
                                <div className="flex items-center gap-2 mb-2">
                                    {organisation && website ? (
                                        <a href={website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 bg-slate-100 text-asi-blue text-xs font-medium px-3 py-1 rounded-full hover:bg-slate-200 transition">
                                            {organisation}
                                            <ExternalLink className="h-3 w-3" />
                                        </a>
                                    ) : organisation ? (
                                        <span className="inline-flex items-center gap-1 bg-slate-100 text-asi-blue text-xs font-medium px-3 py-1 rounded-full">{organisation}</span>
                                    ) : null}
                                    {location && (
                                        <span className="flex items-center text-xs text-slate-400">
                                            <MapPin className="h-3 w-3 mr-1" />
                                            {location}
                                        </span>
                                    )}
                                </div>
                            )}
                        </div>
                        <div className="md:text-right md:flex-shrink-0">
                            <div className="flex items-center gap-2 md:justify-end">
                                <Heart className="h-5 w-5 text-red-500"/>
                                <span className="text-xl md:text-2xl font-bold text-asi-blue">£{amount.toLocaleString()}</span>
                            </div>
                            <p className="text-sm text-slate-500 mt-1">ASI UK Support</p>
                            {!cancelled && disbursement && (
                                <div className="mt-2">
                                    <DisbursementBadge disbursement={disbursement} />
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Project Description */}
                    <div>
                        <p className="text-slate-700 leading-relaxed">{shortDescription}</p>
                    </div>
                </div>
            )}
        </div>
    );
}
