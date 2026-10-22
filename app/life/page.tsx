import Link from "next/link";
import "../archive.css";
import { PageContainer } from "@/components/layout/PageContainer";
import { diaryNotes, lifeEntries } from "@/data/life";
import { InViewGroup } from "@/components/motion/InViewGroup";

export default function LifePage() {
  const photoColumns = Array.from({ length: 4 }, (_, columnIndex) =>
    lifeEntries
      .map((entry, index) => ({ entry, index }))
      .filter(({ index }) => index % 4 === columnIndex),
  );

  return (
    <PageContainer className="archive-page py-12">
      <section className="archive-hero archive-hero-pink">
        <div>
          <p className="archive-kicker"></p>
          <h1>Moments in Life</h1>
        </div>
        <div className="archive-side-note">
          <span>life fragments</span>
          <strong>{lifeEntries.length.toString().padStart(2, "0")}</strong>
          <Link href="/">back home -&gt;</Link>
        </div>
      </section>

      <section className="archive-section diary-archive-section">
        <div className="archive-section-heading">
          <span>*</span>
          <h2>something on my mind..</h2>
        </div>
        <div className="diary-fragment-grid">
          {diaryNotes.map((note, index) => (
            <article key={note} className="diary-fragment-card">
              <p className="archive-kicker" style={{fontWeight: 700}}>
                {String(index + 1).padStart(2, "0")}
              </p>
              <p>{note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="archive-section">
        <div className="archive-section-heading">
          <span>*</span>
          <h2>photo</h2>
        </div>
        <InViewGroup className="life-photo-mosaic">
          {photoColumns.map((column, columnIndex) => (
            <div className="life-photo-column" key={`photo-column-${columnIndex}`}>
              {column.map(({ entry, index }) => (
                <article
                  key={entry.id}
                  className={`life-photo-entry life-archive-card ${index % 2 === 1 ? "life-photo-entry-offset" : ""} ${index < 4 ? "life-photo-entry-intro" : ""}`}
                  style={{ order: index, "--life-entry-index": index } as React.CSSProperties}
                >
                  <figure>
                    <div className="life-photo-image">
                      <img
                        src={entry.imageUrl}
                        alt={entry.title}
                        loading={index < 4 ? "eager" : "lazy"}
                        decoding="async"
                      />
                    </div>
                    <figcaption className="life-photo-caption">
                      <div className="life-photo-title-row">
                        <h3>{entry.title}</h3>
                        <p>{entry.date}</p>
                      </div>
                      <p>{entry.thought}</p>
                      <ul aria-label="Tags">
                        {entry.tags.map((tag) => <li key={tag}>{tag}</li>)}
                      </ul>
                    </figcaption>
                  </figure>
                </article>
              ))}
            </div>
          ))}
        </InViewGroup>
      </section>

      <footer className="home-poster-footer">
          <span>*</span>
          <p>© 2026 Winnie Lin</p>
          <p>building soft things with strong intention.</p>
        </footer>
    </PageContainer>
  );
}
