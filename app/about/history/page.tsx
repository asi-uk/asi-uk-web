import TableOfContents from './components/TableOfContents'
import Ref from './components/Ref'
import ReferencesList from './components/ReferencesList'

const sections = [
    {id: 'roots', label: 'The Roots of ASI', level: 'section' as const},
    {id: 'education', label: 'A Revolutionary Approach to Education', level: 'section' as const},
    {id: 'madison', label: 'The Birth of Madison College', level: 'section' as const},
    {id: 'mission-model', label: 'A New Model for Mission', level: 'section' as const},
    {id: 'growth', label: 'Growth and Impact', level: 'section' as const},
    {id: 'loma-linda', label: 'The Loma Linda Sacrifice', level: 'subsection' as const},
    {id: 'depression', label: 'Thriving Through the Great Depression', level: 'subsection' as const},
    {id: 'formation', label: 'The Formation of ASI', level: 'section' as const},
    {id: 'asi-growth', label: 'The Growth of ASI', level: 'section' as const},
    {id: 'end-of-era', label: 'The End of an Era', level: 'subsection' as const},
    {id: 'today', label: 'ASI Today', level: 'section' as const},
    {id: 'uk', label: 'ASI in the United Kingdom', level: 'section' as const},
{id: 'related', label: 'Related Content', level: 'section' as const},
    {id: 'references', label: 'References', level: 'section' as const},
]

export default function History() {
    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <h1 className="heading-page text-center">History of ASI</h1>

            <p className="text-slate-600 leading-relaxed max-w-3xl mx-auto text-center mb-10">
                The founding principles of Adventist-laymen&lsquo;s Services and Industries (ASI) are rooted in
                the biblical principles of lay evangelism that Paul emphasised in the New Testament and Ellen White
                stressed in her writings: <em>&ldquo;His (Paul&rsquo;s) course inspired many humble toilers with a
                desire to do what they could to advance the cause of God, while at the same time they supported
                themselves in daily labor&hellip; The Lord employs various instrumentalities for the accomplishment
                of His purpose&rdquo;</em> (Welfare Ministry, p. 63).<Ref n={4}/>
            </p>

            <div className="flex flex-col gap-6 lg:flex-row lg:gap-10">
                <TableOfContents sections={sections}/>

                <div className="flex-1 lg:max-w-3xl">
                    {/* The Roots of ASI */}
                    <h2 id="roots" className="heading-sub scroll-mt-[160px] lg:scroll-mt-[120px]">
                        The Roots of ASI: Two Young Pioneers
                    </h2>
                    <p className="pb-5">
                        The story of ASI begins with two remarkable young men whose paths converged at Battle Creek
                        College in 1888.
                    </p>
                    <p className="pb-5">
                        Edward Alexander Sutherland was born on 3 March 1865,<Ref n={3}/> to Joseph and Mary
                        Sutherland &mdash; new converts to the Adventist faith who were travelling from Prairie du
                        Chien, Wisconsin, to start a farm in northern Iowa. The young couple had hoped to reach their
                        destination before Mary went into labour, but the journey proved too much. Halfway across the
                        Mississippi River on a ferry, young Edward made his dramatic entrance into the
                        world.<Ref n={7}/><Ref n={8}/> Picture it: Joseph and Mary, travelling while pregnant, not
                        finding a suitable place to deliver their baby. Edward was not born in a manger, but not far
                        from it.
                    </p>
                    <p className="pb-5">
                        Growing up on the family farm in northern Iowa, Edward learned the value of hard work early.
                        His father let him herd cattle for a penny a day, and by summer&lsquo;s end, Edward had
                        saved 35 cents &mdash; roughly ten dollars in today&lsquo;s money. Following his
                        father&lsquo;s advice, he invested his savings in onion sets, and after diligently tending and
                        harvesting them, made a substantial profit from his first business venture.<Ref n={7}/>
                        After high school, Edward went coal portering in Minneapolis for the summer, where he learned
                        about Battle Creek College. Through much sacrifice, he was finally able to enrol as a
                        student.<Ref n={7}/>
                    </p>
                    <p className="pb-5">
                        It was there, beginning his junior year in 1888, that Edward befriended a new arrival named
                        Percy Tilson Magan. Born on 13 November 1867 in Ireland, Magan had emigrated to the United
                        States with his family in 1884 and become an Adventist in 1886 after attending public meetings
                        in Nebraska.<Ref n={2}/> After his conversion, Ellen White invited the young Percy to live in
                        her home, and both young men had the opportunity to be influenced and mentored by the woman
                        they affectionately called Mother White.<Ref n={2}/><Ref n={7}/> The two became lifelong
                        friends and partners in mission.
                    </p>

                    {/* A Revolutionary Approach to Education */}
                    <h2 id="education" className="heading-sub scroll-mt-[160px] lg:scroll-mt-[120px]">
                        A Revolutionary Approach to Education
                    </h2>
                    <p className="pb-5">
                        The summer of 1891 marked a profound transformation for Sutherland. While attending a
                        teachers&lsquo; convention organised by the General Conference president, he experienced a
                        deeper walk with God by embracing the message of righteousness by faith. He accepted the health
                        message, adopted the vegetarian diet, and felt a strong calling to dedicate his life to
                        Christian education.
                    </p>
                    <p className="pb-5">
                        Called back to Battle Creek College to teach Old Testament, Sutherland opened his Bible to the
                        book of Genesis and began highlighting that the original diet was vegetarian. His compelling
                        arguments struck a chord: 25 of his students decided to become vegetarian.<Ref n={3}/> As
                        conviction spread, students signed a petition requesting vegetarian meals in the dining
                        hall &mdash; which at that time served meat regularly. Dr. John Harvey Kellogg, medical director
                        of the nearby Battle Creek Sanitarium, supported the petition, having long championed the
                        vegetarian diet. However, not all were pleased. Uriah Smith and W.W. Prescott, along with the
                        rest of the college board, opposed the movement. To resolve the controversy, the college
                        administration agreed to add beans to the menu.<Ref n={3}/> So there we have it: thanks to
                        Sutherland&lsquo;s initiative, beans became a staple at Battle Creek College, paving the way
                        for many a haystack supper at Adventist institutions for years to come.
                    </p>
                    <p className="pb-5">
                        Impressed with Sutherland&lsquo;s potential, W.W. Prescott sent him to spearhead a new college
                        opening in Walla Walla, Washington.<Ref n={3}/> In 1892, Walla Walla&lsquo;s doors opened with
                        91 students, surging to 160 by the end of the first year. Sutherland was intentional about
                        following the counsel of the Spirit of Prophecy. He introduced agriculture as part of the
                        curriculum, emphasised manual labour for character development, improved academic standards, and
                        encouraged missionary activities. After five years, Walla Walla College had become a model of
                        Adventist education &mdash; and remarkably, it was the only Adventist college in North America
                        that was not in debt.<Ref n={3}/>
                    </p>
                    <p className="pb-5">
                        Sutherland&lsquo;s success caught the attention of leaders at the 1897 General Conference
                        session. Battle Creek College, by contrast, was in debt equivalent to some $2.5 million in
                        today&lsquo;s currency. The new General Conference president, George A. Irwin, selected
                        Sutherland to serve as president of Battle Creek College, with Percy Magan as
                        dean.<Ref n={3}/> Sutherland dreamed of moving the college to a rural setting, but the
                        idea gained little traction. The college&lsquo;s $80,000 debt stood in the way. Magan was
                        thrust into the role of fundraiser, and Ellen White offered to donate the royalties from her
                        book <em>Christ&lsquo;s Object Lessons</em> as a new source of revenue. Magan was placed in
                        charge of the Relief of Our Schools Project, a denomination-wide campaign to coordinate sales
                        of the book. The success of this campaign was critical to gaining support at the 1901 General
                        Conference for transferring the college to a rural location.<Ref n={2}/>
                    </p>
                    <p className="pb-5">
                        In 1901, Ellen White attended the General Conference session and appealed for the college to be
                        sold and relocated to the country. By God&lsquo;s providence, the church did just that.
                        Sutherland and Magan worked hard to relocate the college to a large farm property along the
                        St. Joseph River near Berrien Springs, Michigan, where it reopened as Emmanuel Missionary
                        College &mdash; known today as Andrews University.<Ref n={3}/>
                    </p>
                    <p className="pb-5">
                        However, tensions mounted. Parents questioned why their children were having to work so hard
                        with their hands. Sutherland&lsquo;s proposal to build a small sanitarium adjacent to the
                        college was firmly rejected, given the growing difficulties with Dr. Kellogg and the unfolding
                        situation in Battle Creek.<Ref n={1}/> Bitterly disappointed, Sutherland, Magan, and their
                        colleague M. Bessie DeGraw publicly resigned their positions at a contentious Lake Union
                        Conference session in May 1904.<Ref n={1}/><Ref n={3}/> They resolved not to wait for a call
                        or financial support from the church, but to go forward in faith as self-supporting lay
                        workers &mdash; a method they believed was needed to finish the work.
                    </p>

                    {/* The Birth of Madison College */}
                    <h2 id="madison" className="heading-sub scroll-mt-[160px] lg:scroll-mt-[120px]">
                        The Birth of Madison College
                    </h2>
                    <p className="pb-5">
                        The years leading up to 1904 were a time of urgency for God&lsquo;s church. While membership
                        had grown to around 82,000, the world&lsquo;s population stood at 1.7 billion &mdash;
                        Seventh-day Adventists represented just 0.005% of the global population.<Ref n={8}/> The
                        church had undergone a dramatic reorganisation at the 1901 and 1903 General Conference sessions
                        to decentralise power and make room for growth. Council had been given that the engine for that
                        growth was not to be reliant upon the ministers alone, but upon the lay members.
                        As Ellen White wrote: <em>&ldquo;There is a large field open before the self-supporting gospel
                        worker. Many may gain valuable experience while toiling a portion of the time at some form of
                        manual labor&hellip;&rdquo;</em> (Welfare Ministry, p. 64).<Ref n={4}/>
                    </p>
                    <p className="pb-5">
                        At the time, the Southern Union was the smallest union in the United States, with a church
                        membership of roughly 2,800.<Ref n={8}/> The South was reeling from the effects of civil war
                        and adjusting to the end of slavery. The economy was weak and the land often depleted. On top
                        of that, there was deep prejudice against northerners. Almost nobody wanted to go there. But it
                        was precisely where Sutherland and Magan felt God was calling them.
                    </p>
                    <p className="pb-5">
                        On a warm summer&lsquo;s day in June 1904, the steamboat <em>Morning Star</em> pushed away
                        from the landing dock in Nashville, Tennessee, and headed up the Cumberland River.<Ref n={8}/>
                        On board was a small group of explorers: Ellen White and her two sons, Edson and Willie White;
                        helmsman Will Palmer; and E.A. Sutherland. Their good friend Edson White, who had been doing
                        missionary work in the South with the <em>Morning Star</em>, had agreed to take them to find a
                        country property for a school. Ellen White insisted on joining the
                        expedition.<Ref n={8}/><Ref n={9}/>
                    </p>
                    <p className="pb-5">
                        When the <em>Morning Star</em> broke down a few miles out of Nashville, the group found
                        themselves providentially beside the Ferguson-Nelson farm near Madison &mdash; a large but
                        unpromising spread of land, twelve miles northeast of Nashville, that had previously served as
                        a slave trader&lsquo;s headquarters before being abandoned and falling into
                        disrepair.<Ref n={1}/> Ellen White convinced Sutherland to go and see the land. He was
                        reluctant &mdash; he had seen it before and was less than impressed. But Ellen White was
                        adamant. When they reached the property, she told him she had seen it in vision and this was
                        the land they should purchase for the training school. Sutherland&lsquo;s heart
                        sank.<Ref n={8}/>
                    </p>
                    <p className="pb-5">
                        When Percy Magan arrived a short while later, he too did not like the prospect. It was, he
                        said, the roughest, weediest, most miserable plot of land that either of them had laid their
                        eyes on.<Ref n={9}/> And yet, inexplicably, God through His messenger was urging them to buy
                        it.
                    </p>
                    <p className="pb-5">
                        Sutherland visited the homeowner to negotiate the sale. However, she ran him off, yelling that
                        she would never sell her property to a Yankee. Perhaps a bit relieved, he informed Ellen White
                        of the owner&lsquo;s refusal. But Sister White was not to be deterred. She approached the woman
                        herself and, after several visits, was finally able to secure the purchase.
                    </p>
                    <p className="pb-5">
                        Sutherland and Magan wrestled with the decision. The asking price was $12,000, and they had
                        only half that amount. They spent an entire day in prayer, pouring their hearts out to God,
                        laying out every challenge before Him. As they prayed, they were filled with such peace,
                        assurance, and courage that from that point forward, whenever they faced challenges, they never
                        doubted that God had called them to this place and to this work.<Ref n={9}/> They purchased
                        the property for $11,000, and in October 1904 the Nashville Agricultural and Normal
                        Institute &mdash; soon known simply as Madison College &mdash; opened its doors to its first
                        cohort of just eleven students.<Ref n={1}/><Ref n={3}/>
                    </p>
                    <p className="pb-5">
                        Ellen White then instructed that documents be drawn up establishing a non-profit organisation
                        as the owner of the property. She offered to sit on the board herself &mdash; making it the
                        only board she ever sat on in her whole life.<Ref n={8}/> She also recruited Stephen Haskell
                        from the General Conference and George Butler, former General Conference president and current
                        Southern Union president, to serve alongside her.<Ref n={8}/> Sutherland&lsquo;s aunt, Nellie
                        Druillard, a woman of means, was also instrumental in helping to finance the venture in its
                        early days.<Ref n={1}/> Ellen White told her that if she would help these young men in her
                        older age, she would have done more than all she had accomplished in her entire life to that
                        point.<Ref n={7}/>
                    </p>

                    {/* A New Model for Mission */}
                    <h2 id="mission-model" className="heading-sub scroll-mt-[160px] lg:scroll-mt-[120px]">
                        A New Model for Mission
                    </h2>
                    <p className="pb-5">
                        Madison College was unlike anything the Adventist Church had seen. It combined education,
                        healthcare, and agriculture into a single self-supporting operation, designed to train and
                        deploy self-supporting missionaries.<Ref n={1}/> Ellen White described it
                        thus: <em>&ldquo;The school at Madison not only educates in a knowledge of scriptures, but it
                        gives a practical training that fits the student to go forth as a self-supporting missionary to
                        the field to which he is called.&rdquo;</em>
                    </p>
                    <p className="pb-5">
                        The school functioned like a large family, where everyone was expected to participate in the
                        daily operation. It was not unusual to see Magan, the college dean, ploughing fields with a
                        team of mules, while Sutherland, the president, churned butter for sale in the nearby
                        town.<Ref n={7}/> Students who could not pay tuition in cash worked six hours a day on the
                        farm or in one of the college industries instead.<Ref n={1}/> In these early days, Madison
                        would only accept students who made a commitment to serve in mission work following their
                        training. It was not easy to be a student at Madison &mdash; and that was why it produced such
                        strong graduates.
                    </p>
                    <p className="pb-5">
                        The beginnings were humble. The sole farmhouse on the property served as the school, staff
                        housing, cafeteria, office, and laundry. The barn and carriage house served as the early
                        dormitory. After cleaning out all the animals, students still had to contend with mice, flies,
                        bats, snakes, and other vermin. They affectionately called
                        it <em>probation hall</em> &mdash; if you could survive that, you could survive anything
                        Madison had to offer.<Ref n={7}/>
                    </p>
                    <p className="pb-5">
                        Madison&lsquo;s approach to education was built on three key pillars: agriculture and industry,
                        education and Bible, and medical missionary training.<Ref n={1}/> In June 1908, the Madison
                        Rural Sanitarium was formally dedicated on the location Ellen White had
                        recommended.<Ref n={1}/> Dr. Lillian Magan, Percy&lsquo;s wife and a physician from the
                        Battle Creek Sanitarium, initially provided the medical leadership. When she was joined by
                        Dr. Newton Evans, the sanitarium began to flourish &mdash; but Evans eventually accepted a call
                        to the College of Medical Evangelists at Loma Linda, California.<Ref n={1}/> Unwilling to let
                        the medical work falter, Sutherland and Magan enrolled in the University of Tennessee medical
                        school in Nashville in 1910 and completed their degrees in 1914, becoming licensed
                        physicians.<Ref n={1}/><Ref n={3}/>
                    </p>
                    <p className="pb-5">
                        The school also ran a vegetarian restaurant in Nashville with treatment rooms, a health food
                        industry &mdash; marketed under the Madison Foods brand &mdash; producing products such as
                        nutmeat, soy cheese, and cereals, a publishing and printing operation, and carpentry workshops
                        producing brooms and furniture &mdash; all of which provided work and training for students,
                        income for the ministry, and a model of independence and self-reliance.<Ref n={1}/>
                    </p>
                    <p className="pb-5">
                        At the heart of the Madison model were several key principles that would come to define ASI:
                        faith in God&lsquo;s word and a willingness to sacrifice, innovation and entrepreneurship
                        within the context of mission, and the vital importance of an empowered and engaged church
                        membership sharing Christ in everyday life.
                    </p>

                    {/* Growth and Impact */}
                    <h2 id="growth" className="heading-sub scroll-mt-[160px] lg:scroll-mt-[120px]">
                        Growth and Impact
                    </h2>
                    <p className="pb-5">
                        This model of self-supporting mission produced remarkable results. Within a year of the
                        school&lsquo;s founding, graduates began going out to establish their own outposts. Groups of
                        Madison alumni banded together to form small self-supporting institutions fashioned on the same
                        model &mdash; schools that served their local communities by offering literacy classes for
                        children and health education for adults.<Ref n={1}/> By 1909, after just five years, over 20
                        related schools had been opened by Madison graduates, serving a total of around 700 students.
                        By 1912, that number had grown to 28 schools with nearly 1,000 students, plus 12 new mission
                        projects operating medical missionary centres, agricultural ventures, and evangelism. By 1915,
                        there were 39 self-supporting groups spread across Tennessee, Alabama, and North Carolina,
                        forming a growing network of lay-driven missionary enterprises.<Ref n={8}/>
                    </p>
                    <p className="pb-5">
                        Two young graduates of Madison were among the very first Adventist missionaries to Cuba, where
                        they established a farm, trained the local community, and opened a church.<Ref n={3}/> The
                        Madison farm grew to be one of the most successful in all of Tennessee, with its lead farmer
                        giving lectures to the state government and local farmers.<Ref n={7}/> In 1915, Percy Magan
                        was elected dean of the College of Medical Evangelists at Loma Linda, California, charged with
                        developing a Los Angeles campus.<Ref n={2}/> He later served as president of the institution
                        from 1928 until his retirement in 1942, navigating a pivotal accreditation crisis in 1936 and
                        helping secure the future of what is now Loma Linda University.<Ref n={2}/>
                    </p>
                    <p className="pb-5">
                        From around 1908, leaders of the growing family of institutions began gathering annually at
                        Madison for mutual encouragement and to share reports of God&lsquo;s
                        blessings.<Ref n={1}/><Ref n={3}/> As Arthur W. Spalding wrote: <em>&ldquo;Once a year for
                        forty years, the schools, sanitariums, rest homes and other enterprises of the rural missions
                        joined in a self-supporting worker&lsquo;s convention held at Madison
                        College&rdquo;</em> (Origin and History of Seventh-day Adventists, p. 183).<Ref n={6}/> In
                        many ways, these annual gatherings were the precursor to ASI.
                    </p>
                    <p className="pb-5">
                        The school of nursing turned out its first graduates in 1910 from a one-year programme, which
                        became a two-year course in 1915 and a three-year course in 1919.<Ref n={1}/> The Tennessee
                        State Department of Education recognised Madison as a junior college in 1922, and the Tennessee
                        College Association accepted it as a senior college in 1933.<Ref n={1}/> By 1920, the school
                        offered two-year courses in nursing, education, agriculture, and home economics.<Ref n={8}/>
                    </p>

                    {/* The Loma Linda Sacrifice */}
                    <h3 id="loma-linda" className="heading-minor scroll-mt-[160px] lg:scroll-mt-[120px]">
                        The Loma Linda Sacrifice
                    </h3>
                    <p className="pb-5">
                        Perhaps the most striking example of self-supporting work strengthening the organised church
                        came in 1917. The College of Medical Evangelists at Loma Linda needed a teaching hospital in
                        Los Angeles to satisfy accreditation requirements &mdash; an enormously expensive undertaking.
                        The Fall Council voted to appropriate up to $20,000 toward the project, on the condition that
                        Magan, now dean of the medical school, could raise the first $30,000.<Ref n={1}/>
                    </p>
                    <p className="pb-5">
                        In desperation, Magan turned to his friend Sutherland. Could the $30,000 that had been pledged
                        to Madison go to Loma Linda instead? Sutherland, knowing that Madison and its extension schools
                        would not survive without a reliable supply of Adventist-trained doctors, agreed. Together they
                        presented the proposal to Lida Funk Scott, heiress to the Funk &amp; Wagnalls publishing
                        fortune, who had become an Adventist through Dr. Kellogg&lsquo;s influence and wished to
                        support Madison.<Ref n={1}/><Ref n={3}/>
                    </p>
                    <p className="pb-5">
                        Though hesitant at first, Scott gave the $30,000, enabling the dedication of White Memorial
                        Hospital in Los Angeles on 21 April 1918.<Ref n={1}/> It was a remarkable act of selflessness:
                        Madison, the self-supporting school that operated without denominational funding, willingly
                        diverted a major gift to ensure the church&lsquo;s medical school could be fully accredited.
                        From his new position at Loma Linda, Magan then encouraged graduates to return south after
                        training, ensuring Madison&lsquo;s own need for physicians was also met.<Ref n={1}/>
                    </p>

                    {/* Thriving Through the Great Depression */}
                    <h3 id="depression" className="heading-minor scroll-mt-[160px] lg:scroll-mt-[120px]">
                        Thriving Through the Great Depression
                    </h3>
                    <p className="pb-5">
                        The Great Depression of 1929&ndash;1939 turned the world upside down. Unemployment in the
                        United States skyrocketed from around 2% to 25%. People in the cities were starving. But life
                        at Madison hardly changed. While their outside business was affected, the campus did not go
                        hungry. At the peak of the Depression in 1931, the Madison farm was in full swing, preserving
                        thousands of gallons of peaches, beans, beets, greens, grapes, and tomatoes &mdash; all in
                        addition to what the campus consumed fresh.<Ref n={7}/> Madison was one of the few colleges
                        in the entire country that continued operating throughout those devastating years.
                    </p>
                    <p className="pb-5">
                        In the late 1930s, a major turn of events occurred when Reader&lsquo;s Digest &mdash; then the
                        nation&lsquo;s leading periodical &mdash; published an article about the self-supporting
                        college in Madison, Tennessee.<Ref n={3}/> The world was amazed that a college had kept
                        training young people throughout the Depression and that students could work with their hands to
                        pay their way through school. Eleanor Roosevelt, wife of the United States President, also
                        wrote an article about Madison. The US Department of the Interior published a study, and
                        Ripley&lsquo;s Believe It or Not featured the college with the headline: <em>Believe it or
                        not &mdash; the first self-supporting college.</em><Ref n={7}/>
                    </p>
                    <p className="pb-5">
                        As a result of this publicity, over 5,000 student applications poured in from around the
                        United States, including many from people who were not Seventh-day Adventists. Madison maxed
                        out its capacity at 450 students.<Ref n={7}/> Truly, it had become <em>&ldquo;a spectacle to
                        the world, to angels, and to men.&rdquo;</em>
                    </p>

                    {/* The Formation of ASI */}
                    <h2 id="formation" className="heading-sub scroll-mt-[160px] lg:scroll-mt-[120px]">
                        The Formation of ASI
                    </h2>
                    <p className="pb-5">
                        By 1941, the annual convention at Madison listed 52 representative self-supporting enterprises
                        in eight states, run by 171 families.<Ref n={1}/> Among the institutions that had grown out of
                        Madison were Highland Academy in Tennessee, Mount Pisgah Academy in North Carolina, Pewee
                        Valley in Kentucky, Riverside Sanitarium in Nashville &mdash; started by Nellie Druillard to
                        serve the Black community &mdash; Pine Forest Academy in Mississippi, Little Creek Academy near
                        Knoxville, and Harbert Hills Academy, the last direct &lsquo;unit&rsquo; of Madison, started
                        in 1954.<Ref n={1}/> These ministries were healing thousands of people, educating thousands
                        more, and laying a strong foundation for the growth of the church in the Southern Union.
                    </p>
                    <p className="pb-5">
                        The war brought fresh urgency to the message of country living. Many Adventists living in
                        European cities lost their lives during the bombing campaigns. The General Conference took a
                        heightened interest in the country living message. Sutherland was called to meet with church
                        leadership. He was appointed secretary of the newly formed North American Commission of
                        Self-Supporting Workers and was added to the Country Living Board of Counsellors alongside
                        General Conference President N.C. Wilson and Elder C.B. Haynes.<Ref n={7}/> Their work
                        resulted in the publication of the compilation <em>Country Living</em> in 1946, the book still
                        available today.<Ref n={7}/>
                    </p>
                    <p className="pb-5">
                        At the Fall Council of 1945, the General Conference formally recommended the organisation of an
                        association to unify the self-supporting workers and to promote a strong tie with the church
                        organisation.<Ref n={7}/> In 1946, Madison College and the Southern Union Conference worked
                        together to align the self-supporting units with the church. Sutherland was then appointed to
                        the Commission on Rural Living, which was given two primary tasks: first, to educate church
                        members in the country living message; and second, to establish an association of
                        self-supporting institutions.<Ref n={7}/>
                    </p>
                    <p className="pb-5">
                        In March 1947, that commission organised a meeting in Cincinnati, Ohio, with representatives
                        from approximately 25 self-supporting institutions. Under the chairmanship of President N.C.
                        Wilson and with E.A. Sutherland serving as secretary, the Association of Seventh-day Adventist
                        Self-Supporting Institutions was officially formed.<Ref n={1}/><Ref n={7}/> Sutherland became
                        its first president, with Dr. Wayne McFarland serving as the first organisational secretary.
                        Elder C.B. Haynes from the General Conference called it <em>&ldquo;a great day in the history
                        of the church.&rdquo;</em><Ref n={7}/>
                    </p>
                    <p className="pb-5">
                        During this formation meeting, frequent reference was made to Ellen White&lsquo;s
                        statement: <em>&ldquo;The work of God in this earth can never be finished until the men and
                        women comprising our church membership rally to the work, and unite their efforts with those of
                        ministers and church officers&rdquo;</em> (Gospel Workers, p. 352).<Ref n={5}/> This
                        conviction &mdash; that lay people and church leaders must work hand in hand &mdash; became the
                        foundational principle of the new organisation.
                    </p>
                    <p className="pb-5">
                        Among the first charter members were institutions whose names still resonate: Little Creek,
                        Fountain Head, Peewee Valley, Pisgah, and Wildwood &mdash; which had only been established in
                        1942, the youngest of the founding members.<Ref n={7}/>
                    </p>

                    {/* The Growth of ASI */}
                    <h2 id="asi-growth" className="heading-sub scroll-mt-[160px] lg:scroll-mt-[120px]">
                        The Growth of ASI
                    </h2>
                    <p className="pb-5">
                        The impact of Madison and its affiliated ministries on the growth of the Adventist Church in
                        the South was profound. In 1904, the Southern Union had been the smallest union in the United
                        States. By 1960, it had become the second largest, and by 2003, it was the largest union in the
                        North American Division.<Ref n={8}/> The 2023 financial reports show a tithe income of $275
                        million &mdash; the highest of any union in the world, and more than 10 of the 13 world
                        divisions.<Ref n={8}/> Far from diverting resources away from the organised church, the
                        presence of supporting ministries in the Southern Union had helped to build the strongest,
                        healthiest, and most financially secure field in the world.
                    </p>
                    <p className="pb-5">
                        Over the following decades, ASI membership grew to include businesses, Adventist entrepreneurs,
                        and professionals from all walks of life. In 1979, the organisation broadened its vision and
                        changed its name to Adventist-laymen&lsquo;s Services and Industries, with the
                        motto: <em>Sharing Christ in the Marketplace.</em> Like the apostle Paul, its members were
                        tentmakers &mdash; occupying the marketplaces and thoroughfares around the world, using their
                        professional skills not only to make a living but to share the gospel.
                    </p>

                    {/* The End of an Era */}
                    <h3 id="end-of-era" className="heading-minor scroll-mt-[160px] lg:scroll-mt-[120px]">
                        The End of an Era
                    </h3>
                    <p className="pb-5">
                        Sadly, Madison College itself did not survive. Percy Magan had died of a heart attack on 16
                        December 1947<Ref n={2}/> &mdash; the very year that ASI, the organisation that grew from the
                        seeds he and Sutherland had planted, was formally brought into being. Sutherland held his
                        presidency well into his eighties, but adequate succession planning had not been done. His
                        first wife, Sallie Bralliar, died in 1952, and in 1954 he married his longtime coworker M.
                        Bessie DeGraw.<Ref n={3}/> Sutherland himself died at the age of 90 at Madison, Tennessee, on
                        20 June 1955.<Ref n={3}/> After he passed, the school went through a series of leaders in
                        rapid succession, none of whom could recapture the original vision. There was turmoil on
                        campus, division over the direction of the college, and mounting debt. In 1964, Madison College
                        was forced to close its doors.<Ref n={1}/> The school was turned over to the church, and its
                        nursing school licence was transferred to Southern Missionary College &mdash; known today as
                        Southern Adventist University.
                    </p>
                    <p className="pb-5">
                        The closure of Madison is a sobering reminder that even the most God-blessed ventures require
                        faithful stewardship, clear vision, and careful planning for the future. Yet the seeds that
                        Madison planted &mdash; in the lives of its graduates, in the ministries they founded, and in
                        the organisation of ASI itself &mdash; continue to bear fruit around the world to this day.
                    </p>

                    {/* ASI Today */}
                    <h2 id="today" className="heading-sub scroll-mt-[160px] lg:scroll-mt-[120px]">
                        ASI Today
                    </h2>
                    <p className="pb-5">
                        Today, ASI is a global force for mission. From banana farms in Zambia that fund education and
                        evangelism, to lifestyle health centres in Tennessee and Georgia, to avocado plantations in
                        Tanzania, to small businesses in Kentucky and Minnesota whose owners see every customer
                        interaction as a divine appointment &mdash; ASI members around the world are combining their
                        professional skills with a passion for sharing the gospel.
                    </p>
                    <p className="pb-5">
                        ASI exists to network, equip, and empower these individuals and organisations. Through annual
                        conventions, financial assistance, and mentorship, ASI nurtures innovation in mission within the
                        Adventist Church.<Ref n={9}/> The E.A. Sutherland Education Association, now known as
                        ISEI (International Society for Education through Inspiration), helps maintain the standards of
                        15 self-supporting schools in four nations, ensuring that the Madison education model remains
                        very much alive.<Ref n={1}/> In many ways, the organisation still embodies the vision and
                        values that were the hallmarks of Madison College and its founders: faith, innovation,
                        self-sacrifice, and a deep commitment to sharing Christ wherever life takes you.
                    </p>
                    <p className="pb-5">
                        Today, 99.9% of the Seventh-day Adventist Church are lay members &mdash; that means there are
                        over 1,000 lay members for every one pastor.<Ref n={8}/> As Ellen White
                        wrote: <em>&ldquo;The work of God in this earth can never be finished until the men and women
                        comprising our church membership rally to the work, and unite their efforts with those of
                        ministers and church officers&rdquo;</em> (Gospel Workers, p. 352).<Ref n={5}/> That
                        conviction &mdash; as urgent now as it was in 1947 &mdash; remains the beating heart of ASI.
                    </p>

                    {/* ASI in the United Kingdom */}
                    <h2 id="uk" className="heading-sub scroll-mt-[160px] lg:scroll-mt-[120px]">
                        ASI in the United Kingdom
                    </h2>
                    <p className="pb-5">
                        The ASI concept was introduced to the Adventist Church in the British Isles in 1983 by the then
                        British Union Conference President, Harold Calkins, and his Vice-President, John Arthur. They
                        invited ASI members from the United States to meet with interested business and professional lay
                        people in Leicester. During that weekend, the first overseas chapter of ASI was formed &mdash; a
                        historic milestone for the movement.
                    </p>
                    <p className="pb-5">
                        In 1990, the UK chapter&lsquo;s name was changed to the Adventist Business and Professionals
                        Association. However, following the formation of ASI Europe in 1998, it was decided in 2006 to
                        change the name back to ASI UK, bringing it into line with other European chapters.
                    </p>
                    <p className="pb-5">
                        Over the years, ASI UK has been actively involved in evangelistic initiatives and humanitarian
                        projects, maintaining strong links with ADRA and the British Union Conference of Seventh-day
                        Adventists. The chapter conducts workshops and seminars and continues to attract young
                        professionals and those starting out in business to the Association, ensuring that the next
                        generation of Adventist lay people are equipped and inspired to share Christ in their
                        marketplaces.
                    </p>
                    <p className="pb-5">
                        After a few years of dormancy, ASI UK was officially relaunched on 2 March 2024 at Newbold
                        College during the ASI Europe board meeting weekend, with Dr. Daniel Duda (TED President),
                        Pr. Eglan Brooks (BUC President), and other church leaders present for the inauguration.
                    </p>
                    <p className="pb-5">
                        In June 2024, the chapter held its first General Meeting in Birmingham. Members adopted the ASI
                        UK Constitution and elected the executive committee, laying the organisational foundation for
                        the chapter&lsquo;s work going forward.
                    </p>

                    {/* Related Content */}
                    <h2 id="related" className="heading-section scroll-mt-[160px] lg:scroll-mt-[120px]">Related Content</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                        <div className="rounded-xl overflow-hidden shadow-lg">
                            <iframe
                                className="aspect-video w-full"
                                src="https://www.youtube.com/embed/4aKu0X9pgJM"
                                title="The History of ASI"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                            <p className="text-sm text-gray-500 text-center py-2 bg-gray-50">
                                Watch: The story of ASI and its mission
                            </p>
                        </div>

                        <div className="rounded-xl overflow-hidden shadow-lg">
                            <iframe
                                className="aspect-video w-full"
                                src="https://www.youtube.com/embed/JWjaG_pQWqc?si=YyjHCOZ7VS6_dx3J"
                                title="The History of Supporting Ministries"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                            <p className="text-sm text-gray-500 text-center py-2 bg-gray-50">
                                Watch: Podcast discussion on the origins of ASI
                            </p>
                        </div>

                        <div className="rounded-xl overflow-hidden shadow-lg">
                            <iframe
                                className="aspect-video w-full"
                                src="https://www.youtube.com/embed/wbE6_9-TAI0?si=dLuGYe_VWHav8dZy"
                                title="ASI History: How Madison College Started a Movement"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                            <p className="text-sm text-gray-500 text-center py-2 bg-gray-50">
                                Watch: Discover the origins of the modern lay ministry movement
                            </p>
                        </div>
                    </div>

                    {/* References */}
                    <ReferencesList/>
                </div>
            </div>
        </div>
    )
}
