import { Project } from "@/data/projects";
import Link from "next/link";

type ProjectCardProps = { project: Project; index?: number; total?: number };

export function ProjectCard({ project, index = 0, total = 1 }: ProjectCardProps) {
  const cardMedia = getProjectCardMedia(project);

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="project-archive-card project-archive-card-with-media group flex h-full flex-col p-5"
      style={{ viewTransitionName: `project-${project.id}` }}
    >
      {project.award ? <AwardStamp award={project.award} /> : null}
      {cardMedia ? (
        <div className="project-card-media">
          <img src={cardMedia.src} alt={cardMedia.alt} />
        </div>
      ) : (
        <div className="project-card-media project-card-placeholder" aria-hidden="true">
          <strong>{project.title.split(" ")[0]}</strong>
          <span>no preview yet</span>
        </div>
      )}
      <div className="flex items-center justify-between gap-4">
        <p className="archive-kicker">{String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}</p>
        <p className="project-archive-tag">{project.tags[0]}</p>
      </div>
      <h2 className="display-serif mt-12 text-3xl leading-tight text-ink">{project.title}</h2>
      {/* <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">{project.subtitle}</p> */}
      <p className="mt-2 flex-1 text-sm leading-2 text-zinc-500">{project.description}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.techStack.slice(0, 5).map((tech) => <span key={tech} className="archive-chip">{tech}</span>)}
      </div>
      <div className="mt-7 flex flex-wrap gap-3">
        {/* <ButtonLink href={`/projects/${project.slug}`}>Read More</ButtonLink> */}
        <span className="home-section-action">
          read more -&gt;
        </span>
        {/* {project.githubUrl ? <ButtonLink href={project.githubUrl} variant="secondary" external>View Code</ButtonLink> : null} */}
      </div>
    </Link>
  );
}

function AwardStamp({ award }: { award: string }) {
  const [title, ...event] = award.split(", ");

  return (
    <p className="project-award-stamp" aria-label={`Award: ${award}`}>
      <span aria-hidden="true">★</span>
      <strong>{title}</strong>
      {event.length ? <span>{event.join(", ")}</span> : null}
    </p>
  );
}

function getProjectCardMedia(project: Project) {
  const imageMedia = project.media?.find((item) => item.type === "image");
  if (imageMedia) {
    return {
      src: imageMedia.src,
      alt: imageMedia.title ?? imageMedia.caption ?? `${project.title} screenshot`,
    };
  }

  const videoMedia = project.media?.find((item) => item.type === "video" && item.poster);
  if (videoMedia?.poster) {
    return {
      src: videoMedia.poster,
      alt: videoMedia.title ?? videoMedia.caption ?? `${project.title} video preview`,
    };
  }

  if (project.imageUrl) {
    return {
      src: project.imageUrl,
      alt: `${project.title} preview`,
    };
  }

  return null;
}
