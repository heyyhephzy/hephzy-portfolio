"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Sun, Moon, ArrowUpRight, Menu, X } from "lucide-react";

const navLinks = [
  { href: "/#work", label: "Works" },
  { href: "/#playground", label: "Playground" },
  { href: "/#about", label: "About" },
];

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const eyeLeftRef = useRef<SVGCircleElement | null>(null);
  const eyeRightRef = useRef<SVGCircleElement | null>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem("hephzy-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const startDark = savedTheme === "dark" || (!savedTheme && prefersDark);
    document.documentElement.classList.toggle("dark", startDark);
    // Sync the toggle icon after mount (deferred to avoid a cascading render)
    const themeFrame = requestAnimationFrame(() => setIsDark(startDark));

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    // Eye-tracking interaction inspired by Uxora
    const handleMouseMove = (e: MouseEvent) => {
      const updateEye = (pupil: SVGCircleElement | null, cx: number, cy: number) => {
        if (!pupil) return;
        const rect = pupil.getBoundingClientRect();
        const eyeCenterX = rect.left + rect.width / 2;
        const eyeCenterY = rect.top + rect.height / 2;

        const dx = e.clientX - eyeCenterX;
        const dy = e.clientY - eyeCenterY;
        const angle = Math.atan2(dy, dx);
        const distance = Math.min(2.5, Math.hypot(dx, dy) / 40);

        const offsetX = Math.cos(angle) * distance;
        const offsetY = Math.sin(angle) * distance;

        pupil.setAttribute("cx", String(cx + offsetX));
        pupil.setAttribute("cy", String(cy + offsetY));
      };

      updateEye(eyeLeftRef.current, 10, 10);
      updateEye(eyeRightRef.current, 22, 10);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      cancelAnimationFrame(themeFrame);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("hephzy-theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("hephzy-theme", "dark");
      setIsDark(true);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center py-3 sm:py-4 px-6 sm:px-10 lg:px-16 transition-all duration-300">
      {/* Same edges as the page content (see .site-wrap: 1440px minus the side margins) */}
      <nav
        className={`w-full max-w-[1312px] pl-4 pr-2.5 sm:px-5 py-2.5 sm:py-3 rounded-full flex items-center justify-between transition-all duration-300 backdrop-blur-md ${
          scrolled
            ? "bg-[var(--bg-card)]/85 shadow-md shadow-black/5"
            : "bg-[var(--bg-card)]/60"
        }`}
      >
        {/* Brand Logo with Interactive Eye-Tracking Wordmark (Inspired by Uxora) */}
        <Link
          href="/#top"
          className="flex items-center gap-2 group cursor-pointer"
          title="Hephzy"
        >
          {/* Interactive Vector Eye Mascot */}
          <svg
            width="32"
            height="20"
            viewBox="0 0 32 20"
            className="text-[var(--text-main)] group-hover:scale-105 transition-transform"
          >
            {/* Left Eye */}
            <circle cx="10" cy="10" r="7" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <circle ref={eyeLeftRef} cx="10" cy="10" r="2.8" fill="var(--accent-pink)" />

            {/* Right Eye */}
            <circle cx="22" cy="10" r="7" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <circle ref={eyeRightRef} cx="22" cy="10" r="2.8" fill="var(--accent-pink)" />
          </svg>

          <span className="font-serif text-2xl font-bold tracking-tight text-[var(--text-main)]">
            Hephzy
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-7 text-base font-serif text-[var(--text-muted)]">
          <Link
            href="/#work"
            className="hover:text-[var(--text-main)] transition-colors py-1"
          >
            Works
          </Link>
          <Link
            href="/#playground"
            className="hover:text-[var(--text-main)] transition-colors py-1 flex items-center gap-1.5"
          >
            <span>Playground</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-pink)]" />
          </Link>
          <Link
            href="/#about"
            className="hover:text-[var(--text-main)] transition-colors py-1"
          >
            About
          </Link>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="p-2 rounded-full border border-[var(--border-subtle)] hover:border-[var(--border-hover)] hover:bg-[var(--bg-card-subtle)] transition-colors text-[var(--text-muted)]"
          >
            {isDark ? (
              <Sun className="w-3.5 h-3.5 text-amber-400" />
            ) : (
              <Moon className="w-3.5 h-3.5" />
            )}
          </button>

          {/* Let's Talk CTA */}
          <a
            href="mailto:heyyhephzy@gmail.com"
            className="flex items-center gap-1.5 px-4 sm:px-5 py-2.5 rounded-full text-sm sm:text-base font-serif font-medium text-[var(--bg-main)] bg-[var(--text-main)] hover:bg-[var(--accent-pink)] hover:text-white transition-colors shadow-sm whitespace-nowrap"
          >
            <span>Get in touch</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="md:hidden p-2 rounded-full border border-[var(--border-subtle)] text-[var(--text-main)] hover:bg-[var(--bg-card-subtle)] transition-colors"
          >
            {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden w-full max-w-[1312px] mt-2 rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-card)] shadow-lg p-2 font-serif text-lg">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-between px-4 py-3 rounded-2xl text-[var(--text-main)] hover:bg-[var(--bg-card-subtle)] transition-colors"
            >
              <span>{link.label}</span>
              <ArrowUpRight className="w-4 h-4 text-[var(--accent-pink)]" />
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
