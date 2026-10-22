"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView, useReducedMotion } from "framer-motion";

/*
 * Animated card cover for Osita Farm. Calmer than Aptivo, like the product:
 * the phones slide up and settle at an angle, then the "Harvested today" badge pops in.
 * On hover the badge gives a little bounce.
 * Sized in container units (cqw), so it scales with the card.
 * Loops only run while the card is on screen, and stop for reduced-motion users.
 */

const IMG = "/case-studies2/osita-farm";

export default function OsitaCover() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.3 });
  // Phones and badge come in the first time the card is seen, then stay
  const seen = useInView(ref, { amount: 0.3, once: true });
  const reduce = useReducedMotion() ?? false;
  const shown = seen || reduce;
  const play = inView && !reduce;

  // Slide up from below the card, then settle with a soft spring
  const enter = (delay: number) => ({
    initial: reduce ? false : { y: "120%" },
    animate: shown ? { y: "0%" } : { y: "120%" },
    transition: { type: "spring" as const, stiffness: 60, damping: 14, delay },
  });

  const float = (amount: number, duration: number, delay = 0) =>
    play
      ? { y: [0, -amount, 0], transition: { duration, delay, repeat: Infinity, ease: "easeInOut" as const } }
      : { y: 0 };

  return (
    <div
      ref={ref}
      className="absolute inset-0 overflow-hidden bg-[#D93A2B]"
      style={{ containerType: "inline-size" }}
      aria-hidden
    >
      {/* Soft glow behind the phones */}
      <div className="absolute rounded-full bg-white/10" style={{ width: "64cqw", height: "64cqw", right: "-10cqw", top: "4cqw" }} />

      {/* Logo */}
      <div className="absolute" style={{ left: "7%", top: "30%", width: "34cqw" }}>
        <Image src={`${IMG}/cover/logo-white.png`} width={1823} height={861} alt="" sizes="(min-width: 768px) 220px, 34vw" className="w-full h-auto" />
        <p className="font-sans font-medium text-white/85 tracking-[0.01em]" style={{ fontSize: "2.6cqw", marginTop: "2cqw" }}>
          Fresh from the farm, delivered today
        </p>
      </div>

      {/* Home behind */}
      <motion.div className="absolute" style={{ right: "5%", top: "13%", width: "22cqw" }} {...enter(0.25)}>
        <motion.div style={{ rotate: 8 }} animate={float(1.1, 6, 1.4)}>
          <Phone src="screen-02" />
        </motion.div>
      </motion.div>

      {/* Tomatoes in front, with the badge */}
      <motion.div className="absolute z-10" style={{ right: "25%", top: "20%", width: "24cqw" }} {...enter(0.1)}>
        <motion.div style={{ rotate: -6 }} animate={float(1.3, 5.2, 1.2)}>
          <Phone src="screen-04" />
          <motion.div
            className="absolute"
            style={{ left: "-16%", top: "38%" }}
            initial={reduce ? false : { scale: 0, rotate: -12 }}
            animate={shown ? { scale: 1, rotate: -4 } : { scale: 0, rotate: -12 }}
            transition={{ type: "spring", stiffness: 260, damping: 13, delay: reduce ? 0 : 1.1 }}
          >
            <span
              className="flex items-center whitespace-nowrap rounded-full bg-[#E4F0E1] text-[#2F6B33] font-sans font-semibold ring-1 ring-[#2F6B33]/25 shadow-[0_8px_18px_-6px_rgba(0,0,0,0.35)] transition-transform duration-300 ease-out group-hover:-translate-y-[1cqw] group-hover:scale-110 group-hover:-rotate-3"
              style={{ fontSize: "2.3cqw", padding: "0.9cqw 2cqw", gap: "1cqw" }}
            >
              <span className="rounded-full bg-[#2F6B33]" style={{ width: "1.2cqw", height: "1.2cqw" }} />
              Harvested today
            </span>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

function Phone({ src }: { src: string }) {
  return (
    <div
      className="overflow-hidden shadow-[0_20px_44px_-14px_rgba(40,10,5,0.55)]"
      // Phone corners: same visual radius both ways on a 1608×3496 screen
      style={{ borderRadius: "11% / 5%" }}
    >
      <Image src={`${IMG}/${src}.png`} width={1608} height={3496} alt="" sizes="(min-width: 768px) 170px, 25vw" className="w-full h-auto block" />
    </div>
  );
}
