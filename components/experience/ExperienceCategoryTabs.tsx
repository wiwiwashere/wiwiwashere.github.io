"use client";
import { useMemo, useState } from "react";
import { flushSync } from "react-dom";
import { Experience, ExperienceType, experienceTypes } from "@/data/experience";
import { ExperienceTimeline } from "./ExperienceTimeline";
import { useMotionPreferences } from "@/components/motion/MotionProvider";

type ViewTransitionDocument = Document & {
  startViewTransition?: (update: () => void) => void;
};

export function ExperienceCategoryTabs({ items }: { items: Experience[] }) {
  const [activeType, setActiveType] = useState<ExperienceType>("technical");
  const { reducedMotion } = useMotionPreferences();
  const filteredItems = useMemo(() => items.filter((item) => item.type === activeType), [activeType, items]);

  function selectType(type: ExperienceType) {
    if (type === activeType) return;

    const transitionDocument = document as ViewTransitionDocument;
    if (!reducedMotion && transitionDocument.startViewTransition) {
      transitionDocument.startViewTransition(() => flushSync(() => setActiveType(type)));
      return;
    }

    setActiveType(type);
  }

  return (
    <div>
      <div className="experience-filter mb-8 flex flex-wrap gap-2">
        {experienceTypes.map((type) => <button key={type.value} type="button" onClick={() => selectType(type.value)} className={`min-h-10 rounded-full border px-4 text-xs font-bold uppercase tracking-[0.12em] ${activeType === type.value ? "is-active border-ink bg-ink text-white" : "border-blush-100 bg-white/70 text-zinc-600 hover:bg-blush-50 hover:text-blush-700"}`} aria-pressed={activeType === type.value}>{type.label}</button>)}
      </div>
      <div className="experience-timeline-motion" key={activeType}>
        <ExperienceTimeline items={filteredItems} />
      </div>
    </div>
  );
}
