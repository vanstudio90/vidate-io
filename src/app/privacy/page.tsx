import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Vidate",
  description: "Vidate Privacy Policy. Learn how we collect, use, and protect your personal data.",
};

export default function PrivacyPolicy() {
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
        <h1 className="text-4xl font-black text-viddy-dark mb-2">Privacy Policy</h1>
        <p className="text-gray-500 mb-12">Last updated: April 26, 2026</p>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-viddy-dark mt-10 mb-4">1. Who We Are</h2>
            <p>Vidate (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates the Vidate mobile application and the website vidate.io. We are the data controller responsible for your personal information when you use our video-first dating platform.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-viddy-dark mt-10 mb-4">2. Where This Policy Applies</h2>
            <p>This Privacy Policy applies to all Vidate services, including our iOS application, website, and any related features, content, or services we provide. It does not apply to third-party services linked from our platform.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-viddy-dark mt-10 mb-4">3. Information We Collect</h2>
            <h3 className="text-xl font-semibold text-viddy-dark mt-6 mb-3">Information You Provide</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Account Information:</strong> Name, email address, date of birth, gender, and gender preferences when you create an account.</li>
              <li><strong>Profile Content:</strong> Videos you record, bio text, prompts and answers, and other profile details you choose to share (job title, school, interests, etc.).</li>
              <li><strong>Communications:</strong> Video messages you send to matches and any correspondence with our support team.</li>
              <li><strong>Purchase Information:</strong> Transaction details if you make in-app purchases (payment processing is handled by Apple; we do not store payment card numbers).</li>
            </ul>

            <h3 className="text-xl font-semibold text-viddy-dark mt-6 mb-3">Information Collected Automatically</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Device Data:</strong> Device model, operating system, unique device identifiers, and app version.</li>
              <li><strong>Location Data:</strong> With your permission, we collect your geographic location to show you nearby users and calculate distances.</li>
              <li><strong>Usage Data:</strong> How you interact with Vidate, including swipe activity, features used, timestamps, and session duration.</li>
              <li><strong>Log Data:</strong> IP address, access times, pages viewed, and referring URLs when you visit vidate.io.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-viddy-dark mt-10 mb-4">4. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Provide the Service:</strong> Show your profile to other users, facilitate matches, and deliver video messages.</li>
              <li><strong>Personalize Your Experience:</strong> Use your preferences and discovery settings to recommend compatible profiles.</li>
              <li><strong>Safety and Security:</strong> Detect and prevent fraud, fake accounts, harassment, and other harmful behavior.</li>
              <li><strong>Content Moderation:</strong> Review uploaded videos to ensure they comply with our Community Guidelines.</li>
              <li><strong>Improve Vidate:</strong> Analyze usage patterns to fix bugs, develop new features, and enhance the user experience.</li>
              <li><strong>Communicate With You:</strong> Send service-related notifications, respond to support requests, and share updates about Vidate.</li>
              <li><strong>Legal Compliance:</strong> Fulfill legal obligations, enforce our terms, and protect the rights and safety of our users.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-viddy-dark mt-10 mb-4">5. How We Share Your Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Other Users:</strong> Your profile information, videos, and approximate location are visible to other Vidate users as part of the service.</li>
              <li><strong>Service Providers:</strong> We share data with trusted providers who help us operate Vidate (hosting, analytics, content moderation, customer support).</li>
              <li><strong>Legal Requirements:</strong> We may disclose information when required by law, legal process, or to protect the safety of our users.</li>
              <li><strong>Business Transfers:</strong> If Vidate is acquired or merges with another company, your information may be transferred as part of that transaction.</li>
            </ul>
            <p className="mt-4">We do not sell your personal information to third parties. We do not share your data with advertisers.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-viddy-dark mt-10 mb-4">6. Data Storage and Security</h2>
            <p>Your data is stored securely using industry-standard encryption and hosted on trusted cloud infrastructure. We implement technical and organizational measures to protect your information from unauthorized access, loss, or misuse. However, no system is completely secure, and we cannot guarantee absolute security.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-viddy-dark mt-10 mb-4">7. Data Retention</h2>
            <p>We retain your personal data for as long as your account is active. If you delete your account, we will remove your profile, videos, and messages within 30 days. Some information may be retained longer if required by law or necessary for legitimate business purposes (e.g., resolving disputes, enforcing agreements).</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-viddy-dark mt-10 mb-4">8. Your Rights</h2>
            <p>Depending on your location, you may have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access the personal information we hold about you</li>
              <li>Correct inaccurate or incomplete data</li>
              <li>Delete your account and associated data</li>
              <li>Object to or restrict certain processing of your data</li>
              <li>Request a copy of your data in a portable format</li>
              <li>Withdraw consent where processing is based on consent</li>
            </ul>
            <p className="mt-4">To exercise any of these rights, contact us at <a href="mailto:love@vidate.io" className="text-viddy-hot-pink hover:underline">love@vidate.io</a>.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-viddy-dark mt-10 mb-4">9. Children&apos;s Privacy</h2>
            <p>Vidate is intended for users aged 18 and older. We do not knowingly collect personal information from anyone under 18. If we learn that we have collected data from a minor, we will delete it immediately.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-viddy-dark mt-10 mb-4">10. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of significant changes by posting a notice within the app or sending you a notification. Your continued use of Vidate after changes take effect constitutes acceptance of the updated policy.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-viddy-dark mt-10 mb-4">11. Contact Us</h2>
            <p>If you have questions about this Privacy Policy or our data practices, contact us at:</p>
            <p className="mt-2"><strong>Email:</strong> <a href="mailto:love@vidate.io" className="text-viddy-hot-pink hover:underline">love@vidate.io</a></p>
          </section>
        </div>
      </main>
    </div>
  );
}
