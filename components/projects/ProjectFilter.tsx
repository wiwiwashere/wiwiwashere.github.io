"use client";
import { useMemo, useState } from "react";
import { flushSync } from "react-dom";
import { Project, projectTags } from "@/data/projects";
import { ProjectGrid } from "./ProjectGrid";
import { useMotionPreferences } from "@/components/motion/MotionProvider";

type ViewTransitionDocument = Document & {
  startViewTransition?: (update: () => void) => void;
};

export function ProjectFilter({ projects }: { projects: Project[] }) {
  const [activeTag, setActiveTag] = useState("All");
  const { reducedMotion } = useMotionPreferences();
  const filteredProjects = useMemo(() => activeTag === "All" ? projects : projects.filter((project) => project.tags.includes(activeTag)), [activeTag, projects]);

  function selectTag(tag: string) {
    if (tag === activeTag) return;

    const transitionDocument = document as ViewTransitionDocument;
    if (!reducedMotion && transitionDocument.startViewTransition) {
      transitionDocument.startViewTransition(() => flushSync(() => setActiveTag(tag)));
      return;
    }

    setActiveTag(tag);
  }

  return (
    <div>
      <div className="archive-filter mb-8 flex flex-wrap gap-2">
        {projectTags.map((tag) => <button key={tag} type="button" onClick={() => selectTag(tag)} className={activeTag === tag ? "is-active" : ""} aria-pressed={activeTag === tag}>{tag}</button>)}
      </div>
      <ProjectGrid projects={filteredProjects} />
    </div>
  );
}
