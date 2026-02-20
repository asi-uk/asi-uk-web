import Link from "next/link";
import {
    User,
    HeartHandshake,
    Briefcase,
    Building2,
    Stethoscope,
    CheckCircle2,
    Vote,
    XCircle,
    Globe,
    Shield,
    ChevronRight,
} from "lucide-react";

export const metadata = {
  title: "ASI UK | Membership",
  description:
      "Join the UK chapter of Adventist-laymen's Services and Industries",
  keywords: [
    "Join ASI UK",
    "Join ASI",
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
    url: "https://asiuk.org/membership",
    type: "website",
    title: "ASI UK | Membership",
    description:
        "Apply to be a member of ASI UK",
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
    title: "ASI UK | Membership",
    description:
        "Apply to be a member of ASI UK",
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

export default function Membership() {
  return (
      <div>
        {/* Section 1: Hero Header */}
        <section className="w-full border-b border-slate-200">
          <div className="max-w-5xl mx-auto px-4 py-12 md:py-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-asi-blue mb-4">
              Join ASI UK
            </h1>
            <p className="text-sm md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed mb-6">
              Be part of a movement of Adventist lay professionals and organisations using their talents in service to God to make a positive impact in the community.
            </p>
            <Link href="/membership/application-form"
                  className="group inline-flex items-center gap-1.5 text-asi-blue hover:text-asi-darkBlue font-semibold transition">
              Apply now
              <ChevronRight className="h-4 w-4 transition duration-300 ease-in-out group-hover:translate-x-1" />
            </Link>
          </div>
        </section>

        {/* Section 2: Who Can Join? */}
        <section className="w-full">
          <div className="max-w-5xl mx-auto px-4 py-12 md:py-16">
            <h2 className="text-3xl font-bold text-asi-blue text-center mb-10">
              Who Can Join?
            </h2>

            {/* Three Ordinary membership paths */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white rounded-2xl p-6 border border-slate-200">
                <div className="flex items-center justify-between mb-4">
                  <div className="rounded-full bg-asi-blue/10 p-2 shrink-0">
                    <Briefcase className="h-5 w-5 text-asi-blue" />
                  </div>
                  <span className="bg-slate-100 text-asi-blue text-xs font-medium px-3 py-1 rounded-full">
                    Ordinary Membership
                  </span>
                </div>
                <h3 className="text-lg font-bold text-asi-blue mb-2">Business Owners</h3>
                <p className="text-sm text-slate-600">
                  Self-employed individuals, entrepreneurs, and companies owned or controlled by an SDA Church member.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200">
                <div className="flex items-center justify-between mb-4">
                  <div className="rounded-full bg-asi-blue/10 p-2 shrink-0">
                    <Stethoscope className="h-5 w-5 text-asi-blue" />
                  </div>
                  <span className="bg-slate-100 text-asi-blue text-xs font-medium px-3 py-1 rounded-full">
                    Ordinary Membership
                  </span>
                </div>
                <h3 className="text-lg font-bold text-asi-blue mb-2">Professionals</h3>
                <p className="text-sm text-slate-600">
                  Executives, consultants, lawyers, physicians, engineers, architects, accountants, and other specialists.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200">
                <div className="flex items-center justify-between mb-4">
                  <div className="rounded-full bg-asi-blue/10 p-2 shrink-0">
                    <Building2 className="h-5 w-5 text-asi-blue" />
                  </div>
                  <span className="bg-slate-100 text-asi-blue text-xs font-medium px-3 py-1 rounded-full">
                    Ordinary Membership
                  </span>
                </div>
                <h3 className="text-lg font-bold text-asi-blue mb-2">Ministry Leaders</h3>
                <p className="text-sm text-slate-600">
                  Self-supporting ministries, missionary organisations, and not-for-profit ministry projects.
                </p>
              </div>
            </div>

            {/* Sponsoring membership - full width */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 mb-8">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex items-center gap-4 flex-1">
                  <div className="rounded-full bg-slate-100 p-2 shrink-0">
                    <HeartHandshake className="h-5 w-5 text-slate-600" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="text-lg font-bold text-asi-blue">Everyone Else</h3>
                      <span className="bg-slate-100 text-asi-blue text-xs font-medium px-3 py-1 rounded-full">
                        Sponsoring Membership
                      </span>
                    </div>
                    <p className="text-sm text-slate-600 mt-1">
                      Any SDA Church member who wants to support ASI UK&rsquo;s mission, even without a qualifying business or profession.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* General Requirements */}
            <div className="bg-asi-blue/5 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-asi-blue/10 p-2 shrink-0">
                  <Shield className="h-5 w-5 text-asi-blue" />
                </div>
                <div>
                  <h3 className="font-bold text-asi-blue mb-3">General Requirements</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-slate-700">
                      <CheckCircle2 className="h-4 w-4 text-asi-blue shrink-0 mt-0.5" />
                      <span>Member of the Seventh-day Adventist Church in good and regular standing</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-slate-700">
                      <CheckCircle2 className="h-4 w-4 text-asi-blue shrink-0 mt-0.5" />
                      <span>Positive standing in the community</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-slate-700">
                      <CheckCircle2 className="h-4 w-4 text-asi-blue shrink-0 mt-0.5" />
                      <span>Businesses and ministries must be in harmony with the Seventh-day Adventist Church&rsquo;s mission</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Membership Type Cards */}
        <section className="w-full bg-slate-50">
          <div className="max-w-5xl mx-auto px-4 py-12 md:py-16">
            <h2 className="text-3xl font-bold text-asi-blue text-center mb-10">
              Membership Categories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Ordinary Membership Card */}
              <div className="flex flex-col border-2 border-asi-blue rounded-2xl p-6 shadow-md bg-white">
                <div className="flex items-center justify-between mb-4">
                  <div className="rounded-full bg-asi-blue/10 p-2 shrink-0">
                    <User className="h-6 w-6 text-asi-blue" />
                  </div>
                  <span className="bg-slate-100 text-asi-blue text-xs font-medium px-3 py-1 rounded-full">
                    FULL MEMBERSHIP
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-asi-blue mb-1">
                  Ordinary Membership
                </h2>
                <p className="text-slate-500 text-sm mb-4">For individuals &amp; organisations</p>
                <div className="text-3xl font-bold text-asi-blue mb-6">
                  £100<span className="text-base font-normal text-slate-500">/year</span>
                </div>
                <ul className="space-y-3 flex-1">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-asi-blue shrink-0 mt-0.5" />
                    <span className="text-gray-700">Business owners &amp; entrepreneurs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-asi-blue shrink-0 mt-0.5" />
                    <span className="text-gray-700">Professionals (law, medicine, engineering, etc.)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-asi-blue shrink-0 mt-0.5" />
                    <span className="text-gray-700">Ministry leaders &amp; self-supporting organisations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Vote className="h-5 w-5 text-asi-blue shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">Voting rights at the AGM</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-asi-blue shrink-0 mt-0.5" />
                    <span className="text-gray-700">Participate in governance decisions</span>
                  </li>
                </ul>
                <p className="text-xs text-slate-500 mt-6 pt-4 border-t border-slate-100">
                  Ordinary Members constitute the Annual General Meeting, one of the governing bodies of ASI UK, and approve all decisions made by the Executive Committee.
                </p>
              </div>

              {/* Sponsoring Membership Card */}
              <div className="flex flex-col border-2 border-slate-200 rounded-2xl p-6 bg-white">
                <div className="flex items-center mb-4">
                  <div className="rounded-full bg-slate-100 p-2 shrink-0">
                    <HeartHandshake className="h-6 w-6 text-slate-600" />
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-asi-blue mb-1">
                  Sponsoring Membership
                </h2>
                <p className="text-slate-500 text-sm mb-4">For individuals</p>
                <div className="text-3xl font-bold text-slate-700 mb-6">
                  £20<span className="text-base font-normal text-slate-500">/year</span>
                </div>
                <ul className="space-y-3 flex-1">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-asi-blue shrink-0 mt-0.5" />
                    <span className="text-gray-700">Support ASI UK&rsquo;s mission and projects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Globe className="h-5 w-5 text-asi-blue shrink-0 mt-0.5" />
                    <span className="text-gray-700">Represent ASI UK in your local community</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="h-5 w-5 text-slate-400 shrink-0 mt-0.5" />
                    <span className="text-gray-400">No voting rights</span>
                  </li>
                </ul>
                <p className="text-xs text-slate-500 mt-6 pt-4 border-t border-slate-100">
                  Sponsoring Members encourage and motivate other laypeople about ASI UK&rsquo;s purpose and mission in their cities and communities.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* Section 4: How to Apply */}
        <section className="w-full">
          <div className="max-w-5xl mx-auto px-4 py-12 md:py-16">
            <h2 className="text-3xl font-bold text-asi-blue text-center mb-10">
              How to Apply
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
              <div className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-asi-blue text-white font-semibold text-lg mb-4">
                  1
                </div>
                <h3 className="font-bold text-asi-blue mb-2">Submit Application</h3>
                <p className="text-sm text-slate-600">
                  Complete the online membership form with your details and choose your membership type.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-asi-blue text-white font-semibold text-lg mb-4">
                  2
                </div>
                <h3 className="font-bold text-asi-blue mb-2">Executive Review</h3>
                <p className="text-sm text-slate-600">
                  The ASI UK Executive Committee will review your application and confirm your eligibility.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-600 text-white font-semibold text-lg mb-4">
                  3
                </div>
                <h3 className="font-bold text-asi-blue mb-2">Welcome</h3>
                <p className="text-sm text-slate-600">
                  Once approved, you&rsquo;ll receive instructions on completing your membership and paying your annual fee.
                </p>
              </div>
            </div>

            <Link href="/membership/application-form"
                  className="group flex items-center justify-center gap-2 bg-asi-blue hover:bg-asi-darkBlue text-white font-bold text-lg md:text-xl rounded-2xl p-5 transition duration-300 ease-out text-center">
              Membership Form
              <ChevronRight className="h-5 w-5 transition duration-300 ease-in-out group-hover:translate-x-2" />
            </Link>
            <p className="text-center text-sm text-slate-500 mt-2">Join the movement of Adventist lay professionals in the UK</p>
          </div>
        </section>
      </div>
  )
}
