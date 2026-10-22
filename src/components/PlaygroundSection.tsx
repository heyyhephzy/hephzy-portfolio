"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import Image, { type StaticImageData } from "next/image";
import { Sparkles, RotateCcw, Maximize2, X, Move } from "lucide-react";

import abujaGate from "../../public/Abuja City Gate.png";
import cart from "../../public/cart2.png";
import lawCover from "../../public/Cover page- Design & The Law.png";
import lawPage2 from "../../public/Design & The Law- Page 2 - The _Dream_ Client.png";
import lawPage3 from "../../public/Design & The Law- Page 3 - The _Dream_ Client.png";
import farmProduce from "../../public/farm produce.png";
import goal from "../../public/fc.png";
import flowers from "../../public/flowers.png";
import flowers2 from "../../public/flowers2.png";
import foodhub from "../../public/foodhub-illos.png";
import skater from "../../public/Illustration 4.png";
import piggy from "../../public/piggy.png";
import sunnyDay from "../../public/playg.png";
import workspace from "../../public/SCENE2.png";
import spot from "../../public/Spot.png";
import storiesCover from "../../public/w cover page.png";
import blueprint from "../../public/WED.png";
import wanderer from "../../public/Whimsical wanderer.png";

interface PlaygroundItem {
  id: string;
  title: string;
  tag: string;
  image: StaticImageData;
}

const conveyorItemsRow1: PlaygroundItem[] = [
  { id: "1", title: "Abuja City Gate", tag: "Landmark", image: abujaGate },
  { id: "2", title: "Design & The Law", tag: "Comic Cover", image: lawCover },
  { id: "3", title: "Goalll!!!", tag: "Sports Poster", image: goal },
  { id: "4", title: "Whimsical Wanderer", tag: "Storybook Scene", image: wanderer },
  { id: "5", title: "Piggy Savings", tag: "Spot Illustration", image: piggy },
  { id: "6", title: "Value", tag: "Editorial Poster", image: flowers },
  { id: "7", title: "FoodHub Illustrations", tag: "Illustration Set", image: foodhub },
  { id: "8", title: "The Dream Client, Pt. 1", tag: "Comic Page", image: lawPage2 },
  { id: "9", title: "Deep Work", tag: "Scene Illustration", image: workspace },
];

const conveyorItemsRow2: PlaygroundItem[] = [
  { id: "10", title: "Sunny Day", tag: "Poster", image: sunnyDay },
  { id: "11", title: "Skate Day", tag: "Character Illustration", image: skater },
  { id: "12", title: "Farm Produce", tag: "Spot Illustration", image: farmProduce },
  { id: "13", title: "Where Stories Live", tag: "Book Cover", image: storiesCover },
  { id: "14", title: "Blooms", tag: "Editorial Poster", image: flowers2 },
  { id: "15", title: "Spot Illustrations", tag: "Icon Set", image: spot },
  { id: "16", title: "The Dream Client, Pt. 2", tag: "Comic Page", image: lawPage3 },
  { id: "17", title: "Blueprint", tag: "Concept Illustration", image: blueprint },
  { id: "18", title: "On The Move", tag: "Spot Illustration", image: cart },
];

// Scroll speed for both rows, in pixels per second
const CONVEYOR_SPEED = 45;

function ConveyorTrack({
  items,
  direction,
  onSelect,
}: {
  items: PlaygroundItem[];
  direction: "left" | "right";
  onSelect: (item: PlaygroundItem) => void;
}) {
  const trackRef = useRef<HTMLDivElement | null>(null);

  // Rows have different widths, so set each loop's duration from its width.
  // That way every row moves at the same pixels-per-second speed.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const update = () => {
      const loopWidth = track.scrollWidth / 2;
      track.style.animationDuration = `${loopWidth / CONVEYOR_SPEED}s`;
    };
    update();
    const observer = new ResizeObserver(update);
    observer.observe(track);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full overflow-hidden py-1">
      <div
        ref={trackRef}
        className={`${direction === "left" ? "animate-conveyor-left" : "animate-conveyor-right"} flex gap-4`}
      >
        {/* Items are listed twice so the loop is seamless */}
        {[...items, ...items].map((item, idx) => (
          <button
            type="button"
            key={`${direction}-${idx}`}
            onClick={() => onSelect(item)}
            aria-hidden={idx >= items.length}
            tabIndex={idx >= items.length ? -1 : 0}
            className="w-min flex-shrink-0 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--border-hover)] p-3 shadow-sm hover:shadow-md transition-all duration-200 group cursor-pointer text-left"
          >
            <div className="relative rounded-xl overflow-hidden bg-[var(--bg-card-subtle)]">
              <Image
                src={item.image}
                alt={item.title}
                placeholder="blur"
                sizes="320px"
                className="h-44 sm:h-56 w-auto max-w-none group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-5 h-5 text-white drop-shadow" />
              </div>
            </div>
            {/* Caption stays as wide as the image (card uses w-min) */}
            <div className="mt-2.5 px-0.5 min-w-0">
              <h4 className="text-xs font-bold text-[var(--text-main)] truncate">{item.title}</h4>
              <span className="block text-[10px] font-mono text-[var(--text-muted)] truncate">{item.tag}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

interface Sticker {
  id: string;
  emoji: string;
  label: string;
  // Starting position as a % of the sandbox, so it fits any screen width
  left: string;
  top: string;
  rotation: number;
  bg: string;
}

const initialStickers: Sticker[] = [
  { id: "s1", emoji: "🦊", label: "Cyber-Fox", left: "3%", top: "6%", rotation: -6, bg: "from-pink-500/20 to-rose-500/10" },
  { id: "s2", emoji: "🦾", label: "Mechatronics", left: "46%", top: "5%", rotation: 8, bg: "from-blue-500/20 to-indigo-500/10" },
  { id: "s3", emoji: "✨", label: "Pure Soul", left: "14%", top: "28%", rotation: -4, bg: "from-amber-500/20 to-yellow-500/10" },
  { id: "s4", emoji: "☕", label: "Fuel", left: "60%", top: "30%", rotation: 12, bg: "from-orange-500/20 to-amber-500/10" },
  { id: "s5", emoji: "🦉", label: "Cowrywise", left: "4%", top: "52%", rotation: -8, bg: "from-cyan-500/20 to-blue-500/10" },
  { id: "s6", emoji: "🎧", label: "Bangers", left: "50%", top: "54%", rotation: 5, bg: "from-purple-500/20 to-pink-500/10" },
  { id: "s7", emoji: "📐", label: "Clean Paths", left: "8%", top: "76%", rotation: -10, bg: "from-emerald-500/20 to-teal-500/10" },
  { id: "s8", emoji: "🛟", label: "Soft Life", left: "54%", top: "77%", rotation: 6, bg: "from-rose-500/20 to-pink-500/10" },
];

export default function PlaygroundSection() {
  const [selectedItem, setSelectedItem] = useState<PlaygroundItem | null>(null);
  const [stickersKey, setStickersKey] = useState(0);
  const sandboxRef = useRef<HTMLDivElement | null>(null);

  const handleStickerBomb = () => {
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#D94676", "#2563EB", "#10B981", "#F59E0B"],
    });
    setStickersKey((prev) => prev + 1);
  };

  const handleReset = () => {
    setStickersKey((prev) => prev + 1);
  };

  return (
    <section id="playground" className="py-14 sm:py-20 bg-pink-grain relative overflow-hidden">

      {/* Header: dark ink text so it reads on the pink in both themes */}
      <div className="site-wrap mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-[#181619] font-semibold mb-2">
              The Playground
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#181619]">
              Vector studies &amp; <span className="subtle-highlight font-serif italic">explorations</span>.
            </h2>
            <p className="text-sm text-[#181619]/80 mt-1.5 max-w-xl font-sans">
              Experiments, character studies, and an interactive sticker sandbox.
            </p>
          </div>
          <span className="font-mono text-xs text-[#181619]/75 mt-4 md:mt-0">
            Hover to pause · Click to view full size
          </span>
        </div>
      </div>

      {/* DUAL CONVEYOR MARQUEES */}
      <div className="space-y-4 mb-16">
        <ConveyorTrack items={conveyorItemsRow1} direction="left" onSelect={setSelectedItem} />
        <ConveyorTrack items={conveyorItemsRow2} direction="right" onSelect={setSelectedItem} />
      </div>

      {/* NEW CREATIVE FEATURE: THE INTERACTIVE STICKER SANDBOX */}
      <div className="site-wrap">
        <div className="rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)] p-4 sm:p-8 shadow-sm">
          
          {/* Header of Sandbox */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[var(--border-subtle)] mb-5">
            <div>
              <div className="flex items-center gap-2">
                <Move className="w-4 h-4 text-[var(--accent-pink)]" />
                <h3 className="font-serif text-2xl font-bold text-[var(--text-main)]">
                  Sticker Sandbox
                </h3>
              </div>
              <p className="text-xs text-[var(--text-muted)] font-sans mt-0.5">
                Drag, fling, and rearrange Hephzy’s custom illustration stickers across the stage.
              </p>
            </div>

            <div className="flex items-center gap-2 font-mono text-xs">
              <button
                onClick={handleStickerBomb}
                className="px-3.5 py-1.5 rounded-full bg-[var(--text-main)] hover:bg-[var(--accent-pink)] text-[var(--bg-main)] hover:text-white transition-colors flex items-center gap-1.5 font-medium shadow-sm active:scale-95"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Sticker Bomb</span>
              </button>
              <button
                onClick={handleReset}
                className="px-3 py-1.5 rounded-full border border-[var(--border-subtle)] hover:bg-[var(--bg-card-subtle)] text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors flex items-center gap-1"
                title="Reset layout"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset</span>
              </button>
            </div>
          </div>

          {/* Draggable Sandbox Area */}
          <div
            ref={sandboxRef}
            key={stickersKey}
            className="relative w-full h-80 sm:h-96 rounded-2xl bg-[var(--bg-main)] border border-dashed border-[var(--border-subtle)] overflow-hidden p-4 select-none"
          >
            {initialStickers.map((sticker) => (
              <motion.div
                key={sticker.id}
                drag
                dragConstraints={sandboxRef}
                dragElastic={0.2}
                dragTransition={{ bounceStiffness: 400, bounceDamping: 20 }}
                whileHover={{ scale: 1.15, cursor: "grab", zIndex: 40 }}
                whileTap={{ scale: 0.95, cursor: "grabbing" }}
                style={{ left: sticker.left, top: sticker.top }}
                initial={{ rotate: sticker.rotation, opacity: 0, scale: 0.8 }}
                animate={{ rotate: sticker.rotation, opacity: 1, scale: 1 }}
                className={`absolute px-2 py-1.5 sm:px-3 sm:py-2 rounded-2xl bg-gradient-to-br ${sticker.bg} bg-[var(--bg-card)] border-2 border-[var(--border-subtle)] shadow-md flex items-center gap-1.5 sm:gap-2 cursor-grab active:cursor-grabbing backdrop-blur-sm whitespace-nowrap`}
              >
                <span className="text-lg sm:text-2xl">{sticker.emoji}</span>
                <span className="text-[10px] sm:text-[11px] font-mono font-bold text-[var(--text-main)]">
                  {sticker.label}
                </span>
              </motion.div>
            ))}

            {/* Subtle background hint */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
              <span className="font-serif italic text-2xl text-[var(--text-muted)]">
                toss stickers around ✨
              </span>
            </div>
          </div>

          <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-[var(--text-subtle)]">
            <span>Built with Framer Motion spring physics</span>
            <span>Interactive sandbox</span>
          </div>

        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] p-3 sm:p-4 w-fit max-w-[92vw] shadow-xl z-10"
            >
              <button
                onClick={() => setSelectedItem(null)}
                aria-label="Close"
                className="absolute -top-3 -right-3 p-1.5 rounded-full bg-[var(--bg-card)] border border-[var(--border-subtle)] shadow-md text-[var(--text-muted)] hover:text-[var(--text-main)] z-10"
              >
                <X className="w-4 h-4" />
              </button>
              <Image
                src={selectedItem.image}
                alt={selectedItem.title}
                placeholder="blur"
                sizes="92vw"
                className="rounded-xl w-auto h-auto max-w-[calc(92vw-2rem)] max-h-[75vh]"
              />
              <div className="flex items-baseline justify-between gap-4 pt-3 px-1">
                <h3 className="font-serif text-xl font-bold text-[var(--text-main)]">
                  {selectedItem.title}
                </h3>
                <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--accent-pink)] font-semibold whitespace-nowrap">
                  {selectedItem.tag}
                </span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
