type SectionHeaderProps = { eyebrow?: string; title: string; description?: string };

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? <p className="eyebrow-line mb-3">{eyebrow}</p> : null}
      <h1 className="display-serif text-4xl leading-tight text-ink sm:text-5xl">{title}</h1>
      {description ? <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-600">{description}</p> : null}
    </div>
  );
}