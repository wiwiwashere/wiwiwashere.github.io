import { notFound } from "next/navigation";
import { PageContainer } from "@/components/layout/PageContainer";
import { ProjectDetailHeader } from "@/components/projects/ProjectDetailHeader";
import { TechStackList } from "@/components/projects/TechStackList";
import { getProjectBySlug, projects } from "@/data/projects";

type ProjectDetailPageProps = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return projects.map((project) => ({ slug: project.slug })); }
function DetailSection({ title, children, index }: { title: string; children: React.ReactNode; index: number }) {
  return <section className="glass-panel rounded-2xl p-6"><p className="number-tag">{String(index).padStart(2, "0")}</p><h2 className="display-serif mt-8 text-3xl text-ink">{title}</h2><div className="mt-5 text-sm leading-8 text-zinc-600">{children}</div></section>;
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();
  return (
    <PageContainer className="py-14">
      <ProjectDetailHeader project={project} />
      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        <DetailSection title="Project Overview" index={1}><p>{project.description}</p></DetailSection>
        <DetailSection title="Problem" index={2}><p>{project.problem}</p></DetailSection>
        <DetailSection title="Solution" index={3}><p>{project.solution}</p></DetailSection>
        <DetailSection title="My Role" index={4}><p>{project.role}</p></DetailSection>
        <DetailSection title="Tech Stack" index={5}><TechStackList techStack={project.techStack} /></DetailSection>
        <DetailSection title="Key Features" index={6}><ul className="space-y-3">{project.features.map((feature) => <li key={feature} className="flex gap-3"><span className="mt-3 size-1.5 rounded-full bg-blush-500" /><span>{feature}</span></li>)}</ul></DetailSection>
        <section className="glass-panel rounded-2xl p-6 lg:col-span-2"><p className="number-tag">07</p><h2 className="display-serif mt-8 text-3xl text-ink">Challenges & Lessons</h2><div className="mt-6 grid gap-6 md:grid-cols-2"><div><h3 className="text-xs font-bold uppercase tracking-[0.14em] text-blush-700">Challenges</h3><ul className="mt-4 space-y-3 text-sm leading-7 text-zinc-600">{project.challenges.map((challenge) => <li key={challenge} className="flex gap-3"><span className="mt-3 size-1.5 rounded-full bg-blush-500" /><span>{challenge}</span></li>)}</ul></div><div><h3 className="text-xs font-bold uppercase tracking-[0.14em] text-blush-700">Lessons</h3><ul className="mt-4 space-y-3 text-sm leading-7 text-zinc-600">{project.lessons.map((lesson) => <li key={lesson} className="flex gap-3"><span className="mt-3 size-1.5 rounded-full bg-blush-500" /><span>{lesson}</span></li>)}</ul></div></div></section>
      </div>
    </PageContainer>
  );
}