"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView, useMotionValue, useReducedMotion, useSpring, useTransform, type MotionValue } from "framer-motion";
import { cheri, grandstander } from "@/fonts/aptivo";

/*
 * Animated card cover for Aptivo.
 * Petal peeks up from the bottom edge and blinks, and two screens float at an angle.
 * On hover Petal's eyes follow the mouse.
 * Everything is sized in container units (cqw), so the cover scales with the card.
 * Loops only run while the card is on screen, and stop for reduced-motion users.
 */

const IMG = "/case-studies2/aptivo/cover";
const COCOA = "#3A2E2A";
const CORAL = "#F56A57";

export default function AptivoCover() {
  const ref = useRef<HTMLDivElement>(null);
  const petalRef = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { amount: 0.3 });
  // Petal peeks in the first time the card is seen, then stays
  const seen = useInView(ref, { amount: 0.3, once: true });
  const reduce = useReducedMotion() ?? false;
  const play = inView && !reduce;

  // Where Petal is looking, from -1 to 1 on each axis
  const lookX = useSpring(useMotionValue(0), { stiffness: 120, damping: 14 });
  const lookY = useSpring(useMotionValue(0), { stiffness: 120, damping: 14 });

  const onMove = (e: React.PointerEvent) => {
    if (reduce || !petalRef.current) return;
    const r = petalRef.current.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height * 0.38; // eye height
    const clamp = (v: number) => Math.max(-1, Math.min(1, v));
    lookX.set(clamp((e.clientX - cx) / (r.width * 0.9)));
    lookY.set(clamp((e.clientY - cy) / (r.height * 0.9)));
  };
  const onLeave = () => {
    lookX.set(0);
    lookY.set(0);
  };

  const float = (amount: number, duration: number, delay = 0) =>
    play
      ? { y: [0, -amount, 0], transition: { duration, delay, repeat: Infinity, ease: "easeInOut" as const } }
      : { y: 0 };

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className={`${cheri.variable} ${grandstander.variable} absolute inset-0 overflow-hidden bg-[#F56A57]`}
      style={{ containerType: "inline-size" }}
      aria-hidden
    >
      {/* Soft cream glow behind the phones, like the circles in the case study */}
      <div className="absolute rounded-full bg-[#FFF6EC]/25" style={{ width: "62cqw", height: "62cqw", right: "-8cqw", top: "6cqw" }} />

      {/* Wordmark */}
      {/* Never closer to the top than the category label, which stays the same size on small cards */}
      <div className="absolute" style={{ left: "6%", top: "max(16%, 52px)" }}>
        <p className="font-[family-name:var(--font-cheri)] text-[#FFF6EC] leading-none" style={{ fontSize: "12cqw" }}>
          Aptivo
        </p>
        <p
          className="font-[family-name:var(--font-grandstander)] font-extrabold text-[#FFF6EC]/90 leading-tight"
          style={{ fontSize: "3.6cqw", marginTop: "1.2cqw" }}
        >
          Learning that
          <br />
          feels like play
        </p>
      </div>

      {/* Phones: Courses behind, Home in front */}
      <motion.div className="absolute" style={{ right: "4%", top: "15%", width: "23cqw", rotate: 9 }} animate={float(1.2, 5.5, 0.6)}>
        <Phone src="courses" alt="" />
      </motion.div>
      <motion.div className="absolute" style={{ right: "22%", top: "23%", width: "24cqw", rotate: -7 }} animate={float(1.4, 5, 0)}>
        <Phone src="home" alt="" />
      </motion.div>

      {/* Petal peeks up from the bottom edge, lifts a little more on hover */}
      <div className="absolute transition-transform duration-500 ease-out group-hover:-translate-y-[3cqw]" style={{ left: "4%", bottom: "-15cqw", width: "40cqw" }}>
        <motion.div
          initial={reduce ? false : { y: "45%" }}
          animate={seen || reduce ? { y: "0%" } : { y: "45%" }}
          transition={{ type: "spring", stiffness: 70, damping: 12, delay: 0.15 }}
        >
          <motion.div animate={float(1.5, 4.2, 1)}>
            <Petal svgRef={petalRef} lookX={lookX} lookY={lookY} blink={play} />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

function Phone({ src, alt }: { src: string; alt: string }) {
  return (
    <div
      className="overflow-hidden shadow-[0_18px_40px_-12px_rgba(58,46,42,0.45)]"
      style={{ borderRadius: "11% / 5%" }}
    >
      <Image src={`/case-studies2/aptivo/cover/${src}.png`} width={604} height={1313} alt={alt} sizes="(min-width: 768px) 170px, 25vw" className="w-full h-auto block" />
    </div>
  );
}

/** Petal, drawn as SVG so she can blink and look around. */
function Petal({
  svgRef,
  lookX,
  lookY,
  blink,
}: {
  svgRef: React.Ref<SVGSVGElement>;
  lookX: MotionValue<number>;
  lookY: MotionValue<number>;
  blink: boolean;
}) {
  // Rounded so server and client render the exact same digits: raw Math.sin/cos
  // output can differ in the last bit between the SSR and browser engines,
  // which React flags as a hydration mismatch on these circles.
  const round = (n: number) => Math.round(n * 1e6) / 1e6;
  const petals = [0, 72, 144, 216, 288].map((a) => ({
    a,
    cx: round(Math.sin((a * Math.PI) / 180) * 27),
    cy: round(-Math.cos((a * Math.PI) / 180) * 27),
  }));

  return (
    <svg ref={svgRef} viewBox="-52 -52 104 104" className="w-full h-auto block overflow-visible">
      {/* Outline layer, then the fill on top, so only the outer silhouette is stroked */}
      <g fill={COCOA}>
        {petals.map((p) => (
          <circle key={p.a} cx={p.cx} cy={p.cy} r="23" />
        ))}
        <circle r="26" />
      </g>
      <g fill={CORAL}>
        {petals.map((p) => (
          <circle key={p.a} cx={p.cx} cy={p.cy} r="20.5" />
        ))}
        <circle r="24" />
      </g>

      {/* Face */}
      <g transform="translate(0 -9)">
        {/* Lashes */}
        <g stroke={COCOA} strokeWidth="0.9" strokeLinecap="round" fill="none">
          {[-1, 1].map((side) =>
            [-4, 0, 4].map((dx) => (
              <path key={`${side}${dx}`} d={`M ${side * 8.5 + dx} -8.6 l ${dx * 0.18} -2.6`} />
            ))
          )}
        </g>

        {[-1, 1].map((side) => (
          <motion.g
            key={side}
            animate={blink ? { scaleY: [1, 1, 0.08, 1, 1] } : { scaleY: 1 }}
            transition={blink ? { duration: 4.5, times: [0, 0.9, 0.93, 0.96, 1], repeat: Infinity, delay: 1.2 } : undefined}
          >
            <circle cx={side * 8.5} cy="0" r="8" fill="#fff" stroke={COCOA} strokeWidth="1.1" />
            <Pupil cx={side * 8.5} lookX={lookX} lookY={lookY} />
          </motion.g>
        ))}

        {/* Smile */}
        <path d="M -3 10.5 q 3 3 6 0" stroke={COCOA} strokeWidth="1" fill="none" strokeLinecap="round" />
      </g>
    </svg>
  );
}

function Pupil({ cx, lookX, lookY }: { cx: number; lookX: MotionValue<number>; lookY: MotionValue<number> }) {
  // Pupils travel up to 2 units inside the eye
  const x = useSpring(lookX, { stiffness: 200, damping: 20 });
  const y = useSpring(lookY, { stiffness: 200, damping: 20 });
  return (
    <motion.g style={{ x: useTransform(x, (n) => n * 2), y: useTransform(y, (n) => n * 2) }}>
      <circle cx={cx} cy="0.4" r="5.6" fill="#111" />
      <circle cx={cx + 2} cy="-1.6" r="1" fill="#fff" />
    </motion.g>
  );
}
