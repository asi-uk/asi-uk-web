import TableOfContents from './components/TableOfContents'

const sections = [
    {id: 'roots', label: 'The Roots of ASI', level: 'section' as const},
    {id: 'education', label: 'A Revolutionary Approach to Education', level: 'section' as const},
    {id: 'madison', label: 'The Birth of Madison College', level: 'section' as const},
    {id: 'mission-model', label: 'A New Model for Mission', level: 'section' as const},
    {id: 'growth', label: 'Growth and Impact', level: 'section' as const},
    {id: 'depression', label: 'Thriving Through the Great Depression', level: 'subsection' as const},
    {id: 'formation', label: 'The Formation of ASI', level: 'section' as const},
    {id: 'asi-growth', label: 'The Growth of ASI', level: 'section' as const},
    {id: 'end-of-era', label: 'The End of an Era', level: 'subsection' as const},
    {id: 'today', label: 'ASI Today', level: 'section' as const},
    {id: 'uk', label: 'ASI in the United Kingdom', level: 'section' as const},
    {id: 'timeline', label: 'Key Dates', level: 'section' as const},
    {id: 'related', label: 'Related Content', level: 'section' as const},
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
                of His purpose&rdquo;</em> (Welfare Ministry, p. 63).
            </p>

            <div className="flex gap-10">
                <TableOfContents sections={sections}/>

                <div className="flex-1 max-w-3xl">
                    {/* The Roots of ASI */}
                    <h2 id="roots" className="heading-sub scroll-mt-[120px]">
                        The Roots of ASI: Two Young Pioneers
                    </h2>
                    <p className="pb-5">
                        The story of ASI begins with two remarkable young men whose paths converged at Battle Creek
                        College in 1888.
                    </p>
                    <p className="pb-5">
                        Edward Alexander Sutherland was born on 3 March 1865, to Joseph and Mary Sutherland &mdash; new
                        converts to the Adventist faith who were travelling from Prairie du Chien, Wisconsin, to start
                        a farm in northern Iowa. The young couple had hoped to reach their destination before Mary went
                        into labour, but the journey proved too much. Halfway across the Mississippi River on a ferry,
                        young Edward made his dramatic entrance into the world. Picture it: Joseph and Mary, travelling
                        while pregnant, not finding a suitable place to deliver their baby. Edward was not born in a
                        manger, but not far from it.
                    </p>
                    <p className="pb-5">
                        Growing up on the family farm in northern Iowa, Edward learned the value of hard work early.
                        His father let him herd cattle for a penny a day, and by summer&lsquo;s end, Edward had
                        saved 35 cents &mdash; roughly ten dollars in today&lsquo;s money. Following his
                        father&lsquo;s advice, he invested his savings in onion sets, and after diligently tending and
                        harvesting them, made a substantial profit from his first business venture. After high school,
                        Edward went coal portering in Minneapolis for the summer, where he learned about Battle Creek
                        College. Through much sacrifice, he was finally able to enrol as a student.
                    </p>
                    <p className="pb-5">
                        It was there, beginning his junior year in 1888, that Edward befriended a new arrival named
                        Percy Magan &mdash; an immigrant from Ireland who had recently converted to the Adventist
                        faith. Percy had been living in the home of Ellen White, giving both young men the opportunity
                        to be influenced and mentored by the woman they affectionately called Mother White. The two
                        became lifelong friends and partners in mission.
                    </p>

                    {/* A Revolutionary Approach to Education */}
                    <h2 id="education" className="heading-sub scroll-mt-[120px]">
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
                        arguments struck a chord with his students: 50 of his 80 students wanted to become vegetarian.
                        As conviction spread, 150 students signed a petition requesting vegetarian meals in the dining
                        hall &mdash; which at that time served meat regularly. Dr. John Harvey Kellogg, medical director
                        of the nearby Battle Creek Sanitarium, supported the petition, having long championed the
                        vegetarian diet. However, not all were pleased. Uriah Smith and W.W. Prescott, along with the
                        rest of the college board, opposed the movement. To resolve the controversy, the college
                        administration agreed to add beans to the menu. So there we have it: thanks to
                        Sutherland&lsquo;s initiative, beans became a staple at Battle Creek College, paving the way
                        for many a haystack supper at Adventist institutions for years to come.
                    </p>
                    <p className="pb-5">
                        Impressed with Sutherland&lsquo;s potential, General Conference President Olsen called him to
                        spearhead a new college opening in Walla Walla, Washington. In 1892, Walla Walla&lsquo;s doors
                        opened with 91 students, surging to 160 by the end of the first year. Sutherland was
                        intentional about following the counsel of the Spirit of Prophecy. He introduced agriculture as
                        part of the curriculum, emphasised manual labour for character development, improved academic
                        standards, and encouraged missionary activities. After five years, Walla Walla College had
                        become a model of Adventist education &mdash; and remarkably, it was the only Adventist college
                        in North America that was not in debt.
                    </p>
                    <p className="pb-5">
                        Sutherland&lsquo;s success caught the attention of leaders at the 1897 General Conference
                        session. Battle Creek College, by contrast, was in debt equivalent to some $2.5 million in
                        today&lsquo;s currency. Sutherland was called back to Battle Creek as president, with Percy
                        Magan joining him as academic dean. He dreamed of moving the college to a rural setting, but
                        the idea gained little traction &mdash; that is, until 1901, when Ellen White attended the
                        General Conference session and appealed for the college to be sold and relocated to the
                        country. By God&lsquo;s providence, the church did just that. Sutherland and Magan worked hard
                        to relocate the college to a large farm property in Berrien Springs, Michigan, where it
                        reopened as Emmanuel Missionary College &mdash; known today as Andrews University.
                    </p>
                    <p className="pb-5">
                        However, tensions mounted. Parents questioned why their children were having to work so hard
                        with their hands. Sutherland&lsquo;s proposal to build a small sanitarium adjacent to the
                        college was firmly rejected, given the growing difficulties with Dr. Kellogg and the unfolding
                        situation in Battle Creek. Bitterly disappointed, both Sutherland and Magan tendered their
                        resignations. They resolved not to wait for a call or financial support from the church, but to
                        go forward in faith as self-supporting lay workers &mdash; a method they believed was needed to
                        finish the work.
                    </p>

                    {/* The Birth of Madison College */}
                    <h2 id="madison" className="heading-sub scroll-mt-[120px]">
                        The Birth of Madison College
                    </h2>
                    <p className="pb-5">
                        The years leading up to 1904 were a time of urgency for God&lsquo;s church. While membership
                        had grown to around 82,000, the world&lsquo;s population stood at 1.7 billion &mdash;
                        Seventh-day Adventists represented just 0.005% of the global population. The church had
                        undergone a dramatic reorganisation at the 1901 and 1903 General Conference sessions to
                        decentralise power and make room for growth. Council had been given that the engine for that
                        growth was not to be reliant upon the ministers alone, but upon the lay members.
                        As Ellen White wrote: <em>&ldquo;There is a large field open before the self-supporting gospel
                        worker. Many may gain valuable experience while toiling a portion of the time at some form of
                        manual labor&hellip;&rdquo;</em> (Welfare Ministry, p. 64).
                    </p>
                    <p className="pb-5">
                        At the time, the Southern Union was the smallest union in the United States, with a church
                        membership of roughly 2,800. The South was reeling from the effects of civil war and adjusting
                        to the end of slavery. The economy was weak and the land often depleted. On top of that, there
                        was deep prejudice against northerners. Almost nobody wanted to go there. But it was precisely
                        where Sutherland and Magan felt God was calling them.
                    </p>
                    <p className="pb-5">
                        On a warm summer&lsquo;s day in June 1904, the steamboat <em>Morning Star</em> pushed away
                        from the landing dock in Nashville, Tennessee, and headed up the Cumberland River. On board was
                        a small group of explorers: Ellen White and her two sons, Edson and Willie White; helmsman Will
                        Palmer; and E.A. Sutherland. Their good friend Edson White, who had been doing missionary work
                        in the South with the <em>Morning Star</em>, had agreed to take them to find a country property
                        for a school. Ellen White insisted on joining the expedition.
                    </p>
                    <p className="pb-5">
                        When the <em>Morning Star</em> broke down a few miles out of Nashville, the group found
                        themselves providentially beside the Ferguson-Nelson farm near Madison &mdash; a large but
                        unpromising spread of land that had previously served as a slave trader&lsquo;s headquarters
                        before being abandoned and falling into disrepair. Ellen White convinced Sutherland to go and
                        see the land. He was reluctant &mdash; he had seen it before and was less than impressed. But
                        Ellen White was adamant. When they reached the property, she told him she had seen it in vision
                        and this was the land they should purchase for the training school. Sutherland&lsquo;s heart
                        sank.
                    </p>
                    <p className="pb-5">
                        When Percy Magan arrived a short while later, he too did not like the prospect. It was, he
                        said, the roughest, weediest, most miserable plot of land that either of them had laid their
                        eyes on. And yet, inexplicably, God through His messenger was urging them to buy it.
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
                        doubted that God had called them to this place and to this work. They purchased the property
                        for $11,000, and in October 1904 the Nashville Agricultural and Normal Institute &mdash; soon
                        known simply as Madison College &mdash; opened its doors to its first cohort of just eleven
                        students.
                    </p>
                    <p className="pb-5">
                        Ellen White then instructed that documents be drawn up establishing a non-profit organisation
                        as the owner of the property. She offered to sit on the board herself &mdash; making it the
                        only board she ever sat on in her whole life. She also recruited Stephen Haskell from the
                        General Conference and George Butler, former General Conference president and current Southern
                        Union president, to serve alongside her. Sutherland&lsquo;s aunt, Nelly Druilard, a woman of
                        means, was also instrumental in helping to finance the venture in its early days. Ellen White
                        told her that if she would help these young men in her older age, she would have done more than
                        all she had accomplished in her entire life to that point.
                    </p>

                    {/* A New Model for Mission */}
                    <h2 id="mission-model" className="heading-sub scroll-mt-[120px]">
                        A New Model for Mission
                    </h2>
                    <p className="pb-5">
                        Madison College was unlike anything the Adventist Church had seen. It combined education,
                        healthcare, and agriculture into a single self-supporting operation, designed to train and
                        deploy self-supporting missionaries. Ellen White described it
                        thus: <em>&ldquo;The school at Madison not only educates in a knowledge of scriptures, but it
                        gives a practical training that fits the student to go forth as a self-supporting missionary to
                        the field to which he is called.&rdquo;</em>
                    </p>
                    <p className="pb-5">
                        The school functioned like a large family, where everyone was expected to participate in the
                        daily operation. It was not unusual to see Magan, the college dean, ploughing fields with a
                        team of mules, while Sutherland, the president, churned butter for sale in the nearby town.
                        Students who could not pay tuition in cash worked six hours a day on the farm or in one of the
                        college industries instead. In these early days, Madison would only accept students who made a
                        commitment to serve in mission work following their training. It was not easy to be a student
                        at Madison &mdash; and that was why it produced such strong graduates.
                    </p>
                    <p className="pb-5">
                        The beginnings were humble. The sole farmhouse on the property served as the school, staff
                        housing, cafeteria, office, and laundry. The barn and carriage house served as the early
                        dormitory. After cleaning out all the animals, students still had to contend with mice, flies,
                        bats, snakes, and other vermin. They affectionately called
                        it <em>probation hall</em> &mdash; if you could survive that, you could survive anything
                        Madison had to offer.
                    </p>
                    <p className="pb-5">
                        Madison&lsquo;s approach to education was built on three key pillars: agriculture and industry,
                        education and Bible, and medical missionary training. Both Sutherland and Magan studied medicine
                        in Nashville and became licensed physicians, so they could give proper leadership to the medical
                        work. The school also ran a vegetarian restaurant in Nashville with treatment rooms, a health
                        food industry producing products such as nutmeat, soy cheese, and cereals, a publishing and
                        printing operation, and carpentry workshops producing brooms and furniture &mdash; all of which
                        provided work and training for students, income for the ministry, and a model of independence
                        and self-reliance.
                    </p>
                    <p className="pb-5">
                        At the heart of the Madison model were several key principles that would come to define ASI:
                        faith in God&lsquo;s word and a willingness to sacrifice, innovation and entrepreneurship
                        within the context of mission, and the vital importance of an empowered and engaged church
                        membership sharing Christ in everyday life.
                    </p>

                    {/* Growth and Impact */}
                    <h2 id="growth" className="heading-sub scroll-mt-[120px]">
                        Growth and Impact
                    </h2>
                    <p className="pb-5">
                        This model of self-supporting mission produced remarkable results. Within a year of the
                        school&lsquo;s founding, graduates began going out to establish their own outposts. Groups of
                        Madison alumni banded together to form small self-supporting institutions fashioned on the same
                        model &mdash; schools that served their local communities by offering literacy classes for
                        children and health education for adults. By 1909, after just five years, over 20 related
                        schools had been opened by Madison graduates, serving a total of around 700 students. By 1912,
                        that number had grown to 28 schools with nearly 1,000 students, plus 12 new mission projects
                        operating medical missionary centres, agricultural ventures, and evangelism. By 1915, there
                        were 39 self-supporting groups spread across Tennessee, Alabama, and North Carolina, forming a
                        growing network of lay-driven missionary enterprises.
                    </p>
                    <p className="pb-5">
                        Two young graduates of Madison were among the very first Adventist missionaries to Cuba, where
                        they established a farm, trained the local community, and opened a church. The Madison farm
                        grew to be one of the most successful in all of Tennessee, with its lead farmer giving lectures
                        to the state government and local farmers. Percy Magan was later called by the General
                        Conference to help establish Loma Linda in southern California, where he became medical
                        director. Sutherland himself helped raise money for Loma Linda &mdash; a striking example of
                        the self-supporting work directly strengthening the organised church.
                    </p>
                    <p className="pb-5">
                        In 1909, the very first self-supporting convention was held at Madison. Alumni gathered from
                        their projects to share reports of God&lsquo;s blessings and to gain and give inspiration. As
                        Arthur W. Spalding wrote: <em>&ldquo;Once a year for forty years, the schools, sanitariums,
                        rest homes and other enterprises of the rural missions joined in a self-supporting
                        worker&lsquo;s convention held at Madison College&rdquo;</em> (Origin and History of Seventh-day
                        Adventists, p. 183). In many ways, these annual gatherings were the precursor to ASI.
                    </p>
                    <p className="pb-5">
                        By 1915, Madison&lsquo;s missionary course had expanded from one to two years, and by 1920,
                        the school offered two-year courses in nursing, education, agriculture, and home economics.
                    </p>

                    {/* Thriving Through the Great Depression */}
                    <h3 id="depression" className="heading-minor scroll-mt-[120px]">
                        Thriving Through the Great Depression
                    </h3>
                    <p className="pb-5">
                        The Great Depression of 1929&ndash;1939 turned the world upside down. Unemployment in the
                        United States skyrocketed from around 2% to 25%. People in the cities were starving. But life
                        at Madison hardly changed. While their outside business was affected, the campus did not go
                        hungry. At the peak of the Depression in 1931, the Madison farm was in full swing, preserving
                        thousands of gallons of peaches, beans, beets, greens, grapes, and tomatoes &mdash; all in
                        addition to what the campus consumed fresh. Madison was one of the few colleges in the entire
                        country that continued operating throughout those devastating years.
                    </p>
                    <p className="pb-5">
                        In the late 1930s, a major turn of events occurred when Reader&lsquo;s Digest &mdash; then the
                        nation&lsquo;s leading periodical &mdash; published an article about the self-supporting
                        college in Madison, Tennessee. The world was amazed that a college had kept training young
                        people throughout the Depression and that students could work with their hands to pay their way
                        through school. Eleanor Roosevelt, wife of the United States President, also wrote an article
                        about Madison. The US Department of the Interior published a study, and Ripley&lsquo;s Believe
                        It or Not featured the college with the headline: <em>Believe it or not &mdash; the first
                        self-supporting college.</em>
                    </p>
                    <p className="pb-5">
                        As a result of this publicity, over 5,000 student applications poured in from around the
                        United States, including many from people who were not Seventh-day Adventists. Madison maxed
                        out its capacity at 450 students. Truly, it had become <em>&ldquo;a spectacle to the world,
                        to angels, and to men.&rdquo;</em>
                    </p>

                    {/* The Formation of ASI */}
                    <h2 id="formation" className="heading-sub scroll-mt-[120px]">
                        The Formation of ASI
                    </h2>
                    <p className="pb-5">
                        By 1942, at the start of World War II, there were 47 self-supporting ministries in the South,
                        all of which had been impacted by Madison. These ministries were healing thousands of people,
                        educating thousands more, and laying a strong foundation for the growth of the church in the
                        Southern Union.
                    </p>
                    <p className="pb-5">
                        The war brought fresh urgency to the message of country living. Many Adventists living in
                        European cities lost their lives during the bombing campaigns. The General Conference took a
                        heightened interest in the country living message. Sutherland was called to meet with church
                        leadership. He was appointed secretary of the newly formed North American Commission of
                        Self-Supporting Workers and was added to the Country Living Board of Counsellors alongside
                        General Conference President N.C. Wilson and Elder C.B. Haynes. Their work resulted in the
                        publication of the compilation <em>Country Living</em> in 1946, the book still available today.
                    </p>
                    <p className="pb-5">
                        At the Fall Council of 1945, the General Conference formally recommended the organisation of an
                        association to unify the self-supporting workers and to promote a strong tie with the church
                        organisation. In 1946, Madison College and the Southern Union Conference worked together to
                        align the self-supporting units with the church. Sutherland was then appointed to the Commission
                        on Rural Living, which was given two primary tasks: first, to educate church members in the
                        country living message; and second, to establish an association of self-supporting institutions.
                    </p>
                    <p className="pb-5">
                        In March 1947, that commission organised a meeting in Cincinnati, Ohio, with representatives
                        from approximately 25 self-supporting institutions. Under the chairmanship of President N.C.
                        Wilson and with E.A. Sutherland serving as secretary, the Association of Seventh-day Adventist
                        Self-Supporting Institutions was officially formed. Sutherland became its first president, with
                        Dr. Wayne McFarland serving as the first organisational secretary. Elder C.B. Haynes from the
                        General Conference called it <em>&ldquo;a great day in the history of the
                        church.&rdquo;</em>
                    </p>
                    <p className="pb-5">
                        During this formation meeting, frequent reference was made to Ellen White&lsquo;s
                        statement: <em>&ldquo;The work of God in this earth can never be finished until the men and
                        women comprising our church membership rally to the work, and unite their efforts with those of
                        ministers and church officers&rdquo;</em> (Gospel Workers, p. 352). This conviction &mdash; that
                        lay people and church leaders must work hand in hand &mdash; became the foundational principle
                        of the new organisation.
                    </p>
                    <p className="pb-5">
                        Among the first charter members were institutions whose names still resonate: Little Creek,
                        Fountain Head, Peewee Valley, Pisgah, and Wildwood &mdash; which had only been established in
                        1942, the youngest of the founding members.
                    </p>

                    {/* The Growth of ASI */}
                    <h2 id="asi-growth" className="heading-sub scroll-mt-[120px]">
                        The Growth of ASI
                    </h2>
                    <p className="pb-5">
                        The impact of Madison and its affiliated ministries on the growth of the Adventist Church in
                        the South was profound. In 1904, the Southern Union had been the smallest union in the United
                        States. By 1960, it had become the second largest, and by 2003, it was the largest union in the
                        North American Division. The 2023 financial reports show a tithe income of $275 million &mdash;
                        the highest of any union in the world, and more than 10 of the 13 world divisions. Far from
                        diverting resources away from the organised church, the presence of supporting ministries in the
                        Southern Union had helped to build the strongest, healthiest, and most financially secure field
                        in the world.
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
                    <h3 id="end-of-era" className="heading-minor scroll-mt-[120px]">
                        The End of an Era
                    </h3>
                    <p className="pb-5">
                        Sadly, Madison College itself did not survive. Sutherland held his presidency well into his
                        eighties, but adequate succession planning had not been done. After he stepped aside and
                        eventually passed away in the early 1950s, the school went through a series of leaders in rapid
                        succession, none of whom could recapture the original vision. There was turmoil on campus,
                        division over the direction of the college, and mounting debt. In 1965, Madison College was
                        forced to close its doors. The school was turned over to the church, and its nursing school
                        licence was transferred to Southern Missionary College &mdash; known today as Southern Adventist
                        University.
                    </p>
                    <p className="pb-5">
                        The closure of Madison is a sobering reminder that even the most God-blessed ventures require
                        faithful stewardship, clear vision, and careful planning for the future. Yet the seeds that
                        Madison planted &mdash; in the lives of its graduates, in the ministries they founded, and in
                        the organisation of ASI itself &mdash; continue to bear fruit around the world to this day.
                    </p>

                    {/* ASI Today */}
                    <h2 id="today" className="heading-sub scroll-mt-[120px]">
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
                        Adventist Church. In many ways, the organisation still embodies the vision and values that were
                        the hallmarks of Madison College and its founders: faith, innovation, self-sacrifice, and a
                        deep commitment to sharing Christ wherever life takes you.
                    </p>
                    <p className="pb-5">
                        Today, 99.9% of the Seventh-day Adventist Church are lay members &mdash; that means there are
                        over 1,000 lay members for every one pastor. As Ellen White
                        wrote: <em>&ldquo;The work of God in this earth can never be finished until the men and women
                        comprising our church membership rally to the work, and unite their efforts with those of
                        ministers and church officers&rdquo;</em> (Gospel Workers, p. 352). That conviction &mdash; as
                        urgent now as it was in 1947 &mdash; remains the beating heart of ASI.
                    </p>

                    {/* ASI in the United Kingdom */}
                    <h2 id="uk" className="heading-sub scroll-mt-[120px]">
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

                    {/* Timeline */}
                    <h2 id="timeline" className="heading-section scroll-mt-[120px]">Key Dates</h2>
                    <div className="relative my-8 ml-4">
                        {/* Vertical line */}
                        <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-asi-blue/30"/>

                        {[
                            {year: '1865', text: 'Edward Alexander Sutherland born in Prairie du Chien, Wisconsin'},
                            {year: '1888', text: 'Sutherland and Magan meet at Battle Creek College'},
                            {year: '1892', text: 'Walla Walla College opens under Sutherland\u2019s leadership'},
                            {year: '1897', text: 'Sutherland called back to Battle Creek College as president'},
                            {year: '1901', text: 'College relocated to Berrien Springs as Emmanuel Missionary College'},
                            {year: '1904', text: 'Madison College founded near Nashville, Tennessee'},
                            {year: '1905', text: 'First graduates go out to establish self-supporting outposts'},
                            {year: '1909', text: 'First self-supporting convention held at Madison'},
                            {year: '1915', text: '39 self-supporting groups across three US states'},
                            {year: '1931', text: 'Madison thrives through the peak of the Great Depression'},
                            {year: '1947', text: 'ASI formally organised in Cincinnati under the General Conference'},
                            {year: '1965', text: 'Madison College closes its doors'},
                            {year: '1979', text: 'Name changed to Adventist-laymen\u2019s Services and Industries'},
                            {year: '1983', text: 'First overseas ASI chapter formed in Leicester, UK'},
                            {year: '1990', text: 'UK chapter renamed to Adventist Business and Professionals Association'},
                            {year: '1998', text: 'ASI Europe formed'},
                            {year: '2006', text: 'UK chapter renamed back to ASI UK'},
                            {year: '2024', text: 'ASI UK relaunched at Newbold College'},
                        ].map((item) => (
                            <div key={item.year} className="relative flex items-start gap-4 pb-6">
                                {/* Dot */}
                                <div
                                    className="relative z-10 mt-1.5 h-4 w-4 flex-shrink-0 rounded-full bg-asi-blue"/>
                                {/* Content */}
                                <div>
                                    <span className="font-bold text-asi-blue">{item.year}</span>
                                    <span className="ml-2 text-gray-700">&mdash; {item.text}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Related Content */}
                    <h2 id="related" className="heading-section scroll-mt-[120px]">Related Content</h2>

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
                </div>
            </div>
        </div>
    )
}
