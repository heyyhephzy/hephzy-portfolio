import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import WorkGrid from "@/components/WorkGrid";

// The homepage shows these four. Everything else lives on the Work page.
const featuredIds = ["aptivo", "osita-farm", "cineva", "cowrywise-ambassadors"];

export default function ProjectsSection() {
  const featured = projects.filter((project) => featuredIds.includes(project.id));

  return (
    <section id="work" className="py-14 sm:py-20 site-wrap">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-8 sm:mb-12 pb-4 border-b border-[var(--border-subtle)]">
        <div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-main)]">
            Selected Works
          </h2>
          <p className="text-xs font-mono text-[var(--text-muted)] mt-1">
            Product design, systems &amp; illustration
          </p>
        </div>
      </div>

      <WorkGrid projects={featured} />

      {/* View more: always shown beneath the four featured projects */}
      <div className="mt-12 sm:mt-16 flex justify-center">
        {/* Disabled for now: the full Work page isn't ready yet */}
        <span
          aria-disabled="true"
          className="inline-flex items-center gap-2.5 rounded-xl border-[3px] border-[var(--text-main)] bg-[var(--text-main)] px-4 py-2.5 font-serif text-sm sm:text-base font-bold text-[var(--bg-main)] shadow-[3px_3px_0_0_rgba(0,0,0,0.35)] opacity-60 pointer-events-none select-none"
        >
          <span>View more work</span>
          <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#FF4FA3] text-[#141214]"><ArrowUpRight className="w-3.5 h-3.5" /></span>
        </span>
      </div>
    </section>
  );
}
