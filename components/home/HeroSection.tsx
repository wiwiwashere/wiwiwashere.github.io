import { ButtonLink } from "@/components/ui/ButtonLink";
import { ButterflyParticles } from "./ButterflyParticles";

export function HeroSection() {
  return (
    <section className="relative min-h-[680px] overflow-hidden rounded-[28px] border border-blush-100 bg-white/55 p-5 shadow-soft backdrop-blur-xl sm:p-8 lg:p-12">
      <ButterflyParticles />
      <div className="pointer-events-none absolute right-10 top-10 hidden rotate-6 border border-blush-100 bg-white/80 p-3 shadow-soft md:block">
        <div className="grid h-40 w-32 place-items-center bg-blush-50 text-5xl text-blush-200">WL</div>
        <p className="mt-2 text-center text-xs uppercase tracking-[0.14em] text-zinc-500">reach - star</p>
      </div>
      <div className="relative z-10 flex min-h-[600px] flex-col justify-end">
        <p className="eyebrow-line">UF - Computer Science</p>
        <div className="pointer-events-none absolute -left-2 top-10 hidden text-[11rem] leading-none text-blush-100/60 md:block display-serif">winnie</div>
        <h1 className="display-serif mt-6 max-w-4xl text-6xl leading-none text-ink sm:text-7xl lg:text-8xl">
          Winnie <span className="italic text-blush-700">Lin</span>
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-700 sm:text-lg">
          I build user-centered software that connects real-world problems with scalable technical solutions.
        </p>
        {/* <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="/projects">View Projects</ButtonLink>
          <ButtonLink href="/resume" variant="secondary">View Resume</ButtonLink>
          <ButtonLink href="/contact" variant="ghost">Contact Me</ButtonLink>
        </div> */}
        {/* <div className="mt-12 grid gap-3 border-t border-blush-100 pt-5 text-xs uppercase tracking-[0.14em] text-zinc-500 sm:grid-cols-4">
          <span>Software Engineering</span>
          <span>AI / ML</span>
          <span>Full-Stack</span>
          <span>Leadership</span>
        </div> */}
      </div>
    </section>
  );
}