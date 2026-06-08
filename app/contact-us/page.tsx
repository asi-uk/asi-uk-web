import {Mail, Clock} from 'lucide-react';
import ContactForm from './ContactForm';

export default function ContactUs() {
    return (
        <div>
            {/* Hero */}
            <section className="w-full border-b border-slate-200">
                <div className="max-w-5xl mx-auto px-4 py-12 md:py-16 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-asi-blue mb-4">Contact Us</h1>
                    <p className="text-sm md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        We'd love to hear from you. Choose who you'd like to reach below and send us a
                        message — it goes straight to the right person.
                    </p>
                </div>
            </section>

            {/* Contact Form */}
            <section className="w-full">
                <div className="max-w-2xl mx-auto px-4 py-12 md:py-16">
                    <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200">
                        <ContactForm/>
                    </div>

                    {/* General email fallback */}
                    <div className="mt-8 flex flex-col items-center text-center space-y-2">
                        <div className="flex items-center gap-2 text-slate-600">
                            <Mail className="h-4 w-4 text-asi-blue"/>
                            <span className="text-sm">Prefer email? Reach us at{" "}
                                <a href="mailto:info@asiuk.org"
                                   className="text-asi-blue hover:underline">info@asiuk.org</a>
                            </span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-500 text-sm">
                            <Clock className="h-4 w-4"/>
                            <p>We aim to respond within 48 hours</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
