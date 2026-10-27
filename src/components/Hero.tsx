"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import Image from "next/image";
import { siClaude, siGithub } from "simple-icons";
import FigmaLogo from "./FigmaLogo";

import mascot from "../../public/profile mascot/spidey.png";

/** Official brand mark, drawn from its simple-icons path. */
function BrandIcon({ path, className, color }: { path: string; className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden stroke="none">
      <path d={path} fill={color || "currentColor"} />
    </svg>
  );
}

// Antigravity has no mark in simple-icons, so it uses its SVG from public/logos (MIT, via LobeHub icons)
const tools = [
  { name: "Claude", icon: <BrandIcon path={siClaude.path} className="w-6 h-6" color={`#${siClaude.hex}`} />, color: `#${siClaude.hex}` },
  { name: "Antigravity", icon: <img src="/logos/antigravity.svg" alt="" className="w-6 h-6" />, color: "#FF5F5F" },
  { name: "Figma", icon: <FigmaLogo className="w-6 h-6" />, color: "#000000" },
  { name: "GitHub", icon: <BrandIcon path={siGithub.path} className="w-6 h-6 text-[var(--text-main)]" color="currentColor" />, color: `#${siGithub.hex}` },
];

// The marquee loops by sliding half its track, so each half repeats the tools enough to cover any screen width
const marqueeHalf = [...tools, ...tools];

export default function Hero() {
  return (
    <section className="relative pt-28 pb-8 sm:pt-36 sm:pb-10 md:pt-44 md:pb-12 overflow-hidden">
      <div className="site-wrap">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="md:col-span-8 space-y-6">
            
            {/* Availability Pill */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-mono font-medium bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--text-muted)] shadow-sm"
            >
              <span className="w-2 h-2 flex-shrink-0 rounded-full bg-[var(--accent-pink)] animate-pulse" />
              <span>
                Available for <span className="hidden sm:inline">Product Design &amp; Illustration</span>
                <span className="sm:hidden">new projects</span>
              </span>
            </motion.div>

            {/* Bold Name with Speech Bubble */}
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="pt-4 sm:pt-0 font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[var(--text-main)] flex flex-wrap items-baseline gap-x-3 gap-y-1"
            >
              <span>Yahaya</span>
              <span className="relative inline-block text-[var(--text-main)]">
                Hephzibah
                {/* Floating Speech Bubble */}
                <span className="absolute -top-6 -right-1 sm:-top-7 sm:-right-16 text-[10px] sm:text-[11px] font-mono font-normal bg-[var(--accent-pink)] text-white px-2.5 py-0.5 rounded-full shadow-sm rotate-6 whitespace-nowrap">
                  call me Hephzy! ✨
                </span>
              </span>
            </motion.h1>

            {/* Clean Punchy Bio Description (Product Designer & Illustrator only) */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl md:text-2xl text-[var(--text-muted)] font-sans leading-relaxed max-w-2xl"
            >
              is a{" "}
              <span className="font-semibold text-[var(--text-main)] border-b-2 border-emerald-400/80 pb-0.5">
                Product Designer
              </span>{" "}
              &amp;{" "}
              <span className="font-semibold text-[var(--text-main)] border-b-2 border-[var(--accent-pink)] pb-0.5">
                Illustrator
              </span>{" "}
              who turns complex ideas into delightful digital products and expressive illustrated worlds.
            </motion.p>

            {/* CTA Row: resume preview (solid button, link goes live once the PDF/page exists) + the tools I use, inline */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="pt-4 flex flex-wrap items-center gap-x-6 gap-y-4"
            >
              {/* Resume: the PDF opens in a new tab, and the download button saves it */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="/resume"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-xl border-[3px] border-[#141214] bg-[#141214] px-3.5 sm:px-4 py-2 font-sans text-xs sm:text-sm font-bold text-white shadow-[3px_3px_0_0_rgba(0,0,0,0.35)] hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-none transition-transform duration-150"
                >
                  <span>Preview Resume</span>
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#FF4FA3] text-[#141214]">
                    <BookOpen className="w-3.5 h-3.5" />
                  </span>
                </a>
              </div>

              {/* Tools row: continuous scrolling marquee of tool icons (CSS animation, same as the Playground conveyors, so it loops without a restart hitch) */}
              <div className="relative overflow-hidden w-full">
                <div className="animate-tools-marquee items-center gap-8 whitespace-nowrap">
                  {marqueeHalf.concat(marqueeHalf).map((tool, idx) => (
                    <span
                      key={`${tool.name}-${idx}`}
                      className="inline-flex items-center gap-1.5"
                    >
                      {tool.icon}<span className="text-[var(--text-main)]">{tool.name}</span>
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>


          </div>

          {/* Right Column: Mascot Avatar (shown first, above the name, on phones) */}
          <div className="md:col-span-4 flex justify-center order-first md:order-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)] p-6 shadow-lg flex flex-col items-center justify-center text-center group hover:scale-105 transition-transform duration-300"
            >
              {/* Round avatar: mascot cropped to head and shoulders */}
              <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden bg-[#FFE8F2] ring-4 ring-[var(--bg-main)] shadow-[0_0_0_5px_var(--accent-pink-border)] mb-3">
                <Image
                  src={mascot}
                  alt="Hephzy's Spider-Gwen mascot"
                  sizes="144px"
                  preload
                  className="absolute left-[7.5%] top-[8%] w-[85%] h-auto max-w-none select-none pointer-events-none origin-top group-hover:scale-[1.06] group-hover:-rotate-3 transition-transform duration-300"
                  draggable={false}
                />
              </div>

              <div className="space-y-0.5 font-mono text-xs">
                <span className="font-bold text-[var(--text-main)]">Hephzy</span>
              </div>

              <span className="absolute -bottom-3 text-[10px] font-mono px-3 py-1 rounded-full bg-[var(--bg-main)] border border-[var(--border-subtle)] text-[var(--text-muted)] shadow-sm">
                UI/UX + Illustration
              </span>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
