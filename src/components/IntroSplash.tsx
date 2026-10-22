"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

import catchGraphic from "../../public/intro/catch-graphic.png";
import welcomeText from "../../public/intro/welcome-text.png";

// Shown once per browser. Add ?intro to the URL to replay it.
export const INTRO_STORAGE_KEY = "hephzy-intro-seen";

// Timeline (ms), counted from the moment both images have loaded
const TEXT_DELAY = 700; // handwriting starts after she lands
const TEXT_DURATION = 1600; // how long the handwriting takes to "write"
const HOLD_AFTER_TEXT = 1800; // pause on the finished scene before leaving
const TOTAL_TIME = TEXT_DELAY + TEXT_DURATION + HOLD_AFTER_TEXT; // ≈ 4.1s

// If the artwork hasn't loaded by then (very slow connection), skip the intro
const LOAD_TIMEOUT = 6000;

export default function IntroSplash() {
  const [visible, setVisible] = useState(true);
  const [loaded, setLoaded] = useState({ graphic: false, text: false });
  const reduceMotion = useReducedMotion();
  const ready = loaded.graphic && loaded.text;

  const finish = useCallback(() => {
    setVisible(false);
    try {
      localStorage.setItem(INTRO_STORAGE_KEY, "1");
    } catch {
      // Storage can be blocked (private mode); the intro just shows again next time
    }
  }, []);

  const onGraphicLoad = useCallback(() => setLoaded((s) => ({ ...s, graphic: true })), []);
  const onTextLoad = useCallback(() => setLoaded((s) => ({ ...s, text: true })), []);

  // Setup: hide for returning visitors, otherwise lock scroll and listen for skip keys
  useEffect(() => {
    const root = document.documentElement;

    // The inline script in layout.tsx adds this class before paint for returning visitors
    if (root.classList.contains("intro-seen")) {
      const frame = requestAnimationFrame(() => setVisible(false));
      return () => cancelAnimationFrame(frame);
    }

    root.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Enter" || e.key === " ") finish();
    };
    window.addEventListener("keydown", onKey);
    const loadTimeout = setTimeout(() => {
      if (!document.documentElement.classList.contains("intro-started")) finish();
    }, LOAD_TIMEOUT);

    return () => {
      clearTimeout(loadTimeout);
      window.removeEventListener("keydown", onKey);
      root.style.overflow = "";
    };
  }, [finish]);

  // The clock only starts once the artwork is on screen
  useEffect(() => {
    if (!ready) return;
    document.documentElement.classList.add("intro-started");
    const timer = setTimeout(finish, reduceMotion ? 2500 : TOTAL_TIME);
    return () => clearTimeout(timer);
  }, [ready, finish, reduceMotion]);

  // Unlock scrolling as soon as the intro starts leaving
  useEffect(() => {
    if (!visible) document.documentElement.style.overflow = "";
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="intro"
          className="hephzy-intro fixed inset-0 z-[100] flex items-center justify-center px-6 cursor-pointer overflow-hidden"
          style={{
            // The artwork has black line work, so the intro keeps a light stage in both themes
            background:
              "radial-gradient(ellipse at 50% 40%, #FFF3F8 0%, #FAF9F6 55%, #F5F2ED 100%)",
          }}
          onClick={finish}
          role="dialog"
          aria-label="Welcome to Hephzy's portfolio"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, delay: reduceMotion ? 0 : 0.25 } }}
        >
          <motion.div
            className="relative w-[min(92vw,720px)]"
            // Leaves by zipping up and away, like she's swinging off
            exit={
              reduceMotion
                ? { opacity: 0 }
                : { y: "-110vh", rotate: 8, transition: { duration: 0.6, ease: [0.5, 0, 0.75, 0] } }
            }
          >
            {/* Character + webs: springs in from below once loaded, then floats */}
            <motion.div
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 140, scale: 0.75, rotate: -10 }}
              animate={
                !ready
                  ? undefined
                  : reduceMotion
                    ? { opacity: 1 }
                    : { opacity: 1, y: 0, scale: 1, rotate: 0 }
              }
              transition={
                reduceMotion
                  ? { duration: 0.3 }
                  : { type: "spring", stiffness: 140, damping: 11, mass: 0.9 }
              }
            >
              <motion.div
                animate={ready && !reduceMotion ? { y: [0, -8, 0] } : undefined}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
              >
                <Image
                  src={catchGraphic}
                  alt="Hephzy's chibi web-slinger character swinging in"
                  preload
                  unoptimized
                  onLoad={onGraphicLoad}
                  className="w-full h-auto select-none pointer-events-none"
                  draggable={false}
                />
              </motion.div>
            </motion.div>

            {/* Handwritten welcome: revealed left to right as if being written */}
            <motion.div
              className="absolute left-[-3%] sm:left-[-6%] w-[100%] top-[71%]"
              initial={reduceMotion ? { opacity: 0 } : { clipPath: "inset(0 100% 0 0)" }}
              animate={
                !ready
                  ? undefined
                  : reduceMotion
                    ? { opacity: 1 }
                    : { clipPath: "inset(0 0% 0 0)" }
              }
              transition={
                reduceMotion
                  ? { duration: 0.3, delay: 0.2 }
                  : { duration: TEXT_DURATION / 1000, delay: TEXT_DELAY / 1000, ease: [0.45, 0.05, 0.35, 1] }
              }
            >
              <Image
                src={welcomeText}
                alt="Heyy, welcome to my portfolio..."
                preload
                unoptimized
                onLoad={onTextLoad}
                className="w-full h-auto select-none pointer-events-none -rotate-[1.5deg]"
                draggable={false}
              />
            </motion.div>
          </motion.div>

          {/* Skip */}
          <motion.button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              finish();
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="absolute right-5 sm:right-8 font-mono text-xs px-3.5 py-1.5 rounded-full border border-black/15 text-[#6B6570] hover:text-[#181619] hover:border-black/30 bg-white/60 backdrop-blur-sm transition-colors"
            style={{ bottom: "calc(env(safe-area-inset-bottom, 0px) + 1.5rem)" }}
          >
            Skip intro →
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
