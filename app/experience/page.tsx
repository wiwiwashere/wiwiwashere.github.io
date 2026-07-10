import Link from "next/link";
import { PageContainer } from "@/components/layout/PageContainer";
import { experienceItems } from "@/data/experience";
import { skills } from "@/data/contact";

const typeLabels = {
  technical: "technical",
  leadership: "leadership",
  program: "program"
};

export default function ExperiencePage() {
  return (
    <PageContainer className="archive-page py-12">
      <section className="archive-hero archive-hero-blue">
        <div>
          <p className="archive-kicker"></p>
          <h1>Experiences</h1>
          <p>
            A growth map that collects my work, leadership, and other technical experiences.
          </p>
        </div>
        <div className="archive-side-note">
          <span>entries</span>
          <strong>{experienceItems.length.toString().padStart(2, "0")}</strong>
          <Link href="/">back home -&gt;</Link>
        </div>
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

      <section className="archive-section experience-archive-section">
        <div className="archive-section-heading">
          <span>*</span>
          <h2>growth map</h2>
        </div>

        <div className="experience-archive-map">
          {experienceItems.map((item, index) => (
            <article key={item.id} className="experience-archive-card">
              <div className="experience-node-mark" aria-hidden="true" />
              <div className="experience-archive-card-inner">
                <div className="experience-card-topline">
                  <p className="archive-kicker">
                    {String(index + 1).padStart(2, "0")} / {typeLabels[item.type]}
                  </p>
                  <p>{item.startDate}{item.location ? ` | ${item.location}` : ""}</p>
                </div>
                <h2>{item.title}</h2>
                <p className="experience-org">{item.organization}</p>
                <ul>
                  {item.description.map((point) => (
                    <li key={point}>
                      <span>*</span>
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="experience-skill-row">
                  {item.skills.map((skill) => <span key={skill}>{skill}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="home-poster-footer">
          <span>*</span>
          <p>(©) 2026 Winnie Lin</p>
          <p>building soft things with strong intention.</p>
      </footer>
    </PageContainer>
  );
}
