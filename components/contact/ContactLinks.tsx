import { contact } from "@/data/contact";
const links = [
  { label: "Email", href: `mailto:${contact.email}`, value: contact.email },
  { label: "GitHub", href: contact.github, value: "github.com" },
  { label: "LinkedIn", href: contact.linkedin, value: "linkedin.com" }
];

export function ContactLinks() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {links.map((link, index) => (
        <a key={link.label} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel={link.href.startsWith("http") ? "noreferrer" : undefined} className="glass-panel rounded-2xl p-6 transition hover:-translate-y-1 hover:border-blush-200">
          <p className="number-tag">{String(index + 1).padStart(2, "0")}</p>
          <p className="mt-10 text-xs font-semibold uppercase tracking-[0.14em] text-blush-700">{link.label}</p>
          <p className="mt-2 break-words text-lg font-bold text-ink">{link.value}</p>
        </a>
      ))}
    </div>
  );
}