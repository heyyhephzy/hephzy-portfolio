"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp, Mail, Copy, Check, Sparkles } from "lucide-react";
import Signpost from "@/components/Signpost";

const email = "heyyhephzy@gmail.com";

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Africa/Lagos",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setLocalTime(new Date().toLocaleTimeString("en-US", options));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socials = [
    { label: "Bē", title: "Behance", href: "https://www.behance.net/hephzibahyahaya" },
    { label: "𝕏", title: "X (@heyhephzy)", href: "https://x.com/heyhephzy" },
    { label: "in", title: "LinkedIn", href: "https://linkedin.com" },
    { label: "@", title: "Email", href: `mailto:${email}` },
  ];

  return (
    <footer id="contact" className="relative overflow-hidden bg-[#FF8CC6] text-[#141214]">
      <Signpost />

      {/* Right side of the scene: contact, clock, socials and the footer bar */}
      <div className="relative flex flex-col justify-between gap-12 p-6 sm:p-10 md:absolute md:inset-y-0 md:right-0 md:w-1/2 md:p-14">
        <div className="space-y-5">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#141214] px-3.5 py-1 text-xs font-mono font-semibold text-white">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>HAVE A BOLD PROJECT IN MIND?</span>
          </div>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
            Let&apos;s build something{" "}
            <span className="italic underline decoration-4 underline-offset-8">unforgettable</span>.
          </h2>

          <p className="max-w-md text-base md:text-lg font-sans leading-relaxed">
            From zero-to-one product design to character illustration and visual systems. My inbox is always open for ambitious teams and creators.
          </p>

          <button
            onClick={copyEmail}
            className="inline-flex max-w-full items-center gap-3 rounded-xl border-[3px] border-[#141214] bg-[#141214] px-4 py-2.5 font-mono text-sm font-bold text-white shadow-[3px_3px_0_0_rgba(0,0,0,0.35)] transition-transform duration-150 hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-none"
          >
            <Mail className="w-4 h-4 text-[#FF8CC6]" />
            <span>{email}</span>
            <span className="rounded-full bg-white/15 p-1">
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </span>
          </button>
          {copied && <p className="font-mono text-xs">Copied to clipboard!</p>}
        </div>

        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs font-bold uppercase tracking-wider">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-600 animate-pulse" />
            <span>Port Harcourt, Nigeria (WAT):</span>
            <span className="rounded-full bg-[#141214] px-2.5 py-1 text-white">{localTime || "--:--:--"}</span>
          </div>

          <div className="flex items-center gap-2.5">
            {socials.map((social) => (
              <a
                key={social.title}
                href={social.href}
                target={social.href.startsWith("mailto") ? undefined : "_blank"}
                rel={social.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                title={social.title}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#141214] text-xs font-bold text-white transition-transform hover:scale-110"
              >
                {social.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-4 border-t-2 border-[#141214] pt-5 font-mono text-xs sm:flex-row sm:items-center sm:justify-between">
            <span>&copy; 2026 Yahaya Hephzibah (Hephzy)</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2.5 self-start rounded-xl border-[3px] border-[#141214] bg-[#FFF6FA] px-3 py-1.5 font-mono text-xs font-bold text-[#141214] shadow-[3px_3px_0_0_rgba(0,0,0,0.35)] transition-transform duration-150 hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-none sm:self-auto"
            >
              <span>Back to top</span>
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#FF4FA3] text-[#141214]"><ArrowUp className="w-3.5 h-3.5" /></span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
