import { notFound } from "next/navigation";
import { PageContainer } from "@/components/layout/PageContainer";
import { ProjectDetailHeader } from "@/components/projects/ProjectDetailHeader";
import { ProjectMediaCarousel } from "@/components/projects/ProjectMediaCarousel";
import { TechStackList } from "@/components/projects/TechStackList";
import { getProjectBySlug, projects } from "@/data/projects";

type ProjectDetailPageProps = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return projects.map((project) => ({ slug: project.slug })); }

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();
  const features = project.features ?? [];
  const challenges = project.challenges ?? [];
  const lessons = project.insights ?? [];
  return (
    <PageContainer className="project-detail-page py-14">
      <ProjectDetailHeader project={project} />
      <div className="project-case-study">
        <nav className="project-case-study-rail" aria-label="Case study sections">
          <p>Case study</p>
          <a href="#overview">Overview</a>
          {project.problem ? <a href="#problem">Problem</a> : null}
          {project.solution ? <a href="#solution">Solution</a> : null}
          {features.length > 0 ? <a href="#features">Features</a> : null}
          {challenges.length > 0 || lessons.length > 0 ? <a href="#reflections">Reflections</a> : null}
        </nav>

        <article className="project-case-study-content">
          <section className="project-story-intro" id="overview">
            <div>
              <h2>Project Overview</h2>
              <p>{project.description}</p>
            </div>
            <dl className="project-story-meta">
              {project.role ? (
                <div>
                  <dt>My role</dt>
                  <dd>{project.role}</dd>
                </div>
              ) : null}
              <div>
                <dt>Tech stack</dt>
                <dd><TechStackList techStack={project.techStack} /></dd>
              </div>
              {project.startDate ? (
                <div>
                  <dt>Timeline</dt>
                  <dd>{project.startDate}{project.endDate ? ` — ${project.endDate}` : ""}</dd>
                </div>
              ) : null}
              {project.status ? (
                <div>
                  <dt>Status</dt>
                  <dd>{project.status}</dd>
                </div>
              ) : null}
            </dl>
          </section>

          <ProjectMediaCarousel media={project.media} />

          {project.problem || project.solution ? (
            <div className="project-story-pair">
              {project.problem ? (
                <section id="problem">
                  <h2>Problem</h2>
                  <p>{project.problem}</p>
                </section>
              ) : null}
              {project.solution ? (
                <section id="solution">
                  <h2>Solution</h2>
                  <p>{project.solution}</p>
                </section>
              ) : null}
            </div>
          ) : null}

          {features.length > 0 ? (
            <section className="project-feature-section" id="features">
              <h2>Key Features</h2>
              <ul>
                {features.map((feature) => <li key={feature}>{feature}</li>)}
              </ul>
            </section>
          ) : null}

          {challenges.length > 0 || lessons.length > 0 ? (
            <div className="project-story-pair project-reflection-pair" id="reflections">
              {challenges.length > 0 ? (
                <section>
                  <h2>Challenges</h2>
                  <ul>{challenges.map((challenge) => <li key={challenge}>{challenge}</li>)}</ul>
                </section>
              ) : null}
              {lessons.length > 0 ? (
                <section>
                  <h2>Insights</h2>
                  <ul>{lessons.map((lesson) => <li key={lesson}>{lesson}</li>)}</ul>
                </section>
              ) : null}
            </div>
          ) : null}
        </article>
      </div>
    </PageContainer>
  );
}
