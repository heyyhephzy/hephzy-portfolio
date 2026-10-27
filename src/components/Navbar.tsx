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
  const eyeLeftRef = useRef<SVGGElement | null>(null);
  const eyeRightRef = useRef<SVGGElement | null>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem("hephzy-theme");
    // Light by default for everyone; dark only if the visitor chose it with the toggle
    const startDark = savedTheme === "dark";
    document.documentElement.classList.toggle("dark", startDark);
    // Sync the toggle icon after mount (deferred to avoid a cascading render)
    const themeFrame = requestAnimationFrame(() => setIsDark(startDark));

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    // Eyes follow the cursor, a little, inside the face
    const handleMouseMove = (e: MouseEvent) => {
      const moveEye = (eye: SVGGElement | null, svg: SVGSVGElement | null) => {
        if (!eye || !svg) return;
        const rect = eye.getBoundingClientRect();
        const dx = e.clientX - (rect.left + rect.width / 2);
        const dy = e.clientY - (rect.top + rect.height / 2);
        const distance = Math.min(1.6, Math.hypot(dx, dy) / 60);
        const angle = Math.atan2(dy, dx);
        // The eye is drawn in mascot units, so convert the screen move into those units
        const unitsPerPx = 323 / svg.getBoundingClientRect().height;
        const x = Math.cos(angle) * distance * unitsPerPx;
        const y = Math.sin(angle) * distance * unitsPerPx;
        eye.setAttribute("transform", `translate(${x.toFixed(2)} ${y.toFixed(2)})`);
      };
      const svg = eyeLeftRef.current?.ownerSVGElement ?? null;
      moveEye(eyeLeftRef.current, svg);
      moveEye(eyeRightRef.current, svg);
    };

    window.addEventListener("pointermove", handleMouseMove, { passive: true });

    return () => {
      cancelAnimationFrame(themeFrame);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("pointermove", handleMouseMove);
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
    <header className={`fixed top-0 left-0 right-0 z-50 flex flex-col items-center px-6 sm:px-10 lg:px-16 transition-all duration-300 ${scrolled ? "py-1.5 sm:py-2" : "py-3 sm:py-4"}`}>
      {/* Same edges as the page content (see .site-wrap: 1440px minus the side margins) */}
      <nav
        className={`w-full max-w-[1312px] pl-4 pr-2.5 sm:px-5 rounded-full flex items-center justify-between gap-3 transition-all ${scrolled ? "py-1.5 sm:py-2" : "py-2.5 sm:py-3"} duration-300 backdrop-blur-md ${
          scrolled
            ? "bg-[var(--bg-card)]/85 shadow-md shadow-black/5"
            : "bg-[var(--bg-card)]/60"
        }`}
      >
        {/* Brand Logo with Interactive Eye-Tracking Wordmark (Inspired by Uxora) */}
        <Link
          href="/#top"
          className="flex shrink-0 items-center gap-2 group cursor-pointer"
          title="Hephzy"
        >
          {/* Hephzy mascot: the body is an image, the eyes are drawn over it so they can follow the cursor */}
          <span className="relative inline-block aspect-[294/323] h-11">
            <img src="/logo-heph-body.svg" alt="" className="block h-full w-full" />
            <svg viewBox="0 0 294 323" className="absolute inset-0 h-full w-full" aria-hidden="true">
              <g ref={eyeLeftRef}>
                <path d="M141.39 141.068C141.669 150.282 134.425 157.979 125.211 158.258C115.996 158.537 108.3 151.293 108.021 142.079C107.742 132.864 114.985 125.168 124.2 124.889C133.414 124.609 141.11 131.853 141.39 141.068ZM133.767 135.577C134.146 136.824 134.586 137.305 135.541 137.998C134.576 138.522 134.215 138.982 133.903 140.057C133.674 139.223 133.405 138.782 132.452 138.091C133.351 137.379 133.567 136.78 133.767 135.577ZM132.068 135.629L132.377 135.619L132.386 135.928L132.077 135.938L132.068 135.629Z" fillRule="evenodd" clipRule="evenodd" fill="#000" />
              </g>
              <g ref={eyeRightRef}>
                <path d="M177.882 139.962C178.161 149.177 170.918 156.873 161.703 157.152C152.489 157.431 144.793 150.188 144.514 140.973C144.234 131.758 151.478 124.062 160.692 123.783C169.907 123.504 177.603 130.747 177.882 139.962ZM170.26 134.472C170.638 135.718 171.078 136.199 172.034 136.892C171.068 137.417 170.708 137.876 170.395 138.952C170.166 138.118 169.898 137.677 168.944 136.986C169.843 136.273 170.059 135.675 170.26 134.472ZM168.56 134.523L168.869 134.514L168.879 134.823L168.57 134.832L168.56 134.523Z" fillRule="evenodd" clipRule="evenodd" fill="#000" />
              </g>
            </svg>
          </span>

          <span className="font-[family-name:var(--font-heading)] text-xl font-bold tracking-tight text-[var(--text-main)]">
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
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
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
            className="flex items-center gap-2.5 rounded-xl border-[3px] border-[#141214] bg-[#141214] px-3 sm:px-4 py-1.5 sm:py-2 font-serif text-sm sm:text-base font-bold text-white shadow-[3px_3px_0_0_rgba(0,0,0,0.35)] hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-none transition-transform duration-150 whitespace-nowrap"
          >
            <span className="sm:hidden">Contact</span>
            <span className="hidden sm:inline">Get in touch</span>
            <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#FF8CC6] text-[#141214]"><ArrowUpRight className="w-3.5 h-3.5" /></span>
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
