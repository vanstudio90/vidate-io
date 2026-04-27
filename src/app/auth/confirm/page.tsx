import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Email Confirmed - Vidate",
};

export default async function ConfirmPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const params = await searchParams;
  const message = params.message || "Your email has been confirmed.";

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
        <Link href="/" className="inline-flex items-center gap-2 mb-8">
          <Image src="/logo.png" alt="Vidate" width={48} height={48} className="rounded-xl" />
          <span className="text-2xl font-black text-viddy-dark">Vidate</span>
        </Link>

        <div className="bg-white rounded-2xl shadow-lg p-10">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full gradient-bg flex items-center justify-center">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h1 className="text-2xl font-bold text-viddy-dark mb-3">All Set!</h1>
          <p className="text-gray-500 mb-8">{message}</p>

          <p className="text-sm text-gray-400">You can close this page and return to the Vidate app.</p>
        </div>
      </div>
    </div>
  );
}
