import { Project } from "@/data/projects";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function ProjectDetailHeader({ project }: { project: Project }) {
  return (
    <section className="project-detail-hero">
      <p className="project-detail-kicker">Case Study</p>
      <h1>{project.title}</h1>
      <p className="project-detail-subtitle">{project.subtitle}</p>
      <p className="project-detail-description">{project.description}</p>
      <div className="project-detail-actions">
        {project.githubUrl ? <ButtonLink href={project.githubUrl} external>View Code</ButtonLink> : null}
        {project.demoUrl ? <ButtonLink href={project.demoUrl} variant="secondary" external>Demo</ButtonLink> : null}
        <ButtonLink href="/projects" variant="ghost">Back</ButtonLink>
      </div>
    </section>
  );
}
