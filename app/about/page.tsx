import Image from 'next/image'
import Link from 'next/link';
import MainHeader from '@/app/components/MainHeader';
import {Heading1, Heading2, Heading3} from "@/app/components/Headings";
import CTARounded from "@/app/components/CTARounded";
import Profile from '@/app/components/Profile';

export default function About() {
    return (
        <div className="flex items-center justify-center w-screen">
            <div className="max-w-screen-md mx-auto">
                <MainHeader/>
                <div className="text-left p-5">

                    <Heading1 text={"What is ASI?"}/>
                    <p className="pb-5">Adventist-laymen&lsquo;s Services and Industries (ASI) is an organisation
                        comprised of members of the Seventh-day Adventist Church who are either employed in the private
                        business, are self-employed, or hold managerial positions. The uniqueness of the organisation
                        can be described in two parts:</p>
                    <p className="pb-5">Firstly, we acknowledge that our time, talents, wealth, and our bodies belong to
                        God, and we are merely stewards of these gifts. With this understanding, we are committed to
                        using our professions to support the spread of the gospel message (Luke 9:1-3, Testimonies for
                        the Church, vol. 4, page 469).</p>
                    <p className="pb-5">Secondly, we pledge to support the diverse outreach programs of the Seventh-day
                        Adventist Church, which include health, education, missionary work, community ministry, family,
                        and other special projects. ASI has approximately 2,000 members worldwide, comprising of men and
                        women from all walks of life. These members reflect the diversity found within our church. </p>
                    <p className="pb-5">ASI&lsquo;s philosophy is to advocate for a Christ-centred way of life that is
                        expressed through a daily commitment to God. ASI members endeavour to embody God&lsquo;s love
                        and share it with the millions of people they encounter in their business or professional
                        engagements each year. ASI&lsquo;s motto is: SHARING CHRIST IN THE MARKETPLACE!</p>

                    <Heading2 text={"History"}/>
                    <p>ASI’s history is rooted in Madison College, an Adventist self-supporting institution established
                        in 1904 near Nashville, with Ellen White a stern supporter of the concept. The organisation grew
                        and during its official formation meeting in 1947 frequent reference was made to Ellen
                        White&lsquo;s statement “The work of God in this earth can never be finished until the men and
                        women comprising our church membership rally to the work, and unite their efforts with those of
                        ministers and church officers” Gospel Workers, p. 352. That is what ASI is all about - lay
                        people inspiring each other for mission work and serving hand in hand with the church ministers
                        and officers. Togetherness and inspiration!</p>

                    <CTARounded
                        heading={"Constitution"}
                        subheading={"Fundamental principles, structure, and rules that govern ASI UK operations"}
                        href={"/constitution"}
                        containerClass="my-8"
                    />

                    <Heading2 text={"Leadership Team"}/>

                    <div
                        className={"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 justify-items-center grid-auto-rows-fr"}>

                        <Profile
                            imageSrc="https://res.cloudinary.com/disrkguox/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1739827123/Grey-9800_-_DK_pbhxvr.jpg"
                            name="Daniel Klop"
                            title="President"
                            email="daniel@asiuk.org"
                            bio="Daniel has over 20 years of work experience in the banking and finance sector in the United Kingdom and the Netherlands. Originally from Australia he is bilingual in English and Dutch. He is a committed Adventist who has worked for the church in Australia, the Netherlands, and UK. Since he moved to Europe he has been involved in building stronger relationships between the church leadership and the youth within the TED and EUD. This was done through the development of the Munich Statement in 2009. Furthermore, he was appointed by the TED as a youth delegate to the General Conference in Atlanta in 2010. Daniel married his wife Ana Paula in 2023 at Newbold College."
                        />

                        <Profile
                            imageSrc="https://res.cloudinary.com/disrkguox/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1739827122/IMG_7350_-_Karlene_Agard_xclhpj.jpg"
                            name="Karlene Agard"
                            title="Vice President"
                            email="karlene@asiuk.org"
                            bio="Karlene Agard is the VP of ASI UK, she is on the team for Envision Youth Conference and has founded a women's ministry, Ladies Lounge UK, that helps Christian women understand their worth in Christ and to pursue excellence in all areas of life.

        Karlene Agard is also an award-winning mega-project expert who consults and speaks at conferences internationally. She has written for Forbes, McKinsey, and Deloitte.
        She has completed an Executive Masters in Major Program Management at the University of Oxford, Saïd Business School and now deliver project management training at the University of Oxford. Karlene is a Senior Consultant at ARAVUN and Oxford Global Projects, leading consulting engagements for government and private projects internationally."
                        />

                        <Profile
                            imageSrc="https://res.cloudinary.com/disrkguox/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1739827123/profile-pic_-_Craig_Gooden_ukcaz9.jpg"
                            name="Craig Gooden"
                            title="Vice President for Chapter Growth"
                            email="craig@asiuk.org"
                            bio="Craig is a Software/DevOps Engineer specialising in automation, cloud infrastructure, and software engineering. Alongside his career in technology, he is deeply committed to his faith and passionate about sharing the Gospel.
        Since dedicating his life to Christ, Craig has had the opportunity to preach, teach, and train internationally, serving in various ministries to help proclaim the everlasting Gospel to this generation. His key areas of biblical study include Faith and Bible Prophecy.
        He also serves as an Elder in the North England Conference, UK, where he enjoys fellowship and evangelistic ministry. In his personal time, Craig finds joy in reading, travelling, and spending time with his wife and best friend, Farida, and their son, Izraël."
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
                            bio="Elder Michael Garkov is a chartered accountant, running his own company in London. He is a missionary at heart and is passionate about sharing Christ in the marketplace. He also holds a theology degree from Newbold College. He has served in the Treasury Departments at both the Trans-European Division of SDA and the British Union Conference of SDA before starting his own business in 2005.

        Elder Garkov has extensive experience in leadership within ASI. He served as Treasurer of ASI Europe for over seven years, now serves as its Vice-President, and has previously been the President of ASI Bulgaria. Michael also initiated and spearheaded the relaunch of ASI UK in 2024.

        Elder Garkov is deeply involved in the management of national evangelistic projects, like 'Reflecting Hope' in the UK and 'SEED' in Bulgaria.

        Michael is happily married and blessed with four children. His hobbies include fitness training, tennis, and above all, sharing Christ and His love."
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
                            bio="Tashana is a nurse by profession who works in the operating theatre. She is an avid hiker who enjoys the great outdoors. Wales and the Lake District are some of her favourite locations to hike. She currently lives in Birmingham and has done so for quite a few years. She love sharing her faith through Bible studies and regularly engages in studies with friends preparing them for studies.   "
                        />

                        <Profile
                            imageSrc="https://res.cloudinary.com/disrkguox/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1739827124/UE8A7155-Edit_-_s.a.walters_hotmail.co.uk_kcpqfk.jpg"
                            name="Sam Walters"
                            title="Director for Youth Relations"
                            email="sam@asiuk.org"
                            bio="Sam Walters is from Wolverhampton UK where he works as a specialist paediatric pharmacist in a local hospital. He currently serves the Wednesfield SDA Church as the first elder, is the Co-host of the 'Faith on top podcast' and sits on the British Union Conference executive committee. As a former Outreach coordinator for the PEACE Centre of Evangelism, he enjoys witnessing and teaching others to do the same. He has a passion to help Adventist young professionals live out their faith in the work place and to seek first the kingdom of God in all that they do. His desire is to be close to God and a blessing to others. In his spare time Sam enjoys connecting with friends, good food, travelling and listening to audiobooks."
                        />
                    </div>

                    <CTARounded
                        heading={"Join"}
                        subheading={"Join the movement of Adventist lay professionals in the UK"}
                        href={"/join"}
                        containerClass="my-8"
                    />

                </div>
            </div>
        </div>
    )
}