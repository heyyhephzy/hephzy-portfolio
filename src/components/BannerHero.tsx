import Link from "next/link";
import { ArrowRight } from "lucide-react";

// The new hero, built from the Bubblegum & Butter banner. Four blocks of type, each with its own treatment.
export default function BannerHero() {
  return (
    <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 md:pt-44 site-wrap">
      <h1 className="font-sans font-black tracking-[-0.03em] leading-[1.02] text-[clamp(2.6rem,7vw,6.5rem)]">
        <span className="mr-3 inline-block rounded-full bg-[#FF8CC6] px-5 pb-1 pt-2 shadow-[0_6px_0_0_#1C0B18]">
          I design
        </span>{" "}
        <span className="mr-3 inline-block rounded-2xl bg-[#1C0B18] px-5 pb-1 pt-2 text-[#FF8CC6]">
          products
        </span>{" "}
        <span className="mr-3 inline-block rounded-2xl border-[3px] border-[#1C0B18] bg-white px-5 pb-1 pt-2 text-[#1C0B18]">
          &amp; draw
        </span>{" "}
        <span className="inline-block rounded-[40px] bg-[#FFD35C] px-5 pb-1 pt-2 text-[#1C0B18]">
          the fun bits.
        </span>
      </h1>

      <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
        <p className="font-sans text-base sm:text-lg text-[#5A3A48]">
          Product Designer &amp; Illustrator · heyhephzy.com
        </p>
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
