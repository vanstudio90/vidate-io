import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vidate - Video Dating App | Real People, Real Videos, Real Connection",
  description:
    "Vidate is the video-first dating app where you see the real person before you swipe. No catfishing, no surprises — just authentic video profiles that spark real connections.",
  keywords: [
    "video dating app",
    "dating app",
    "video profiles",
    "authentic dating",
    "real connections",
    "vidate",
  ],
  openGraph: {
    title: "Vidate - Real People. Real Videos. Real Connection.",
    description:
      "The video-first dating app. See who you're matching with before you meet.",
    url: "https://vidate.io",
    siteName: "Vidate",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vidate - Video Dating App",
    description:
      "The video-first dating app. Real people, real videos, real connection.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
