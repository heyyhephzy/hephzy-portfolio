import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Resume - Hephzy",
  description: "Resume of Yahaya Hephzibah (Hephzy), product designer and illustrator.",
};

export default function ResumePage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#FFF6FA] text-[#141214]">
      <header className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-[#141214] px-6 py-4 sm:px-10">
        <Link href="/" className="inline-flex items-center gap-2 font-serif text-lg font-bold hover:opacity-70">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to home</span>
        </Link>
      </header>

      <div className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-4 py-6 sm:px-6 sm:py-10">
        {[1, 2, 3].map((page) => (
          <img
            key={page}
            src={`/resume/page-${page}.webp`}
            alt={`Resume, page ${page} of 3`}
            width={1275}
            height={1650}
            className="h-auto w-full rounded-lg border border-[#141214]/15 bg-white shadow-md"
          />
        ))}
      </div>

    </main>
  );
}
