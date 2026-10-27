import Link from "next/link";
import "../archive.css";
import { PageContainer } from "@/components/layout/PageContainer";
import { contact } from "@/data/contact";

const contactLinks = [
  { label: "linkedin", value: "linkedin.com/in/winniellin", href: contact.linkedin, action: "connect" },
  { label: "email", value: contact.email, href: `mailto:${contact.email}`, action: "write" },
  { label: "github", value: "github.com/wiwiwashere", href: contact.github, action: "browse" }
];

export default function ContactPage() {
  return (
    <PageContainer className="archive-page py-12">
      <section className="archive-hero archive-hero-contact">
        <div>
          <p className="archive-kicker"></p>
          <h1>Let&apos;s connect</h1>
          <p>
            I&apos;m someone who values connections with genuine people, 
            and I&apos;m always excited to meet people who inspire me to see the world a little differently.
            <br />
            <br />
            Preferred: LinkedIn. Emails are also welcome, but please allow a few days for a response.
          </p>
        </div>
        <div className="archive-side-note">
          <span>open to</span>
          <strong>chat</strong>
          <Link href="/">back home -&gt;</Link>
        </div>
      </section>

      <section className="archive-section">
        <div className="archive-section-heading">
          <span>*</span>
          <h2>where to find me</h2>
        </div>
        <div className="contact-archive-grid">
          {contactLinks.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noreferrer" : undefined}
              className="contact-archive-card"
            >
              <p className="archive-kicker">{String(index + 1).padStart(2, "0")}</p>
              <h2>{item.label}</h2>
              <p>{item.value}</p>
              <span>{item.action} -&gt;</span>
            </a>
          ))}
        </div>
      </section>

    </PageContainer>
  );
}
