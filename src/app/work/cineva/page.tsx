import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Play, Ticket as TicketIcon, Heart } from "lucide-react";
import { bricolage, jakarta } from "@/fonts/cineva";

/*
 * Cineva has its own look, taken straight from the Figma case study:
 * bright cream, coral accents, Bricolage Grotesque headings, Plus Jakarta Sans text,
 * with the dark app screens floating on the light page.
 */

export const metadata: Metadata = {
  title: "Cineva — UI Case Study | Hephzy",
  description:
    "Designing a movie discovery and ticket booking app that takes you from “what’s showing?” to a seat in four steps. Product design by Hephzy.",
};

const IMG = "/case-studies2/cineva";

const C = {
  cream: "#F5F4F1",
  surface: "#FFFFFF",
  elevated: "#ECEBE7",
  ink: "#111116",
  inkSoft: "#5C5C69",
  inkFaint: "#8A8A93",
  coral: "#FF7A59",
  dark: "#0A0A0F",
  darkSurface: "#1E1916",
  darkElevated: "#2B2421",
};

const display = `${bricolage.variable} font-[family-name:var(--font-bricolage)] font-medium tracking-[-0.01em]`;
const sans = `${jakarta.variable} font-[family-name:var(--font-jakarta)]`;
const wrap = "mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-[8.3%]";

/** A single app-screen export, 393×852 native. */
function Screen({
  src,
  alt,
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div className={`overflow-hidden rounded-[20px] shadow-[0_24px_60px_-20px_rgba(17,17,22,0.35)] ring-1 ring-black/[0.04] ${className}`}>
      <Image
        src={`${IMG}/${src}.png`}
        width={393}
        height={852}
        alt={alt}
        priority={priority}
        sizes="(min-width: 1024px) 360px, 45vw"
        className="w-full h-auto block"
      />
    </div>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className={`${sans} text-[13px] sm:text-sm font-semibold uppercase tracking-[0.08em]`} style={{ color: C.coral }}>
      {children}
    </p>
  );
}

function Heading({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h2 className={`${display} text-[32px] sm:text-[40px] lg:text-[48px] leading-[1.08] whitespace-pre-line ${className}`} style={{ color: C.ink }}>
      {children}
    </h2>
  );
}

function Body({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`${sans} text-[15px] sm:text-base leading-[1.7] ${className}`} style={{ color: C.inkSoft }}>
      {children}
    </p>
  );
}

function Section({
  eyebrow,
  heading,
  index,
  children,
  className = "",
}: {
  eyebrow: string;
  heading: React.ReactNode;
  index: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`${wrap} py-16 sm:py-24 ${className}`}>
      <Eyebrow>
        {index} &mdash; {eyebrow}
      </Eyebrow>
      <Heading className="mt-3 max-w-[680px]">{heading}</Heading>
      {children}
    </section>
  );
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-[20px] p-6 sm:p-7 ${className}`} style={{ backgroundColor: C.surface }}>
      {children}
    </div>
  );
}

export default function CinevaCaseStudy() {
  return (
    <div className={`${sans} min-h-screen`} style={{ backgroundColor: C.cream, color: C.ink }}>
      {/* ---------- Hero ---------- */}
      <header className="relative overflow-hidden">
        <div
          className="absolute rounded-full pointer-events-none"
          style={{ width: 900, height: 700, right: -200, top: -300, background: `radial-gradient(circle, ${C.coral}33, transparent 70%)` }}
        />
        {/* Cover artwork first, full width on black, like a cinema screen */}
        <div className="relative bg-black">
          <Image
            src="/covers/cineva.jpg"
            alt="Cineva cover: dark app screens with movie posters on a black background"
            width={1600}
            height={1066}
            priority
            sizes="100vw"
            className="w-full h-auto block"
          />
        </div>

        <div className={`${wrap} relative pt-12 sm:pt-16`}>
          <Link
            href="/work"
            className={`${sans} inline-flex items-center gap-2 text-sm font-medium hover:opacity-70 transition-opacity`}
            style={{ color: C.inkSoft }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all work
          </Link>

          <p className={`${sans} mt-10 sm:mt-14 text-xs sm:text-sm font-semibold uppercase tracking-[0.1em]`} style={{ color: C.coral }}>
            UI case study
          </p>
          <h1 className="sr-only">Cineva</h1>
          <p className={`${sans} mt-6 max-w-[560px] text-[17px] sm:text-xl leading-[1.6]`} style={{ color: C.inkSoft }}>
            Designing a movie discovery and ticket booking app that takes you from &ldquo;what&rsquo;s showing?&rdquo; to a seat in
            four steps.
          </p>

          <div className="mt-10 sm:mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 max-w-[720px] pb-10">
            {[
              { label: "Role", value: "Product design" },
              { label: "Platform", value: "iOS mobile app" },
              { label: "Deliverables", value: "8 screens · dark & light · mockups" },
              { label: "Tools", value: "Figma" },
            ].map((m) => (
              <div key={m.label}>
                <p className={`${sans} text-xs font-semibold uppercase tracking-[0.06em]`} style={{ color: C.inkFaint }}>
                  {m.label}
                </p>
                <p className={`${sans} mt-1.5 text-sm sm:text-[15px] font-medium`} style={{ color: C.ink }}>
                  {m.value}
                </p>
              </div>
            ))}
          </div>
        </div>

      </header>

      <main>
        {/* ---------- 01 Overview ---------- */}
        <Section eyebrow="Overview" heading={"A cinema app that feels\nas fun as the films."} index="01">
          <div className="mt-10 grid sm:grid-cols-2 gap-8 sm:gap-14 max-w-[1100px]">
            <div>
              <h3 className={`${sans} text-sm font-bold`} style={{ color: C.ink }}>
                The brief
              </h3>
              <Body className="mt-3">
                CINEVA is a fictional cinema platform. People should be able to discover movies, explore showtimes at nearby
                cinemas, pick their seats and book tickets, all from one app.
              </Body>
            </div>
            <div>
              <h3 className={`${sans} text-sm font-bold`} style={{ color: C.ink }}>
                The challenge
              </h3>
              <Body className="mt-3">
                Movie apps are either beautiful but slow to book, or quick but forgettable. Cineva had to make browsing feel
                exciting while keeping booking calm and fast. Seat selection in particular had to make it obvious which seats
                are free, taken or yours.
              </Body>
            </div>
          </div>
        </Section>

        {/* ---------- 02 Goals ---------- */}
        <Section eyebrow="Goals" heading="Three things the design had to do." index="02">
          <div className="mt-10 grid sm:grid-cols-3 gap-5">
            {[
              { n: "01", title: "Make discovery visual", text: "Let real posters do the work. One featured film per screen, not a wall of competing cards." },
              { n: "02", title: "Keep booking short", text: "Film → time → seats → pay → ticket. Each step shows only what that decision needs." },
              { n: "03", title: "Seats at a glance", text: "Free, taken and selected seats should differ in shape and fill, not just colour." },
            ].map((g) => (
              <Card key={g.n}>
                <p className={`${display} text-2xl`} style={{ color: C.coral }}>
                  {g.n}
                </p>
                <h3 className={`${display} mt-5 text-xl`} style={{ color: C.ink }}>
                  {g.title}
                </h3>
                <Body className="mt-3 text-sm">{g.text}</Body>
              </Card>
            ))}
          </div>
        </Section>

        {/* ---------- 03 Direction ---------- */}
        <Section eyebrow="Direction" heading={"Playful references,\ntoned down."} index="03">
          <div className="mt-10 grid lg:grid-cols-[1fr_380px] gap-10 sm:gap-14 items-start">
            <div className="space-y-5 max-w-[560px]">
              <Body>
                The references were dark social apps full of tilted photo collages, sticker badges and a loud pink accent.
                They had energy, but too much of it for a booking flow.
              </Body>
              <Body>
                Cineva keeps the dark base and one warm accent. The collage becomes a few small moments: tilted posters on
                the splash screen and a sticker here and there. Real posters bring the colour.
              </Body>
            </div>
            <div className="rounded-[20px] p-5" style={{ backgroundColor: C.dark }}>
              <span
                className="inline-block rounded-full px-3 py-1 text-xs font-semibold"
                style={{ backgroundColor: C.darkElevated, color: "#fff" }}
              >
                Now showing
              </span>
              <div className="mt-5 grid grid-cols-5 gap-2.5">
                {[
                  { label: "Base", hex: C.dark },
                  { label: "Surface", hex: C.darkSurface },
                  { label: "Elevated", hex: C.darkElevated },
                  { label: "Coral", hex: C.coral },
                  { label: "Text", hex: "#FFFFFF" },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="aspect-square rounded-lg ring-1 ring-white/10" style={{ backgroundColor: s.hex }} />
                    <p className="mt-1.5 text-[10px] font-medium text-white/60">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* ---------- 04 Iterations ---------- */}
        <Section eyebrow="Iterations" heading="What changed after review." index="04">
          <Body className="mt-4 max-w-[600px]">
            The first version tried to do everything at once: an accent on every element, borders on every card and no
            clear place to look. These are the changes that fixed it.
          </Body>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { label: "Accent colour", before: "Pink on every button, tab, chip and tag", after: "Coral only for the main action and small highlights", note: "One accent means one place to look." },
              { label: "Hero film", before: "A moody, brown sci-fi poster", after: "Bright family films: Moana 2, Inside Out 2", note: "The posters set the mood of the whole screen." },
              { label: "Type weight", before: "Bold and semibold headings", after: "Regular and Medium only", note: "Hierarchy from size and space, not shouting." },
              { label: "Borders", before: "Thin strokes around every card and chip", after: "Separation through fill contrast", note: "Outlines now mean something: free seats." },
              { label: "Background", before: "Blurred poster glow on every screen", after: "A subtle coral glow at the top", note: "Consistent, and never fights the posters." },
              { label: "Navigation", before: "Docked, full-width tab bar", after: "Floating glass navbar", note: "Content scrolls under it, so the page feels bigger." },
            ].map((row) => (
              <Card key={row.label}>
                <h3 className={`${sans} text-sm font-bold`} style={{ color: C.ink }}>
                  {row.label}
                </h3>
                <div className="mt-4 space-y-2.5">
                  <p className="text-sm leading-snug" style={{ color: C.inkFaint, textDecoration: "line-through", textDecorationColor: `${C.inkFaint}80` }}>
                    {row.before}
                  </p>
                  <p className="text-sm leading-snug font-medium" style={{ color: C.ink }}>
                    {row.after}
                  </p>
                </div>
                <p className="mt-4 text-xs italic" style={{ color: C.coral }}>
                  {row.note}
                </p>
              </Card>
            ))}
          </div>
        </Section>

        {/* ---------- 05 Flow ---------- */}
        <Section eyebrow="User flow" heading="Seven screens, one straight line." index="05">
          <div className="mt-10 flex flex-wrap items-stretch gap-x-2 gap-y-5">
            {[
              { n: "01", title: "Splash", sub: "First impression" },
              { n: "02", title: "Home", sub: "Pick a film" },
              { n: "03", title: "Details", sub: "Synopsis, cast, trailer" },
              { n: "04", title: "Showtimes", sub: "Cinema and time" },
              { n: "05", title: "Seats", sub: "Choose your seats", highlight: true },
              { n: "06", title: "Checkout", sub: "Review and pay" },
              { n: "07", title: "Ticket", sub: "QR at the door" },
            ].map((step, i, arr) => (
              <div key={step.n} className="flex items-center gap-2">
                <div
                  className="w-[130px] sm:w-[150px] rounded-2xl p-4"
                  style={{ backgroundColor: step.highlight ? C.coral : C.surface }}
                >
                  <p className="text-xs font-semibold" style={{ color: step.highlight ? "#fff9" : C.inkFaint }}>
                    {step.n}
                  </p>
                  <p className={`${display} mt-1.5 text-base`} style={{ color: step.highlight ? "#fff" : C.ink }}>
                    {step.title}
                  </p>
                  <p className="mt-1 text-xs leading-snug" style={{ color: step.highlight ? "#fffc" : C.inkSoft }}>
                    {step.sub}
                  </p>
                </div>
                {i < arr.length - 1 && (
                  <span className="hidden sm:block text-lg" style={{ color: C.inkFaint }}>
                    &rarr;
                  </span>
                )}
              </div>
            ))}
          </div>
          <Body className="mt-8 max-w-[600px]">
            Seats is the step the brief cared about most, so it gets its own deep dive below.
          </Body>
        </Section>

        {/* ---------- 06 Design system ---------- */}
        <Section eyebrow="Design system" heading="Small kit, used everywhere." index="06">
          <p className={`${sans} mt-10 text-xs font-semibold uppercase tracking-[0.08em]`} style={{ color: C.inkFaint }}>
            Colour
          </p>
          <div className="mt-4 grid grid-cols-3 sm:grid-cols-6 gap-4 max-w-[1100px]">
            {[
              { label: "Base", a: C.dark, b: C.cream, hexA: "#0A0A0F", hexB: "#F5F4F1" },
              { label: "Surface", a: C.darkSurface, b: "#FFFFFF", hexA: "#1E1916", hexB: "#FFFFFF" },
              { label: "Elevated", a: C.darkElevated, b: C.elevated, hexA: "#2B2421", hexB: "#ECEBE7" },
              { label: "Text primary", a: "#FFFFFF", b: C.ink, hexA: "#FFFFFF", hexB: "#111116" },
              { label: "Text secondary", a: "#A3A3B3", b: C.inkSoft, hexA: "#A3A3B3", hexB: "#5C5C69" },
              { label: "Coral accent", a: C.coral, b: C.coral, hexA: "#FF7A59", hexB: null },
            ].map((s) => (
              <div key={s.label}>
                <div className="aspect-[4/3] rounded-xl overflow-hidden flex ring-1 ring-black/[0.06]">
                  <div className="flex-1" style={{ backgroundColor: s.a }} />
                  <div className="flex-1" style={{ backgroundColor: s.b }} />
                </div>
                <p className={`${sans} mt-2 text-sm font-semibold`} style={{ color: C.ink }}>
                  {s.label}
                </p>
                <p className="text-xs font-mono mt-0.5" style={{ color: C.inkFaint }}>
                  {s.hexB ? `${s.hexA} / ${s.hexB}` : s.hexA}
                </p>
              </div>
            ))}
          </div>
          <Body className="mt-5 max-w-[700px] text-sm">
            Each swatch: dark mode on the left, light mode on the right. All colours live as variables with Dark and Light
            modes.
          </Body>

          <div className="mt-14 grid sm:grid-cols-2 gap-10 max-w-[800px]">
            <div>
              <p className={`${sans} text-xs font-semibold uppercase tracking-[0.08em]`} style={{ color: C.inkFaint }}>
                Type
              </p>
              <p className={`${display} mt-4 text-5xl`} style={{ color: C.ink }}>
                Aa
              </p>
              <p className={`${sans} mt-4 text-sm font-semibold`} style={{ color: C.ink }}>
                Bricolage Grotesque Medium
              </p>
              <p className="text-xs mt-0.5" style={{ color: C.inkFaint }}>
                Headings &middot; 32 / 24 / 18
              </p>
            </div>
            <div>
              <p className={`${sans} text-xs font-semibold uppercase tracking-[0.08em]`} style={{ color: C.inkFaint }}>
                &nbsp;
              </p>
              <p className="mt-4 text-5xl font-normal" style={{ color: C.ink }}>
                Aa
              </p>
              <p className={`${sans} mt-4 text-sm font-semibold`} style={{ color: C.ink }}>
                Plus Jakarta Sans Regular &amp; Medium
              </p>
              <p className="text-xs mt-0.5" style={{ color: C.inkFaint }}>
                Body &amp; labels &middot; 15 / 14 / 13 / 11
              </p>
            </div>
          </div>

          <div className="mt-14">
            <p className={`${sans} text-xs font-semibold uppercase tracking-[0.08em]`} style={{ color: C.inkFaint }}>
              Components
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-4">
              <button className={`${sans} inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold`} style={{ backgroundColor: C.coral, color: C.dark }}>
                Book tickets
              </button>
              <span className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: C.surface }}>
                <Play className="w-4 h-4" style={{ color: C.ink }} />
              </span>
              <span className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: C.surface }}>
                <Heart className="w-4 h-4" style={{ color: C.ink }} />
              </span>
              <div className="flex items-center gap-1.5 rounded-full p-1" style={{ backgroundColor: C.surface }}>
                <span className="rounded-full px-4 py-1.5 text-xs font-semibold" style={{ backgroundColor: C.dark, color: "#fff" }}>
                  All formats
                </span>
                <span className="rounded-full px-3 py-1.5 text-xs font-semibold" style={{ color: C.ink }}>
                  2D
                </span>
                <span className="rounded-full px-3 py-1.5 text-xs font-semibold" style={{ color: C.ink }}>
                  IMAX
                </span>
              </div>
              <div className="flex items-center gap-3 text-xs font-medium" style={{ color: C.inkSoft }}>
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-sm ring-1" style={{ borderColor: C.inkFaint, backgroundColor: "transparent" }} />
                  Free
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-sm" style={{ backgroundColor: C.elevated }} />
                  Taken
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-sm" style={{ backgroundColor: C.coral }} />
                  Yours
                </span>
              </div>
              <div className="flex items-center gap-5 rounded-2xl px-5 py-3" style={{ backgroundColor: C.surface }}>
                {[
                  { icon: null, label: "Home" },
                  { icon: null, label: "Explore" },
                  { icon: TicketIcon, label: "Tickets" },
                  { icon: null, label: "Profile" },
                ].map((t) => (
                  <span key={t.label} className="flex flex-col items-center gap-1 text-[10px] font-medium" style={{ color: C.inkFaint }}>
                    {t.icon ? <t.icon className="w-4 h-4" /> : <span className="w-4 h-4 rounded-full ring-1" style={{ borderColor: C.inkFaint }} />}
                    {t.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* ---------- 07 Discover ---------- */}
        <Section eyebrow="Discover" heading={"One hero.\nNo noise."} index="07">
          <div className="mt-10 grid lg:grid-cols-[1fr_1.4fr] gap-10 items-center">
            <div className="space-y-5 max-w-[460px]">
              <Body>
                Home opens on a single featured film with one clear action. &ldquo;Now showing&rdquo; sits quietly
                underneath, and the floating glass navbar lets posters scroll beneath it.
              </Body>
              <Body>
                Details keeps the same rhythm: backdrop, title, a ratings strip, a short synopsis and the cast, with the
                price and &ldquo;Get tickets&rdquo; always within reach.
              </Body>
            </div>
            <div className="flex gap-6 sm:gap-10 justify-center">
              <Screen src="home-dark" alt="Cineva home screen" className="w-[42%] max-w-[300px]" />
              <Screen src="details-dark" alt="Cineva movie details screen" className="w-[42%] max-w-[300px] mt-10" />
            </div>
          </div>
        </Section>

        {/* ---------- 08 Booking flow ---------- */}
        <Section eyebrow="Booking" heading={"From film to ticket\nin four steps."} index="08">
          <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { n: "01", title: "Pick a time", text: "Dates up top, then cinemas with their times. Past times fade out.", src: "showtimes-dark", alt: "Cineva showtimes screen" },
              { n: "02", title: "Choose seats", text: "A full seat map with your choice in coral.", src: "seats-dark", alt: "Cineva seat selection screen" },
              { n: "03", title: "Pay", text: "One summary card, three payment options, one button.", src: "checkout-dark", alt: "Cineva checkout screen" },
              { n: "04", title: "Get your ticket", text: "A QR code you can show at the door or add to your wallet.", src: "ticket-dark", alt: "Cineva ticket screen" },
            ].map((step) => (
              <div key={step.n}>
                <Screen src={step.src} alt={step.alt} />
                <h3 className={`${sans} mt-4 text-sm font-bold`} style={{ color: C.ink }}>
                  {step.n} &nbsp; {step.title}
                </h3>
                <Body className="mt-1.5 text-sm">{step.text}</Body>
              </div>
            ))}
          </div>
        </Section>

        {/* ---------- 09 Seat selection ---------- */}
        <section className={`${wrap} py-16 sm:py-24`}>
          <div className="grid lg:grid-cols-[1fr_1fr] gap-10 sm:gap-16 items-start">
            <div className="flex gap-6 justify-center lg:order-1">
              <Screen src="seats-dark" alt="Cineva seat selection screen, dark mode" className="w-[60%] max-w-[340px]" />
              <Screen src="seats-light" alt="Cineva seat selection screen, light mode" className="w-[42%] max-w-[260px] mt-16" />
            </div>
            <div className="lg:order-2">
              <Eyebrow>09 &mdash; Seat selection</Eyebrow>
              <Heading className="mt-3">{"Know your seat\nat a glance."}</Heading>
              <div className="mt-8 space-y-6 max-w-[420px]">
                {[
                  { label: "Free", text: "An empty outline reads as “open”, even in greyscale." },
                  { label: "Taken", text: "Filled but muted, so it fades into the background." },
                  { label: "Yours", text: "The only colour on the map, with the seat number on it." },
                ].map((l) => (
                  <div key={l.label}>
                    <h3 className={`${sans} text-sm font-bold`} style={{ color: C.ink }}>
                      {l.label}
                    </h3>
                    <Body className="mt-1 text-sm">{l.text}</Body>
                  </div>
                ))}
              </div>
              <Body className="mt-8 max-w-[460px] text-sm">
                Also on this screen: a curved screen with soft light spill so you know which way you&rsquo;re facing,
                aisles that split each row 2&ndash;6&ndash;2 like a real hall, a quick time switcher, and a panel where
                your seats and total update as you tap.
              </Body>
            </div>
          </div>
        </section>

        {/* ---------- 10 Ticket ---------- */}
        <section className={`${wrap} py-16 sm:py-24`}>
          <div className="grid lg:grid-cols-[1fr_1fr] gap-10 sm:gap-16 items-start">
            <div>
              <Eyebrow>10 &mdash; Ticket</Eyebrow>
              <Heading className="mt-3">{"A ticket that feels\nlike a ticket."}</Heading>
              <div className="mt-8 space-y-6 max-w-[420px]">
                {[
                  { label: "Torn-edge card", text: "Notches and a dotted tear line split the details from the code." },
                  { label: "Big, high-contrast QR", text: "Easy to scan in a dark lobby. The booking ID sits just below as a backup." },
                  { label: "Everything at the door", text: "Date, time, hall, seats and cinema in one glance. Seats stay coral." },
                ].map((l) => (
                  <div key={l.label}>
                    <h3 className={`${sans} text-sm font-bold`} style={{ color: C.ink }}>
                      {l.label}
                    </h3>
                    <Body className="mt-1 text-sm">{l.text}</Body>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center">
              <Screen src="ticket-dark" alt="Cineva ticket screen with QR code and Admit 2 sticker" className="w-[70%] max-w-[360px]" />
            </div>
          </div>
        </section>

        {/* ---------- 11 Light mode / all screens ---------- */}
        <Section eyebrow="Light mode" heading="Every screen, both modes." index="11">
          <Body className="mt-4 max-w-[600px]">
            All seven screens of the flow, Dark and Light side by side &mdash; same layout, same tokens, just a mode
            switch.
          </Body>
          <div className="mt-10 space-y-10 overflow-x-auto">
            {(
              [
                { label: "Dark mode", suffix: "dark" },
                { label: "Light mode", suffix: "light" },
              ] as const
            ).map((row) => (
              <div key={row.suffix}>
                <p className={`${sans} text-xs font-semibold uppercase tracking-[0.08em]`} style={{ color: C.coral }}>
                  {row.label}
                </p>
                <div className="mt-4 flex gap-3 sm:gap-4 min-w-max">
                  {["splash", "home", "details", "showtimes", "seats", "checkout", "ticket"].map((s) => (
                    <Screen
                      key={s}
                      src={`${s}-${row.suffix}`}
                      alt={`Cineva ${s} screen, ${row.label.toLowerCase()}`}
                      className="w-[110px] sm:w-[140px] flex-shrink-0"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ---------- 12 Reflection ---------- */}
        <Section eyebrow="Reflection" heading="What I’d take with me." index="12">
          <div className="mt-10 grid sm:grid-cols-3 gap-8 max-w-[1100px]">
            {[
              { n: "01", title: "Restraint is a feature", text: "Every accent I removed made the remaining ones work harder. The best fix was usually deleting something." },
              { n: "02", title: "Let the content lead", text: "Swapping one poster changed the mood of the whole app more than any colour tweak did." },
              { n: "03", title: "Design states, not screens", text: "The seat map only works because free, taken and selected were designed together as one system." },
            ].map((r) => (
              <div key={r.n}>
                <p className={`${display} text-2xl`} style={{ color: C.coral }}>
                  {r.n}
                </p>
                <h3 className={`${display} mt-4 text-xl`} style={{ color: C.ink }}>
                  {r.title}
                </h3>
                <Body className="mt-3 text-sm">{r.text}</Body>
              </div>
            ))}
          </div>

          <div className="mt-14 pt-10 border-t" style={{ borderColor: "rgba(17,17,22,0.08)" }}>
            <h3 className={`${sans} text-sm font-bold`} style={{ color: C.ink }}>
              Next steps
            </h3>
            <ul className="mt-4 grid sm:grid-cols-2 gap-3 max-w-[800px]">
              {[
                "Test the seat map with real people on small phones",
                "Add snacks and drinks to checkout",
                "Group booking with split payments",
                "Run a full accessibility and contrast check",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm" style={{ color: C.inkSoft }}>
                  <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: C.coral }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Section>

        {/* ---------- Footer ---------- */}
        <footer className="relative overflow-hidden mt-10">
          <div
            className="absolute rounded-full pointer-events-none"
            style={{ width: 800, height: 600, left: "50%", top: -250, transform: "translateX(-50%)", background: `radial-gradient(circle, ${C.coral}26, transparent 70%)` }}
          />
          <div className={`${wrap} relative py-20 sm:py-28 text-center`}>
            <Eyebrow>See you at the movies</Eyebrow>
            <Heading className="mt-4 mx-auto">{"Thanks for\nscrolling."}</Heading>
            <p className={`${display} mt-10 text-2xl`} style={{ color: C.inkFaint }}>
              cineva
            </p>

            <div className="mt-14 pt-8 border-t flex flex-wrap items-center justify-between gap-4 max-w-[680px] mx-auto text-base" style={{ borderColor: "rgba(17,17,22,0.08)" }}>
              <Link href="/work" className="inline-flex items-center gap-2 font-medium hover:opacity-70 transition-opacity" style={{ color: C.ink }}>
                <ArrowLeft className="w-4 h-4" />
                Back to all work
              </Link>
              <a
                href="mailto:heyyhephzy@gmail.com"
                className="inline-flex items-center gap-1.5 font-medium hover:opacity-70 transition-opacity"
                style={{ color: C.ink }}
              >
                heyyhephzy@gmail.com
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
