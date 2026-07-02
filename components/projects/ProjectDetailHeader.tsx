import Link from "next/link";
import { Project } from "@/data/projects";

export function ProjectDetailHeader({ project }: { project: Project }) {
  return (
    <section className="archive-hero project-detail-hero">
      <div>
        <h1>{project.title}</h1>
      </div>
      <div className="archive-side-note">
        <span>case study</span>
        <strong>↩</strong>
        <Link href="/projects">back projects -&gt;</Link>
      </div>
    </section>
  );
}
