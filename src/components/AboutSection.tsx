"use client";

import React from "react";
import { Compass, GraduationCap, Sparkles, Layers } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-14 sm:py-20 site-wrap">
      <div className="rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)] p-5 sm:p-12 shadow-sm space-y-8">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-6 border-b border-[var(--border-subtle)]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[var(--accent-pink)]" />
            <p className="font-mono text-xs uppercase tracking-wider text-[var(--accent-pink)] font-semibold">
              About Me
            </p>
          </div>
          <span className="font-mono text-xs text-[var(--text-muted)]">
            Port Harcourt, Nigeria 📍
          </span>
        </div>

        {/* Core Story */}
        <div className="space-y-5 max-w-3xl">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-main)]">
            Bridging analytical systems with{" "}
            <span className="subtle-highlight font-serif italic">expressive illustration</span>.
          </h2>

          <div className="space-y-4 text-base sm:text-lg text-[var(--text-muted)] font-sans leading-relaxed">
            <p>
              I studied <strong>Mechatronics Engineering</strong>, where I developed a deep appreciation for systems architecture, circuit logic, and state machines. That background shapes how I approach product design: making sure complex workflows stay simple, responsive, and stress-free for real users.
            </p>
            <p>
              As an <strong>Illustrator</strong> and <strong>Designer</strong> at <strong>Cowrywise Ambassadors</strong>, I balance that engineering discipline with expressive visual craft — giving digital products distinct character, charm, and human warmth.
            </p>
          </div>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-4 font-mono text-xs">
          <div className="p-4 rounded-2xl bg-[var(--bg-card-subtle)] space-y-1">
            <div className="w-8 h-8 rounded-lg bg-[var(--bg-card)] flex items-center justify-center text-[var(--accent-pink)] mb-2 shadow-sm">
              <GraduationCap className="w-4 h-4" />
            </div>
            <span className="block text-[11px] text-[var(--text-subtle)] uppercase">Degree</span>
            <span className="block font-bold text-[var(--text-main)]">B.ENG Mechatronics</span>
          </div>

          <div className="p-4 rounded-2xl bg-[var(--bg-card-subtle)] space-y-1">
            <div className="w-8 h-8 rounded-lg bg-[var(--bg-card)] flex items-center justify-center text-blue-500 mb-2 shadow-sm">
              <Layers className="w-4 h-4" />
            </div>
            <span className="block text-[11px] text-[var(--text-subtle)] uppercase">Role</span>
            <span className="block font-bold text-[var(--text-main)]">Product Designer</span>
          </div>

          <div className="p-4 rounded-2xl bg-[var(--bg-card-subtle)] space-y-1">
            <div className="w-8 h-8 rounded-lg bg-[var(--bg-card)] flex items-center justify-center text-purple-500 mb-2 shadow-sm">
              <Sparkles className="w-4 h-4" />
            </div>
            <span className="block text-[11px] text-[var(--text-subtle)] uppercase">Craft</span>
            <span className="block font-bold text-[var(--text-main)]">Illustrator</span>
          </div>

          <div className="p-4 rounded-2xl bg-[var(--bg-card-subtle)] space-y-1">
            <div className="w-8 h-8 rounded-lg bg-[var(--bg-card)] flex items-center justify-center text-emerald-500 mb-2 shadow-sm">
              <Compass className="w-4 h-4" />
            </div>
            <span className="block text-[11px] text-[var(--text-subtle)] uppercase">Community</span>
            <span className="block font-bold text-[var(--text-main)]">Cowrywise Design</span>
          </div>
        </div>

      </div>
    </section>
  );
}
