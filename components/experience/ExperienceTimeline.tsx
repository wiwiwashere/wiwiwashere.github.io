import { Experience } from "@/data/experience";
import { ExperienceCard } from "./ExperienceCard";
export function ExperienceTimeline({ items }: { items: Experience[] }) {
  return <div className="grid gap-5">{items.map((item) => <ExperienceCard key={item.id} item={item} />)}</div>;
}
