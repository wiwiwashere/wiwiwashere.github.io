"use client";
import { useMemo, useState } from "react";
import { Project, projectTags } from "@/data/projects";
import { ProjectGrid } from "./ProjectGrid";

export function ProjectFilter({ projects }: { projects: Project[] }) {
  const [activeTag, setActiveTag] = useState("All");
  const filteredProjects = useMemo(() => activeTag === "All" ? projects : projects.filter((project) => project.tags.includes(activeTag)), [activeTag, projects]);
  return (
    <div>
      <div className="archive-filter mb-8 flex flex-wrap gap-2">
        {projectTags.map((tag) => <button key={tag} type="button" onClick={() => setActiveTag(tag)} className={activeTag === tag ? "is-active" : ""}>{tag}</button>)}
      </div>
      <ProjectGrid projects={filteredProjects} />
    </div>
  );
}
