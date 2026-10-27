import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WorkGrid from "@/components/WorkGrid";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Work — Hephzy | Product Designer & Illustrator",
  description:
    "All case studies by Yahaya Hephzibah (Hephzy) — product design, UX and illustration across fintech, edtech, e-commerce and entertainment.",
};

export default function WorkPage() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-[var(--accent-pink)] selection:text-white heading-font">
      <Navbar />

      <main className="flex-grow">
        <section className="pt-36 pb-14 sm:pt-44 sm:pb-20 site-wrap">
          <div className="mb-8 sm:mb-12 pb-4 border-b border-[var(--border-subtle)]">
            <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[var(--text-main)]">
              All Work
            </h1>
          </div>

          <WorkGrid projects={projects} />
        </section>
      </main>

      <Footer />
    </div>
  );
}
