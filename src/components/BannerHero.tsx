import Link from "next/link";
import { ArrowRight } from "lucide-react";

// The new hero: the Bubblegum & Butter banner, used as the SVG artwork and centred.
export default function BannerHero() {
  return (
    <section className="site-wrap flex flex-col items-center pt-28 pb-12 text-center sm:pt-32 sm:pb-24 md:pt-36">
      <h1 className="sr-only">I design products &amp; draw the fun bits.</h1>
      <img
        src="/banner.svg"
        alt=""
        width={870}
        height={325}
        className="hidden h-auto w-full max-w-[1200px] md:block"
      />
      {/* Phones: the same four phrases of the banner, stacked one above another */}
      <div className="flex w-full flex-col items-center gap-2 md:hidden" aria-hidden="true">
        {["line-1", "line-2", "line-3", "line-4"].map((line) => (
          <img key={line} src={`/hero/${line}.svg`} alt="" className="h-auto w-full" />
        ))}
      </div>

      <div className="mt-6 flex flex-col items-center gap-5">
        <div className="flex flex-col items-center gap-1 font-sans text-base text-[var(--text-muted)] sm:text-lg">
          <p>&ldquo;I&rsquo;m a designer who draws, and an engineer who got lost on the way to the workshop.&rdquo;</p>
          <p className="text-sm sm:text-base">&mdash; Hephzy, Product Designer &amp; Illustrator</p>
        </div>
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 rounded-xl border-[3px] border-[var(--hero-ink)] bg-[#FF8CC6] px-4 py-2 font-sans text-sm font-bold text-[#1C0B18] shadow-[3px_3px_0_0_var(--hero-shadow)] transition-transform duration-150 hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-none"
        >
          <span>See my work</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
