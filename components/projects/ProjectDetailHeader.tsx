import Link from "next/link";
import { Project } from "@/data/projects";

export function ProjectDetailHeader({ project }: { project: Project }) {
  const year = project.startDate?.match(/\d{4}/)?.[0];

  return (
    <section className="archive-hero project-detail-hero">
      <div>
        <h1>{project.title}</h1>
        {project.award ? (
          <p className="project-award-banner">
            <span aria-hidden="true">★</span>
            {project.award.split(", ").join(" / ")}
          </p>
        ) : null}
      </div>
      <div className="archive-side-note">
        <span>{project.status ? project.status.toLowerCase() : "case study"}</span>
        <strong>{year ?? "↩"}</strong>
        {project.githubUrl ? <a href={project.githubUrl} target="_blank" rel="noreferrer">view code -&gt;</a> : null}
        {project.demoUrl ? <a href={project.demoUrl} target="_blank" rel="noreferrer">live demo -&gt;</a> : null}
        <Link href="/projects">all projects -&gt;</Link>
      </div>
    </section>
  );
}
