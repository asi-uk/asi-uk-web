import Image from 'next/image'
import Link from 'next/link';
import MainHeader from '@/app/components/MainHeader';
import {Heading1, Heading2, Heading3} from "@/app/components/Headings";
import CTARounded from "@/app/components/CTARounded";
import Profile from '@/app/components/Profile';

export default function Leadership() {
    return (
        <div className="flex items-center justify-center w-screen">
            <div className="max-w-screen-md mx-auto">
                <div className="text-left p-5">
                    <Heading2 text={"Leadership Team"}/>
                    {/*<p className="mb-16">The current ASI UK leadership team was elected in 2024 at our first Ordinary General Meeting</p>*/}

                    <div
                        className={"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10 justify-items-center grid-auto-rows-fr background bg-white rounded-2xl p-10"}>

                        <Profile
                            imageSrc="https://res.cloudinary.com/disrkguox/image/upload/v1740858925/Grey-9800_-_DK_pbhxvr_a040f8.jpg"
                            name="Daniel Klop"
                            title="President"
                            email="daniel@asiuk.org"
                            bio="Daniel has over 20 years of work experience in the banking and finance sector in the United Kingdom and the Netherlands. Originally from Australia he is bilingual in English and Dutch. He is a committed Adventist who has worked for the church in Australia, the Netherlands, and UK. Since he moved to Europe he has been involved in building stronger relationships between the church leadership and the youth within the TED and EUD. This was done through the development of the Munich Statement in 2009. Furthermore, he was appointed by the TED as a youth delegate to the General Conference in Atlanta in 2010. Daniel married his wife Ana Paula in 2023 at Newbold College."
                        />

                        <Profile
                            imageSrc="https://res.cloudinary.com/disrkguox/image/upload/v1740859115/IMG_7350_-_Karlene_Agard_xclhpj_739e44.jpg"
                            name="Karlene Agard"
                            title="Vice President"
                            email="karlene@asiuk.org"
                            bio={`Karlene Agard is the VP of ASI UK, she is on the team for Envision Youth Conference and has founded a women's ministry, Ladies Lounge UK, that helps Christian women understand their worth in Christ and to pursue excellence in all areas of life.\n\nKarlene Agard is also an award-winning mega-project expert who consults and speaks at conferences internationally. She has written for Forbes, McKinsey, and Deloitte.\n\nShe has completed an Executive Masters in Major Program Management at the University of Oxford, Saïd Business School and now deliver project management training at the University of Oxford. Karlene is a Senior Consultant at ARAVUN and Oxford Global Projects, leading consulting engagements for government and private projects internationally.`}
                        />

                        <Profile
                            imageSrc="https://res.cloudinary.com/disrkguox/image/upload/v1740859392/profile-pic_-_Craig_Gooden_ukcaz9_9d47d3.jpg"
                            name="Craig Gooden"
                            title="Vice President for Chapter Growth"
                            email="craig@asiuk.org"
                            bio={`Craig is a Software/DevOps Engineer specialising in automation, cloud infrastructure, and software engineering. Alongside his career in technology, he is deeply committed to his faith and passionate about sharing the Gospel.\n\nSince dedicating his life to Christ, Craig has had the opportunity to preach, teach, and train internationally, serving in various ministries to help proclaim the everlasting Gospel to this generation. His key areas of biblical study include Faith and Bible Prophecy.\n\nHe also serves as an Elder in the North England Conference, UK, where he enjoys fellowship and evangelistic ministry. In his personal time, Craig finds joy in reading, travelling, and spending time with his wife and best friend, Farida, and their son, Izraël.`}
                        />


                        <Profile
                            imageSrc="https://res.cloudinary.com/disrkguox/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1739827122/Angel_Alishev_-_Angel_Alishev_yz0osd.jpg"
                            name="Angel Alishev"
                            title="Vice President for Evangelism"
                            email="angel@asiuk.org"
                            bio="Angel Alishev serves as the Vice President for Evangelism at ASI UK. He is deeply committed to spreading the gospel and engaging in mission activities. Originally from Bulgaria, he has been residing in the United Kingdom since 2014. Angel is an industrial engineer and the owner of a medical equipment company."
                        />

                        <Profile
                            imageSrc="https://res.cloudinary.com/disrkguox/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1739827123/MG_photo_-_Michael_Garkov_auwyzo.jpg"
                            name="Michael Garkov"
                            title="Treasurer"
                            email="michael@asiuk.org"
                            bio={`Elder Michael Garkov is a chartered accountant, running his own company in London. He is a missionary at heart and is passionate about sharing Christ in the marketplace. He also holds a theology degree from Newbold College. He has served in the Treasury Departments at both the Trans-European Division of SDA and the British Union Conference of SDA before starting his own business in 2005.\n\nElder Garkov has extensive experience in leadership within ASI. He served as Treasurer of ASI Europe for over seven years, now serves as its Vice-President, and has previously been the President of ASI Bulgaria. Michael also initiated and spearheaded the relaunch of ASI UK in 2024.\n\nElder Garkov is deeply involved in the management of national evangelistic projects, like 'Reflecting Hope' in the UK and 'SEED' in Bulgaria.\n\nMichael is happily married and blessed with four children. His hobbies include fitness training, tennis, and above all, sharing Christ and His love.`}
                        />

                        <Profile
                            imageSrc="https://res.cloudinary.com/disrkguox/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1740857931/eric-profile_f7cuka.jpg"
                            name="Eric Welch"
                            title="Secretary"
                            email="eric@asiuk.org"
                            bio={`Eric works as an aerospace engineer in Staffordshire. He and his wife are passionate about sharing the love of Jesus in their local community. In his spare time he loves camping, hiking, sailing, and travelling.`}
                        />

                        <Profile
                            imageSrc="https://res.cloudinary.com/disrkguox/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1739827125/Untitled_3_-_Jason_Garc%C3%ADa_Portilla_twoxyf.jpg"
                            name="Jason Garcia Portilla"
                            title="Projects Committee"
                            email="projects@asiuk.org"
                            bio="Dr Jason Garcia-Portilla is a Lecturer in Business Management (University of Winchester, UK). His interdisciplinary book elucidates the factors leading to the differences in prosperity across countries in Europe and the Americas. In addition to his work on the development–religion–environment nexus, Dr Garcia-Portilla is an expert in climate change and sustainability, with 14 years of progressive experience in the field. He spent over two years working as an official negotiator of the United Nations Framework Convention on Climate Change (UNFCCC). During this assignment, he represented the Colombian government in seven rounds of negotiation and took part in several international initiatives, including the Global Platform for Disaster Risk Reduction. He has also worked with UN agencies and international NGOs on climate issues, environmental policy, and development. He was appointed as a reviewer of the 5th & 6th Assessment Reports of the Intergovernmental Panel on Climate Change (IPCC). He holds a PhD in Organisations and Culture (University of St Gallen, Switzerland), an MSc in Climate Change and Policy (University of Sussex, UK), an MA in Political Science (University of Los Andes, Colombia), and a degree in Ecology (Javeriana University, Colombia)."
                        />

                        <Profile
                            imageSrc="https://res.cloudinary.com/disrkguox/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1739827123/IMG_3645_-_Tashana_Samuels_gomh8s.jpg"
                            name="Tashana Samuels"
                            title="Projects Committee"
                            email="projects@asiuk.org"
                            bio="Tashana is a nurse by profession who works in the operating theatre. She is an avid hiker who enjoys the great outdoors. Wales and the Lake District are some of her favourite locations to hike. She currently lives in Birmingham and has done so for quite a few years. She love sharing her faith through Bible studies and regularly engages in studies with friends preparing them for studies."
                        />

                        <Profile
                            imageSrc="https://res.cloudinary.com/disrkguox/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1739827124/UE8A7155-Edit_-_s.a.walters_hotmail.co.uk_kcpqfk.jpg"
                            name="Sam Walters"
                            title="Director for Youth Relations"
                            email="sam@asiuk.org"
                            bio="Sam Walters is from Wolverhampton UK where he works as a specialist paediatric pharmacist in a local hospital. He currently serves the Wednesfield SDA Church as the first elder, is the Co-host of the 'Faith on top podcast' and sits on the British Union Conference executive committee. As a former Outreach coordinator for the PEACE Centre of Evangelism, he enjoys witnessing and teaching others to do the same. He has a passion to help Adventist young professionals live out their faith in the work place and to seek first the kingdom of God in all that they do. His desire is to be close to God and a blessing to others. In his spare time Sam enjoys connecting with friends, good food, travelling and listening to audiobooks."
                        />

                        <Profile
                            imageSrc="https://res.cloudinary.com/disrkguox/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1739917247/IMG_5124_-_Rachel_Graham-Tohue_z8ddun.jpg"
                            name="Rachel Graham-Tohue"
                            title="Director for Logistics"
                            email="rachel@asiuk.org"
                            bio={`Rachel Graham-Tohue is a seasoned professional with over 15 years of experience in events and industry coordination, having worked at SJM Concerts and Kennedy Street Enterprises, specialising in music event management.\n\nCurrently an Atlassian Infrastructure Engineer in an Atlassian Centre of Excellence, she brings advanced organisational/project management skills to her role. She is also the founder of Rachel's Cake Delights in Wolverhampton, managing a vegan and gluten-free cake business. Previously, she served as an Administrative Secretary at the North England Conference, where she managed administrative duties for four directors and played a crucial role in organizing conference events and maintaining operational efficiency.`}
                        />
                    </div>

                    <CTARounded
                        heading={"Contact Us"}
                        subheading={"Get in touch with ASI UK"}
                        href={"/contact-us"}
                        containerClass="my-8"
                    />

                </div>
            </div>
        </div>
    )
}