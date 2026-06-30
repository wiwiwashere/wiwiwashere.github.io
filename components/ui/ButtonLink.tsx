import Link from "next/link";

type ButtonLinkProps = { href: string; children: React.ReactNode; variant?: "primary" | "secondary" | "ghost"; external?: boolean };
const variants = {
  primary: "border-ink bg-ink text-white hover:border-blush-700 hover:bg-blush-700",
  secondary: "border-blush-200 bg-white/75 text-ink hover:bg-blush-50",
  ghost: "border-transparent bg-transparent text-blush-700 hover:border-blush-200 hover:bg-white/60"
};

export function ButtonLink({ href, children, variant = "primary", external = false }: ButtonLinkProps) {
  const className = `inline-flex min-h-11 items-center justify-center rounded-full border px-5 text-xs font-bold uppercase tracking-[0.14em] transition ${variants[variant]}`;
  if (external) return <a href={href} target="_blank" rel="noreferrer" className={className}>{children}</a>;
  return <Link href={href} className={className}>{children}</Link>;
}