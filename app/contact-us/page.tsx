import {Mail, Clock} from 'lucide-react';

export default function ContactUs() {
    return (
        <div>
            {/* Hero */}
            <section className="w-full border-b border-slate-200">
                <div className="max-w-5xl mx-auto px-4 py-12 md:py-16 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-asi-blue mb-4">Contact Us</h1>
                    <p className="text-sm md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        We'd love to hear from you. Currently, the best way to get in contact with us is via email
                    </p>
                </div>
            </section>

            {/* Email Card */}
            <section className="w-full">
                <div className="max-w-xl mx-auto px-4 py-12 md:py-16">
                    <div className="bg-white rounded-2xl p-6 border border-slate-200">
                        <div className="flex flex-col items-center text-center space-y-4">
                            <div className="rounded-full bg-asi-blue/10 p-3">
                                <Mail className="h-6 w-6 text-asi-blue"/>
                            </div>
                            <h2 className="text-xl font-semibold text-asi-blue">Email</h2>
                            <a href="mailto:info@asiuk.org"
                               className="text-asi-blue hover:underline text-lg">info@asiuk.org</a>
                            <div className="flex items-center gap-2 text-slate-500 text-sm">
                                <Clock className="h-4 w-4"/>
                                <p>We aim to respond within 48 hours</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
