import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy - Vidate",
  description: "Vidate Cookie Policy. Learn how we use cookies and similar technologies.",
};

export default function CookiePolicy() {
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
        <h1 className="text-4xl font-black text-viddy-dark mb-2">Cookie Policy</h1>
        <p className="text-gray-500 mb-12">Last updated: April 26, 2026</p>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-viddy-dark mt-10 mb-4">What Are Cookies?</h2>
            <p>Cookies are small text files placed on your device when you visit a website. They help the site remember your preferences and understand how you interact with it. Cookies may be set by the site you&apos;re visiting (&quot;first-party cookies&quot;) or by third-party services operating on that site (&quot;third-party cookies&quot;).</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-viddy-dark mt-10 mb-4">Types of Cookies We Use</h2>

            <h3 className="text-xl font-semibold text-viddy-dark mt-6 mb-3">Essential Cookies</h3>
            <p>These cookies are necessary for vidate.io to function properly. They enable core features like page navigation, secure access, and session management. You cannot opt out of essential cookies because the site would not work without them.</p>

            <h3 className="text-xl font-semibold text-viddy-dark mt-6 mb-3">Performance and Analytics Cookies</h3>
            <p>These cookies help us understand how visitors interact with vidate.io by collecting anonymous usage data. We use this information to improve site performance and user experience. These cookies do not identify you personally.</p>

            <h3 className="text-xl font-semibold text-viddy-dark mt-6 mb-3">Functional Cookies</h3>
            <p>These cookies remember your choices and preferences (such as language or region) to provide a more personalized experience. They may also be used to remember changes you&apos;ve made to the site layout.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-viddy-dark mt-10 mb-4">Other Tracking Technologies</h2>
            <p>In addition to cookies, we may use similar technologies such as:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Web Beacons:</strong> Small transparent images embedded in pages or emails that help us track whether content has been viewed.</li>
              <li><strong>Local Storage:</strong> Data stored in your browser that persists between sessions, used to save preferences and improve performance.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-viddy-dark mt-10 mb-4">How to Control Cookies</h2>
            <p>You can manage cookies through your browser settings. Most browsers allow you to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>View what cookies are stored on your device</li>
              <li>Delete individual or all cookies</li>
              <li>Block all or third-party cookies</li>
              <li>Set preferences for specific websites</li>
            </ul>
            <p className="mt-4">Please note that blocking or deleting cookies may affect the functionality of vidate.io and prevent certain features from working correctly.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-viddy-dark mt-10 mb-4">Changes to This Policy</h2>
            <p>We may update this Cookie Policy from time to time to reflect changes in technology or legal requirements. We encourage you to review this page periodically for the latest information.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-viddy-dark mt-10 mb-4">Contact Us</h2>
            <p>If you have questions about our use of cookies, contact us at:</p>
            <p className="mt-2"><strong>Email:</strong> <a href="mailto:love@vidate.io" className="text-viddy-hot-pink hover:underline">love@vidate.io</a></p>
          </section>
        </div>
      </main>
    </div>
  );
}
