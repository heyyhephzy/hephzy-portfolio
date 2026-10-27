"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import PlaygroundSection from "@/components/PlaygroundSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import IntroSplash from "@/components/IntroSplash";

// Welcome intro is switched off for now. Set to true to bring it back.
const SHOW_INTRO = false;

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-[var(--accent-pink)] selection:text-white" id="top">
      {/* First-visit welcome: "The Catch" swings in, then hands over to the site */}
      {SHOW_INTRO && <IntroSplash />}
      {/* Floating Pill Navigation with Eye Mascot */}
      <Navbar />

      {/* Main Content: sits above the fixed footer and slides away to reveal it */}
      <main className="flex-grow relative z-10 bg-[var(--bg-main)] md:mb-[var(--footer-h,0px)]">
        {/* Breezy Hero (Inspired by Toyo's Creative Space) */}
        <Hero />

        {/* Selected Works (Clean, visual, punchy cards) */}
        <ProjectsSection />

        {/* The Creative Playground (Dual Marquee Conveyors) */}
        <PlaygroundSection />

        {/* Concise About Me */}
        <AboutSection />
      </main>

      {/* Illustrated Wave Footer, fixed underneath the page, with socials */}
      <Footer />
    </div>
  );
}
