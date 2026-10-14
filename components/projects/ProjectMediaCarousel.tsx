"use client";

import { useState } from "react";
import type { ProjectMediaItem } from "@/data/projects";

type ProjectMediaCarouselProps = {
  media?: ProjectMediaItem[];
};

export function ProjectMediaCarousel({ media = [] }: ProjectMediaCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "previous">("next");

  if (media.length === 0) return null;

  const activeItem = media[activeIndex];
  const count = media.length;

  function showPrevious() {
    setDirection("previous");
    setActiveIndex((current) => (current - 1 + count) % count);
  }

  function showNext() {
    setDirection("next");
    setActiveIndex((current) => (current + 1) % count);
  }

  function showIndex(index: number) {
    if (index === activeIndex) return;
    setDirection(index > activeIndex ? "next" : "previous");
    setActiveIndex(index);
  }

  return (
    <section className="project-media-card project-detail-wide" aria-labelledby="project-media-title">
      <div className="project-media-header">
        <div>
          <h2 id="project-media-title">Demo / Gallery</h2>
        </div>
        <p>{String(activeIndex + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}</p>
      </div>

      <div
        key={`${activeItem.src}-${activeIndex}`}
        className={`project-media-frame project-media-frame-${activeItem.type} project-media-enter-${direction}`}
      >
        <ProjectMediaFrame item={activeItem} />
      </div>

      <div className="project-media-footer">
        <div key={`caption-${activeIndex}`} className="project-media-caption-transition">
          {/* {activeItem.title ? <h3>{activeItem.title}</h3> : null} */}
          {activeItem.caption ? <p>{activeItem.caption}</p> : null}
        </div>
        {count > 1 ? (
          <div className="project-media-controls" aria-label="Media carousel controls">
            <button type="button" onClick={showPrevious}>prev</button>
            <button type="button" onClick={showNext}>next</button>
            {/* <Link onClick={showPrevious}>  -&gt; prev</Link>
            <Link onClick={showNext}> next -&gt;</Link> */}
          </div>
        ) : null}
      </div>

      {count > 1 ? (
        <div className="project-media-progress-wrap">
          <div className="project-media-progress" aria-hidden="true">
            <span style={{ transform: `scaleX(${(activeIndex + 1) / count})` }} />
          </div>
          <div className="project-media-dots" aria-label="Choose media item">
            {media.map((item, index) => (
              <button
                key={`${item.src}-${index}`}
                type="button"
                className={index === activeIndex ? "is-active" : ""}
                onClick={() => showIndex(index)}
                aria-label={`Show media ${index + 1}`}
                aria-pressed={index === activeIndex}
              />
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
}

function ProjectMediaFrame({ item }: { item: ProjectMediaItem }) {
  if (item.type === "image") {
    return <img src={item.src} alt={item.title ?? item.caption ?? "Project screenshot"} />;
  }

  if (item.type === "video") {
    return <video src={item.src} poster={item.poster} controls playsInline />;
  }

  return (
    <iframe
      src={item.src}
      title={item.title ?? "Project demo video"}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      loading="lazy"
    />
  );
}
