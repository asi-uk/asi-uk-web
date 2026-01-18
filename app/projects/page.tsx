import Image from 'next/image'
import Link from 'next/link';
import CTARounded from "@/app/components/CTARounded";
import {FileDown, MapPin, Heart, Download, ExternalLink, ChevronDown, Activity, Brain, Radio, BookOpen, Users, Zap, Music, Stethoscope} from "lucide-react";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";

// Progress Bar Component
interface ProgressBarProps {
    current: number;
    total: number;
    className?: string;
}

function ProgressBar({ current, total, className = "" }: ProgressBarProps) {
    const percentage = Math.min((current / total) * 100, 100);
    
    return (
        <div className={`w-full ${className}`}>
            <div className="flex justify-between items-center mb-3">
                <span className="text-base font-semibold text-slate-700">Funding Progress</span>
                <span className="text-base font-medium text-slate-600">
                    £{current.toLocaleString()} of £{total.toLocaleString()}
                </span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-4 overflow-hidden">
                <div 
                    className="bg-gradient-to-r from-asi-blue to-asi-darkBlue h-full rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${percentage}%` }}
                />
            </div>
            <div className="flex justify-between items-center mt-2">
                <span className="text-sm text-slate-500">
                    {percentage.toFixed(1)}% Complete
                </span>
                <span className="text-sm text-slate-500">
                    £{(total - current).toLocaleString()} remaining
                </span>
            </div>
        </div>
    );
}

// Reusable Project Card Component
interface ProjectMedia {
    type: 'image' | 'video' | 'flyer';
    url: string;
    title?: string;
    thumbnail?: string;
}

interface ProjectProps {
    title: string;
    amount: number;
    location: string;
    shortDescription: string;
    longDescription?: string;
    organisation?: string;
    website?: string;
    media?: ProjectMedia[];
}

function ProjectCard({title, amount, location, shortDescription, longDescription, organisation, website, media}: ProjectProps) {
    const hasExpandableContent = longDescription || (media && media.length > 0);
    
    return (
        <div className="mb-8">
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
                                    <p className="text-slate-700 leading-relaxed text-sm md:text-base">{longDescription}</p>
                                </div>
                            )}
                            
                            {/* Project Media */}
                            {media && media.length > 0 && (
                                <div className="space-y-4">
                                    {/* <h4 className="text-lg font-semibold text-asi-blue">Project Media</h4> */}
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
                // Static card for projects without expandable content
                <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                    {/* Project Header */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-4">
                        <div className="flex-1">
                            <h3 className="text-xl font-bold text-asi-blue mb-1">{title}</h3>
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
    // Sample projects data - you can replace these with your actual approved projects
    const approvedProjects: ProjectProps[] = [
        {
            title: "Health & Wellness Outreach Initiative",
            organisation: "Discover Truth",
            website: "https://discovertruth.ie",
            amount: 20000,
            location: "Dublin, Ireland",
            shortDescription: "Transformative community programmes across Ireland, combining Adventist health principles with practical ministry support through Health Expos and ongoing wellness programmes.",
            longDescription: "This project will bring transformative community programmes across Ireland, combining Adventist health principles with practical ministry support. The project will launch with Health Expos in major cities including Dublin, Cork, Limerick, and Galway, offering free health screenings, natural remedies workshops, and plant-based cooking demonstrations. Following the expos, ongoing programmes will include weekly Cooking Clubs, Ministry of Healing reading groups, and Bible study groups that provide both physical wellness education and spiritual growth opportunities. The initiative will also feature three internationally renowned health ministry speakers who will conduct training workshops and public programmes to inspire participants and equip local volunteers. Through this comprehensive approach, the project aims to share Adventist health messages, promote holistic healing, and build meaningful connections between local communities and the Seventh-day Adventist Church across Ireland.",
            media: [
                {
                    type: 'image',
                    url: 'https://res.cloudinary.com/disrkguox/image/upload/w_500/v1750370602/Our_1st_Flyer_lwqqqd.jpg',
                },
                {
                    type: 'image',
                    url: 'https://res.cloudinary.com/disrkguox/image/upload/w_500/v1750370604/Lecture_in_Dublin_jg7kgi.jpg',
                },
                {
                    type: 'video',
                    url: 'https://www.youtube.com/embed/b8x_P3K19uk?si=wzzKSdCGctl2YY12',
                    title: 'About Discover Truth'
                },
                {
                    type: 'video',
                    url: 'https://www.youtube.com/embed/yp-zqlTESAw?si=AZvPVTgM_bzIGZ95',
                    title: 'Discover Truth Street Ministry'
                }
            ],
        },
        {
            title: "Depression and Anxiety Recovery Programme",
            organisation: "Balm of Gilead",
            amount: 7500,
            location: "Cork, Ireland",
            shortDescription: "Supports hosting Dr. Neil Nedley's Depression and Anxiety Recovery Programme in Ireland.",
            longDescription: "This organisation's experience hosting health seminars with Barbara O'Neill and implementing programmes like the Nedley Depression and Anxiety Recovery Programme has demonstrated that health ministry provides an excellent entry point into Ireland's majority Catholic community. Participants not only attended these health-focused events but many expressed genuine interest in deepening their relationship with God, confirming the belief that health serves as the ideal foundation for carrying the Gospel message throughout Ireland. This initiative will significantly strengthen ongoing community work whilst helping achieve the Irish Mission's long-held vision of establishing a native Irish Seventh-day Adventist church. Money given to this project will support in the success of hosting another Nedley Depression and Anxiety Recovery Programme. The programme will provide health, mental wellness, and spiritual growth in a comprehensive 10-day residential event that leads participants to Christ whilst improving their overall wellbeing.",
            media: [
                {
                    type: 'image',
                    url: 'https://res.cloudinary.com/disrkguox/image/upload/w_500/v1750367623/IMG-20240629-WA0030_wew2y3.jpg',
                },
                {
                    type: 'image',
                    url: 'https://res.cloudinary.com/disrkguox/image/upload/w_500/v1750367622/IMG-20240620-WA0078_ncsshz.jpg',
                },
                {
                    type: 'image',
                    url: 'https://res.cloudinary.com/disrkguox/image/upload/w_500/v1750367621/IMG-20240623-WA0035_b20znl.jpg',
                },
                {
                    type: 'image',
                    url: 'https://res.cloudinary.com/disrkguox/image/upload/w_500/v1750367623/IMG-20240629-WA0029_tlfcys.jpg',
                }
            ],
        },
        {
            title: "HopeFM Radio Relaunch",
            organisation: "HopeFM Ministries",
            website: "https://hopefm.org.uk/",
            amount: 7000,
            location: "Birmingham, England",
            shortDescription: "HopeFM seeks to relaunch and expand its Christian radio ministry through conference-wide promotion, radio roadshows, DAB expansion to major cities, and website development to reach more listeners.",
            longDescription: "With 87% of UK adults tuning into radio weekly and only 26 registered Christian stations nationwide, HopeFM represents a significant opportunity to reach audiences the church might never otherwise encounter. HopeFM, the broadcasting arm of Hope FM Ministries Limited, has operated as a volunteer-led Christian radio station since 2022, broadcasting via internet and DAB to areas including South and North Birmingham with a potential reach of 1.2 million listeners. Following management changes that reduced services, dedicated presenters maintained the ministry at a minimum level whilst funding operations independently. This project aims to relaunch and expand HopeFM through comprehensive conference-wide promotion encouraging member participation in presenting, producing, and technical roles. The initiative includes radio roadshows that will broadcast from local North England Conference churches, promoting media evangelism whilst giving congregations airtime exposure. DAB expansion plans involve gradually increasing presence in major NEC cities, starting with one additional service to help regain the previously achieved potential reach of 6 million listeners. The project also includes a complete website overhaul and promotional materials for events, conferences, and roadshows to maximise the station's evangelistic impact and community engagement.",
            media: [
                {
                    type: 'video',
                    url: 'https://res.cloudinary.com/disrkguox/video/upload/so_7/v1750408686/HopeFM_Relaunch_and_Expand_Project_2025_pdqlqt.mp4',
                },
            ],
        },
        {
            title: "West Midlands Literature Outreach",
            organisation: "Birmingham Area 5 & Streams of Light",
            amount: 2500,
            location: "Birmingham, England",
            shortDescription: "Birmingham Area 5 partners with Streams of Light International to distribute 35,000 copies of The Great Controversy and health magazines, aiming to generate 700 new contact requests and engage 1,500 members in practical outreach.",
            longDescription: "Recognising the world's extraordinary challenges including crime, natural disasters, mental health crises, and poverty, Birmingham Area 5 (19 churches) is partnering with Streams of Light International to bring hope through a comprehensive literature distribution initiative. The project aims to distribute 35,000 interactive copies of The Great Controversy alongside health magazines, with 25,000 copies distributed initially and an additional 10,000 from July 2025 onwards throughout Area 5 churches and the West Midlands. The initiative expects to engage 1,500 members across Area 5 and generate 700 new contact requests for Bible studies, prayer, and visitation from the public. A project-specific website will serve as a central hub where community members can request online or in-person Bible studies, prayer, care group information, and access free literature, courses, and Christian media. The outreach will be amplified through extensive advertising including digital billboards in Birmingham city centre, social media campaigns, local radio on UCB and Premier, public transport advertising, and newspaper adverts in regional publications. This comprehensive approach supports the global church's Total Member Involvement mission, with all community interests being directed to local churches for continued spiritual care and support through digital evangelism tools that ensure effective follow-up and local church engagement.",
            media: [
                {
                    type: 'image',
                    url: 'https://res.cloudinary.com/disrkguox/image/upload/w_500/v1750368724/IMG-20250616-WA0004_xsd38b.jpg',
                },
                {
                    type: 'image',
                    url: 'https://res.cloudinary.com/disrkguox/image/upload/w_500/v1750368725/IMG-20250616-WA0003_nrhg9i.jpg',
                },
                {
                    type: 'video',
                    url: 'https://res.cloudinary.com/disrkguox/video/upload/v1750368735/VID-20250616-WA0003_oyxbfz.mp4',
                },
                {
                    type: 'video',
                    url: 'https://res.cloudinary.com/disrkguox/video/upload/v1750368735/VID-20250616-WA0001_ggbum9.mp4',
                }
            ],
        },
        {
            title: "Envision Conference and Literature Distribution",
            organisation: "Envision Young Adult Conference",
            website: "https://www.instagram.com/envision.conference/",
            amount: 1300,
            location: "Norfolk, England",
            shortDescription: "The Norfolk Community Outreach and Envision Conference 2025 targets young adults through distributing 5,000 health and evangelistic tracts and organising a conference to equip participants with spiritual success tools for ministry, relationships, and careers.",
            longDescription: "The Norfolk Community Outreach and Envision Conference 2025 seeks to transform the lives of young adults (23+) within the community by addressing their strategic needs and helping them excel in both local church involvement and personal development, whilst also reaching non-church professionals. In a world filled with competing voices and distractions, this initiative aims to empower young adults through God's Word, helping them find direction and purpose in their ministry, relationships, and careers. The project involves distributing 5,000 church-approved tracts focused on health and evangelistic messages, alongside organising a significant conference designed to bring together young adults seeking meaning and purpose. Participants will connect not only with each other but most importantly with God, receiving the power to envision their lives with hope and positivity, knowing that God is real, answers prayers, and awakens something transformative within them. The ultimate vision is for attendees to become better witnesses to the world outside, equipped with spiritual success tools for living fulfilling lives. Funding will support speaker and musician travel, accommodation, and honoraria, as well as sound equipment rental and volunteer accommodation subsidies, ensuring the event can effectively reach and impact this crucial demographic.",
            media: [
                {
                    type: 'image',
                    url: 'https://res.cloudinary.com/disrkguox/image/upload/w_500/v1750369379/e9018ec4-a6b3-4e53-887a-143dc9cdd819_yiifyf.jpg',
                },
                {
                    type: 'image',
                    url: 'https://res.cloudinary.com/disrkguox/image/upload/w_500/v1750369377/eae9238f-4acb-4413-b232-8e22b6b26fc0_vfldj3.jpg',
                },
            ],
        },
        {
            title: "Badminton Outreach Project",
            organisation: "ACE Association",
            amount: 1250,
            location: "Manchester, England",
            shortDescription: "This badminton outreach project has already attracted diverse participants including Muslims, Atheists, and Hindus, creating networking opportunities to share God's word through sport. This project aims to continue this effort and culminate in full-day community events.",
            longDescription: "Over the past four years, Manchester's badminton initiative has gained significant traction within the local community and beyond, successfully welcoming participants from diverse religious and cultural backgrounds including Adventists, Muslims, Atheists, and Hindus. This sports programme has proven to be an excellent networking platform for attracting individuals and sharing God's word in a natural, welcoming environment. Manchester's position as a major hub for domestic and international students and professionals provides exceptional outreach opportunities, with numerous hospitals, residential areas, shops, and universities nearby facilitating effective promotion through flyers and word-of-mouth marketing. Beyond encouraging healthy participation and physical fitness, the regular badminton sessions build towards organised full-day community events where all participants come together, creating valuable networking opportunities to reach out and share God's word. These gatherings allow attendees to witness God's character demonstrated through participants' actions and attitudes, fostering a spirit of faith, hope, and unity amongst people from vastly different backgrounds. The programme effectively combines physical wellness with spiritual outreach, using sport as a bridge to build meaningful relationships and share the Adventist message with Manchester's diverse population.",
            media: [
                {
                    type: 'video',
                    url: 'https://res.cloudinary.com/disrkguox/video/upload/v1750369500/ACE_Association_xxscts.mp4',
                },
            ],
        },
        {
            title: "Elizabeth Orphan Support Centre",
            organisation: "Curative Music Foundation",
            amount: 1000,
            location: "Kenya",
            shortDescription: "This mission uses gospel music as therapy and distributes Adventist children's books to orphan families and churches in Kenya's slum areas, ensuring disadvantaged children hear God's word and improve their lives.",
            media: [
                {
                    type: 'image',
                    url: 'https://res.cloudinary.com/disrkguox/image/upload/w_500/v1750369742/IMG_4177_evlpbv.jpg',
                },
                {
                    type: 'image',
                    url: 'https://res.cloudinary.com/disrkguox/image/upload/w_500/v1750369739/IMG_4167_hhvxjj.jpg',
                },
                {
                    type: 'image',
                    url: 'https://res.cloudinary.com/disrkguox/image/upload/w_500/v1750369740/IMG_4181_rvqnw7.jpg',
                },
                {
                    type: 'image',
                    url: 'https://res.cloudinary.com/disrkguox/image/upload/w_500/v1750369741/IMG_4190_bkfbnf.jpg',
                },
            ],
        },
        {
            title: "Multimedia Health Platform",
            organisation: "Vigour",
            amount: 180,
            location: "Staffordshire, England",
            shortDescription: "\"Vigour\" creates sharing cards and \"Lifestyle Prescription\" leaflets for GP surgeries and pharmacies, linking via QR codes to Adventist health content and personal coaching including Bible studies, targeting the under-reached indigenous white British population.",
            longDescription: "Recognising that the UK represents a mission field where indigenous white British people remain largely unreached by Adventist ministry (with a ratio of 1 Adventist per 11,000 people, similar to countries in the 10/40 window like Pakistan and Mali), \"Vigour\" launches an innovative health evangelism initiative. The project leverages the growing UK wellness market (valued at over £150 billion) and people's increasing desire to seek health solutions beyond the NHS, using the health message as an entering wedge to reach this underserved population. The initiative creates a suite of literature products including sharing cards and \"Lifestyle Prescription\" leaflets designed for distribution in GP surgeries and community pharmacies nationwide. These materials feature QR codes and web links connecting to an online platform that provides access to the best Adventist health content presented as a social media-style stream, with a unified call-to-action encouraging users to contact for personal holistic health coaching that includes Bible studies. This represents the first phase of a 10-year vision to establish a network of health ministries across the UK, including clinics, health retreats, and restaurants. By demonstrating Christ's love through health service and sharing inspired understanding of health promotion, maintenance, and recovery, the project aims to draw people to want to know Him more, following Christ's method of serving people's needs whilst sharing the complete system of truth found in Adventism.",
            media: [
                {
                    type: 'flyer',
                    url: 'https://res.cloudinary.com/disrkguox/image/upload/w_500/v1750369915/A_mission-focused_community_of_Adventists_in_healthcare._ljofue.png',
                    title: 'Ministry of Healing Reading Group'
                },
                {
                    type: 'flyer',
                    url: 'https://res.cloudinary.com/disrkguox/image/upload/w_500/v1750369923/withvigour_promo_asi_bgxch3.png',
                    title: 'Lifestyle Prescription'
                },
                {
                    type: 'flyer',
                    url: 'https://res.cloudinary.com/disrkguox/image/upload/w_500/v1750369922/mv_xframe_pnnnil.png',
                    title: 'Outpost Anatomy'
                },
                
                
            ],
        },
    ];

    // Funding progress data - you can update these values as funding is received
    const totalGoal = approvedProjects.reduce((sum, project) => sum + project.amount, 0);
    const fundingReceived = 27720; // Example: £15,000 received so far

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
            <div className="max-w-5xl mx-auto md:px-4 py-8">
                {/* 2026 Application Section - Prominent */}
                <section className="mb-12 px-4 md:px-0">
                    <div className="bg-gradient-to-br from-asi-blue to-asi-darkBlue rounded-2xl shadow-lg overflow-hidden">
                        <div className="p-6 md:p-8 text-white">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <h2 className="text-2xl md:text-3xl font-bold">2026 Project Funding Cycle</h2>
                                        <span className="bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">Applications Open</span>
                                    </div>
                                    <p className="text-blue-100 text-sm md:text-lg leading-relaxed">Get the resources you need to bring your evangelistic vision to life</p>
                                </div>
                            </div>

                            {/* Deadline Banner */}
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-6 border border-white/20">
                                <p className="text-white text-center font-medium">
                                    Application Deadline: <span className="font-bold">Thursday 23rd April 2026</span>
                                </p>
                            </div>

                            {/* Application Forms */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                <CTARounded
                                    heading={"Main Application Form"}
                                    href={"https://c1crerc0h1fs4ljz.public.blob.vercel-storage.com/asi-uk-project-funding-application-form.docx"}
                                    containerClass={"bg-white hover:bg-slate-100 transition-colors p-4 rounded-lg"}
                                    headingClass={"text-sm font-medium text-asi-blue"}
                                    Icon={FileDown}
                                />
                                <CTARounded
                                    heading={"Budget Form"}
                                    href={"https://c1crerc0h1fs4ljz.public.blob.vercel-storage.com/asi-uk-project-funding-budget-form.xlsx"}
                                    containerClass={"bg-white hover:bg-slate-100 transition-colors p-4 rounded-lg"}
                                    headingClass={"text-sm font-medium text-asi-blue"}
                                    Icon={FileDown}
                                />
                            </div>

                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                                <p className="text-white text-sm md:text-base text-center">
                                    Submit completed applications to{' '}
                                    <a href="mailto:evangelism@asiuk.org" className="font-semibold underline hover:text-blue-200">
                                        evangelism@asiuk.org
                                    </a>
                                </p>
                            </div>
                        </div>

                        {/* Application Guidelines */}
                        <div className="bg-white p-6 md:p-8">
                            <h3 className="text-xl font-semibold text-asi-blue mb-6">Application Guidelines</h3>

                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-base font-medium text-asi-blue mb-3">Project Criteria</h4>
                                    <ol className="list-decimal ml-6 space-y-2 text-slate-700 text-sm md:text-base">
                                        <li>The project must be primarily evangelistic in nature.</li>
                                        <li>The applicant must supply a budget for the project.</li>
                                        <li>Applications must be submitted in English on the official ASI Application form.</li>
                                    </ol>
                                </div>

                                <div>
                                    <h4 className="text-base font-medium text-asi-blue mb-3">Application Criteria</h4>
                                    <ol className="list-decimal ml-6 space-y-2 text-slate-700 text-sm md:text-base" start={4}>
                                        <li>Applications are only accepted from ASI UK members.</li>
                                        <li>The Applicant must be in good and regular standing with the Seventh-day Adventist Church.</li>
                                        <li>Applications are only accepted from organisations and groups that work not for profit or from individuals applying for funding to join evangelistic campaigns.</li>
                                        <li>ASI UK funding must not be available for profit-making purposes.</li>
                                        <li>Seventh-day Adventist entities will be considered for funding for special evangelistic projects, but not for regular church budget items unless ASI UK is directly involved with the project.</li>
                                    </ol>
                                </div>

                                <div>
                                    <h4 className="text-base font-medium text-asi-blue mb-3">Funding</h4>
                                    <ol className="list-decimal ml-6 space-y-2 text-slate-700 text-sm md:text-base" start={9}>
                                        <li>Funding will be limited to not more than 50% of the total project cost.</li>
                                        <li>In most cases funding will be released in interim payments upon receipt of progress reports.</li>
                                    </ol>
                                </div>

                                <div>
                                    <h4 className="text-base font-medium text-asi-blue mb-3">Recommended Additional Criteria</h4>
                                    <p className="text-slate-600 mb-3 text-sm md:text-base">All applications will be considered. Below is a list of recommended criteria (not compulsory), which will give the application a higher chance of approval.</p>
                                    <ul className="list-disc ml-6 space-y-2 text-slate-700 text-sm md:text-base">
                                        <li>If an organization is applying for funding, its Board of Directors should be comprised of less than 50% family members.</li>
                                        <li>If the Applicant invested some of their own funds in their project or at least invested &quot;service time&quot; in their project, that will show that the Applicant is committed to their own project.</li>
                                        <li>If the project has already started that may show that the project is more feasible and achievable.</li>
                                        <li>Priority will be given to projects run in the territory of the UK.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="text-center mt-8">
                                <CTARounded
                                    heading={"Download Complete Application Guidelines"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href={"https://c1crerc0h1fs4ljz.public.blob.vercel-storage.com/asi-uk-project-funding-guidelines.pdf"}
                                    containerClass={"inline-flex bg-asi-blue hover:bg-asi-darkBlue text-white py-3 px-6 rounded-lg transition-colors"}
                                    headingClass={"text-base font-medium"}
                                    Icon={FileDown}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Divider */}
                <div className="relative mb-8 md:mb-12">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-slate-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="bg-slate-100 px-4 text-slate-500 font-medium">2025 Funded Projects</span>
                    </div>
                </div>

                {/* 2025 Projects Section - Collapsible */}
                <section className="mb-16 px-4 md:px-0">
                    <Collapsible className="w-full">
                        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                            <CollapsibleTrigger className="group w-full">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between p-6 md:p-8 bg-slate-50 border-b border-slate-200 hover:bg-slate-100 transition-colors">
                                    <div className="text-left">
                                        <h2 className="text-xl md:text-2xl font-bold text-asi-blue mb-1">2025 Approved Projects</h2>
                                        <p className="text-slate-600 text-sm md:text-base">View projects funded in the 2025 cycle</p>
                                    </div>
                                    <div className="flex items-center gap-2 mt-4 md:mt-0 text-asi-blue font-medium">
                                        <span className="text-sm">View Projects</span>
                                        <ChevronDown className="h-5 w-5 transition-transform group-data-[state=open]:rotate-180" />
                                    </div>
                                </div>
                            </CollapsibleTrigger>

                            <CollapsibleContent>
                                <div className="p-4 md:p-8">
                                    {/* Info Banner */}
                                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-8">
                                        <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4">
                                            <p className="text-blue-800 text-sm md:text-base text-center">
                                                Fundraising for 2025 projects is still ongoing and funds are being disbursed to approved projects.
                                            </p>
                                            <Link
                                                href="/donate"
                                                className="inline-flex items-center gap-2 bg-asi-blue hover:bg-asi-darkBlue text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors whitespace-nowrap"
                                            >
                                                <Heart className="h-4 w-4" />
                                                Donate
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Funding Progress */}
                                    <div className="mb-8">
                                        <ProgressBar
                                            current={fundingReceived}
                                            total={totalGoal}
                                            className="w-full"
                                        />
                                    </div>

                                    {/* Projects List */}
                                    <div className="space-y-4 md:space-y-8">
                                        {approvedProjects.length > 0 ? (
                                            approvedProjects.map((project, index) => (
                                                <ProjectCard key={index} {...project} />
                                            ))
                                        ) : (
                                            <div className="text-center py-12 bg-slate-50 rounded-xl">
                                                <Heart className="h-12 w-12 text-slate-400 mx-auto mb-4"/>
                                                <h3 className="text-lg font-medium text-slate-600 mb-2">Projects Coming Soon</h3>
                                                <p className="text-slate-500">2025 approved projects will be displayed here after the convention.</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </CollapsibleContent>
                        </div>
                    </Collapsible>
                </section>
            </div>
        </div>
    );
}