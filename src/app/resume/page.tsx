import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ScrollToTopOnLoad from "@/components/ScrollToTopOnLoad";

export const metadata: Metadata = {
  title: "Resume - Hephzy",
  description: "Resume of Yahaya Hephzibah (Hephzy), product designer and illustrator.",
};

export default function ResumePage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#FFF6FA] text-[#141214]">
      <ScrollToTopOnLoad />
      <header className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-[#141214] px-6 py-4 sm:px-10">
        <Link href="/" className="inline-flex items-center gap-2 font-serif text-lg font-bold hover:opacity-70">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to home</span>
        </Link>
      </header>

      <iframe
        src="/resume.pdf#view=FitH"
        title="Resume"
        className="hidden min-h-[85vh] w-full flex-1 md:block"
      />

      <div className="flex flex-col items-center gap-3 px-6 py-10 md:hidden">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="font-sans text-base font-medium underline underline-offset-4 hover:opacity-70"
        >
          Open resume (PDF)
        </a>
      </div>

    </main>
  );
}
