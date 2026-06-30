import { Project } from "@/data/projects";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function ProjectDetailHeader({ project }: { project: Project }) {
  return (
    <section className="glass-panel rounded-[28px] p-6 sm:p-10">
      <p className="number-tag">Case Study</p>
      <h1 className="display-serif mt-8 text-5xl leading-none text-ink sm:text-7xl">{project.title}</h1>
      <p className="mt-4 max-w-3xl text-sm font-semibold uppercase tracking-[0.14em] text-zinc-500">{project.subtitle}</p>
      <p className="mt-6 max-w-3xl text-base leading-8 text-zinc-600">{project.description}</p>
      <div className="mt-8 flex flex-wrap gap-3">
        {project.githubUrl ? <ButtonLink href={project.githubUrl} external>View Code</ButtonLink> : null}
        {project.demoUrl ? <ButtonLink href={project.demoUrl} variant="secondary" external>Demo</ButtonLink> : null}
        <ButtonLink href="/projects" variant="ghost">Back</ButtonLink>
      </div>
    </section>
  );
}