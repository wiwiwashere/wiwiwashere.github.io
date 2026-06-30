import { experienceItems } from "@/data/experience";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function ExperiencePreview() {
  return (
    <section className="py-16">
      <SectionHeader eyebrow="Roll - 06 / 2026" title="Engineering, leadership, and community" description="Recent programs and roles." />
      <div className="mt-8 grid gap-3 md:grid-cols-2">
        {experienceItems.slice(0, 4).map((item, index) => (
          <article key={item.id} className="glass-panel rounded-2xl p-5">
            <p className="number-tag">{String(index + 1).padStart(2, "0")}</p>
            <div className="mt-8 flex items-end justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-blush-700">{item.organization}</p>
                <h3 className="mt-2 text-lg font-bold text-ink">{item.title}</h3>
              </div>
              <p className="text-xs text-zinc-500">{item.startDate}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}