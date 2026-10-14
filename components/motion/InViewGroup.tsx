"use client";

import { useEffect, useRef, useState } from "react";
import { useMotionPreferences } from "./MotionProvider";

type InViewGroupProps = {
  children: React.ReactNode;
  className: string;
};

export function InViewGroup({ children, className }: InViewGroupProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const { reducedMotion } = useMotionPreferences();

  useEffect(() => {
    const container = containerRef.current;
    if (!container || reducedMotion) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setIsInView(true);
        observer.disconnect();
      },
      { rootMargin: "0px 0px -12%", threshold: 0.08 },
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [reducedMotion]);

  return (
    <div ref={containerRef} className={`${className} ${isInView ? "is-in-view" : ""}`}>
      {children}
    </div>
  );
}
