import Link from "next/link";
import { PageContainer } from "@/components/layout/PageContainer";
import { diaryNotes, lifeEntries } from "@/data/life";

export default function LifePage() {
  return (
    <PageContainer className="archive-page py-12">
      <section className="archive-hero archive-hero-pink">
        <div>
          <p className="archive-kicker"></p>
          <h1>Moments in Life</h1>
          <p>
            A fuller archive for photos, diary scraps, moodboards, and the 
            little things that do not fit inside the selected Home preview.
          </p>
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
          <h2>diary scraps</h2>
        </div>
        <div className="diary-fragment-grid">
          {diaryNotes.map((note, index) => (
            <article key={note} className="diary-fragment-card">
              <p className="archive-kicker">note {String(index + 1).padStart(2, "0")}</p>
              <p>{note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="archive-section">
        <div className="archive-section-heading">
          <span>*</span>
          <h2>photo scraps</h2>
        </div>
        <div className="life-archive-grid">
          {lifeEntries.map((entry, index) => (
            <article key={entry.id} className={`life-archive-card ${index === 0 ? "life-archive-card-large" : ""}`}>
              <div className="life-archive-image">
                <img src={entry.imageUrl} alt={entry.title} />
              </div>
              <div className="life-archive-copy">
                <p className="archive-kicker">{String(index + 1).padStart(2, "0")} / {entry.category}</p>
                <h2>{entry.title}</h2>
                <p className="life-archive-date">{entry.date}</p>
                <p>{entry.thought}</p>
                <div>
                  {entry.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="home-poster-footer">
          <span>*</span>
          <p>(c) 2026 Winnie Lin</p>
          <p>building soft things with strong intention.</p>
        </footer>
    </PageContainer>
  );
}
