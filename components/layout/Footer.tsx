import Link from "next/link";
import { contact } from "@/data/contact";
import { PageContainer } from "./PageContainer";

export function Footer() {
  return (
    // <footer className="mt-24 pb-8">
    //   <PageContainer>
    //     <div className="glass-panel flex flex-col gap-4 rounded-[18px] px-6 py-4 text-xs uppercase tracking-[0.14em] text-zinc-500 md:flex-row md:items-center md:justify-between">
    //       <p>WL - 2026</p>
    //       <div className="flex flex-wrap gap-4">
    //         <a className="hover:text-blush-700" href={`mailto:${contact.email}`}>Email</a>
    //         <a className="hover:text-blush-700" href={contact.github} target="_blank" rel="noreferrer">GitHub</a>
    //         <a className="hover:text-blush-700" href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
    //         <Link className="hover:text-blush-700" href="/projects">Projects</Link>
    //       </div>
    //     </div>
    //   </PageContainer>
    // </footer>
    
    <PageContainer className="home-reference-page">
      <section className="home-poster-footer">
        <footer className="home-poster-footer">
          <span>*</span>
          <p>(c) 2026 Winnie Lin</p>
          <p>building soft things with strong intention.</p>
        </footer>
      </section>
    </PageContainer>
  );
}