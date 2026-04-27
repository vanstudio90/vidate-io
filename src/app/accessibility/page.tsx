import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility Statement - Vidate",
  description: "Vidate Accessibility Statement. Our commitment to making Vidate accessible to everyone.",
};

export default function Accessibility() {
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
        <h1 className="text-4xl font-black text-viddy-dark mb-2">Accessibility Statement</h1>
        <p className="text-gray-500 mb-12">Last updated: April 26, 2026</p>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-viddy-dark mt-10 mb-4">Our Commitment</h2>
            <p>Vidate is committed to ensuring digital accessibility for people of all abilities. We are continually working to improve the experience for everyone and applying relevant accessibility standards to our app and website.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-viddy-dark mt-10 mb-4">What We&apos;re Doing</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Designing with accessibility in mind from the start</li>
              <li>Supporting VoiceOver and other iOS accessibility features</li>
              <li>Using sufficient color contrast ratios for text and interactive elements</li>
              <li>Providing descriptive labels for all interactive components</li>
              <li>Ensuring our website follows WCAG 2.1 Level AA guidelines where applicable</li>
              <li>Testing regularly with assistive technologies</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-viddy-dark mt-10 mb-4">Known Limitations</h2>
            <p>As a video-first platform, some content is inherently visual. We are exploring ways to make video content more accessible, including potential support for captions and audio descriptions in future updates.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-viddy-dark mt-10 mb-4">Feedback</h2>
            <p>We welcome your feedback on the accessibility of Vidate. If you encounter accessibility barriers or have suggestions for improvement, please contact us:</p>
            <p className="mt-2"><strong>Email:</strong> <a href="mailto:love@vidate.io" className="text-viddy-hot-pink hover:underline">love@vidate.io</a></p>
            <p className="mt-4">We take accessibility feedback seriously and will do our best to address concerns promptly.</p>
          </section>
        </div>
      </main>
    </div>
  );
}
