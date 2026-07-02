export function HighlightCard({ title, description, index }: { title: string; description: string; index?: number }) {
  return (
    <article className="glass-panel rounded-2xl p-5 transition hover:-translate-y-1 hover:border-blush-200">
      <p className="number-tag">{String((index ?? 0) + 1).padStart(2, "0")}</p>
      <h3 className="mt-8 text-lg font-bold text-ink">{title}</h3>
      {/* <p className="mt-3 text-sm leading-6 text-zinc-600">{description}</p> */}
    </article>
  );
}