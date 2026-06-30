import { Experience } from "@/data/experience";

export function ExperienceCard({ item }: { item: Experience }) {
  return (
    <article className="glass-panel rounded-2xl p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="number-tag">{item.type}</p>
          <h2 className="mt-5 text-xl font-bold text-ink">{item.title}</h2>
          <p className="mt-1 text-sm font-semibold uppercase tracking-[0.12em] text-blush-700">{item.organization}</p>
        </div>
        <p className="text-xs uppercase tracking-[0.12em] text-zinc-500">{item.startDate}{item.endDate ? ` - ${item.endDate}` : ""}{item.location ? ` | ${item.location}` : ""}</p>
      </div>
      <ul className="mt-6 space-y-3 text-sm leading-7 text-zinc-600">
        {item.description.map((point) => <li key={point} className="flex gap-3"><span className="mt-3 size-1.5 rounded-full bg-blush-500" /><span>{point}</span></li>)}
      </ul>
      <div className="mt-6 flex flex-wrap gap-2">
        {item.skills.map((skill) => <span key={skill} className="rounded-full border border-zinc-200 bg-white/70 px-3 py-1 text-[11px] text-zinc-600">{skill}</span>)}
      </div>
    </article>
  );
}