"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface Step {
  num: string;
  tool: string;
  title: string;
  summary: string;
  details: string;
  spec: { label: string; value: string }[];
}

const buildSteps: Step[] = [
  {
    num: "01",
    tool: "FigJam & Systems Mapping",
    title: "Map the Flow Before Pushing Pixels",
    summary:
      "I map how people really move through a product: decision branches, offline states, and edge cases.",
    details:
      "My Mechatronics background taught me that failure modes happen at the seams. Before designing screens, I architect the user flow and write down the exact state machine.",
    spec: [
      { label: "Artifact", value: "User flow diagram & state specs" },
      { label: "Focus", value: "Edge cases & reduced friction" },
    ],
  },
  {
    num: "02",
    tool: "Figma & Design Tokens",
    title: "Design with Real Components and Variables",
    summary:
      "Every frame is built with developer-ready variable tokens and semantic spacing scales.",
    details:
      "No mystery hex codes or random paddings. I pick variable names an engineer would use (e.g. `space/4`, `radius/16`, `color/farm-green-700`) to guarantee seamless developer handoff.",
    spec: [
      { label: "Tokens", value: "Semantic colors, radii, tap sizes" },
      { label: "Scale", value: "48px tap targets, 7.1:1 contrast" },
    ],
  },
  {
    num: "03",
    tool: "Adobe Illustrator & Vector Lab",
    title: "Bespoke Vector Storytelling",
    summary:
      "Custom vector characters, spot illustrations, and icons that give products unmistakable soul.",
    details:
      "Where others drop generic AI stock art, I draw original vector assets with clean bezier paths. Lightweight, scalable SVGs that reinforce product narrative and brand emotion.",
    spec: [
      { label: "Format", value: "Optimized SVG vectors" },
      { label: "Weight", value: "Ultra-lightweight DOM footprint" },
    ],
  },
  {
    num: "04",
    tool: "Framer Motion & Code Handshake",
    title: "Micro-Interactions & Final Polish",
    summary:
      "Tactile spring physics, responsive gesture feedback, and accessibility compliance.",
    details:
      "Great software feels alive. I choreograph spring curves, focus rings, keyboard navigability, and subtle kinetic states so the final shipped experience feels effortless.",
    spec: [
      { label: "Physics", value: "Spring curves (stiffness: 300, damping: 25)" },
      { label: "Output", value: "Production-ready, accessible build" },
    ],
  },
];

export default function CraftSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="py-24 max-w-6xl mx-auto px-6 relative">
      {/* Header */}
      <div className="mb-16 pb-6 border-b border-[var(--border-subtle)] flex flex-col md:flex-row md:items-end justify-between">
        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-[var(--accent-pink)] font-semibold mb-2">
            The Process
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--text-main)]">
            How I <span className="subtle-highlight font-serif">build</span>.
          </h2>
          <p className="text-sm text-[var(--text-muted)] mt-2 font-sans max-w-xl">
            A 4-step pipeline: from systems mapping to vector art to developer-ready polish.
          </p>
        </div>
        <span className="font-mono text-xs text-[var(--text-muted)] mt-4 md:mt-0">
          Mechatronics logic + Design craft
        </span>
      </div>

      {/* Stepper Grid (Inspired by Uxora) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left: Step Selector List */}
        <div className="lg:col-span-5 space-y-3">
          {buildSteps.map((step, idx) => (
            <button
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`w-full p-5 rounded-2xl text-left border transition-all duration-200 flex items-start gap-4 ${
                activeStep === idx
                  ? "bg-[var(--bg-card)] border-[var(--border-hover)] shadow-md"
                  : "bg-transparent border-transparent hover:bg-[var(--bg-card-subtle)] opacity-70 hover:opacity-100"
              }`}
            >
              <span className="font-mono text-xs font-bold text-[var(--accent-pink)] mt-0.5">
                {step.num}
              </span>
              <div>
                <span className="block font-mono text-[11px] uppercase tracking-wider text-[var(--text-muted)]">
                  {step.tool}
                </span>
                <h4 className="font-serif text-lg font-bold text-[var(--text-main)] mt-0.5">
                  {step.title}
                </h4>
              </div>
            </button>
          ))}
        </div>

        {/* Right: Active Step Inspector Panel */}
        <div className="lg:col-span-7">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)] shadow-lg space-y-6"
          >
            <div className="flex items-center justify-between pb-4 border-b border-[var(--border-subtle)] font-mono text-xs">
              <span className="text-[var(--accent-pink)] font-semibold">
                Step {buildSteps[activeStep].num} · {buildSteps[activeStep].tool}
              </span>
              <span className="text-[var(--text-muted)]">Verified Workflow</span>
            </div>

            <div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[var(--text-main)]">
                {buildSteps[activeStep].title}
              </h3>
              <p className="text-sm font-sans text-[var(--text-main)] font-medium mt-2 leading-relaxed">
                {buildSteps[activeStep].summary}
              </p>
              <p className="text-sm font-sans text-[var(--text-muted)] mt-3 leading-relaxed">
                {buildSteps[activeStep].details}
              </p>
            </div>

            {/* Spec Box */}
            <div className="p-4 rounded-2xl bg-[var(--bg-card-subtle)] border border-[var(--border-subtle)] grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
              {buildSteps[activeStep].spec.map((item, i) => (
                <div key={i}>
                  <span className="block text-[11px] text-[var(--text-muted)]">
                    {item.label}
                  </span>
                  <span className="block font-medium text-[var(--text-main)] mt-0.5">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
