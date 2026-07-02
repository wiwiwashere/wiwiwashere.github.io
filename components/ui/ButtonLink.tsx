import Link from "next/link";

type ButtonLinkProps = { href: string; children: React.ReactNode; variant?: "primary" | "secondary" | "ghost"; external?: boolean };
const variants = {
  primary: "border-[rgba(30,43,69,0.28)] bg-[linear-gradient(135deg,rgba(249,243,233,0.94),rgba(255,225,230,0.72),rgba(221,231,239,0.72))] text-[rgba(133, 153, 198, 0.28)] shadow-[0_12px_28px_rgba(30,43,69,0.12)] hover:border-blush-700",
  secondary: "border-[rgba(30,43,69,0.28)] bg-[linear-gradient(135deg,rgba(249,243,233,0.94),rgba(255,225,230,0.72),rgba(221,231,239,0.72))] text-blush-500 shadow-[0_12px_28px_rgba(30,43,69,0.16)] hover:border-blush-700 hover:bg-blush-700",
  ghost: "border-transparent bg-transparent text-blush-700 hover:border-blush-200 hover:bg-white/60"
};

export function ButtonLink({ href, children, variant = "primary", external = false }: ButtonLinkProps) {
  const className = `inline-flex min-h-11 items-center justify-center border px-5 text-xs font-bold uppercase tracking-[0.14em] transition ${variants[variant]}`;
  if (external) return <a href={href} target="_blank" rel="noreferrer" className={className}>{children}</a>;
  return <Link href={href} className={className}>{children}</Link>;
}
