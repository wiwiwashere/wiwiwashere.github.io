import Link from "next/link";
import { PageContainer } from "@/components/layout/PageContainer";
import { skills } from "@/data/contact";

const values = ["Building useful products", "Inclusive tech communities", "Learning by doing", "Design and branding"];

export default function AboutPage() {
  return (
    <PageContainer className="archive-page py-12">
      <section className="archive-hero archive-hero-blue">
        <div>
          <p className="archive-kicker">about</p>
          <h1>Winnie Lin</h1>
          <p>
            I&apos;m interested in turning ideas into tools people can actually use.
          </p>
        </div>
        <div className="archive-side-note">
          <span>currently</span>
          <strong>UF</strong>
          <Link href="/contact">say hi -&gt;</Link>
        </div>
      </section>

      <section className="archive-section about-archive-grid">
        <article className="about-archive-card">
          <p className="archive-kicker">01 / story</p>
          <h2>My story</h2>
          <p>
            Hi, I&apos;m Winnie Lin! I&apos;m currently a student at the University of Florida, trying to figure out what kind of impact I want to make.
            Outside of school, I enjoy spending time with friends and family, 
            trying new things, and finding small moments in everyday life.
            I&apos;m someone who values connections with genuine people, 
            and I&apos;m always excited to meet people who inspire me to see the world a little differently.
          </p>
        </article>

        <article className="about-archive-card">
          <p className="archive-kicker">02 / values</p>
          <h2>What I care about</h2>
          <ul>
            {values.map((item) => (
              <li key={item}>
                <span>*</span>
                {item}
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="archive-section">
        <div className="archive-section-heading">
          <span>*</span>
          <h2>technical shelf</h2>
        </div>
        <div className="skills-archive-grid">
          {skills.map((group, index) => (
            <article key={group.category} className="skills-archive-card">
              <p className="archive-kicker">{String(index + 1).padStart(2, "0")} / stack</p>
              <h2>{group.category}</h2>
              <div>
                {group.items.map((item) => <span key={item}>{item}</span>)}
              </div>
            </article>
          ))}
        </div>
      </section>
      <footer className="archive-poster-footer">
          <span>*</span>
          <p>© 2026 Winnie Lin</p>
          <p>building soft things with strong intention.</p>
      </footer>
    </PageContainer>
  );
}
