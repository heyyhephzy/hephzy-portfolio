"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { bricolage, jakarta } from "@/fonts/cineva";

/*
 * Animated card cover for Cineva.
 * Two screens float in on a coral field, like posters sliding into frame.
 * Sized in container units (cqw), so it scales with the card.
 * Loops only run while the card is on screen, and stop for reduced-motion users.
 */

const IMG = "/case-studies2/cineva";

export default function CinevaCover() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.3 });
  const seen = useInView(ref, { amount: 0.3, once: true });
  const reduce = useReducedMotion() ?? false;
  const shown = seen || reduce;
  const play = inView && !reduce;

  const enter = (delay: number) => ({
    initial: reduce ? false : { y: "120%", opacity: 0 },
    animate: shown ? { y: "0%", opacity: 1 } : { y: "120%", opacity: 0 },
    transition: { type: "spring" as const, stiffness: 60, damping: 14, delay },
  });

  const float = (amount: number, duration: number, delay = 0) =>
    play
      ? { y: [0, -amount, 0], transition: { duration, delay, repeat: Infinity, ease: "easeInOut" as const } }
      : { y: 0 };

  return (
    <div
      ref={ref}
      className={`${bricolage.variable} ${jakarta.variable} absolute inset-0 overflow-hidden bg-[#FF7A59]`}
      style={{ containerType: "inline-size" }}
      aria-hidden
    >
      {/* Soft dark glow behind the phones */}
      <div className="absolute rounded-full bg-black/10" style={{ width: "64cqw", height: "64cqw", right: "-10cqw", top: "2cqw" }} />

      {/* Wordmark */}
      <div className="absolute" style={{ left: "7%", top: "12%" }}>
        <p className="font-[family-name:var(--font-bricolage)] font-medium text-[#0A0A0F] leading-none" style={{ fontSize: "10cqw" }}>
          cineva
        </p>
        <p
          className="font-[family-name:var(--font-jakarta)] font-medium text-[#0A0A0F]/75 leading-snug"
          style={{ fontSize: "2.8cqw", marginTop: "1.6cqw", maxWidth: "40cqw" }}
        >
          What&rsquo;s showing, to a seat in your name
        </p>
      </div>

      {/* Details behind */}
      <motion.div className="absolute" style={{ right: "3%", top: "10%", width: "25cqw" }} {...enter(0.2)}>
        <motion.div style={{ rotate: 8 }} animate={float(1.2, 5.5, 1.1)}>
          <Phone src="details-dark" />
        </motion.div>
      </motion.div>

      {/* Home in front */}
      <motion.div className="absolute z-10" style={{ right: "22%", top: "16%", width: "27cqw" }} {...enter(0.05)}>
        <motion.div style={{ rotate: -7 }} animate={float(1.4, 5, 0.3)}>
          <Phone src="home-dark" />
        </motion.div>
      </motion.div>
    </div>
  );
}

function Phone({ src }: { src: string }) {
  return (
    <div className="overflow-hidden shadow-[0_18px_40px_-12px_rgba(10,10,15,0.5)]" style={{ borderRadius: "11% / 5%" }}>
      <Image src={`${IMG}/${src}.png`} width={393} height={852} alt="" sizes="(min-width: 768px) 170px, 25vw" className="w-full h-auto block" />
    </div>
  );
}
