"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUp, Mail, Copy, Check, Sparkles, Heart } from "lucide-react";

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const [localTime, setLocalTime] = useState("");

  const email = "hephzibahyahaya@gmail.com";

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Africa/Lagos",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setLocalTime(now.toLocaleTimeString("en-US", options));
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

  return (
    <footer id="contact" className="relative mt-12 sm:mt-28 overflow-hidden">
      
      {/* Dramatic Top Wave Silhouette in Signature #FF4FA3 Pink */}
      <div className="relative w-full h-20 sm:h-28 text-[#FF4FA3] -mb-1">
        <svg
          viewBox="0 0 1440 120"
          fill="currentColor"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path d="M0,48L48,58.7C96,69,192,91,288,96C384,101,480,91,576,74.7C672,59,768,37,864,37.3C960,37,1056,59,1152,69.3C1248,80,1344,80,1392,80L1440,80L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" />
        </svg>

        {/* Mascot in Lifebuoy Floating on the Pink Wave */}
        <div className="absolute right-10 sm:right-28 -top-8 sm:-top-12 flex flex-col items-center animate-bounce">
          <div className="relative w-18 h-18 sm:w-24 sm:h-24 rounded-full bg-white dark:bg-stone-900 border-4 border-pink-200 shadow-xl flex items-center justify-center text-3xl sm:text-4xl">
            <span>🛟</span>
            <span className="absolute -top-1 -right-1 text-base sm:lg">🕶️</span>
          </div>
          <span className="text-[11px] font-mono font-bold px-3 py-0.5 rounded-full bg-white text-[#D6247F] shadow-md -mt-2">
            Hephzy
          </span>
        </div>
      </div>

      {/* Dramatic Vibrant Pink Canvas using exact #FF4FA3 to #D6247F palette */}
      <div className="bg-gradient-to-br from-[#FF4FA3] via-[#D6247F] to-[#880E4F] text-white py-14 sm:py-20 relative">
        
        {/* Soft Ambient Radiance */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-purple-900/20 rounded-full blur-3xl pointer-events-none" />

        <div className="site-wrap space-y-16 relative z-10">
          
          {/* Top Dramatic Headline */}
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-semibold bg-white/20 backdrop-blur-md border border-white/25 text-pink-50">
              <Sparkles className="w-3.5 h-3.5 text-amber-200" />
              <span>HAVE A BOLD PROJECT IN MIND?</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08]">
              Let&apos;s build something{" "}
              <span className="italic underline decoration-pink-200 underline-offset-8">
                unforgettable
              </span>
              .
            </h2>

            <p className="text-base sm:text-lg text-pink-50 font-sans leading-relaxed max-w-xl">
              From zero-to-one product design to character illustration and visual systems.
              My inbox is always open for ambitious teams and creators.
            </p>

            {/* Dramatic 1-Click Email Pill */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <button
                onClick={copyEmail}
                className="max-w-full px-4 sm:px-6 py-3.5 sm:py-4 rounded-full bg-white text-[#D6247F] hover:bg-[#FFE8F2] transition-all font-mono text-xs sm:text-base font-bold shadow-xl flex items-center gap-3 active:scale-95 group"
              >
                <Mail className="w-4 h-4 text-[#FF4FA3]" />
                <span>{email}</span>
                <span className="p-1 rounded-full bg-[#FFE8F2] text-[#D6247F] group-hover:scale-110 transition-transform">
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                </span>
              </button>

              {copied && (
                <span className="font-mono text-xs text-white bg-black/25 px-3 py-1.5 rounded-full backdrop-blur-md animate-pulse">
                  Copied to clipboard! 📋
                </span>
              )}
            </div>
          </div>

          {/* Middle Row: Telemetry, Navigation, and Socials */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-8 border-t border-white/20 items-center justify-between text-xs font-mono">
            
            {/* Lagos Real-Time Clock */}
            <div className="md:col-span-5 flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <span className="font-bold tracking-wider uppercase text-pink-50">
                Lagos, Nigeria (WAT):
              </span>
              <span className="text-white font-medium bg-white/15 px-2.5 py-1 rounded-full">
                {localTime || "1:00 PM"}
              </span>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-3 flex items-center gap-5 text-pink-100">
              <Link href="/#work" className="hover:text-white transition-colors">
                Works
              </Link>
              <Link href="/#playground" className="hover:text-white transition-colors">
                Playground
              </Link>
              <Link href="/#about" className="hover:text-white transition-colors">
                About
              </Link>
            </div>

            {/* Social Circles */}
            <div className="md:col-span-4 flex items-center justify-start md:justify-end gap-2.5">
              <a
                href="https://www.behance.net/hephzibahyahaya"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/15 hover:bg-white text-white hover:text-[#D6247F] border border-white/25 flex items-center justify-center font-bold text-xs transition-all hover:scale-110 shadow-sm"
                title="Behance"
              >
                Bē
              </a>

              <a
                href="https://x.com/heyhephzy"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/15 hover:bg-white text-white hover:text-[#D6247F] border border-white/25 flex items-center justify-center font-bold text-xs transition-all hover:scale-110 shadow-sm"
                title="X (@heyhephzy)"
              >
                𝕏
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/15 hover:bg-white text-white hover:text-[#D6247F] border border-white/25 flex items-center justify-center font-bold text-xs transition-all hover:scale-110 shadow-sm"
                title="LinkedIn"
              >
                in
              </a>

              <a
                href="mailto:hephzibahyahaya@gmail.com"
                className="w-10 h-10 rounded-full bg-white/15 hover:bg-white text-white hover:text-[#D6247F] border border-white/25 flex items-center justify-center font-bold text-xs transition-all hover:scale-110 shadow-sm"
                title="Email"
              >
                @
              </a>
            </div>

          </div>

          {/* Bottom Bar: Copyright & Back to Top */}
          <div className="pt-6 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-pink-100">
            <span>&copy; 2026 Yahaya Hephzibah (Hephzy)</span>
            
            <span className="text-[11px] flex items-center gap-1.5 opacity-90">
              <span>Made with love, tea &amp; vectors in Lagos</span>
              <Heart className="w-3.5 h-3.5 fill-white text-white" />
            </span>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/15 hover:bg-white hover:text-[#D6247F] border border-white/25 text-white transition-all shadow-sm"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}
