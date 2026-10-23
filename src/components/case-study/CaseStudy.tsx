import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, X } from "lucide-react";

/*
 * Editorial building blocks shared by every case study page:
 * a narrow serif reading column, wide framed figures with captions, and a dark intro.
 * Case studies are always shown light, like a printed article.
 */

export type Shot = { src: string; width: number; height: number; alt: string };

/** Dark intro block: top bar, title, tags, summary and cover. */
export function Intro({
  title,
  tags,
  children,
  cover,
  note,
}: {
  title: string;
  tags: string[];
  children: React.ReactNode;
  cover: Shot;
  note?: string;
}) {
  return (
    <header className="bg-[#0E0E0E] text-[#EDEBE8]">
      <nav className="border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/#work" aria-label="Close case study" className="text-white/80 hover:text-white transition-colors">
            <X className="w-6 h-6" strokeWidth={1.5} />
          </Link>
        </div>
      </nav>

      <div className="max-w-[680px] mx-auto px-6 pt-12 sm:pt-16 pb-10 sm:pb-14">
        <h1 className="font-[family-name:var(--font-garamond)] text-[38px] sm:text-[52px] font-bold leading-[1.04] tracking-[-0.03em] text-white">
          {title}
        </h1>
        <ul className="flex flex-wrap gap-2 mt-5">
          {tags.map((t) => (
            <li key={t} className="font-[family-name:var(--font-garamond)] text-lg px-2 rounded-md border border-white/40 text-white/90">
              {t}
            </li>
          ))}
        </ul>
        <div className="font-[family-name:var(--font-garamond)] text-[21px] sm:text-[23px] leading-[1.45] text-white/85 mt-7 space-y-[0.45em]">
          {children}
        </div>
      </div>

      <div className="max-w-[1040px] mx-auto px-3 sm:px-5 pb-12 sm:pb-16">
        <Image
          quality={95}
          src={cover.src}
          width={cover.width}
          height={cover.height}
          alt={cover.alt}
          sizes="(min-width: 1040px) 1000px, 100vw"
          preload
          className="w-full h-auto rounded-[20px] sm:rounded-[32px]"
        />
        {note && (
          <p className="max-w-[632px] mx-auto font-[family-name:var(--font-garamond)] text-base text-white/45 mt-8 leading-relaxed">{note}</p>
        )}
      </div>
    </header>
  );
}

/** A titled section of the article: small eyebrow, then the heading, then prose. */
export function Section({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="max-w-[680px] mx-auto px-6 mt-20 sm:mt-24 first:mt-16">
      <p className="font-[family-name:var(--font-garamond)] text-[22px] sm:text-2xl text-[#2A2622] tracking-[-0.02em]">{eyebrow}</p>
      {title && (
        <h2 className="font-[family-name:var(--font-garamond)] text-[30px] sm:text-[36px] font-bold leading-[1.1] tracking-[-0.03em] text-[#2A2622] mt-1">
          {title}
        </h2>
      )}
      <div className="font-[family-name:var(--font-garamond)] text-[21px] sm:text-[23px] leading-[1.45] text-[#3A3530] [&>*+*]:mt-[0.45em] [&_strong]:font-semibold [&_strong]:text-[#2A2622] mt-6">
        {children}
      </div>
    </section>
  );
}

/** Small bold sub-heading inside a section. */
export function Sub({ children }: { children: React.ReactNode }) {
  return <h3 className="font-[family-name:var(--font-garamond)] font-bold text-[#2A2622] !mt-6">{children}</h3>;
}

/** Bulleted list where each item opens with a bold lead-in. */
export function Points({ items }: { items: { lead: string; text?: React.ReactNode }[] }) {
  return (
    <ul className="list-disc pl-7 space-y-2.5 marker:text-[#2A2622]">
      {items.map((i) => (
        <li key={i.lead} className="pl-1.5">
          <strong className="font-semibold text-[#2A2622]">{i.lead}</strong>
          {i.text && <span className="block">{i.text}</span>}
        </li>
      ))}
    </ul>
  );
}

/** Wide grey board that holds visuals, with an italic caption below. */
export function Figure({
  caption,
  children,
  bare = false,
}: {
  caption: string;
  children: React.ReactNode;
  /** Skip the grey board, for images that already have their own background. */
  bare?: boolean;
}) {
  return (
    <figure className="max-w-[1240px] mx-auto px-3 sm:px-5 mt-12 sm:mt-14">
      <div
        className={
          bare
            ? "overflow-hidden rounded-[24px] sm:rounded-[40px]"
            : "rounded-[24px] sm:rounded-[40px] bg-[#F4F3F1] border border-black/[0.06] px-3 py-6 sm:px-8 sm:py-12"
        }
      >
        {children}
      </div>
      <figcaption className="font-[family-name:var(--font-garamond)] italic text-lg sm:text-xl text-[#77716B] text-center mt-4 px-4">
        {caption}
      </figcaption>
    </figure>
  );
}

/** A row of phone screens, sized to sit side by side inside a Figure. */
export function Screens({ shots, max }: { shots: Shot[]; max?: number }) {
  // Fewer screens get more width each, so every board fills the frame
  max ??= ({ 1: 420, 2: 400, 3: 340 } as Record<number, number>)[shots.length] ?? 300;
  return (
    <div className="flex justify-center items-start gap-3 sm:gap-8">
      {shots.map((s) => (
        <div
          key={s.src}
          className="flex-1 min-w-0 overflow-hidden shadow-[0_12px_32px_-12px_rgba(0,0,0,0.25)] ring-1 ring-black/[0.06]"
          // Phone corners: same visual radius horizontally and vertically on a 1608×3496 screen
          style={{ maxWidth: max, borderRadius: "9% / 4.15%" }}
        >
          <Image
quality={95}             src={s.src}
            width={s.width}
            height={s.height}
            alt={s.alt}
            sizes={`(min-width: 1240px) ${max}px, ${Math.round(95 / shots.length)}vw`}
            className="w-full h-auto block"
          />
        </div>
      ))}
    </div>
  );
}
