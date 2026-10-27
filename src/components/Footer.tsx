"use client";

import React, { useState, useEffect, useRef } from "react";
import { ArrowUp, Copy, Check } from "lucide-react";

const email = "heyyhephzy@gmail.com";

const links = [
  { label: "Behance", href: "https://www.behance.net/hephzibahyahaya" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/hephzibah-yahaya-a75315256/" },
  { label: "X", href: "https://x.com/heyhephzy" },
  { label: "+234 704 721 0135", href: "tel:+2347047210135" },
];

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  // On desktop the footer sits fixed underneath the page, so the page publishes its height to leave room for it
  useEffect(() => {
    const el = footerRef.current;
    if (!el) return;

    const setHeight = () => {
      document.documentElement.style.setProperty("--footer-h", `${el.offsetHeight}px`);
    };

    setHeight();
    const observer = new ResizeObserver(setHeight);
    observer.observe(el);
    return () => observer.disconnect();
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
    <footer ref={footerRef} id="contact" className="relative md:fixed md:inset-x-0 md:bottom-0 z-0 overflow-hidden bg-[#111111] text-[#FFF4F8]">
      {/* Flower garland hanging from the top edge */}
      <img src="/footer-garland.svg" alt="" aria-hidden="true" className="block h-auto w-full" />

      <div className="site-wrap pb-8 pt-8 sm:pb-10 md:pt-12">
        <div className="grid gap-6 md:grid-cols-[200px_1fr] md:gap-12">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#FF8CC6]">( Say hi )</p>

          <div>
            <h2 className="text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-[96px]">
              <span className="block">Let&apos;s make the</span>
              <span className="block">
                <span className="text-[#FF4FA3]">fun bits</span> together.
              </span>
            </h2>

            <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-4">
              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-3 font-sans text-2xl font-medium underline decoration-2 underline-offset-8 transition-colors hover:text-[#FF8CC6] md:text-3xl"
              >
                <span>{email}</span>
                {copied ? <Check className="w-5 h-5 text-[#FF8CC6]" /> : <Copy className="w-5 h-5 text-[#FF8CC6]" />}
              </button>
              <a
                href={`mailto:${email}`}
                className="font-mono text-xs uppercase tracking-[0.2em] text-[#A8939D] transition-colors hover:text-[#FF8CC6]"
              >
                Send an email ↗
              </a>
              {copied && <p className="font-mono text-xs text-[#A8939D]">Copied to clipboard!</p>}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-[#2E2A2C] pt-6 font-sans text-sm sm:gap-x-10 md:mt-16">
          {links.map((link) => {
            const isExternal = link.href.startsWith("http");
            return (
              <a
                key={link.label}
                href={link.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="transition-colors hover:text-[#FF8CC6]"
              >
                {link.label}
              </a>
            );
          })}
        </div>

        <div className="mt-6 flex flex-col gap-3 font-mono text-xs text-[#A8939D] sm:flex-row sm:items-center sm:justify-between sm:gap-4">
          <p>© 2026 Hephzy · Designed &amp; drawn by me</p>
          <button onClick={scrollToTop} className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap transition-colors hover:text-[#FF8CC6]">
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
