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
  const error = params.error;
  const errorDescription = params.error_description?.replace(/\+/g, " ");
  const isError = !!error;
  const message = isError
    ? errorDescription || "Something went wrong. Please try again."
    : params.message || "Your email has been confirmed.";

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
        <Link href="/" className="inline-flex items-center gap-2 mb-8">
          <Image src="/logo.png" alt="Vidate" width={48} height={48} className="rounded-xl" />
          <span className="text-2xl font-black text-viddy-dark">Vidate</span>
        </Link>

        <div className="bg-white rounded-2xl shadow-lg p-10">
          {isError ? (
            <>
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-red-100 flex items-center justify-center">
                <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h1 className="text-2xl font-bold text-viddy-dark mb-3">Link Expired</h1>
              <p className="text-gray-500 mb-8">{message}</p>
              <p className="text-sm text-gray-400">Please request a new link from the Vidate app.</p>
            </>
          ) : (
            <>
              <div className="w-16 h-16 mx-auto mb-6 rounded-full gradient-bg flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="text-2xl font-bold text-viddy-dark mb-3">All Set!</h1>
              <p className="text-gray-500 mb-6">{message}</p>
              <a
                href="com.vidate.app://auth/verified"
                className="inline-block w-full py-3 px-6 rounded-full text-white font-semibold text-center mb-4"
                style={{ background: "linear-gradient(135deg, #F45474, #C13C9F)" }}
              >
                Open Vidate
              </a>
              <p className="text-sm text-gray-400">Tap the button above to return to the app.</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
