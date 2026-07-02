import Link from "next/link";
import { Project } from "@/data/projects";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { PageContainer } from "@/components/layout/PageContainer";

export function ProjectDetailHeader({ project }: { project: Project }) {
  return (
    <PageContainer className="archive-page py-12">
      {/* <section className="archive-hero archive-hero-blue">
        <div>
          <p className="archive-kicker"></p>
          <h1>{project.title}</h1>
        </div>
        <div className="archive-side-note">
          <span></span>
          <strong>back</strong>
          <Link href="/projects">back projects -&gt;</Link>
        </div>
      </section> */}
      <section className="archive-hero archive-hero-blue project-detail-hero">
        <div className="project-detail-hero-copy">
          {/* <p className="archive-kicker"></p> */}
          <h1>{project.title}</h1>
        </div>
        <div className="archive-side-note">
          <span></span>
          <strong>  ↩</strong>
          <Link href="/projects">back projects -&gt;</Link>
        </div>
      </section>
    </PageContainer>
  );
}
