import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

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
          <p>I&rsquo;m a designer who draws, and an engineer who got lost on the way to the workshop.</p>
          <p className="text-sm sm:text-base">Hephzy &middot; Product Designer &amp; Illustrator</p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 rounded-xl border-[3px] border-[var(--hero-ink)] bg-[#FF8CC6] px-4 py-2 font-sans text-sm font-bold text-[#1C0B18] shadow-[3px_3px_0_0_var(--hero-shadow)] transition-transform duration-150 hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-none"
          >
            <span>See my work</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="/resume"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-xl border-[3px] border-[#141214] bg-[#141214] px-3.5 sm:px-4 py-2 font-sans text-sm font-bold text-white shadow-[3px_3px_0_0_rgba(0,0,0,0.35)] hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-none transition-transform duration-150"
          >
            <span>Preview Resume</span>
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#FF8CC6] text-[#141214]">
              <BookOpen className="w-3.5 h-3.5" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
