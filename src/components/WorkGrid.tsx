"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";

/**
 * Wraps a card and drives its slide-in reveal.
 *
 * Primary mechanism is a native CSS scroll-driven animation (see
 * globals.css, `.work-card`, `animation-timeline: view()`): progress is
 * tied directly to scroll position, so it scrubs smoothly in both
 * directions and never "snaps" regardless of scroll speed.
 *
 * The IntersectionObserver below is only the fallback for browsers that
 * don't support scroll-timelines yet. It toggles `isVisible` continuously
 * (not once), so the fallback also replays each time a card crosses the
 * viewport edge instead of firing only on first load.
 */
function RevealCard({
  index,
  children,
}: {
  index: number;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const isLeft = index % 2 === 0;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setVisible(entry.isIntersecting));
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={["work-card", isLeft ? "is-left" : "is-right", visible ? "is-visible" : ""].join(" ")}
    >
      {children}
    </div>
  );
}

export default function WorkGrid({ projects }: { projects: Project[] }) {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <>
      {/* Grid: plain tiles, image + caption, alternating slide-in direction by column */}
      <div className="mx-auto max-w-4xl grid grid-cols-1 gap-y-16 sm:gap-y-24">
        {projects.map((project, idx) => {
          const hoverLabel = project.href ? "Click to open case study" : "Click to view details";

          const content = (
            <div className="work-card-tile block cursor-pointer text-left">
              <div className="work-card-media">
                {project.animatedCover ? (
                  <project.animatedCover />
                ) : project.cover ? (
                  <Image
                    src={project.cover}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 46vw, 100vw"
                    className="object-cover"
                  />
                ) : (
                  <div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{ backgroundColor: `${project.color}18` }}
                  >
                    <span className="text-4xl">{project.icon}</span>
                  </div>
                )}
                <span className="work-card-hover-cue">{hoverLabel}</span>
              </div>

              <div className="work-card-caption">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-main)]">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm sm:text-base font-sans text-[var(--text-muted)]">{project.descriptor}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.category.split(" & ").map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full border border-[var(--text-main)] text-xs font-mono text-[var(--text-main)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );

          return (
            <RevealCard key={project.id} index={idx}>
              {project.href ? (
                <Link href={project.href}>{content}</Link>
              ) : (
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => setActiveProject(project)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActiveProject(project);
                    }
                  }}
                >
                  {content}
                </div>
              )}
            </RevealCard>
          );
        })}
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProject(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)] p-6 sm:p-8 shadow-2xl z-10 space-y-6"
            >
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-5 right-5 p-1.5 rounded-full hover:bg-[var(--bg-card-subtle)] text-[var(--text-muted)]"
              >
                <X className="w-5 h-5" />
              </button>

              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--accent-pink)] font-semibold">
                  {activeProject.category} · {activeProject.year}
                </span>
                <h3 className="font-serif text-3xl font-bold text-[var(--text-main)] mt-1">
                  {activeProject.title}
                </h3>
                <p className="text-xs font-mono text-[var(--text-muted)] mt-0.5">
                  Role: {activeProject.role}
                </p>
              </div>

              <div className="space-y-4 text-sm text-[var(--text-muted)] font-sans leading-relaxed">
                <p>{activeProject.overview}</p>
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-[var(--text-main)] font-semibold mb-2">
                    Key Highlights:
                  </h4>
                  <ul className="space-y-2">
                    {activeProject.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span className="text-[var(--text-main)] text-xs sm:text-sm">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-[var(--border-subtle)] flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs font-mono text-[var(--text-muted)]">
                  Designed by Yahaya Hephzibah
                </span>
                <a
                  href="https://www.behance.net/hephzibahyahaya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono text-[var(--bg-main)] bg-[var(--text-main)] hover:bg-[var(--accent-pink)] hover:text-white transition-colors"
                >
                  <span>Behance Details</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
