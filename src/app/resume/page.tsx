import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Download, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Resume - Hephzy",
  description: "Resume of Yahaya Hephzibah (Hephzy), product designer and illustrator.",
};

const button =
  "inline-flex items-center gap-2 rounded-xl border-[3px] border-[#141214] px-3 py-1.5 font-sans text-sm font-bold shadow-[3px_3px_0_0_rgba(0,0,0,0.35)] hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-none transition-transform duration-150";

export default function ResumePage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#FFF6FA] text-[#141214]">
      <header className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-[#141214] px-6 py-4 sm:px-10">
        <Link href="/" className="inline-flex items-center gap-2 font-serif text-lg font-bold hover:opacity-70">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to home</span>
        </Link>
        <div className="flex items-center gap-3">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={`${button} bg-white`}
          >
            <ExternalLink className="w-4 h-4" />
            <span>Open PDF</span>
          </a>
          <a
            href="/resume.pdf"
            download="Hephzibah-Yahaya-Design-CV.pdf"
            className={`${button} bg-[#141214] text-white`}
          >
            <Download className="w-4 h-4" />
            <span>Download</span>
          </a>
        </div>
      </header>

      <iframe src="/resume.pdf#view=FitH" title="Resume" className="min-h-[80vh] w-full flex-1" />

      <p className="px-6 py-4 text-sm md:hidden">
        If the preview doesn&apos;t show on your phone, use Open PDF above.
      </p>
    </main>
  );
}
