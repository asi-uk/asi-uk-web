import {Heading1, Heading2, Heading3} from "@/app/components/Headings";
import Link from 'next/link';

export default function PrivacyPolicy() {
    return (
        <div className="flex items-center justify-center w-screen">
            <div className="max-w-screen-md mx-auto">
                <div className="text-left p-5">

                    <Heading1 text={"Privacy Policy"}/>

                    <p className="pb-5 text-gray-600">Last updated: January 2025</p>

                    <Heading2 text={"1. Data Controller"}/>
                    <p className="pb-5">
                        Your personal data is controlled by <strong>Adventist-laymen's Services and Industries, United Kingdom (ASI UK)</strong>.
                    </p>
                    <p className="pb-5">
                        If you have any questions about this privacy policy or how we handle your personal data, please contact us at:{' '}
                        <Link href="mailto:info@asiuk.org" className="text-asi-blue underline">info@asiuk.org</Link>
                    </p>

                    <Heading2 text={"2. What Personal Data We Collect"}/>
                    <p className="pb-3">When you apply for membership with ASI UK, we collect the following personal information:</p>
                    <ul className="list-disc pl-6 pb-5 space-y-1">
                        <li>Name and title</li>
                        <li>Email address</li>
                        <li>Phone number</li>
                        <li>Church membership details (local church name, pastor's name and contact)</li>
                        <li>Employment status (whether employed by the church)</li>
                    </ul>
                    <p className="pb-3">For organisation memberships, we also collect:</p>
                    <ul className="list-disc pl-6 pb-5 space-y-1">
                        <li>Organisation name and legal name</li>
                        <li>Organisation description</li>
                        <li>Organisation address, email, phone, and website</li>
                        <li>Organisation size and years in operation</li>
                        <li>Your role within the organisation</li>
                        <li>Church affiliation status of the organisation</li>
                    </ul>

                    <Heading2 text={"3. Purpose of Processing"}/>
                    <p className="pb-3">We process your personal data for the following purposes:</p>
                    <ul className="list-disc pl-6 pb-5 space-y-1">
                        <li><strong>Membership administration:</strong> To process your membership application, verify eligibility, maintain membership records, and communicate with you about your membership status</li>
                        <li><strong>Membership services:</strong> To provide you with member benefits, event invitations, and access to ASI UK resources</li>
                        <li><strong>Marketing communications:</strong> If you have consented, to send you newsletters, updates about ASI UK activities, events, and member news</li>
                    </ul>

                    <Heading2 text={"4. Legal Basis for Processing"}/>
                    <p className="pb-3">We process your personal data on the following legal bases:</p>
                    <ul className="list-disc pl-6 pb-5 space-y-1">
                        <li><strong>Contract:</strong> Processing is necessary for the performance of the membership agreement between you and ASI UK</li>
                        <li><strong>Consent:</strong> For marketing communications, we rely on your explicit consent, which you can withdraw at any time</li>
                        <li><strong>Legitimate interests:</strong> For operational purposes such as improving our services and ensuring the security of our systems</li>
                    </ul>

                    <Heading2 text={"5. How We Store Your Data"}/>
                    <p className="pb-5">
                        Your membership application data is stored securely in Notion, which is protected by industry-standard security measures including encryption in transit and at rest. Notion is SOC 2 Type II certified and complies with GDPR requirements. Access to this data is restricted to authorised ASI UK administrators only.
                    </p>

                    <Heading2 text={"6. Data Retention"}/>
                    <p className="pb-5">
                        We retain your personal data for as long as you remain a member of ASI UK. If your membership lapses or is terminated, we will retain your data for a period of up to 3 years for administrative purposes and to allow for membership renewal. After this period, your data will be securely deleted unless we are required by law to retain it for longer.
                    </p>

                    <Heading2 text={"7. Third-Party Sharing"}/>
                    <p className="pb-3">We may share your personal data with:</p>
                    <ul className="list-disc pl-6 pb-5 space-y-1">
                        <li><strong>Notion Labs, Inc.:</strong> For data storage and membership management</li>
                        <li><strong>ASI Europe and ASI International:</strong> For coordination of international ASI activities, where relevant</li>
                        <li><strong>Service providers:</strong> Third parties who assist us in operating our services, subject to appropriate data protection agreements</li>
                    </ul>
                    <p className="pb-5">
                        We will never sell your personal data to third parties. We may share aggregated, anonymised data for statistical purposes.
                    </p>

                    <Heading2 text={"8. Your Rights"}/>
                    <p className="pb-3">Under the UK General Data Protection Regulation (UK GDPR), you have the following rights:</p>
                    <ul className="list-disc pl-6 pb-5 space-y-1">
                        <li><strong>Right of access:</strong> You can request a copy of the personal data we hold about you</li>
                        <li><strong>Right to rectification:</strong> You can request that we correct any inaccurate or incomplete data</li>
                        <li><strong>Right to erasure:</strong> You can request that we delete your personal data in certain circumstances</li>
                        <li><strong>Right to restrict processing:</strong> You can request that we limit how we use your data</li>
                        <li><strong>Right to data portability:</strong> You can request a copy of your data in a machine-readable format</li>
                        <li><strong>Right to object:</strong> You can object to our processing of your data in certain circumstances</li>
                        <li><strong>Right to withdraw consent:</strong> Where we rely on consent, you can withdraw it at any time</li>
                    </ul>
                    <p className="pb-5">
                        To exercise any of these rights, please contact us at{' '}
                        <Link href="mailto:info@asiuk.org" className="text-asi-blue underline">info@asiuk.org</Link>.
                        We will respond to your request within one month.
                    </p>

                    <Heading2 text={"9. Complaints"}/>
                    <p className="pb-5">
                        If you are not satisfied with how we handle your personal data, you have the right to lodge a complaint with the Information Commissioner's Office (ICO), the UK supervisory authority for data protection issues.
                    </p>
                    <p className="pb-3">You can contact the ICO:</p>
                    <ul className="list-disc pl-6 pb-5 space-y-1">
                        <li>Website: <Link href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-asi-blue underline">ico.org.uk</Link></li>
                        <li>Phone: 0303 123 1113</li>
                        <li>Post: Information Commissioner's Office, Wycliffe House, Water Lane, Wilmslow, Cheshire, SK9 5AF</li>
                    </ul>

                    <Heading2 text={"10. Changes to This Policy"}/>
                    <p className="pb-5">
                        We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
                    </p>

                    <Heading2 text={"Contact Us"}/>
                    <p className="pb-5">
                        If you have any questions about this privacy policy or our data practices, please contact us at:{' '}
                        <Link href="mailto:info@asiuk.org" className="text-asi-blue underline">info@asiuk.org</Link>
                    </p>

                </div>
            </div>
        </div>
    )
}
