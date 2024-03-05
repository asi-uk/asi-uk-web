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

      <h1 className="text-asi-blue text-3xl md:text-4xl font-bold mb-6 text-center md:text-left">About ASI</h1>
      <p>ASI’s history is rooted in Madison College, an Adventist self-supporting institution established in 1904 near Nashville, with Ellen White a stern supporter of the concept.  The organisation grew and during its official formation meeting in 1947 frequent reference was made to Ellen White’s statement – “The work of God in this earth can never be finished until the men and women comprising our church membership rally to the work, and unite their efforts with those of ministers and church officers” Gospel Workers, p. 352. That is what ASI is all about - lay people inspiring each other for mission work and serving hand in hand with the church ministers and officers.  Togetherness and inspiration!</p>

      <div className="group bg-slate-50 transition duration-300 ease-out hover:bg-slate-100 rounded-2xl p-5 my-8 ">
              <Link href="/constitution" className="text-center">
                <div>
                  <h2 className="text-lg md:text-xl font-bold text-asi-blue">
                    Constitution <span className="transition duration-300 ease-in-out group-hover:translate-x-2 inline-block">-&gt;</span>
                  </h2>
                  <p className="text-sm md:text-base">Fundamental principles, structure, and rules that govern ASI UK operations</p>
                </div>
              </Link>
              </div>

        <div className="group bg-slate-50 transition duration-300 ease-out hover:bg-slate-100 rounded-2xl p-5 my-8 ">
        <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSepfSgNKd0cxDILqxmI-HrfcoL4YN-gImb_7YekDqmBWD2wng/viewform" rel="noopener noreferrer" className="text-center">
                <div>
                  <h2 className="text-lg md:text-xl font-bold text-asi-blue">
                    Join <span className="transition duration-300 ease-in-out group-hover:translate-x-2 inline-block">-&gt;</span>
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