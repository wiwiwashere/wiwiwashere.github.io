import { Project } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export function ProjectGrid({ projects }: { projects: Project[] }) {
  return <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
    {projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}
  </div>;
}