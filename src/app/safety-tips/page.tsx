import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Safety Tips - Vidate",
  description: "Stay safe on Vidate. Essential tips for online dating and meeting people in person.",
};

export default function SafetyTips() {
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
        <h1 className="text-4xl font-black text-viddy-dark mb-2">Safety Tips</h1>
        <p className="text-gray-500 mb-4">Your safety is our priority</p>
        <p className="text-gray-600 mb-12 text-lg">Meeting new people is exciting, but it&apos;s important to stay smart about your safety. Whether you&apos;re chatting on Vidate or meeting someone in person, these tips will help you stay protected.</p>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-viddy-hot-pink mt-10 mb-6">Online Safety</h2>

            <h3 className="text-xl font-semibold text-viddy-dark mt-6 mb-3">Guard Your Personal Information</h3>
            <p>Never share sensitive details like your home address, daily routine, workplace, or financial information with someone you haven&apos;t met. Keep conversations on Vidate until you feel comfortable and have built trust. Be especially cautious about sharing information that could be used to locate you.</p>

            <h3 className="text-xl font-semibold text-viddy-dark mt-6 mb-3">Never Send Money</h3>
            <p>No matter how convincing the story, never send money or share financial information with someone you&apos;ve met on a dating app. Scammers often build emotional connections before making financial requests. If someone asks you for money, report them immediately.</p>

            <h3 className="text-xl font-semibold text-viddy-dark mt-6 mb-3">Stay on the Platform</h3>
            <p>Keep your early conversations within Vidate. Our platform has safety features designed to protect you. Moving to other messaging apps too quickly removes those protections. Take your time before sharing your phone number or social media.</p>

            <h3 className="text-xl font-semibold text-viddy-dark mt-6 mb-3">Watch for Red Flags</h3>
            <p>Be cautious of users who:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Refuse to video chat or always have excuses not to</li>
              <li>Ask for money or financial help</li>
              <li>Pressure you to move off the platform immediately</li>
              <li>Claim to be in an emergency and need urgent help</li>
              <li>Seem too perfect or their story doesn&apos;t add up</li>
              <li>Try to isolate you from friends and family early on</li>
            </ul>

            <h3 className="text-xl font-semibold text-viddy-dark mt-6 mb-3">Report Suspicious Behavior</h3>
            <p>If something feels off, trust your instincts. Use the report button on any profile or conversation to flag concerning behavior. You can also block users at any time. All reports are confidential and reviewed by our team.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-viddy-hot-pink mt-10 mb-6">Meeting In Person</h2>

            <h3 className="text-xl font-semibold text-viddy-dark mt-6 mb-3">Take Your Time</h3>
            <p>There&apos;s no rush to meet in person. Use Vidate&apos;s video messaging to get to know your match better first. A video conversation can reveal a lot about a person and help you feel more confident before meeting face to face.</p>

            <h3 className="text-xl font-semibold text-viddy-dark mt-6 mb-3">Meet in Public</h3>
            <p>Always choose a public, well-populated location for your first few meetings — a coffee shop, restaurant, or busy park. Never go to someone&apos;s home or invite them to yours until you&apos;ve established genuine trust over time.</p>

            <h3 className="text-xl font-semibold text-viddy-dark mt-6 mb-3">Tell Someone Your Plans</h3>
            <p>Let a friend or family member know where you&apos;re going, who you&apos;re meeting, and when you expect to be back. Share your live location with a trusted contact. Consider having a check-in call planned during or after the date.</p>

            <h3 className="text-xl font-semibold text-viddy-dark mt-6 mb-3">Arrange Your Own Transportation</h3>
            <p>Drive yourself, take a rideshare, or use public transit. Having your own way to get home means you can leave whenever you want. Never rely on your date for a ride, especially on the first meeting.</p>

            <h3 className="text-xl font-semibold text-viddy-dark mt-6 mb-3">Stay Aware</h3>
            <p>Keep an eye on your drink and belongings. Know your limits with alcohol. If you feel uncomfortable at any point, you have every right to leave. Your safety always comes first — no date is worth compromising it.</p>

            <h3 className="text-xl font-semibold text-viddy-dark mt-6 mb-3">Trust Your Instincts</h3>
            <p>If something doesn&apos;t feel right, it probably isn&apos;t. Don&apos;t feel obligated to stay out of politeness. It&apos;s always okay to end a date early, and you don&apos;t owe anyone an explanation for prioritizing your safety.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-viddy-hot-pink mt-10 mb-6">Sexual Health and Consent</h2>

            <h3 className="text-xl font-semibold text-viddy-dark mt-6 mb-3">Consent Is Non-Negotiable</h3>
            <p>Consent must be freely given, enthusiastic, and ongoing. It can be withdrawn at any time. Silence or the absence of &quot;no&quot; is not consent. Respect your partner&apos;s boundaries in every situation.</p>

            <h3 className="text-xl font-semibold text-viddy-dark mt-6 mb-3">Protect Your Health</h3>
            <p>Practice safe sex. Use protection and consider getting regularly tested for STIs. Open and honest conversations about sexual health are a sign of maturity and respect.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-viddy-hot-pink mt-10 mb-6">LGBTQ+ Safety</h2>
            <p>If you&apos;re traveling to or living in an area where LGBTQ+ identities are not widely accepted, exercise extra caution. Be mindful of what you share on your profile and consider using Vidate&apos;s discovery settings to manage your visibility. Your safety matters above all else.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-viddy-dark mt-10 mb-4">Emergency Resources</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Emergency:</strong> Call 911 (US) or your local emergency number</li>
              <li><strong>National Domestic Violence Hotline:</strong> 1-800-799-7233</li>
              <li><strong>RAINN (Sexual Assault Hotline):</strong> 1-800-656-4673</li>
              <li><strong>Crisis Text Line:</strong> Text HOME to 741741</li>
              <li><strong>Trans Lifeline:</strong> 1-877-565-8860</li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}
