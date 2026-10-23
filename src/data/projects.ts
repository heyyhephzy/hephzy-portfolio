import React from "react";
import OsitaCover from "@/components/covers/OsitaCover";
import CinevaCover from "@/components/covers/CinevaCover";

export interface Project {
  id: string;
  title: string;
  /** Short phrase shown next to the title on the card, e.g. "Financial learning for kids". */
  descriptor: string;
  category: string;
  role: string;
  year: string;
  oneLiner: string;
  color: string;
  icon: string;
  overview: string;
  highlights: string[];
  /** Full case study page. When set, the card opens it instead of the quick-view modal. */
  href?: string;
  /** Cover image shown on the card. */
  cover?: string;
  /** Moving cover drawn in code; used instead of `cover` when set. */
  animatedCover?: React.ComponentType;
}

export const projects: Project[] = [
  {
    id: "aptivo",
    title: "Aptivo",
    descriptor: "Learning app for early readers",
    category: "EdTech & Mobile App",
    role: "Product Design, Branding & Illustration",
    year: "2026",
    oneLiner: "A learning app for early learners, where every subject has a face and a flower called Petal leads the way.",
    color: "#F56A57",
    icon: "🌸",
    overview:
      "A mobile learning app for young children who can't read fluently yet. Nine screens, a mascot and a full brand, built so colour, shape and character do the work words can't.",
    highlights: [
      "Petal the mascot asks the child's name instead of a sign-up form",
      "One colour per subject, carried through every screen",
      "Brand, mascot and every illustration drawn by me",
    ],
    href: "/work/aptivo",
    cover: "/covers/aptivo.webp",
  },
  {
    id: "osita-farm",
    title: "Osita Farm",
    descriptor: "Farm-to-table grocery app",
    category: "E-commerce & Mobile App",
    role: "UI/UX Design & Illustration",
    year: "2026",
    oneLiner: "A farm-to-table grocery app that puts the produce first, and shows you how fresh it really is.",
    color: "#D93A2B",
    icon: "🍅",
    overview:
      "A concept app for buying fresh produce straight from the farm, delivered the same day. Six screens, from splash to order status, built around one idea: freshness should be visible, not just promised.",
    highlights: [
      "“Harvested today” works as both a filter and a badge",
      "A four-colour palette where every colour has one job",
      "Every illustration hand-drawn by me",
    ],
    href: "/work/osita-farm",
    animatedCover: OsitaCover,
  },
  {
    id: "cineva",
    title: "Cineva",
    descriptor: "Movie discovery & ticket booking",
    category: "Entertainment & Mobile App",
    role: "Product Design",
    year: "2026",
    oneLiner: "A movie discovery and ticket booking app that takes you from “what’s showing?” to a seat in four steps.",
    color: "#FF7A59",
    icon: "🎬",
    overview:
      "A fictional cinema platform concept. Eight screens, dark and light, built around a calm, fast booking flow and a seat map where free, taken and selected read instantly.",
    highlights: [
      "One coral accent, reserved for the main action and small highlights",
      "A seat map where state is shown by shape and fill, not colour alone",
      "Every screen designed in both Dark and Light modes",
    ],
    href: "/work/cineva",
    animatedCover: CinevaCover,
  },
  {
    id: "cowrywise-ambassadors",
    title: "Cowrywise Ambassador Hub",
    descriptor: "Campus financial literacy platform",
    category: "Fintech & Community",
    role: "Design Team Member",
    year: "2025",
    oneLiner: "Gamified platform empowering student leaders to build financial literacy across campuses.",
    color: "#2563EB",
    icon: "🦉",
    overview:
      "Designed engagement touchpoints, ambassador portal interfaces, and reward systems to help campus ambassadors organize financial workshops and drive savings habits across Nigerian universities.",
    highlights: [
      "42% increase in campus referral completions",
      "Gamified milestone progression badges and leaderboards",
      "Over 1,200 active student ambassadors onboarded",
    ],
  },
  {
    id: "vectorverse",
    title: "Character & Mascot Systems",
    descriptor: "Vector mascot & illustration systems",
    category: "Illustration & Brand",
    role: "Illustrator",
    year: "2025",
    oneLiner: "Bespoke vector mascot libraries and editorial spot art for digital brands.",
    color: "#8B5CF6",
    icon: "✨",
    overview:
      "Handcrafted vector illustrations and character sets built to give software personality and emotional resonance without slowing down page load times.",
    highlights: [
      "Over 150 custom scalable SVG vectors delivered",
      "Standardized anchor geometry for ultra-lightweight asset weights",
      "Character expression sets for onboarding and empty states",
    ],
  },
];
