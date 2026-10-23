import Link from "next/link";
import { ArrowLeft } from "lucide-react";

// The back link at the top of every case study: an arrow and "Back to home".
export default function BackHome() {
  return (
    <div className="px-6 sm:px-10 pt-6 sm:pt-8">
      <Link
        href="/"
        className="inline-flex items-center gap-2 font-serif text-lg font-bold text-[#141214] hover:opacity-70 transition-opacity"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to home</span>
      </Link>
    </div>
  );
}
