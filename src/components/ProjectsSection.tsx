import Link from "next/link";
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
        <Link
          href="/work"
          className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-sm font-sans font-medium bg-[var(--text-main)] text-[var(--bg-main)] shadow-sm hover:bg-[var(--accent-pink)] hover:text-white transition-colors"
        >
          <span>View more work</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
