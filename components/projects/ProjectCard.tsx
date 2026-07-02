import { Project } from "@/data/projects";
import { ButtonLink } from "@/components/ui/ButtonLink";

type ProjectCardProps = { project: Project; index?: number };

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <article className="project-archive-card group flex h-full flex-col p-5 transition hover:-translate-y-1">
      <div className="flex items-center justify-between gap-4">
        <p className="archive-kicker">{String(index + 1).padStart(2, "0")} / 09</p>
        <p className="project-archive-tag">{project.tags[0]}</p>
      </div>
      <h2 className="display-serif mt-12 text-3xl leading-tight text-ink">{project.title}</h2>
      <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">{project.subtitle}</p>
      <p className="mt-5 flex-1 text-sm leading-7 text-zinc-600">{project.description}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.techStack.slice(0, 5).map((tech) => <span key={tech} className="archive-chip">{tech}</span>)}
      </div>
      <div className="mt-7 flex flex-wrap gap-3">
        <ButtonLink href={`/projects/${project.slug}`}>Read More</ButtonLink>
        {project.githubUrl ? <ButtonLink href={project.githubUrl} variant="secondary" external>View Code</ButtonLink> : null}
      </div>
    </article>
  );
}
