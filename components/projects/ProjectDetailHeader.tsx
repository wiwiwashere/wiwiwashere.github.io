import Link from "next/link";
import { Project } from "@/data/projects";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function ProjectDetailHeader({ project }: { project: Project }) {
  return (
    <section className="project-detail-hero">
      <div className="project-detail-hero-copy">
        <p className="project-detail-kicker">Case Study</p>
        <h1>{project.title}</h1>
        <p className="project-detail-subtitle">{project.subtitle}</p>
        {project.githubUrl || project.demoUrl ? (
          <div className="project-detail-actions">
            {project.githubUrl ? <ButtonLink href={project.githubUrl} external>View Code</ButtonLink> : null}
            {project.demoUrl ? <ButtonLink href={project.demoUrl} variant="secondary" external>Demo</ButtonLink> : null}
          </div>
        ) : null}
      </div>
      <aside className="archive-side-note project-detail-back-note" aria-label="Project navigation">
        <span>case study</span>
        <strong>↩</strong>
        <Link href="/projects">back projects -&gt;</Link>
      </aside>
    </section>
  );
}
