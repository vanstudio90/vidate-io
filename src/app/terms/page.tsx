import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Vidate",
  description: "Vidate Terms of Service. Read the terms governing your use of the Vidate platform.",
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b border-gray-100 bg-white/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="Vidate" width={32} height={32} className="rounded-lg" />
            <span className="text-lg font-black text-viddy-dark">Vidate</span>
          </Link>
        </div>
      </nav>
      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-black text-viddy-dark mb-2">Terms of Service</h1>
        <p className="text-gray-500 mb-12">Last updated: April 26, 2026</p>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-viddy-dark mt-10 mb-4">1. Acceptance of Terms</h2>
            <p>By accessing or using Vidate, you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree, do not use Vidate. These Terms constitute a legally binding agreement between you and Vidate.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-viddy-dark mt-10 mb-4">2. Eligibility</h2>
            <p>You must be at least 18 years old to create an account and use Vidate. By registering, you represent and warrant that you meet this age requirement and have the legal capacity to enter into these Terms. We reserve the right to request proof of age at any time and to terminate accounts that violate this requirement.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-viddy-dark mt-10 mb-4">3. Your Account</h2>
            <p>You are responsible for maintaining the confidentiality of your login credentials and for all activity under your account. You agree to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate, current, and complete information during registration</li>
              <li>Keep your account information up to date</li>
              <li>Not create more than one account</li>
              <li>Not share your account or let anyone else access it</li>
              <li>Notify us immediately if you suspect unauthorized access to your account</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-viddy-dark mt-10 mb-4">4. Acceptable Use</h2>
            <p>You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use Vidate for any unlawful purpose or in violation of any applicable laws</li>
              <li>Harass, stalk, threaten, or intimidate any other user</li>
              <li>Post content that is defamatory, obscene, hateful, violent, or promotes illegal activity</li>
              <li>Impersonate any person or entity, or misrepresent your identity</li>
              <li>Use Vidate for commercial purposes, advertising, or solicitation</li>
              <li>Upload viruses, malware, or any harmful code</li>
              <li>Attempt to access other users&apos; accounts or private data</li>
              <li>Use automated tools, bots, or scripts to interact with the service</li>
              <li>Collect user information without consent</li>
              <li>Record, screenshot, or distribute other users&apos; videos or messages without their permission</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-viddy-dark mt-10 mb-4">5. Your Content</h2>
            <p>You retain ownership of the content you create and upload to Vidate, including videos, text, and images. By posting content, you grant Vidate a worldwide, non-exclusive, royalty-free license to use, display, reproduce, and distribute your content solely for the purpose of operating and improving the service.</p>
            <p className="mt-4">You are solely responsible for the content you post. Content must comply with our <Link href="/community-guidelines" className="text-viddy-hot-pink hover:underline">Community Guidelines</Link> and applicable laws. We reserve the right to remove content that violates these Terms or our guidelines without notice.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-viddy-dark mt-10 mb-4">6. Content Moderation</h2>
            <p>Vidate reviews uploaded videos and profile content to ensure compliance with our Community Guidelines. We use a combination of automated systems and human review. Content that violates our guidelines may be removed, and repeat offenders may have their accounts suspended or terminated.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-viddy-dark mt-10 mb-4">7. Intellectual Property</h2>
            <p>Vidate and its original content, features, and functionality are owned by Vidate and are protected by copyright, trademark, and other intellectual property laws. You may not copy, modify, distribute, or create derivative works from any part of the Vidate service without our prior written consent.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-viddy-dark mt-10 mb-4">8. Rights We Grant You</h2>
            <p>We grant you a personal, non-exclusive, non-transferable, revocable license to access and use Vidate for personal, non-commercial purposes, subject to these Terms. This license does not include the right to sublicense, resell, or commercially exploit any aspect of the service.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-viddy-dark mt-10 mb-4">9. Purchases and Subscriptions</h2>
            <p>Vidate may offer premium features or subscriptions through in-app purchases. These transactions are processed by Apple through the App Store. All purchases are subject to Apple&apos;s terms and refund policies. Subscriptions automatically renew unless cancelled at least 24 hours before the current period ends.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-viddy-dark mt-10 mb-4">10. No Background Checks</h2>
            <p>Vidate does not conduct criminal background checks or identity verification on its users. We do not verify the statements made by users. You are solely responsible for taking precautions when interacting with other users. Please review our <Link href="/safety-tips" className="text-viddy-hot-pink hover:underline">Safety Tips</Link> before meeting anyone in person.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-viddy-dark mt-10 mb-4">11. Account Termination</h2>
            <p>You may delete your account at any time through the app settings. We reserve the right to suspend or terminate your account at any time, without prior notice, for conduct that we believe violates these Terms, our Community Guidelines, or is harmful to other users, us, or third parties.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-viddy-dark mt-10 mb-4">12. Disclaimers</h2>
            <p>Vidate is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, whether express or implied. We do not guarantee that the service will be uninterrupted, secure, or error-free. We disclaim all warranties, including implied warranties of merchantability, fitness for a particular purpose, and non-infringement.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-viddy-dark mt-10 mb-4">13. Limitation of Liability</h2>
            <p>To the fullest extent permitted by law, Vidate shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the service. Our total liability for any claims arising under these Terms shall not exceed the amount you paid to Vidate in the 12 months preceding the claim, or $100, whichever is greater.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-viddy-dark mt-10 mb-4">14. Indemnification</h2>
            <p>You agree to indemnify and hold harmless Vidate, its officers, directors, employees, and agents from any claims, damages, losses, or expenses (including legal fees) arising from your use of the service, your content, or your violation of these Terms.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-viddy-dark mt-10 mb-4">15. Dispute Resolution</h2>
            <p>Any disputes arising from these Terms or your use of Vidate shall first be resolved through good-faith negotiation. If we cannot reach a resolution within 60 days, either party may pursue binding arbitration. You agree to resolve disputes on an individual basis and waive any right to participate in class action lawsuits or class-wide arbitration.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-viddy-dark mt-10 mb-4">16. Governing Law</h2>
            <p>These Terms are governed by and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law principles.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-viddy-dark mt-10 mb-4">17. Changes to These Terms</h2>
            <p>We may revise these Terms at any time. We will notify you of material changes through the app or by email. Your continued use of Vidate after changes become effective constitutes your acceptance of the revised Terms.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-viddy-dark mt-10 mb-4">18. Contact Us</h2>
            <p>For questions about these Terms, reach out to us at:</p>
            <p className="mt-2"><strong>Email:</strong> <a href="mailto:legal@vidate.io" className="text-viddy-hot-pink hover:underline">legal@vidate.io</a></p>
          </section>
        </div>
      </main>
    </div>
  );
}
