import Link from "next/link";
import { ArrowRight } from "lucide-react";

// The new hero: the Bubblegum & Butter banner, used as the SVG artwork and centred.
export default function BannerHero() {
  return (
    <section className="site-wrap flex flex-col items-center pt-32 pb-16 text-center sm:pt-40 sm:pb-24 md:pt-44">
      <h1 className="sr-only">I design products &amp; draw the fun bits.</h1>
      <img
        src="/banner.svg"
        alt=""
        width={1500}
        height={500}
        className="h-auto w-full max-w-[1100px]"
      />

      <div className="mt-8 flex flex-col items-center gap-5">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 rounded-xl border-[3px] border-[#1C0B18] bg-[#FF8CC6] px-4 py-2 font-sans text-sm font-bold text-[#1C0B18] shadow-[3px_3px_0_0_#1C0B18] transition-transform duration-150 hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-none"
        >
          <span>See my work</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
