export function TechStackList({ techStack }: { techStack: string[] }) {
  return <div className="flex flex-wrap gap-2">{techStack.map((tech) => <span key={tech} className="rounded-full border border-zinc-200 bg-white/70 px-3 py-1 text-xs font-medium text-zinc-700">{tech}</span>)}</div>;
}