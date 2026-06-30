import { featuredProjects } from "@/data/projects";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function FeaturedProjects() {
  return (
    <section className="py-16" id="projects-preview">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeader eyebrow="Selected Work" title="A few recent projects"/>
      </div>
      <ProjectGrid projects={featuredProjects.slice(0, 3)} />
    </section>
  );
}