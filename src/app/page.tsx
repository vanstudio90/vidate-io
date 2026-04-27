import Link from "next/link";
import Image from "next/image";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Vidate" width={36} height={36} className="rounded-lg" />
          <span className="text-xl font-black tracking-tight text-viddy-dark">
            Vidate
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="#features"
            className="text-sm font-medium text-gray-600 hover:text-viddy-hot-pink transition-colors"
          >
            Features
          </Link>
          <Link
            href="#how-it-works"
            className="text-sm font-medium text-gray-600 hover:text-viddy-hot-pink transition-colors"
          >
            How It Works
          </Link>
          <Link
            href="#safety"
            className="text-sm font-medium text-gray-600 hover:text-viddy-hot-pink transition-colors"
          >
            Safety
          </Link>
          <Link
            href="#download"
            className="gradient-bg text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity"
          >
            Get the App
          </Link>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 gradient-bg opacity-[0.03]" />
      <div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full bg-viddy-pink/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-viddy-purple/5 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-viddy-pink/10 text-viddy-hot-pink text-sm font-semibold px-4 py-2 rounded-full mb-8">
              <span className="w-2 h-2 rounded-full bg-viddy-pink animate-pulse" />
              Now available on iOS
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[0.95] mb-6">
              <span className="text-viddy-dark">See who</span>
              <br />
              <span className="text-viddy-dark">you&apos;re</span>
              <br />
              <span className="gradient-text">matching with.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-500 max-w-lg mb-10 leading-relaxed">
              Vidate is the video-first dating app. No more guessing behind
              filtered photos — watch real video intros and connect with real
              people.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="#download"
                className="gradient-bg text-white font-semibold px-8 py-4 rounded-full text-lg hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                Download for iOS
              </Link>
              <Link
                href="#how-it-works"
                className="bg-viddy-dark text-white font-semibold px-8 py-4 rounded-full text-lg hover:bg-gray-800 transition-colors inline-flex items-center justify-center gap-2"
              >
                Learn More
              </Link>
            </div>
          </div>

          <div className="relative hidden lg:flex justify-center">
            <div className="relative">
              <div className="absolute -left-8 top-8 w-[260px] h-[520px] rounded-[3rem] gradient-bg opacity-20 rotate-[-8deg]" />
              <div className="relative w-[280px] h-[560px] rounded-[3rem] gradient-bg p-[3px] shadow-2xl shadow-viddy-pink/20">
                <div className="w-full h-full rounded-[2.8rem] bg-white flex flex-col items-center justify-center p-8">
                  <Image src="/logo.png" alt="Vidate" width={80} height={80} className="rounded-2xl mb-6 shadow-lg" />
                  <p className="text-2xl font-black text-viddy-dark tracking-tight">
                    Vidate
                  </p>
                  <p className="text-sm text-gray-400 mt-2 text-center">
                    Real people.
                    <br />
                    Real videos.
                    <br />
                    Real connection.
                  </p>
                  <div className="mt-8 w-full gradient-bg text-white text-sm font-semibold py-3 rounded-full text-center">
                    Get Started
                  </div>
                </div>
              </div>
              <div className="absolute -right-8 top-16 w-[260px] h-[520px] rounded-[3rem] bg-viddy-purple/10 rotate-[8deg]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  const features = [
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
        </svg>
      ),
      title: "Video Profiles",
      description: "Upload short intro videos that show your personality, not just your best angle. Be real, be you.",
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
        </svg>
      ),
      title: "Swipe & Match",
      description: "Watch their video, feel the vibe. Swipe right if you're feeling it. When it's mutual, it's a match.",
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
        </svg>
      ),
      title: "Video Chat",
      description: "Skip the awkward text phase. Start a video conversation with your matches and see the chemistry live.",
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
        </svg>
      ),
      title: "Verified & Safe",
      description: "Video verification means you know who you're talking to. No catfishing, no fake profiles.",
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
        </svg>
      ),
      title: "Local Discovery",
      description: "Find people near you or go global. Set your distance and discover matches in your area.",
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
        </svg>
      ),
      title: "Smart Matching",
      description: "Our algorithm learns what you like. The more you use Vidate, the better your matches get.",
    },
  ];

  return (
    <section id="features" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-viddy-dark mb-4">
            Why <span className="gradient-text">Vidate</span>?
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Dating should feel real. Vidate puts the person front and center with video-first profiles that show who you really are.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group p-8 rounded-2xl border border-gray-100 hover:border-viddy-pink/20 hover:shadow-xl hover:shadow-viddy-pink/5 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-viddy-pink/10 text-viddy-hot-pink flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-viddy-dark mb-2">{feature.title}</h3>
              <p className="text-gray-500 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { number: "01", title: "Create your profile", description: "Sign up with Apple, add your photos, and record a short video intro. Show the world who you really are." },
    { number: "02", title: "Discover people", description: "Browse video profiles of people near you. Watch their intros and get a real feel for who they are before swiping." },
    { number: "03", title: "Match & connect", description: "When you both swipe right, it's a match. Start chatting, send video messages, or jump on a live video call." },
  ];

  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-viddy-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-viddy-dark mb-4">
            How it <span className="gradient-text">works</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">Three simple steps to find your person.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-bg text-white text-2xl font-black mb-6">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-viddy-dark mb-3">{step.title}</h3>
              <p className="text-gray-500 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Safety() {
  return (
    <section id="safety" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-viddy-dark mb-6">
              Your safety is our <span className="gradient-text">priority</span>
            </h2>
            <p className="text-lg text-gray-500 mb-8 leading-relaxed">
              Vidate is built with safety at its core. We believe everyone deserves to date without fear.
            </p>
            <div className="space-y-6">
              {[
                { title: "Video Verification", desc: "Every profile is verified through video to ensure you're talking to a real person." },
                { title: "Report & Block", desc: "Easily report or block anyone who makes you uncomfortable. Our team reviews every report." },
                { title: "Photo & Video Moderation", desc: "AI-powered content moderation keeps the platform clean and respectful." },
                { title: "Data Privacy", desc: "Your personal data is encrypted and never shared. You control what others see." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-viddy-pink/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-viddy-hot-pink" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-viddy-dark">{item.title}</h3>
                    <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:flex justify-center">
            <div className="relative">
              <div className="w-[300px] h-[300px] rounded-full gradient-bg opacity-10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-24 h-24 text-viddy-hot-pink/30" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="download" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 gradient-bg" />
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-6">
          Ready to meet
          <br />
          someone real?
        </h2>
        <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
          Download Vidate today and start making genuine connections through video.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#"
            className="bg-white text-viddy-dark font-semibold px-8 py-4 rounded-full text-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-3"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            Download for iOS
          </Link>
          <div className="bg-white/20 text-white font-semibold px-8 py-4 rounded-full text-lg inline-flex items-center justify-center gap-3 cursor-default">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-1.4l2.473 1.46c.752.444.752 1.022 0 1.466l-2.473 1.46-2.534-2.534 2.534-2.852zM5.864 2.658L16.8 9.246l-2.302 2.302-8.634-8.89z" />
            </svg>
            Android Coming Soon
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-viddy-dark text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Image src="/logo.png" alt="Vidate" width={36} height={36} className="rounded-lg" />
              <span className="text-xl font-black tracking-tight">Vidate</span>
            </div>
            <p className="text-gray-400 max-w-sm leading-relaxed">
              The video-first dating app. Real people, real videos, real connection. See who you&apos;re matching with before you meet.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Safety</h4>
            <div className="space-y-3">
              <Link href="/community-guidelines" className="block text-gray-400 hover:text-white transition-colors text-sm">Community Guidelines</Link>
              <Link href="/safety-tips" className="block text-gray-400 hover:text-white transition-colors text-sm">Safety Tips</Link>
              <Link href="/safety-center" className="block text-gray-400 hover:text-white transition-colors text-sm">Safety Center</Link>
              <Link href="/help" className="block text-gray-400 hover:text-white transition-colors text-sm">Help & Support</Link>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <div className="space-y-3">
              <Link href="/privacy" className="block text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</Link>
              <Link href="/terms" className="block text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</Link>
              <Link href="/cookie-policy" className="block text-gray-400 hover:text-white transition-colors text-sm">Cookie Policy</Link>
              <Link href="/accessibility" className="block text-gray-400 hover:text-white transition-colors text-sm">Accessibility</Link>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Vidate. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Safety />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
