import Link from "next/link";
import "./archive.css";
import { PageContainer } from "@/components/layout/PageContainer";

export default function NotFound() {
  return (
    <PageContainer className="archive-page py-12">
      <section className="archive-hero archive-hero-blue">
        <div>
          <p className="archive-kicker">page not found</p>
          <h1>Lost in the sky</h1>
          <p>
            This page drifted off, or it never existed.
          </p>
        </div>
        <div className="archive-side-note">
          <span>error</span>
          <strong>404</strong>
          <Link href="/">back home -&gt;</Link>
        </div>
      </section>
    </PageContainer>
  );
}
