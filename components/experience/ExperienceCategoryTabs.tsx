"use client";
import { useMemo, useState } from "react";
import { Experience, ExperienceType, experienceTypes } from "@/data/experience";
import { ExperienceTimeline } from "./ExperienceTimeline";

export function ExperienceCategoryTabs({ items }: { items: Experience[] }) {
  const [activeType, setActiveType] = useState<ExperienceType>("technical");
  const filteredItems = useMemo(() => items.filter((item) => item.type === activeType), [activeType, items]);
  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        {experienceTypes.map((type) => <button key={type.value} type="button" onClick={() => setActiveType(type.value)} className={`min-h-10 rounded-full border px-4 text-xs font-bold uppercase tracking-[0.12em] transition ${activeType === type.value ? "border-ink bg-ink text-white" : "border-blush-100 bg-white/70 text-zinc-600 hover:bg-blush-50 hover:text-blush-700"}`}>{type.label}</button>)}
      </div>
      <ExperienceTimeline items={filteredItems} />
    </div>
  );
}