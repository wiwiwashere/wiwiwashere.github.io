import Link from "next/link";
import { ButterflyParticles } from "@/components/home/ButterflyParticles";
import { PageContainer } from "@/components/layout/PageContainer";
import { homeProjectHighlights, musicPicks } from "@/data/home";
import { projects } from "@/data/projects";

const featuredProjects = homeProjectHighlights
  .map((slug) => projects.find((project) => project.slug === slug))
  .filter(Boolean);

const cardVisuals = ["signal bloom", "meow bloom", "system bloom"];
const currentSong = musicPicks[0];

export default function HomePage() {
  return (
    <>
      <div className="global-butterfly" aria-hidden="true">
        <ButterflyParticles />
      </div>
      <PageContainer className="home-reference-page">
        <section className="home-poster">
          <section className="home-hero" aria-labelledby="home-title">
            <div className="home-botanical home-botanical-left" aria-hidden="true" />
            <div className="home-botanical home-botanical-right" aria-hidden="true" />

            <div className="home-hero-copy">
              <h1 id="home-title" className="home-title">Winnie Lin</h1>
              <p className="home-script">software / ai</p>
              <p className="home-intro">
                Hi, I&apos;m Winnie Lin! I&apos;m currently a student at the University of Florida, trying to figure out what kind of impact I want to make.
                Outside of school, I enjoy spending time with friends and family, 
                trying new things, and finding ideas that shape how I see the world.
              </p>
              <div className="home-rule" aria-hidden="true">
                <span />
                <b>*</b>
                <span />
              </div>
            </div>
          </section>

          <section className="home-archive-layout">
            <div id="project-highlights" className="home-project-panel">
              <div className="home-section-topline">
                <SectionHeading>project highlights</SectionHeading>
                <Link href="/projects" className="home-section-action">all projects -&gt;</Link>
              </div>
              <div className="home-project-grid">
                {featuredProjects.slice(0, 3).map((project, index) => project ? (
                  <Link key={project.id} href={`/projects/${project.slug}`} className="home-project-card">
                    <div className={`home-card-art home-card-art-${index + 1}`}>
                      <span>{cardVisuals[index]}</span>
                    </div>
                    <h2>{project.title === "System Call File Manager" ? "Sys Call" : project.title}</h2>
                    {/* <p className="home-card-subtitle">{project.subtitle}</p> */}
                    <p>{project.description}</p>
                    <span className="home-card-link">view project -&gt;</span>
                  </Link>
                ) : null)}
              </div>
            </div>

            <aside id="music-notes" className="home-music-panel">
              <SectionHeading>music notes</SectionHeading>
              <article className="home-music-card">
                <div className="home-album-art" aria-hidden="true" />
                <div className="home-song-meta">
                  <div>
                    <h2>my space</h2>
                    <p>{currentSong.note}</p>
                  </div>
                </div>
                <div className="home-player-line" aria-hidden="true">
                  <span />
                </div>
                <p className="home-playlist-note">tap the floating music tab to keep it playing while you browse.</p>
                <a href={currentSong.embedUrl.replace("/embed/playlist/", "/playlist/").split("?")[0]} target="_blank" rel="noreferrer" className="home-card-link">
                  open playlist -&gt;
                </a>
              </article>
            </aside>

            <aside id="outside-tech" className="home-life-panel">
              <div className="home-section-topline">
                <SectionHeading>life fragment</SectionHeading>
                <Link href="/life" className="home-section-action">all life -&gt;</Link>
              </div>
              <Link href="/life" className="home-life-card">
                <div className="home-life-collage" aria-hidden="true">
                  <span className="home-life-paper home-life-paper-pink" />
                  <span className="home-life-photo" />
                  <span className="home-life-paper home-life-paper-blue" />
                  <span className="home-life-label">archive<br />no. 2026</span>
                </div>
                <p>
                  moments, places, books, and little things that keep life feeling full.
                </p>
                <span className="home-card-link">explore more -&gt;</span>
              </Link>
            </aside>
          </section>

          <footer className="home-poster-footer">
            <span>*</span>
            <p>(c) 2026 Winnie Lin</p>
            <p>building soft things with strong intention.</p>
          </footer>
        </section>
      </PageContainer>
    </>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="home-section-heading">
      <span aria-hidden="true">*</span>
      <h2>{children}</h2>
    </div>
  );
}
