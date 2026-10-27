import Link from "next/link";
import { Project } from "@/data/projects";

export function ProjectDetailHeader({ project }: { project: Project }) {
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
        <span></span>
        <strong>↩</strong>
        <Link href="/projects">back projects -&gt;</Link>
      </div>
    </section>
  );
}
