import Link from "next/link";
import { PageContainer } from "@/components/layout/PageContainer";
import { ProjectFilter } from "@/components/projects/ProjectFilter";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <PageContainer className="archive-page py-12">
      <section className="archive-hero archive-hero-blue">
        <div>
          <p className="archive-kicker">all</p>
          <h1>Projects</h1>
          <p>
            The Home page only holds a few selected pieces. This is the full project shelf.
          </p>
        </div>
        <div className="archive-side-note">
          <span>project count</span>
          <strong>{projects.length.toString().padStart(2, "0")}</strong>
          <Link href="/">back home -&gt;</Link>
        </div>
      </section>

      <section className="archive-section">
        <div className="archive-section-heading">
          <span>*</span>
          <h2>browse the full collection</h2>
        </div>
        <ProjectFilter projects={projects} />
      </section>

      <footer className="home-poster-footer">
          <span>*</span>
          <p>(c) 2026 Winnie Lin</p>
          <p>building soft things with strong intention.</p>
        </footer>
    </PageContainer>
  );
}
