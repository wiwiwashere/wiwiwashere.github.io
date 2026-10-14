"use client";

import { useEffect, useRef } from "react";
import { useMotionPreferences } from "@/components/motion/MotionProvider";

export function HomeEntrance({ children }: { children: React.ReactNode }) {
  const heroRef = useRef<HTMLElement>(null);
  const { homeEntranceMode, reducedMotion } = useMotionPreferences();

  useEffect(() => {
    const hero = heroRef.current;
    const root = document.documentElement;
    const desktopQuery = window.matchMedia("(min-width: 901px)");

    if (!hero || reducedMotion || !desktopQuery.matches) {
      root.style.removeProperty("--home-butterfly-scroll-y");
      root.style.removeProperty("--home-butterfly-scroll-scale");
      root.style.removeProperty("--home-butterfly-scroll-opacity");
      return;
    }

    let frameId = 0;

    const updateBridge = () => {
      frameId = 0;
      const rect = hero.getBoundingClientRect();
      const travel = Math.max(hero.offsetHeight * 0.72, 1);
      const progress = Math.min(1, Math.max(0, -rect.top / travel));

      root.style.setProperty("--home-butterfly-scroll-y", `${progress * 48}px`);
      root.style.setProperty("--home-butterfly-scroll-scale", `${1 + progress * 0.055}`);
      root.style.setProperty("--home-butterfly-scroll-opacity", `${1 - progress * 0.52}`);
    };

    const requestBridgeUpdate = () => {
      if (!frameId) frameId = window.requestAnimationFrame(updateBridge);
    };

    updateBridge();
    window.addEventListener("scroll", requestBridgeUpdate, { passive: true });
    window.addEventListener("resize", requestBridgeUpdate);

    return () => {
      window.removeEventListener("scroll", requestBridgeUpdate);
      window.removeEventListener("resize", requestBridgeUpdate);
      if (frameId) window.cancelAnimationFrame(frameId);
      root.style.removeProperty("--home-butterfly-scroll-y");
      root.style.removeProperty("--home-butterfly-scroll-scale");
      root.style.removeProperty("--home-butterfly-scroll-opacity");
    };
  }, [reducedMotion]);

  return (
    <section
      ref={heroRef}
      className={`home-hero home-entrance home-entrance-${homeEntranceMode}`}
      aria-labelledby="home-title"
    >
      {children}
    </section>
  );
}
