import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import WorkGrid from "@/components/WorkGrid";

const HOMEPAGE_PROJECT_COUNT = 4;

export default function ProjectsSection() {
  const featured = projects.slice(0, HOMEPAGE_PROJECT_COUNT);

  return (
    <section id="work" className="py-14 sm:py-20 site-wrap">
      {/* Section Header */}
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 mb-8 sm:mb-12 pb-4 border-b border-[var(--border-subtle)]">
        <div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-main)]">
            Selected Works
          </h2>
          <p className="text-xs font-mono text-[var(--text-muted)] mt-1">
            Product design, systems &amp; illustration
          </p>
        </div>
        <span className="text-xs font-mono text-[var(--text-muted)]">
          {featured.length} Featured Projects
        </span>
      </div>

      <WorkGrid projects={featured} />

      {/* View more: only shown when there's more work than fits here */}
      {projects.length > featured.length && (
        <div className="mt-12 sm:mt-16 flex justify-center">
          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 text-sm font-mono text-[var(--text-main)] hover:text-[var(--accent-pink)] transition-colors"
          >
            <span>View more work</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </section>
  );
}
