import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Help & Support - Vidate",
  description: "Get help with Vidate. FAQs, account support, and contact information.",
};

export default function HelpSupport() {
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
        <h1 className="text-4xl font-black text-viddy-dark mb-2">Help & Support</h1>
        <p className="text-gray-600 mb-12 text-lg">Need help? Find answers to common questions or get in touch with our support team.</p>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-viddy-dark mt-10 mb-6">Frequently Asked Questions</h2>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-viddy-dark mb-2">How do I create an account?</h3>
                <p>Download Vidate from the App Store, open the app, and sign up with your email or Apple ID. You&apos;ll need to provide your name, date of birth, gender, and record three short profile videos to get started.</p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-viddy-dark mb-2">Why does Vidate require videos?</h3>
                <p>Vidate is a video-first dating app. We believe video profiles create more authentic connections than photos alone. You get to see the real person — their energy, personality, and vibe — before you decide to match.</p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-viddy-dark mb-2">How does matching work?</h3>
                <p>Browse profiles and swipe right to like or left to pass. When two people like each other, it&apos;s a match! Once matched, you can send video messages to each other and start a real conversation.</p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-viddy-dark mb-2">Can I change my profile videos?</h3>
                <p>Yes! Go to your profile and tap on any video slot to re-record or replace it. You have three video slots — make them count by showing different sides of your personality.</p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-viddy-dark mb-2">How do I delete my account?</h3>
                <p>Go to Settings in the app, scroll to the bottom, and tap &quot;Delete Account.&quot; This will permanently remove your profile, videos, matches, and messages. This action cannot be undone.</p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-viddy-dark mb-2">How do I report someone?</h3>
                <p>Tap the three-dot menu on any profile or in a conversation and select &quot;Report.&quot; Choose the reason for your report and add any additional details. All reports are confidential and reviewed by our safety team.</p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-viddy-dark mb-2">How do I block someone?</h3>
                <p>Tap the three-dot menu on their profile or in your conversation and select &quot;Block.&quot; Blocked users cannot see your profile, send you messages, or interact with you in any way.</p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-viddy-dark mb-2">Why was my video rejected?</h3>
                <p>All videos go through content moderation. Videos may be rejected if they contain nudity, violence, inappropriate content, or don&apos;t clearly show your face. Review our <Link href="/community-guidelines" className="text-viddy-hot-pink hover:underline">Community Guidelines</Link> and try recording a new video.</p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-viddy-dark mb-2">Is Vidate free?</h3>
                <p>Yes, Vidate is free to download and use. Core features like creating a profile, browsing, matching, and messaging are all free. We may offer optional premium features in the future.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-viddy-dark mt-10 mb-4">Trouble Signing In?</h2>
            <p>If you&apos;re having trouble accessing your account:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Make sure you&apos;re using the correct email address</li>
              <li>Check your internet connection</li>
              <li>Update Vidate to the latest version from the App Store</li>
              <li>Try restarting the app</li>
            </ul>
            <p className="mt-4">Still having issues? Contact our support team below.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-viddy-dark mt-10 mb-4">Contact Support</h2>
            <p>Our support team is here to help. Reach out to us for any questions, issues, or feedback:</p>
            <p className="mt-4"><strong>General Support:</strong> <a href="mailto:love@vidate.io" className="text-viddy-hot-pink hover:underline">love@vidate.io</a></p>
            <p className="mt-2"><strong>Safety Concerns:</strong> <a href="mailto:love@vidate.io" className="text-viddy-hot-pink hover:underline">love@vidate.io</a></p>
            <p className="mt-2"><strong>Privacy Questions:</strong> <a href="mailto:love@vidate.io" className="text-viddy-hot-pink hover:underline">love@vidate.io</a></p>
            <p className="mt-6 text-sm text-gray-500">We aim to respond to all inquiries within 24-48 hours.</p>
          </section>
        </div>
      </main>
    </div>
  );
}
