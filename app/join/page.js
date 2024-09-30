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

      <h1 className="text-asi-blue text-3xl md:text-4xl font-bold mb-6 text-center md:text-left">Join</h1>
      <p>The ASI UK team welcomes your interest in joining our organisation. Established officially in 1947, ASI’s ideals date back to the 19th century. We are a group of dedicated individuals using our talents in service to God to make a positive impact in our community. If you wish to become a member, please complete this application form and be prepared to share CHRIST’S MESSAGE IN YOUR MARKETPLACE.</p>

      <div className="group bg-slate-50 transition duration-300 ease-out hover:bg-slate-100 rounded-2xl p-5 my-8 ">
        <a target="_blank" href="https://forms.gle/WYLiMMsVrP8qjYdj6" rel="noopener noreferrer" className="text-center">
                <div>
                  <h2 className="text-lg md:text-xl font-bold text-asi-blue">
                    Membership Form<span className="font-sans transition duration-300 ease-in-out group-hover:translate-x-2 inline-block">→</span>
                  </h2>
                  <p className="text-sm md:text-base w-50">Join the movement of Adventist lay professionals in the UK</p>
                </div>
              </a>
        </div>

      <h1 id="information-for-membership" className="text-asi-blue text-2xl md:text-3xl font-bold mb-6 text-center md:text-left">Information for Membership</h1>
      <p>Membership in ASI UK is open to any member of the Seventh-day Adventist Church who is in good and regular standing, manages a business, provides professional services, sells products, or has a supporting ministry. Members agree to align their business practices and personal lives with the goals and principles outlined in the organisation&lsquo;s mission and vision.</p>

      <div className="my-10">
        <h1 className="text-asi-blue text-xl md:text-2xl font-bold mb-6 text-center md:text-left">Types of Membership in ASI UK</h1>
        <p className="pb-5">An individual or organisation may qualify for ASI UK membership if it meets the following requirements:</p>
        <ol>
          <li>Is an individual that is employed in a profession or are self-employed and is a member of the Seventh-day Adventist Church.</li>
          <li>An organisation is owned and controlled by an individual who is a member of the Seventh-day Adventist Church.</li>
          <li>An individual who owns and/or operates a religious based organisation, self-supporting ministry, or mission project that complies with the Seventh-day Adventist Church’s K 05 05 definition of a Supporting Ministry, and where that organisation does not receive a salary or subsidies from any organisation within the SDA Church.</li>
        </ol>
        <p>Continuation of membership is contingent upon the member remaining in harmony with the principles of the Seventh-day Adventist Church. Additionally, individual members must maintain a strong spiritual standing and good relations with the Seventh-day Adventist Church.</p>
        
        <div className="my-6">
          <h2 className="text-asi-blue text-lg md:text-xl font-bold mb-6 text-left">1. Ordinary Member</h2>
          <p>These members include business owners, co-managers of companies, firms, and institutions, religious self-supporting ministries and/or mission projects that is K 05 05 compliant, and professionals specializing in various fields, such as accounting, law, medicine, banking, engineering, architecture, construction, amongst others. They may also be self-supporting workers who, despite having limited time, are committed to serving God and appreciate the vision of ASI. Collectively, they constitute the Annual General Meeting (AGM), one of the governing bodies of ASI UK. They approve all decisions made by the Executive Committee.</p>
          <p className="my-4">The membership fee is £100 per annum.</p>
        </div>

        <div className="my-6">
          <h2 className="text-asi-blue text-lg md:text-xl font-bold mb-6 text-left">2. Supporting Member</h2>
          <p>There are individuals who wish to support the organisation passively, or back specific projects based on their personal interests. These members do not participate in the decisions of organisation and are not eligible to vote during the AGM. However, their membership allows them to represent ASI UK in their cities, encouraging and motivating other laypeople about the organisation&lsquo;s purpose and mission.</p>
          <p className="my-4">The membership fee is £20 per annum.</p>
        </div>
      </div>


      <div className="group bg-slate-50 transition duration-300 ease-out hover:bg-slate-100 rounded-2xl p-5 my-8 ">
        <a target="_blank" href="https://forms.gle/WYLiMMsVrP8qjYdj6" rel="noopener noreferrer" className="text-center">
                <div>
                  <h2 className="text-lg md:text-xl font-bold text-asi-blue">
                    Membership Form<span className="font-sans transition duration-300 ease-in-out group-hover:translate-x-2 inline-block">→</span>
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