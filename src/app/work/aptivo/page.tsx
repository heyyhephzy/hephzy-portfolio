import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { cheri, grandstander, rubik } from "@/fonts/aptivo";

/*
 * Aptivo has its own look, taken straight from the Figma case study:
 * cream and white bands, Grandstander headings, Rubik text, the Cheri wordmark,
 * and a flower in each subject colour.
 */

export const metadata: Metadata = {
  title: "Aptivo — UI/UX Case Study | Hephzy",
  description:
    "Learning that feels like play: a mobile learning app for early learners, with a flower guide called Petal. Product design, branding and illustration by Hephzy.",
};

const IMG = "/case-studies2/aptivo";

const C = {
  cream: "#FFF6EC",
  coral: "#F56A57",
  blue: "#378ADD",
  orange: "#EF9F27",
  green: "#639922",
  berry: "#D4537E",
  lilac: "#7F77DD",
  mint: "#5DCAA5",
  cocoa: "#3A2E2A",
};

const display = "font-[family-name:var(--font-grandstander)] font-extrabold tracking-[-0.01em] text-[#3A2E2A]";
const wrap = "mx-auto w-full max-w-[1600px] px-5 sm:px-10 lg:px-[6.7%]";
const lead = "text-[18px] sm:text-[20px] lg:text-[22px] leading-[1.6] text-[#3A2E2A]";
const body = "text-[16px] sm:text-[17px] lg:text-[18px] leading-[1.65]";
const muted = "text-[#7A6A62]";

/** Five-petal flower with a cocoa outline, like Petal. */
function Flower({ color, className = "w-8 h-8" }: { color: string; className?: string }) {
  const petals = [0, 72, 144, 216, 288].map((a) => ({
    a,
    cx: Math.sin((a * Math.PI) / 180) * 26,
    cy: -Math.cos((a * Math.PI) / 180) * 26,
  }));
  // Outline layer under the fill, so only the outer silhouette is stroked
  return (
    <svg viewBox="-50 -50 100 100" className={className} aria-hidden>
      <g fill={C.cocoa}>
        {petals.map((p) => (
          <circle key={p.a} cx={p.cx} cy={p.cy} r="21" />
        ))}
        <circle r="22" />
      </g>
      <g fill={color}>
        {petals.map((p) => (
          <circle key={p.a} cx={p.cx} cy={p.cy} r="16.5" />
        ))}
        <circle r="20" />
      </g>
    </svg>
  );
}

function Heading({ flower, children }: { flower: string; children: React.ReactNode }) {
  return (
    <h2 className={`${display} flex items-center gap-3 sm:gap-4 text-[36px] sm:text-[48px] lg:text-[60px] leading-[1.05]`}>
      <Flower color={flower} className="w-7 h-7 sm:w-9 sm:h-9 shrink-0" />
      <span>{children}</span>
    </h2>
  );
}

function Rule() {
  return <hr className="border-0 border-t border-[#EFE3D6]" />;
}

const overview = [
  { label: "My role", value: "Product designer & illustrator" },
  { label: "Platform", value: "Mobile app" },
  { label: "Status", value: "Concept" },
  { label: "Deliverables", value: "Brand identity, mascot, custom illustrations, style guide, user flow, high-fidelity UI" },
];

const problems = [
  {
    color: C.blue,
    text: "Most learning apps for kids feel like school on a screen, or like games with a lesson bolted on. Kids drop the first kind and play the second without learning much.",
  },
  {
    color: C.lilac,
    text: "Young children can't rely on reading. Dense text, small targets and adult navigation patterns shut them out.",
  },
  {
    color: C.berry,
    text: "Progress is invisible. A child has no sense of how far they've come, so there's no pull to come back tomorrow.",
  },
];

const onboarding = [
  { title: "Hello", text: "The app opens on a face, so it feels like meeting someone.", alt: "Splash: Petal's eyes above the white Aptivo wordmark on coral" },
  { title: "Meet Petal", text: "The guide peeks up before introducing herself.", alt: "The coral Aptivo wordmark with Petal peeking up from the bottom" },
  { title: "“What's your name?”", text: "The first question is about the child, not an account.", alt: "Petal asks “Hi! I'm Petal. What's your name?” above a name field" },
  { title: "Pick what you love", text: "Six big tiles, one tap each, then straight in.", alt: "Six colour tiles: Math, Coding/Logic, Art, Music, Science and Reading" },
];

type Decision = {
  img: string;
  w: number;
  h: number;
  alt: string;
  side: "left" | "right";
  color: string;
  eyebrow: string;
  title: string;
  text: string;
  quote: string;
};

const decisions: Decision[] = [
  {
    img: "decision-name",
    w: 942,
    h: 1617,
    alt: "Petal asks the child's name on a cream screen, with a pale coral circle behind",
    side: "left",
    color: C.coral,
    eyebrow: "A guide, not a form",
    title: "Petal asks first",
    text: "Instead of a sign-up form, the child meets a character who asks their name. That name comes back on the home screen (\"Hello Alyssa\") and on the profile, so the app feels like it knows them.",
    quote: "A mascot gives a pre-reader something to follow. Petal shows up again as the small flower in the corner of every main screen, a constant reminder of who's guiding them.",
  },
  {
    img: "decision-subjects",
    w: 941,
    h: 1658,
    alt: "Pick what you love: six subject tiles in their colours, with a pale blue circle behind",
    side: "right",
    color: C.blue,
    eyebrow: "Colour carries meaning",
    title: "One colour per subject, everywhere",
    text: "Maths is blue, Coding/Logic is mint, Art is lilac, Music is berry, Science is green and Reading is orange. The child picks subjects by colour and icon on day one, and the same colours return on lesson cards, course tiles and progress bars.",
    quote: "For a child who can't read \"Science\" yet, \"the green one with the flask\" is enough to find it again.",
  },
  {
    img: "decision-home",
    w: 942,
    h: 1610,
    alt: "Home: Hello Alyssa, a 30% progress ring, and lesson cards with googly eyes, with a pale lilac circle behind",
    side: "left",
    color: C.lilac,
    eyebrow: "Every subject has a face",
    title: "Lessons that look back at you",
    text: "Each lesson card on Home is a little character with big googly eyes, sitting on top of its subject name and a progress bar. The overall progress ring at the top shows the whole picture at a glance.",
    quote: "Faces make the home screen feel like a group of friends to visit, not a list of tasks to clear.",
  },
  {
    img: "decision-courses",
    w: 941,
    h: 1613,
    alt: "Courses: tilted, stacked tiles grouped by subject, with a locked Coming soon tile and a pale mint circle behind",
    side: "right",
    color: C.mint,
    eyebrow: "Built for small hands",
    title: "Tiles you want to tap",
    text: "Courses are big, slightly tilted tiles stacked like toy blocks, each with one icon and one word: addition, puzzles, riddles, paint, chess. Subjects are grouped under their own heading, and a greyed \"Coming soon\" tile sets expectations for what's next.",
    quote: "The tilt and layered colour make the grid feel touchable and playful, while the large targets stay easy for small fingers.",
  },
  {
    img: "decision-lesson",
    w: 942,
    h: 1589,
    alt: "Counting to 20: a blue header, 2 of 6 lessons done, and the list of short lessons, with a pale blue circle behind",
    side: "left",
    color: C.blue,
    eyebrow: "Small steps",
    title: "One goal, six short lessons",
    text: "\"Counting to 20\" is split into bite-size parts: Numbers 1 to 5, 6 to 10 and so on, then a counting game and two practice quizzes. The current lesson is outlined and a simple bar shows \"2 of 6 lessons done\".",
    quote: "Young attention spans are short. Small wins keep momentum, and mixing games with quizzes keeps practice from feeling like a test.",
  },
  {
    img: "decision-progress",
    w: 941,
    h: 1588,
    alt: "My Progress: a coral 6 day streak banner, progress per subject and badges earned, with a pale coral circle behind",
    side: "right",
    color: C.coral,
    eyebrow: "Progress you can feel",
    title: "Streaks and badges, gently",
    text: "The progress screen leads with the streak (\"6 day streak! Keep it going, learn today\"), then shows each subject's progress in its own colour, then the badges earned. A locked badge slot hints that there's always one more thing to unlock.",
    quote: "I kept the language encouraging rather than competitive. There's no leaderboard here; the only person a child is racing is yesterday's self.",
  },
  {
    img: "decision-profile",
    w: 942,
    h: 1613,
    alt: "Profile: Alyssa's avatar, totals, a trophy case and parent settings, with a pale berry circle behind",
    side: "left",
    color: C.berry,
    eyebrow: "Kids in front, parents behind",
    title: "A profile that's a trophy case",
    text: "The profile puts the child's avatar, totals (14 lessons, 3 badges, 6 day streak) and trophy case up front. Parent settings, notifications and help live in a plain list underneath.",
    quote: "Grown-up controls stay reachable for parents without cluttering the space a child sees every day.",
  },
];

const palette = [
  { name: "Petal coral", hex: "#F56A57" },
  { name: "Maths blue", hex: "#378ADD" },
  { name: "Reading orange", hex: "#EF9F27" },
  { name: "Science green", hex: "#639922" },
  { name: "Music berry", hex: "#D4537E" },
  { name: "Art lilac", hex: "#7F77DD" },
  { name: "Logic mint", hex: "#5DCAA5" },
  { name: "Cocoa ink", hex: "#3A2E2A" },
];

const nextSteps = [
  {
    title: "Test with real kids",
    text: "Watch children and parents use a prototype to see where they hesitate, and which screens they return to on their own.",
  },
  {
    title: "Add voice",
    text: "Let Petal read instructions aloud, so children who can't read yet can move through lessons without help.",
  },
  {
    title: "Check contrast",
    text: "Some white labels on the mint and orange tiles are light. I'd test them and darken text or tiles where needed.",
  },
];

export default function AptivoCaseStudy() {
  return (
    <div
      className={`${grandstander.variable} ${rubik.variable} ${cheri.variable} font-[family-name:var(--font-rubik)] min-h-screen bg-[#FFF6EC] text-[#3A2E2A] antialiased selection:bg-[#F56A57] selection:text-white`}
    >
      {/* ───────── Hero, overview and problem: cream ───────── */}
      <div className="bg-[#FFF6EC]">
        <nav className={`${wrap} pt-6 sm:pt-8`}>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-[15px] font-medium text-[#7A6A62] hover:text-[#F56A57] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>All work</span>
          </Link>
        </nav>

        <header className={`${wrap} grid md:grid-cols-[1.15fr_1fr] items-center gap-10 md:gap-12 pt-10 sm:pt-14 pb-16 sm:pb-24`}>
          <div>
            <p className="font-[family-name:var(--font-cheri)] text-[#F56A57] text-[52px] sm:text-[68px] lg:text-[84px] leading-none">
              Aptivo
            </p>
            <h1 className={`${display} text-[46px] sm:text-[68px] lg:text-[92px] leading-[1.02] mt-3 sm:mt-5`}>
              Learning that feels like <span className="text-[#F56A57]">play</span>
            </h1>
            <p className={`${body} ${muted} lg:text-[21px] mt-7 sm:mt-9 max-w-[600px]`}>
              A mobile learning app for early learners. Kids explore maths, art, logic, music and science through short
              lessons, a friendly flower guide called Petal, and progress they can actually see.
            </p>
            <p className={`${body} ${muted} lg:text-[21px] mt-6 max-w-[600px]`}>
              Case study by <strong className="font-semibold text-[#3A2E2A]">@heyhephzy</strong> • Product design,
              branding &amp; illustration
            </p>
          </div>
          <Image
            src={`${IMG}/petal.png`}
            width={1439}
            height={1394}
            alt="Petal, a big coral flower with googly eyes and a small smile"
            quality={95}
            preload
            sizes="(min-width: 768px) 45vw, 90vw"
            className="w-full max-w-[640px] h-auto mx-auto"
          />
        </header>

        <div className={wrap}>
          <Rule />
        </div>

        <section className={`${wrap} pt-16 sm:pt-24`}>
          <Heading flower={C.coral}>Overview</Heading>
          <dl className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 mt-8 sm:mt-10">
            {overview.map((o) => (
              <div key={o.label} className="rounded-[22px] bg-white px-5 py-5 sm:px-6 sm:py-6">
                <dt className="text-[12px] sm:text-[13px] font-semibold uppercase tracking-[0.06em] text-[#7A6A62]">{o.label}</dt>
                <dd className="text-[16px] sm:text-[19px] font-semibold leading-[1.45] mt-3">{o.value}</dd>
              </div>
            ))}
          </dl>
          <p className={`${lead} mt-10 sm:mt-14 max-w-[960px]`}>
            Aptivo is a learning app for young children who are still building the habit of learning on their own. Many
            of them can&apos;t read fluently yet, so every screen has to make sense through colour, shape and character
            before it makes sense through words.
          </p>
          <p className={`${body} mt-5 max-w-[860px]`}>
            I designed the full experience: the name and wordmark, Petal the mascot, a set of hand-drawn subject
            illustrations, and nine screens that take a child from their first tap to a trophy case of earned badges.
          </p>
        </section>

        <div className={`${wrap} pt-16 sm:pt-24`}>
          <Rule />
        </div>

        <section className={`${wrap} grid md:grid-cols-2 gap-5 sm:gap-7 pt-16 sm:pt-20 pb-16 sm:pb-24`}>
          <div className="rounded-[32px] bg-white p-7 sm:p-10">
            <h3 className={`${display} text-[26px] sm:text-[30px]`}>The problem</h3>
            <ol className="mt-6 space-y-5">
              {problems.map((p, i) => (
                <li key={i} className={`${body} flex gap-4`}>
                  <span
                    className="shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full grid place-items-center text-white font-[family-name:var(--font-grandstander)] font-extrabold"
                    style={{ backgroundColor: p.color }}
                  >
                    {i + 1}
                  </span>
                  <span className="pt-0.5">{p.text}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="rounded-[32px] bg-[#F56A57] text-white p-7 sm:p-10">
            <h3 className="font-[family-name:var(--font-grandstander)] font-extrabold text-[26px] sm:text-[30px]">My answer</h3>
            <p className={`${body} mt-6`}>
              Give learning a face. Every subject in Aptivo has its own colour and character, and Petal guides the child
              from the very first screen.
            </p>
            <p className={`${body} mt-5`}>
              Lessons are short and broken into small steps. Streaks, progress bars and badges turn effort into
              something a child can see and be proud of. The settings parents need sit quietly behind the profile, away
              from the play space.
            </p>
          </div>
        </section>
      </div>

      {/* ───────── Onboarding and decisions: white ───────── */}
      <div className="bg-white">
        <section className={`${wrap} pt-16 sm:pt-24`}>
          <Heading flower={C.orange}>First minute in the app</Heading>
          <p className={`${body} lg:text-[20px] mt-6 max-w-[820px]`}>
            Onboarding is four screens and two questions. I wanted a child to be learning in under a minute, with
            nothing an adult needs to fill in for them.
          </p>
          <ol className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 sm:gap-x-7 gap-y-10 mt-10 sm:mt-12">
            {onboarding.map((o, i) => (
              <li key={o.title}>
                <Image
                  src={`${IMG}/onboard-${i + 1}.png`}
                  width={669}
                  height={1454}
                  alt={o.alt}
                  quality={95}
                  sizes="(min-width: 1024px) 23vw, 46vw"
                  className="w-full h-auto"
                />
                <p className="font-[family-name:var(--font-grandstander)] font-extrabold text-[#F56A57] text-[15px] mt-4">{i + 1}</p>
                <p className="font-semibold text-[16px] sm:text-[18px] mt-1">{o.title}</p>
                <p className={`text-[14px] sm:text-[16px] leading-[1.55] ${muted} mt-1`}>{o.text}</p>
              </li>
            ))}
          </ol>
        </section>

        <div className={`${wrap} pt-16 sm:pt-20`}>
          <Rule />
        </div>

        <section className={`${wrap} pt-16 sm:pt-20 pb-16 sm:pb-24`}>
          <Heading flower={C.lilac}>Key design decisions</Heading>
          <div className="mt-6 sm:mt-10">
            {decisions.map((d, i) => (
              <article key={d.img}>
                {i > 0 && <Rule />}
                <div
                  className={`grid items-center gap-8 md:gap-[6%] py-12 sm:py-16 ${
                    d.side === "left" ? "md:grid-cols-[30%_1fr]" : "md:grid-cols-[1fr_30%]"
                  }`}
                >
                  <Image
                    src={`${IMG}/${d.img}.png`}
                    width={d.w}
                    height={d.h}
                    alt={d.alt}
                    quality={95}
                    sizes="(min-width: 768px) 30vw, 80vw"
                    className={`w-full max-w-[420px] h-auto mx-auto ${d.side === "right" ? "md:order-2" : ""}`}
                  />
                  <div className={d.side === "right" ? "md:order-1" : ""}>
                    <p className="text-[13px] sm:text-[15px] font-semibold uppercase tracking-[0.03em]" style={{ color: d.color }}>
                      {d.eyebrow}
                    </p>
                    <h3 className={`${display} text-[30px] sm:text-[38px] lg:text-[44px] leading-[1.1] mt-3`}>{d.title}</h3>
                    <p className={`${body} lg:text-[20px] mt-5 max-w-[780px]`}>{d.text}</p>
                    <blockquote
                      className={`${body} lg:text-[19px] ${muted} border-l-[5px] pl-5 mt-6 max-w-[720px]`}
                      style={{ borderColor: d.color }}
                    >
                      {d.quote}
                    </blockquote>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>

      {/* ───────── Style guide to the end: cream ───────── */}
      <div className="bg-[#FFF6EC]">
        <section className={`${wrap} pt-20 sm:pt-28`}>
          <Heading flower={C.mint}>Style guide</Heading>
          <div className="grid lg:grid-cols-2 gap-5 sm:gap-7 mt-8 sm:mt-10">
            <div className="rounded-[32px] bg-white p-7 sm:p-10">
              <h3 className={`${display} text-[24px] sm:text-[28px]`}>Colour palette</h3>
              <ul className="grid grid-cols-4 gap-x-2 gap-y-7 mt-8">
                {palette.map((c) => (
                  <li key={c.hex} className="flex flex-col items-center text-center">
                    <Flower color={c.hex} className="w-12 h-12 sm:w-16 sm:h-16" />
                    <span className="text-[13px] sm:text-[16px] font-semibold leading-tight mt-2">{c.name}</span>
                    <span className="font-mono text-[11px] sm:text-[13px] text-[#7A6A62] mt-1.5">{c.hex}</span>
                  </li>
                ))}
              </ul>
              <p className={`${body} ${muted} mt-8`}>
                Coral is the brand and action colour. The other six each belong to one subject. Cocoa replaces black for
                outlines and text, which keeps everything soft.
              </p>
            </div>

            <div className="rounded-[32px] bg-white p-7 sm:p-10 flex flex-col">
              <h3 className={`${display} text-[24px] sm:text-[28px]`}>Typography</h3>
              {/* Sample and description side by side; stacked on phones */}
              <div className="grid sm:grid-cols-[auto_1fr] gap-x-10 items-center mt-8">
                <p className="font-[family-name:var(--font-cheri)] text-[#F56A57] text-[52px] sm:text-[68px] leading-none">Aptivo</p>
                <div className="border-b border-[#EFE3D6] pb-5 mt-3 sm:mt-0">
                  <p className="font-semibold text-[17px] sm:text-[19px]">Cheri</p>
                  <p className={`${body} ${muted} mt-1`}>Wordmark only. Bouncy and hand-lettered, with a heart over the i.</p>
                </div>
                <p className="text-[24px] sm:text-[30px] font-medium leading-tight pt-5">Counting to 20</p>
                <div className="pt-3 sm:pt-5">
                  <p className="font-semibold text-[17px] sm:text-[19px]">Rubik</p>
                  <p className={`${body} ${muted} mt-1`}>
                    UI and body text. Rounded corners and open letterforms keep it friendly and easy to read.
                  </p>
                </div>
              </div>
              <p className={`${body} ${muted} mt-auto pt-8`}>
                Two typefaces, each with one job. All the personality goes into the wordmark and illustrations, so the
                interface text can stay calm and legible.
              </p>
            </div>
          </div>

          <div className="rounded-[32px] bg-white p-7 sm:p-10 mt-5 sm:mt-7">
            <h3 className={`${display} text-[24px] sm:text-[28px]`}>Custom illustrations</h3>
            <Image
              src={`${IMG}/illustrations.png`}
              width={2233}
              height={705}
              alt="Six hand-drawn objects (an easel, a flask, a book stack, a music note, a paint palette and a lightbulb): line sketches on the left, then filled in subject colours on the right"
              quality={95}
              sizes="(min-width: 1600px) 1300px, 90vw"
              className="w-full max-w-[1300px] h-auto mx-auto mt-6"
            />
            <p className={`${body} ${muted} mt-8 max-w-[820px]`}>
              I drew one object for each subject: a chalkboard easel for maths, a flask for science, a book stack for
              reading, a music note, a paint palette and a lightbulb for logic. They started as line drawings and were
              then filled with each subject&apos;s colour so they read as a set.
            </p>
          </div>
        </section>

        <div className={`${wrap} pt-16 sm:pt-20`}>
          <Rule />
        </div>

        <section className={`${wrap} pt-16 sm:pt-24`}>
          <Heading flower={C.blue}>All screens</Heading>
          <Image
            src={`${IMG}/all-screens.png`}
            width={3025}
            height={4418}
            alt="All nine screens on a white board: Splash, Welcome, Name, Subjects, Home, Courses, Lesson, Progress and Profile, with a hand-drawn easel signed @heyhephzy, a stack of books and a note reading “mobile app screens”"
            quality={95}
            sizes="(min-width: 1600px) 1450px, 95vw"
            className="w-full h-auto mt-8 sm:mt-10"
          />
        </section>

        <div className={`${wrap} pt-16 sm:pt-20`}>
          <Rule />
        </div>

        <section className={`${wrap} pt-16 sm:pt-24`}>
          <Heading flower={C.berry}>Reflections</Heading>
          <p className={`${lead} mt-8 max-w-[960px]`}>
            Designing for children taught me to stop leaning on words. When your user can&apos;t read the label, colour,
            shape and character have to do the work, and that discipline made every screen simpler.
          </p>
          <p className={`${body} lg:text-[20px] mt-5 max-w-[880px]`}>
            It also changed how I think about delight. A face on a lesson card or a flower in the corner isn&apos;t
            decoration here. It&apos;s what makes a young child want to open the app again tomorrow. Building the
            brand, mascot and illustrations alongside the UI meant those choices could support each other instead of
            being added at the end.
          </p>
          <ul className="grid md:grid-cols-3 gap-4 sm:gap-5 mt-10 sm:mt-12">
            {nextSteps.map((n) => (
              <li key={n.title} className="rounded-[22px] bg-white p-6 sm:p-7">
                <h3 className={`${display} text-[20px] sm:text-[22px]`}>{n.title}</h3>
                <p className={`${body} ${muted} mt-3`}>{n.text}</p>
              </li>
            ))}
          </ul>
        </section>

        <footer className={`${wrap} pt-16 sm:pt-20 pb-14 sm:pb-20`}>
          <Rule />
          <div className="flex flex-wrap items-center justify-between gap-4 pt-10">
            <a
              href="https://x.com/heyhephzy"
              target="_blank"
              rel="noopener noreferrer"
              className={`${display} text-[22px] sm:text-[26px] hover:text-[#F56A57] transition-colors`}
            >
              @heyhephzy
            </a>
            <div className={`flex flex-wrap items-center gap-x-6 gap-y-2 ${body} ${muted}`}>
              <span>Aptivo • designed in Figma</span>
              <Link href="/" className="inline-flex items-center gap-1.5 font-medium text-[#3A2E2A] hover:text-[#F56A57] transition-colors">
                <ArrowLeft className="w-4 h-4" />
                Back to home
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
