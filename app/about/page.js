import Image from 'next/image'
import Link from 'next/link';

export default function About() {
  return (
  <div className="flex items-center justify-center w-screen">
    <div className="max-w-screen-md mx-auto">
    <Link href="/">
        <div className="flex p-8 items-center justify-center hover:bg-slate-50 rounded-xl content-center w-7/12 md:w-1/3 mx-auto mt-8">
            <Image
              src="/asiLogo.svg"
              alt="ASI Logo"
              width={375}
              height={150}
              priority
              className="object-contain max-w-full max-h-full"
            />
          </div>
          </Link>
      <div className="text-left p-5">

      <h1 className="text-asi-blue text-3xl md:text-4xl font-bold mb-6 text-center md:text-left pt-8">What is ASI?</h1>
      <p className="pb-5">Adventist-laymen’s in Services and Industry (ASI) is an organisation comprised of members of the Seventh-day Adventist Church who are either employed in the private business, are self-employed, or hold managerial positions. The uniqueness of the organisation can be described in two parts:</p>
      <p className="pb-5">Firstly, we acknowledge that our time, talents, wealth, and our bodies belong to God, and we are merely stewards of these gifts. With this understanding, we are committed to using our professions to support the spread of the gospel message (Luke 9:1-3, Testimonies for the Church, vol. 4, page 469).</p>
      <p className="pb-5">Secondly, we pledge to support the diverse outreach programs of the Seventh-day Adventist Church, which include health, education, missionary work, community ministry, family, and other special projects. ASI has approximately 2,000 members worldwide, comprising of men and women from all walks of life. These members reflect the diversity found within our church. </p>
      <p className="pb-5">ASI's philosophy is to advocate for a Christ-centred way of life that is expressed through a daily commitment to God. ASI members endeavour to embody God's love and share it with the millions of people they encounter in their business or professional engagements each year. ASI’s motto is: SHARING CHRIST IN THE MARKETPLACE!</p>

      <h1 className="text-asi-blue text-2xl md:text-3xl font-bold mb-6 text-center md:text-left">History</h1>
      <p>ASI’s history is rooted in Madison College, an Adventist self-supporting institution established in 1904 near Nashville, with Ellen White a stern supporter of the concept.  The organisation grew and during its official formation meeting in 1947 frequent reference was made to Ellen White’s statement – “The work of God in this earth can never be finished until the men and women comprising our church membership rally to the work, and unite their efforts with those of ministers and church officers” Gospel Workers, p. 352. That is what ASI is all about - lay people inspiring each other for mission work and serving hand in hand with the church ministers and officers.  Togetherness and inspiration!</p>

      <div className="group bg-slate-50 transition duration-300 ease-out hover:bg-slate-100 rounded-2xl p-5 my-8 ">
              <Link href="/constitution" className="text-center">
                <div>
                  <h2 className="text-lg md:text-xl font-bold text-asi-blue">
                    Constitution <span className="font-sans transition duration-300 ease-in-out group-hover:translate-x-2 inline-block">→</span>
                  </h2>
                  <p className="text-sm md:text-base">Fundamental principles, structure, and rules that govern ASI UK operations</p>
                </div>
              </Link>
              </div>

        <div className="group bg-slate-50 transition duration-300 ease-out hover:bg-slate-100 rounded-2xl p-5 my-8 ">
        <a target="_blank" href="/join" rel="noopener noreferrer" className="text-center">
                <div>
                  <h2 className="text-lg md:text-xl font-bold text-asi-blue">
                    Join <span className="font-sans transition duration-300 ease-in-out group-hover:translate-x-2 inline-block">→</span>
                  </h2>
                  <p className="text-sm md:text-base w-50">Join the movement of Adventist lay professionals in the UK</p>
                </div>
              </a>
        </div>
      </div>

      
    </div>
  </div>
  )
}