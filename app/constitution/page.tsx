import Image from 'next/image'
import Link from 'next/link';
import MainHeader from "@/app/components/MainHeader";

export const metadata = {
  title: "ASI UK | Constitution",
  description:
      "Founding document of the UK chapter of Adventist Laymen's Services and Industries",
  keywords: [
    "ASI UK constitution",
    "ASI constitution",
    "ASI",
    "ASI UK",
    "ASI-UK",
    "adventist",
    "adventist uk",
    "adventist laymen's services and industries",
    "ministry",
    "ministries",
  ],
  openGraph: {
    url: "https://asiuk.org/constitution",
    type: "website",
    title: "ASI UK Constitution",
    description:
        "Learn more about the ASI UK organisational structure and founding principles",
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
    title: "ASI UK Constitution",
    description:
        "Learn more about the ASI UK organisational structure and founding principles",
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

export default function Constitution() {
  return (
  <div className="flex items-center justify-center w-screen">
    <div className="max-w-screen-md mx-auto">
    <MainHeader />
      <div className="text-left p-5">
        
      <h1 className="text-asi-blue text-3xl md:text-4xl font-bold mb-6">Constitution</h1>
      <ol class="list-decimal list-outside">
        <li class="text-xl md:text-2xl text-asi-blue font-semibold"><h2 className="my-4">Definitions</h2>
          <ul className="list-none leading-normal text-sm md:text-base text-black font-normal">
            <li class="mb-4"><p>&ldquo;<strong>Association</strong>&rdquo; shall be named &lsquo;<strong>Adventist laymen&rsquo;s Services and Industries, United Kingdom</strong>&rsquo; (shorthand &lsquo;<strong>ASI UK</strong>&rsquo;)</p></li>
            <li class="mb-4"><p>&ldquo;<strong>Business Year</strong>&rdquo; of the Association shall be the Calendar Year as observed in the United Kingdom.</p></li>
            <li class="mb-4"><p>&ldquo;<strong>Business</strong>&rdquo; and/or &ldquo;<strong>Businesses</strong>&rdquo; are self-employed individuals, entrepreneurs, companies, entities, and enterprises. This is not an exhaustive list and the Executive can use its discretion to add to this list.</p></li>
            <li class="mb-4"><p>&ldquo;<strong>Chair</strong>&rdquo; is the presider of a meeting, usually the President, or if incapacitated the Vice President, or anyone else who has been elected to preside over the meeting.</p></li>
            <li class="mb-4"><p>&ldquo;<strong>Church</strong>&rdquo; is defined as the &lsquo;<strong>Seventh-day Adventist Church</strong>&rsquo;, exercising its global mission and principles throughout the geographical region of British Union Conference together with its Conferences, Missions, and churches, all operating within the Trans-European Division.</p></li>
            <li class="mb-4"><p>&ldquo;<strong>Close Relative</strong>&rdquo; is an individual who is either a father, mother, brother, sister, husband, wife, son, daughter, grandmother and grandfather by blood (not marriage), grandson, granddaughter, mother-in-law, father-in-law, daughter-in-law, son-in-law, grandmother-in-law, grandfather-in-law, brother-in-law, sister-in-law, uncle by blood or marriage, aunt by blood or marriage, nephew or niece by blood or marriage, or first cousin, equivalent step-family members, a legal dependent, or any other person so interpreted by the General Meeting and/or Executive. By blood or marriage refers to the individual&rsquo;s relative by blood or marriage.</p></li>
            <li class="mb-4"><p>&ldquo;<strong>Decision</strong>&rdquo; is where an express resolution is voted on and passed during a meeting. Decisions shall be carried out and are to be officially recorded in the minutes.</p></li>
            <li class="mb-4"><p>&ldquo;<strong>Executive, the</strong>&rdquo; is the Association&rsquo;s board occupied by Executive Members who exercise their authority in operating the Association in accordance with this constitution. </p></li>
            <li class="mb-4"><p>&ldquo;<strong>Executive Member</strong>&rdquo; is the officer appointed to the Association&rsquo;s board and upon whom authority is conferred to act in the best interests of the Association.</p></li>
            <li class="mb-4"><p>&ldquo;<strong>Member</strong>&rdquo; and/or &ldquo;<strong>Membership</strong>&rdquo; are members who have been granted a membership status. Privileges and Voting Rights are conferred to them as defined in this constitution.</p></li>
            <li class="mb-4"><p>&ldquo;<strong>Ministry</strong>&rdquo; and/or &ldquo;<strong>Ministries</strong>&rdquo; are missionary organisations, not-for-profit organisations, associations, individuals running their own ministry, and groups. This is not an exhaustive list and the Executive can use its discretion to add to this list.</p></li>
            <li class="mb-4"><p>&ldquo;<strong>Professionals</strong>&rdquo; are individuals who are employed in a professional capacity and may be employed by an entity that they do not control. These may include, however are not limited to, executives of companies, consultants, lawyers, physicians, pharmacists, psychologists, tax advisors, etc. The Executive can use its discretion to add to this list.</p></li>
            <li class="mb-4"><p>&ldquo;<strong>Simple Majority</strong>&rdquo; means a majority of the votes exercised by Members with Voting Rights present constituting a quorum, with each Member present and having one vote. The voting threshold must be fifty percent (50%). In the event of a tie the Chairperson shall exercise a casting vote.</p></li>
            <li class="mb-4"><p>&ldquo;<strong>Voting Rights</strong>&rdquo; are conferred to Members of the Association have the right to vote as in accordance with this constitution.</p></li>
          </ul>
        </li>
        <li class="text-xl md:text-2xl text-asi-blue font-semibold"><h2 className="my-4">Purpose and Not-for-Profit Status</h2>
        <ol class="list-decimal list-outside text-sm md:text-base text-black font-normal">
          <li class="mb-4">The purpose of the association is to:
            <ol class="list-decimal list-outside text-sm md:text-base">
              <li>Support, promote and advise associations, businesses, charities, companies, groups, institutions, and organisations, moulded according to Adventist principles, as long as their goals are of a missionary, evangelistic, humanitarian, health, educational, outreach, or similar non-profit nature.</li>
              <li>Motivate members of the Church who are self-employed or who own privately-owned businesses or who own or manage non-profit associations in harmony with the goals and values of the Church, to cooperate with each other and with the entities of the Church and to work in harmony with and for the benefit of the Church in fulfilling its gospel commission and thus support the spreading of the Adventist message.</li>
              <li>Strengthen the effectiveness of individuals and associations in their work and credible Christian testimony by facilitating the exchange of information, providing inspiration, motivation and the coordination of goals and programs as well as the experience of Christian fellowship.</li>
            </ol>
          </li>
          <li class="mb-4">The Association primarily does not aim at earning a profit for its own benefit. It shall exclusively and directly pursue not-for-profit purposes in the sense of the national tax legislation.</li>
          <li class="mb-4">The Association’s income and assets shall be used exclusively for goals defined in this Constitution. No Member or Executive Member of the Association shall receive for their work compensation from the Association.</li>
        </ol>
        </li>
        <li class="text-xl md:text-2xl text-asi-blue font-semibold"><h2 className="my-4">Working Relationship with the Church</h2>
          <ol class="list-decimal list-outside text-sm md:text-base text-black font-normal">
            <li class="mb-4">Harmony and cooperation between the Association and the Church shall be ensured by the appointment of a representative of the Church on the Executive.</li>
            <li class="mb-4">The Church shall appoint before the General Meeting a representative to the Executive.</li>
          </ol>
        </li>
        <li class="text-xl md:text-2xl text-asi-blue font-semibold"><h2 className="my-4">Membership and Voting Rights</h2>
          <ol class="list-decimal list-outside text-sm md:text-base text-black font-normal">
            <li class="mb-4">The Association shall consist of Ordinary Members, and Sponsoring Members, and is subject to the Membership Application Process prescribed in Article 5.</li>
            <li class="mb-4">&ldquo;<strong>Ordinary Membership</strong>&rdquo; status shall be granted to Businesses, Ministries, and Professionals, and shall have conferred to them one vote. They are subject to the following sub-clauses:
              <ol class="list-decimal list-outside text-sm md:text-base">
                <li>Business Membership shall be granted to Businesses. Whereby an Business consists of several subsidiaries and whereby each subsidiary is applying for membership, each subsidiary can apply for membership under its own name. The subsidiary does not receive Voting Rights and no extra votes are given to the parent entity. A Business applying for membership shall not directly or indirectly be controlled by the Church.</li>
                <li>Ministry Membership shall be granted to Ministries. Whereby a Ministry consists of several subsidiaries and whereby each subsidiary is applying for membership, each subsidiary can apply for membership under its own name. The subsidiary does not receive Voting Rights and no extra votes are given to the parent entity. An Ministry applying for membership shall not directly or indirectly be controlled by the Church.</li>
                <li>Professional Membership shall be granted to individual Professionals.</li>
              </ol>
            </li>
            <li class="mb-4">&ldquo;<strong>Sponsoring Membership</strong>&rdquo; status shall be granted to individuals who are practicing members of the Church and who are willing to support the Association’s goals through financial and/or other means.</li>
            <li class="mb-4">Only Ordinary Members shall have Voting Rights.</li>
          </ol>
        </li>
        <li class="text-xl md:text-2xl text-asi-blue font-semibold"><h2 className="my-4">Membership Application Process</h2>
          <ol class="list-decimal list-outside text-sm md:text-base text-black font-normal">
            <li class="mb-4">Membership shall be granted on the basis of a written membership application which must be directed to the Executive. The Executive shall be free and independent in its decision regarding the granting of Membership.</li>
            <li class="mb-4">Determining criteria for Membership:
              <ol class="list-decimal list-outside text-sm md:text-base">
                <li>The controlling individual of a Business or Ministry shall be a practicing member of the Church and be of good and regular standing, and have a positive standing in the community.</li>
                <li>The Business or Ministry shall operate in harmony with the mission of the Church, shall follow the ethical, financial and spiritual principles of the Church, and shall exert a positive Adventist influence within their environment.</li>
                <li>Professionals shall be practicing members of the Church and be of good and regular standing, and have a positive standing in the community.</li>
              </ol>
            </li>
            <li class="mb-4">In case the application is rejected the Executive shall be under no obligation to give to the applicant any reason for its decision.</li>
          </ol>
        </li>
        <li class="text-xl md:text-2xl text-asi-blue font-semibold"><h2 className="my-4">Termination of Membership</h2>
          <ol class="list-decimal list-outside text-sm md:text-base text-black font-normal">
            <li class="mb-4">Membership in the Association shall end by submitting a formal withdrawal from the Association, by dissolution of the Business or Ministry, death, expulsion, or ending Church membership.</li>
            <li class="mb-4">A formal withdrawal shall take place through a written declaration directed to the Executive and shall become effective at the end of the Business Year.</li>
            <li class="mb-4">A Member can be terminated by a two-thirds majority vote by the Executive, provided that:
              <ol class="list-decimal list-outside text-sm md:text-base">
                <li>After two (2) written reminders the payment of membership fees or other financial commitments are unpaid. Termination shall be voted on only after sending a second reminder and where at least nine (9) months have lapsed from that reminder.</li>
                <li>Where the member is guilty of grossly violating the interest and the principles of the Association and/or the Church as laid out in Articles 2 and 5.</li>
                <li>The Decision to terminate must state the reason for termination. The termination notice must be sent to the member in writing and be dated.</li>
              </ol>
            </li>
            <li class="mb-4">Member&apos;s appeals process. Before the decision of termination is effective, the Executive shall give the opportunity to the Member to submit an appeal regarding the termination.
              <ol class="list-decimal list-outside text-sm md:text-base">
                <li>The termination notice described in article 6.3 has been sent.</li>
                <li>For the appeal to be considered the Member must lodge an appeal in writing within one month from the date of the termination notice and shall be directed to the Executive. The Member&apos;s appeal can then be considered by the Executive.</li>
                <li>After receiving and having considered the appeal, the Executive must bring the termination before a General Meeting to be considered by the Members. The appeals must be added to the General Meeting&apos;s agenda. During this meeting shall the Decision be made regarding the termination of membership.</li>
              </ol>
            </li>
          </ol>
        </li>
        <li class="text-xl md:text-2xl text-asi-blue font-semibold"><h2 className="my-4">Organs of the Association</h2>
          <p className="text-sm md:text-base text-black font-normal">The organs of the Association shall consist of the General Meeting, the Extraordinary Meeting, and the Executive.</p>
        </li>
        <li class="text-xl md:text-2xl text-asi-blue font-semibold"><h2 className="my-4">The General Meeting and Extraordinary Meeting</h2>
          <ol class="list-decimal list-outside text-sm md:text-base text-black font-normal">
            <li class="mb-4">The General Meeting shall be the meeting of all Ordinary Members, and Sponsoring Members of the Association. Only Members with Voting Rights are allowed to cast votes. The General Meeting shall take place annually. Written notice of the meeting shall be given four (4) weeks prior to the meeting and an agenda supplied.</li>
            <li class="mb-4">Each Member is entitled to submit in writing additions to the Agenda up until two (2) weeks before the General Meeting. The chairperson shall announce any additions to the Agenda at the beginning of the General Meeting.</li>
            <li class="mb-4">The General Meeting shall have the following functions: passing of the Budget for the following Business Year proposed by the Executive; presenting of the Annual Report given by the Executive; exonerating the Executive; fixing Membership Fees; electing officers to the Executive; voting changes of the Constitution; voting the dissolution of the Association; and voting of appeals by Members on their dismissal.</li>
            <li class="mb-4">The General Meeting and Extraordinary Meeting shall be Chaired by the President or, in case he or she is incapacitated, by his or her Vice President. In the event that both are incapacitated, the General Meeting and Extraordinary Meeting shall appoint a Chair.</li>
            <li class="mb-4">The General Meeting shall have a quorum regardless of the number of Members present.</li>
            <li class="mb-4">In general, all votes shall be cast by public vote. A secret vote is possible provided a Simple Majority of Members with Voting Rights present request this. The exception is the election of all Executive Members that is cast by secret vote.</li>
            <li class="mb-4">Voting on Decisions shall reached by a Simple Majority Vote. Voting by proxy is not permitted.</li>
            <li class="mb-4">Amendments to the Association&apos;s Constitution may be made by a two-thirds majority vote of those Members present, provided four (4) weeks&apos; written notice of the amendment is given to Members prior to the meeting, detailing the nature and subject of the amendments for consideration.</li>
            <li class="mb-4">Extraordinary Meetings can be called by the Executive, or if one third of the Association’s Members with Voting Rights request it in writing to the Executive. The Executive cannot block the Member’s request and must organise the Extraordinary Meeting within a reasonable time. Four (4) weeks&apos; written notice for the Meeting must be given to Members and an agenda detailing the nature and subject of the Extraordinary Meeting is to be supplied.</li>
            <li class="mb-4">All Decisions made during the General Meeting and Extraordinary Meeting shall be recorded in the minutes which shall be signed by the President and the Executive Secretary. A copy of the minutes shall be sent to Members prior to the following meeting.</li>
          </ol>
        </li>
        <li class="text-xl md:text-2xl text-asi-blue font-semibold"><h2 className="my-4">The Executive</h2>
          <ol class="list-decimal list-outside text-sm md:text-base text-black font-normal marker:text-asi-blue">
            <li class="mb-4 marker:red">Executive Members shall be elected during a General Meeting for a period of two (2) years. The newly elected Executive Members shall take over their responsibility immediately after their election and shall remain in office until their successors have been elected into office.</li>
            <li class="mb-4">The number of officers that constitute the Executive shall be not less than five (5) and not more than seven (7) Executive Members: The President, at least one Vice President, the Executive Secretary, the Treasurer and one representative of the Church. Additional number of Executive Members can be chosen form the Association to make up the maximum number of officers.</li>
            <li class="mb-4">Each Executive Member shall be elected separately and individually, and are voted into office by a Simple Majority. Eligible for election to the Executive shall be, with the exception of the representative of the Church, only Members of the Association.</li>
            <li class="mb-4">The composition of the Executive shall not have a majority consisting of Close Relatives, whether they be related through blood or marriage.</li>
            <li class="mb-4">The General Meeting can vote by Simple Majority not to fill a vacant position if the number of Executive Members fall below the minimum number of officers.</li>
            <li class="mb-4">The Association shall be represented by the President and bound in legal matters by the President and one additional Executive Member. Legal matters can also be bound in combination with four (4) Executive Members.</li>
            <li class="mb-4">The Executive shall make Decisions during Executive Meetings. The notice period for a meeting shall be two (2) weeks and notice sent to Executive Members together with an Agenda. Decisions shall be recorded by the Executive Secretary.</li>
            <li class="mb-4">The Executive shall have quorum if all Executive Members have been sent an invitation and where at least fifty percent (50%) are present. Decisions shall be reached by a Simple Majority. The Chair has the casting vote in case of a tie.</li>
            <li class="mb-4">The Executive shall act in the best interest of the association and shall have a broad scope of authority to execute operations to fulfil the purpose as defined in this constitution.</li>
            <li class="mb-4">The Executive can make Decisions by letter or by electronic means provided all Executive Members agree.</li>
            <li class="mb-4">The authority to make purchases or bind the association in financial and legal matters of £10,000 (ten thousand pounds) and above shall require an express Decision passed during a General Meeting.</li>
            <li class="mb-4">The President shall Chair all Executive Meetings. If he or she is incapacitated the Vice President shall Chair the meetings. In the event that both are incapacitated, the Executive shall appoint a Chair. Furthermore, they are expected to perform such duties that may be within scope of the authority of the office.</li>
            <li class="mb-4">The Executive Secretary shall keep written records of all the meetings, have custody of all records, notify members of all General and Extraordinary Meetings, and perform such duties that may be within scope of the authority of the office.</li>
            <li class="mb-4">The Treasurer shall manage all finances of the Association, collect all Membership Fees, perform such duties that may be within scope of the authority of the office, and submit an audited report to the General Meeting. All auditing shall be done by an independent auditor. The auditor shall be appointed by the Executive.</li>
            <li class="mb-4">If an Executive Member discontinues in their office, the Executive shall elect a replacement until the following General Meeting. Each replacement shall be elected separately and individually. The Executive should take action to maintain the minimum number of Executive Members between General Meetings, except where a decision has been made not to fill a vacant position, as per clause 9.5. Discontinuation of Membership in the Association or Church membership shall also terminate their office.</li>
            <li class="mb-4">The election of any replacement Executive Member shall be confirmed during the following General Meeting. In case this confirmation does not take place, the General Meeting shall be free to elect a new officer, however, their tenure shall end at the term of the other Executive Members.</li>
          </ol>
        </li>
        <li class="text-xl md:text-2xl text-asi-blue font-semibold"><h2 className="my-4">Membership Fees</h2>
          <ol class="list-decimal list-outside text-sm md:text-base text-black font-normal">
            <li class="mb-4">The amount of the membership fee shall be proposed by the Executive and voted upon during the General Meeting.</li>
            <li class="mb-4">The membership fee request shall be sent to the Member in writing and shall be due within four (4) weeks from the date of issue.</li>
            <li class="mb-4">Membership renewal shall be sent to Members within one (1) month of the new Business Year.</li>
          </ol>
        </li>
        <li class="text-xl md:text-2xl text-asi-blue font-semibold"><h2 className="my-4">Dissolution of the Association</h2>
          <ol class="list-decimal list-outside text-sm md:text-base text-black font-normal">
            <li class="mb-4">The dissolution of the Association can only be raised during a General Meeting or an Extraordinary Meeting whereby at least fifty percent (50%) of all Members with Voting Rights shall be present. The vote must be carried by a two-thirds majority of all valid votes cast. The Executive shall be the liquidators of the Association provided the Members do not vote otherwise.</li>
            <li class="mb-4">All assets of the Association which will exist at the time of the liquidation or dissolution of the Association shall be transferred to the Church who in turn shall be under obligation to use these assets exclusively for not for profit purposes. In addition, any records relating to the dissolution together with any General Meeting or Extraordinary Meeting minutes shall be presented to the Church for record keeping.</li>
          </ol>
        </li>
      </ol>
      </div>
    </div>
  </div>
  )
}