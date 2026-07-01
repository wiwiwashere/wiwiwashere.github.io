import { notFound } from "next/navigation";
import { PageContainer } from "@/components/layout/PageContainer";
import { ProjectDetailHeader } from "@/components/projects/ProjectDetailHeader";
import { TechStackList } from "@/components/projects/TechStackList";
import { getProjectBySlug, projects } from "@/data/projects";

type ProjectDetailPageProps = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return projects.map((project) => ({ slug: project.slug })); }
function DetailSection({ title, children, index }: { title: string; children: React.ReactNode; index: number }) {
  return <section className="project-detail-card"><p className="project-detail-number">{String(index).padStart(2, "0")}</p><h2>{title}</h2><div className="project-detail-body">{children}</div></section>;
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();
  return (
    <PageContainer className="project-detail-page py-14">
      <ProjectDetailHeader project={project} />
      <div className="project-detail-grid">
        <DetailSection title="Project Overview" index={1}><p>{project.description}</p></DetailSection>
        <DetailSection title="Problem" index={2}><p>{project.problem}</p></DetailSection>
        <DetailSection title="Solution" index={3}><p>{project.solution}</p></DetailSection>
        <DetailSection title="My Role" index={4}><p>{project.role}</p></DetailSection>
        <DetailSection title="Tech Stack" index={5}><TechStackList techStack={project.techStack} /></DetailSection>
        <DetailSection title="Key Features" index={6}><ul className="space-y-3">{project.features.map((feature) => <li key={feature} className="flex gap-3"><span className="mt-3 size-1.5 rounded-full bg-blush-500" /><span>{feature}</span></li>)}</ul></DetailSection>
        <section className="project-detail-card project-detail-wide"><p className="project-detail-number">07</p><h2>Challenges & Lessons</h2><div className="project-detail-split"><div><h3>Challenges</h3><ul>{project.challenges.map((challenge) => <li key={challenge} className="flex gap-3"><span className="mt-3 size-1.5 rounded-full bg-blush-500" /><span>{challenge}</span></li>)}</ul></div><div><h3>Lessons</h3><ul>{project.lessons.map((lesson) => <li key={lesson} className="flex gap-3"><span className="mt-3 size-1.5 rounded-full bg-blush-500" /><span>{lesson}</span></li>)}</ul></div></div></section>
      </div>
    </PageContainer>
  );
}
