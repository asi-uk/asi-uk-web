export interface ProjectMedia {
    type: 'image' | 'video' | 'flyer';
    url: string;
    title?: string;
    thumbnail?: string;
}

export interface Project {
    title: string;
    amount: number;
    location: string;
    shortDescription: string;
    longDescription?: string;
    organisation?: string;
    website?: string;
    media?: ProjectMedia[];
    cancelled?: boolean;
    disbursement?: {
        firstInstalment: number;
        firstInstalmentPaid?: string;
    };
}

export const approvedProjects2025: Project[] = [
    {
        title: "Health & Wellness Outreach Initiative",
        organisation: "Discover Truth",
        website: "https://discovertruth.ie",
        amount: 20000,
        location: "Dublin, Ireland",
        disbursement: { firstInstalment: 6800, firstInstalmentPaid: "02.02.26" },
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
        disbursement: { firstInstalment: 2550 },
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
        disbursement: { firstInstalment: 2380, firstInstalmentPaid: "02.02.26" },
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
        disbursement: { firstInstalment: 850, firstInstalmentPaid: "02.02.26" },
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
        disbursement: { firstInstalment: 442, firstInstalmentPaid: "29.01.26" },
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
        disbursement: { firstInstalment: 425, firstInstalmentPaid: "29.01.26" },
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
        disbursement: { firstInstalment: 500, firstInstalmentPaid: "05.02.26" },
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
        cancelled: true,
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

export const FUNDING_RECEIVED_2025 = 13941.95;
export const FUNDING_PLEDGED_2025 = 27894;

export type CycleStatus = 'applications-open' | 'funding-in-progress' | 'completed';

export interface ProjectCycle {
    year: number;
    status: CycleStatus;
    statusLabel: string;
    projects: Project[];
    fundingReceived?: number;
    fundingPledged?: number;
    applicationDeadline?: string;
    applicationFormUrl?: string;
    budgetFormUrl?: string;
    guidelinesUrl?: string;
    submitEmail?: string;
    infoBanner?: string;
    showDonateLink?: boolean;
}

export const projectCycles: ProjectCycle[] = [
    {
        year: 2026,
        status: 'applications-open',
        statusLabel: 'Applications Open',
        projects: [],
        applicationDeadline: 'Thursday 23rd April 2026',
        applicationFormUrl: 'https://c1crerc0h1fs4ljz.public.blob.vercel-storage.com/asi-uk-project-funding-application-form.docx',
        budgetFormUrl: 'https://c1crerc0h1fs4ljz.public.blob.vercel-storage.com/asi-uk-project-funding-budget-form.xlsx',
        guidelinesUrl: 'https://c1crerc0h1fs4ljz.public.blob.vercel-storage.com/asi-uk-project-funding-guidelines.pdf',
        submitEmail: 'evangelism@asiuk.org',
    },
    {
        year: 2025,
        status: 'funding-in-progress',
        statusLabel: 'Funding In Progress',
        projects: approvedProjects2025,
        fundingReceived: FUNDING_RECEIVED_2025,
        fundingPledged: FUNDING_PLEDGED_2025,
        infoBanner: 'Fundraising for 2025 projects is still ongoing. First instalments have been disbursed to approved projects.',
        showDonateLink: true,
    },
];
