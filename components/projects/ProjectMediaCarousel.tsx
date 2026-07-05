"use client";

import { useState } from "react";
import type { ProjectMediaItem } from "@/data/projects";

type ProjectMediaCarouselProps = {
  media?: ProjectMediaItem[];
};

export function ProjectMediaCarousel({ media = [] }: ProjectMediaCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (media.length === 0) return null;

  const activeItem = media[activeIndex];
  const count = media.length;

  function showPrevious() {
    setActiveIndex((current) => (current - 1 + count) % count);
  }

  function showNext() {
    setActiveIndex((current) => (current + 1) % count);
  }

  return (
    <section className="project-media-card project-detail-wide" aria-labelledby="project-media-title">
      <div className="project-media-header">
        <div>
          <p className="project-detail-number">08</p>
          <h2 id="project-media-title">Demo / Gallery</h2>
        </div>
        <p>{String(activeIndex + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}</p>
      </div>

      <div className={`project-media-frame project-media-frame-${activeItem.type}`}>
        <ProjectMediaFrame item={activeItem} />
      </div>

      <div className="project-media-footer">
        <div>
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
        <div className="project-media-dots" aria-label="Choose media item">
          {media.map((item, index) => (
            <button
              key={`${item.src}-${index}`}
              type="button"
              className={index === activeIndex ? "is-active" : ""}
              onClick={() => setActiveIndex(index)}
              aria-label={`Show media ${index + 1}`}
            />
          ))}
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
