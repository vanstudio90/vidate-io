import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community Guidelines - Vidate",
  description: "Vidate Community Guidelines. The rules that keep our video dating community safe and respectful.",
};

export default function CommunityGuidelines() {
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
        <h1 className="text-4xl font-black text-viddy-dark mb-2">Community Guidelines</h1>
        <p className="text-gray-500 mb-4">Last updated: April 26, 2026</p>
        <p className="text-gray-600 mb-12 text-lg">Vidate is built on real connections through real video. These guidelines exist to keep our community safe, respectful, and authentic for everyone.</p>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-viddy-dark mt-10 mb-4">Be Authentic</h2>
            <p>Vidate is about showing the real you. Your profile videos should feature you — not someone else, not stock footage, not AI-generated content. Do not impersonate another person or create fake accounts. Every user gets one account, and that account should represent who you actually are.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-viddy-dark mt-10 mb-4">Respect Boundaries</h2>
            <p>Consent matters in every interaction. Do not send unsolicited explicit content in video messages. Do not pressure anyone into sharing personal information, meeting up, or doing anything they&apos;re uncomfortable with. If someone isn&apos;t interested, respect that and move on.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-viddy-dark mt-10 mb-4">No Harassment or Hate</h2>
            <p>We have zero tolerance for harassment, bullying, threats, or intimidation of any kind. This includes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Hate speech targeting race, ethnicity, religion, gender, sexual orientation, disability, or any protected characteristic</li>
              <li>Threatening violence or physical harm</li>
              <li>Doxxing or sharing someone&apos;s private information without consent</li>
              <li>Repeated unwanted contact after being blocked or unmatched</li>
              <li>Body-shaming, degrading comments, or deliberate humiliation</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-viddy-dark mt-10 mb-4">Keep Videos Appropriate</h2>
            <p>Profile videos are visible to all users. They must not contain:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Nudity or sexually explicit content</li>
              <li>Graphic violence or gore</li>
              <li>Weapons or dangerous objects used in a threatening manner</li>
              <li>Content promoting self-harm or suicide</li>
              <li>Drug use or promotion of illegal substances</li>
            </ul>
            <p className="mt-4">All profile videos go through content moderation. Videos that violate these guidelines will be removed, and your account may be suspended.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-viddy-dark mt-10 mb-4">No Recording or Redistribution</h2>
            <p>Do not screen-record, screenshot, or otherwise capture other users&apos; videos or messages to share outside of Vidate. Everyone deserves to feel safe being themselves on camera. Distributing another user&apos;s content without their explicit consent is a serious violation.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-viddy-dark mt-10 mb-4">No Commercial Activity</h2>
            <p>Vidate is for personal connections, not business. Do not use the platform to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Advertise products or services</li>
              <li>Promote social media accounts for followers</li>
              <li>Solicit money or financial assistance</li>
              <li>Recruit for jobs, organizations, or schemes</li>
              <li>Engage in sex work or escort services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-viddy-dark mt-10 mb-4">Protect Personal Information</h2>
            <p>Be careful about what you share publicly. Do not include personal information in your profile videos such as your home address, phone number, workplace address, or financial details. Share personal details only with people you trust, and only through private messages.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-viddy-dark mt-10 mb-4">Adults Only</h2>
            <p>Vidate is exclusively for users aged 18 and older. If we discover that a user is under 18, their account will be immediately terminated. Do not include minors in your profile videos under any circumstances.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-viddy-dark mt-10 mb-4">Follow the Law</h2>
            <p>Do not use Vidate for any illegal purpose. This includes but is not limited to trafficking, distribution of illegal substances, fraud, or any activity that violates local, state, or federal laws.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-viddy-dark mt-10 mb-4">Reporting Violations</h2>
            <p>If you encounter someone who violates these guidelines, please report them immediately using the report button on their profile or in your conversation. All reports are confidential — the reported user will not know who filed the report. Our team reviews every report and takes appropriate action.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-viddy-dark mt-10 mb-4">Consequences</h2>
            <p>Violations of these guidelines may result in:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Content removal</li>
              <li>A warning on your account</li>
              <li>Temporary suspension</li>
              <li>Permanent ban</li>
            </ul>
            <p className="mt-4">The severity of the action depends on the nature and frequency of the violation. Serious violations (threats, exploitation, illegal activity) result in immediate permanent bans.</p>
          </section>
        </div>
      </main>
    </div>
  );
}
