import { PageContainer } from "@/components/layout/PageContainer";
import { ButtonLink } from "@/components/ui/ButtonLink";

export default function NotFound() {
  return <PageContainer className="py-20">
    <div className="glass-panel rounded-[28px] p-8">
      <p className="number-tag">Not found</p>
      <h1 className="display-serif mt-8 text-5xl text-ink">This page is not available.</h1>
      <p className="mt-4 text-sm leading-7 text-zinc-600">The project or page you opened does not exist yet.</p>
    <div className="mt-8">
    <ButtonLink href="/projects">Back to Projects</ButtonLink>
    </div></div>
    </PageContainer>;
}