import Link from "next/link";
import { FootprintGuestbook } from "@/components/footprints/FootprintGuestbook";
import { PageContainer } from "@/components/layout/PageContainer";

export default function FootprintsPage() {
  return (
    <PageContainer className="archive-page footprint-page py-12">
      <section className="archive-hero archive-hero-blue footprint-hero">
        <div>
          <p className="archive-kicker"></p>
          <h1>Footprints</h1>
          <p>
            Leave a mark in the guestbook!
          </p>
        </div>
        <div className="archive-side-note">
          <span>stamp</span>
          <strong>{"\u029A\u025E"}</strong>
          <Link href="/">back home -&gt;</Link>
        </div>
      </section>

      <section className="archive-section">
        <div className="archive-section-heading">
          <span>*</span>
          <h2>visitor constellation</h2>
        </div>
        <FootprintGuestbook />
      </section>

      <footer className="home-poster-footer">
        <span>*</span>
        <p>(©) 2026 Winnie Lin</p>
        <p>building soft things with strong intention.</p>
      </footer>
    </PageContainer>
  );
}
