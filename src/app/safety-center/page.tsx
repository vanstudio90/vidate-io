import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Safety Center - Vidate",
  description: "Vidate Safety Center. Learn about our safety tools, policies, and how we protect our community.",
};

export default function SafetyCenter() {
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
        <h1 className="text-4xl font-black text-viddy-dark mb-2">Safety Center</h1>
        <p className="text-gray-600 mb-12 text-lg">Your safety is at the heart of everything we build. Here&apos;s how Vidate works to keep you protected.</p>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <Link href="/safety-tips" className="block bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
            <div className="text-3xl mb-3">🛡️</div>
            <h3 className="text-lg font-bold text-viddy-dark mb-2">Safety Tips</h3>
            <p className="text-gray-600 text-sm">Essential advice for staying safe while dating online and meeting in person.</p>
          </Link>
          <Link href="/community-guidelines" className="block bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
            <div className="text-3xl mb-3">📋</div>
            <h3 className="text-lg font-bold text-viddy-dark mb-2">Community Guidelines</h3>
            <p className="text-gray-600 text-sm">The rules that keep our community respectful, authentic, and welcoming.</p>
          </Link>
          <Link href="/privacy" className="block bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
            <div className="text-3xl mb-3">🔒</div>
            <h3 className="text-lg font-bold text-viddy-dark mb-2">Privacy Policy</h3>
            <p className="text-gray-600 text-sm">How we collect, use, and protect your personal information.</p>
          </Link>
          <Link href="/help" className="block bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
            <div className="text-3xl mb-3">💬</div>
            <h3 className="text-lg font-bold text-viddy-dark mb-2">Help & Support</h3>
            <p className="text-gray-600 text-sm">Get help with your account, report an issue, or contact our support team.</p>
          </Link>
        </div>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-viddy-dark mt-10 mb-4">How We Protect You</h2>

            <h3 className="text-xl font-semibold text-viddy-dark mt-6 mb-3">Video-First Verification</h3>
            <p>Vidate&apos;s video-first approach is inherently safer than photo-based dating apps. When every profile requires real video, it&apos;s significantly harder to catfish or misrepresent yourself. You see the real person before you ever swipe.</p>

            <h3 className="text-xl font-semibold text-viddy-dark mt-6 mb-3">Content Moderation</h3>
            <p>Every profile video uploaded to Vidate goes through our moderation pipeline. Videos that contain inappropriate content, violence, nudity, or other violations of our Community Guidelines are flagged and removed. We work to keep the platform clean and safe for everyone.</p>

            <h3 className="text-xl font-semibold text-viddy-dark mt-6 mb-3">Blocking and Reporting</h3>
            <p>You can block any user at any time. Blocked users cannot see your profile, send you messages, or interact with you in any way. Our reporting system allows you to flag profiles, videos, or messages that make you uncomfortable. Every report is reviewed by our team.</p>

            <h3 className="text-xl font-semibold text-viddy-dark mt-6 mb-3">Unmatching</h3>
            <p>Changed your mind about a match? You can unmatch at any time. Once unmatched, the conversation is deleted and the other user can no longer contact you through Vidate.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-viddy-dark mt-10 mb-4">Reporting and Enforcement</h2>
            <p>When you report a user, our safety team reviews the report and takes appropriate action. Depending on the severity of the violation, consequences may include:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>A warning issued to the user</li>
              <li>Temporary account suspension</li>
              <li>Permanent ban from the platform</li>
              <li>Referral to law enforcement for serious offenses</li>
            </ul>
            <p className="mt-4">All reports are confidential. The reported user is never told who filed the report.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-viddy-dark mt-10 mb-4">Data Security</h2>
            <p>We use industry-standard encryption to protect your data in transit and at rest. Your videos and messages are stored securely, and access is strictly controlled. We regularly review our security practices to ensure your information stays protected.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-viddy-dark mt-10 mb-4">Contact Our Safety Team</h2>
            <p>If you&apos;re experiencing a safety concern or need immediate assistance, reach out to us:</p>
            <p className="mt-2"><strong>Email:</strong> <a href="mailto:safety@vidate.io" className="text-viddy-hot-pink hover:underline">safety@vidate.io</a></p>
            <p className="mt-4 text-sm text-gray-500">If you are in immediate danger, please contact your local emergency services (911 in the US).</p>
          </section>
        </div>
      </main>
    </div>
  );
}
