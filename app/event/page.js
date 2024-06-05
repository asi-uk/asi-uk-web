"use client";
import Image from 'next/image'
import dynamic from 'next/dynamic'; // Import dynamic from 'next/dynamic'
import Link from 'next/link';
import EventIcon from '@mui/icons-material/Event';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const CountdownTimer = dynamic(() => import('../components/CountdownTimer'), { ssr: false });

export default function Event() {

  const targetDate = new Date('2024-06-23T10:00:00');

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

            <h1 className="text-asi-blue text-3xl md:text-4xl font-bold mb-6 text-center md:text-left">General Meeting</h1>
            <div>The first general meeting for the relaunched ASI UK will be taking place on the 23rd of June at Camp Hill SDA Church in Birmingham. The event will allow for the voting and formation of the executive committee along with further actions and discussions to organise ASI UK work moving forward.</div>
            
            </div>

            <div className="grid grid-cols-2 gap-5 mx-5">
            <div className="text-center border-2 border-slate-100 rounded-2xl p-5">
                <h2 className="text-asi-blue text-lg md:text-xl font-bold"><EventIcon className="mx-2 my-1" />When</h2>
                <h3 className="text-2xl font-medium">23 June<span className="hidden md:inline">, 2024</span></h3>
                <p>10:00 am</p>
              </div>
              <a target="_blank" href="https://maps.app.goo.gl/YyNDb2grLk7mHj269" rel="noopener noreferrer">
                <div className="group text-center border-2 border-slate-100 rounded-2xl p-5 transition duration-300 ease-out hover:bg-slate-100">
                  <h2 className="text-asi-blue text-lg md:text-xl font-bold"><LocationOnIcon className="mx-2 my-1 transition duration-300 ease-in-out group-hover:translate-y-[-5px] inline-block" />Where</h2>
                  <h3 className="text-2xl font-medium">Camp Hill <span className="hidden md:inline">SDA Church</span></h3>
                  <p>Birmingham B12 0JP</p>
                </div>
                </a>
            </div>

            <div className="group transition duration-300 bg-slate-50 ease-out hover:bg-slate-100 rounded-2xl p-5 mx-5 mt-5">
              <Link href="https://forms.gle/1AjYHD823AyJRShKA" className="text-center">
                <div>
                  <h2 className="text-lg md:text-xl font-bold text-asi-blue">
                    Register <span className="font-sans transition duration-300 ease-in-out group-hover:translate-x-2 inline-block">→</span>
                  </h2>
                  <p className="text-sm md:text-base">Click here to register for the weekend</p>
                </div>
              </Link>
              </div>

            <div className="text-left p-5">

            <h2 className="text-asi-blue text-2xl font-bold mt-5 mb-2 text-center md:text-left px-4 py-2 bg-slate-50 rounded-xl">Networking Meetings</h2>
            Ahead of the general meeting on Sunday, we will be holding some networking meetings on Friday evening and Sabbath to provide opportunities to get acquainted with others who are passionate about witnessing and sharing Christ through their business or profession.
            <div className="text-md mt-3 mb-4 text-asi-blue">Location: King Soloman International Business School, Lord St, Birmingham B7 4AA</div>

            <h3 className="text-asi-blue text-lg font-bold mt-5 mb-2 text-center md:text-left">Friday, 21 June</h3>
            <div className="grid grid-cols-4 md:grid-cols-7 gap-y-4 gap-x-2">
              <div className="text-asi-blue">7:00 pm</div><div class="col-span-3 md:col-span-6">Vespers with light refreshments*</div>
            </div>

            <h3 className="text-asi-blue text-lg font-bold mt-5 mb-2 text-center md:text-left">Sabbath, 22 June</h3>
            <div className="grid grid-cols-4 md:grid-cols-7 gap-y-4 gap-x-2">
              <div className="text-asi-blue">10:00 am</div><div class="col-span-3 md:col-span-6">Church</div>
              <div className="text-asi-blue">1:00 pm</div><div class="col-span-3 md:col-span-6">Lunch*</div>
            </div>

            <h2 className="text-asi-blue text-2xl font-bold mt-10 mb-2 text-center md:text-left px-4 py-2 bg-slate-50 rounded-xl">General Meeting</h2>
            <div className="text-md mt-3 mb-4 text-asi-blue">Location: Camp Hill SDA Church, Birmingham B12 0JP</div>

            <h3 className="text-asi-blue text-lg font-bold mt-5 mb-2 text-center md:text-left">Sunday, 23 June</h3>
            <div className="grid grid-cols-4 md:grid-cols-7 gap-y-4 gap-x-2">
              <div className="text-asi-blue">10:00 am</div><div class="col-span-3 md:col-span-6">Registration and networking</div>
              <div className="text-asi-blue">11:00 am</div><div class="col-span-3 md:col-span-6">General Meeting</div>
              <div className="text-asi-blue">1:00 pm</div><div class="col-span-3 md:col-span-6">Lunch*</div>
            </div>

            <div className='my-10'>
            *£25 per person for all three meals
            </div>

            </div>


            <div className="group transition duration-300 bg-slate-50 ease-out hover:bg-slate-100 rounded-2xl p-5 mx-5 mt-5">
              <Link href="https://forms.gle/1AjYHD823AyJRShKA" className="text-center">
                <div>
                  <h2 className="text-lg md:text-xl font-bold text-asi-blue">
                    Register <span className="font-sans transition duration-300 ease-in-out group-hover:translate-x-2 inline-block">→</span>
                  </h2>
                  <p className="text-sm md:text-base">Click here to register for the weekend</p>
                </div>
              </Link>
              </div>

          <div className="grid grid-cols-2 gap-5 m-5">
              <div className="group bg-slate-50 transition duration-300 ease-out hover:bg-slate-100 rounded-2xl p-5 ">
              <Link href="/about" className="text-center">
                <div>
                  <h2 className="text-lg md:text-xl font-bold text-asi-blue">
                    About <span className="font-sans transition duration-300 ease-in-out group-hover:translate-x-2 inline-block">→</span>
                  </h2>
                  <p className="text-sm md:text-base">Find out more about the mission and structure of ASI UK</p>
                </div>
              </Link>
              </div>

              <div className="group bg-slate-50 transition duration-300 ease-out hover:bg-slate-100 rounded-2xl p-5">
              <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSepfSgNKd0cxDILqxmI-HrfcoL4YN-gImb_7YekDqmBWD2wng/viewform" rel="noopener noreferrer" className="text-center">
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