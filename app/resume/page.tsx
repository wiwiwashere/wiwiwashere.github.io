import Link from "next/link";
import { PageContainer } from "@/components/layout/PageContainer";
import { ResumeViewer } from "@/components/resume/ResumeViewer";
import { contact } from "@/data/contact";

export default function ResumePage() {
  return (
    <PageContainer className="archive-page py-12">
      <section className="archive-hero archive-hero-contact">
        <div>
          <p className="archive-kicker"></p>
          <h1>Resume</h1>
          <p>
            A more formal snapshot of the my work
          </p>
        </div>
        <div className="archive-side-note">
          <span>document</span>
          <strong>PDF</strong>
          <a href={contact.resumeUrl} target="_blank" rel="noopener noreferrer">open pdf -&gt;</a>
        </div>
      </section>

      {/* <section className="archive-section resume-archive-card">
        <div className="archive-section-heading">
          <span>*</span>
          <h2>preview</h2>
        </div>
        <ResumeViewer />
      </section> */}

      <footer className="home-poster-footer">
          <span>*</span>
          <p>© 2026 Winnie Lin</p>
          <p>building soft things with strong intention.</p>
      </footer>
    </PageContainer>
  );
}
