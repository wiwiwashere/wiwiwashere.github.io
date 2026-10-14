"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { AsciiSpecimen } from "./AsciiSpecimen";
import { useMotionPreferences } from "./MotionProvider";

type TransitionPhase = "idle" | "covering" | "revealing";

export function PageTransition() {
  const pathname = usePathname();
  const router = useRouter();
  const { reducedMotion } = useMotionPreferences();
  const [phase, setPhase] = useState<TransitionPhase>("idle");
  const phaseRef = useRef<TransitionPhase>("idle");
  const previousPathname = useRef(pathname);
  const navigationTimer = useRef<number | null>(null);
  const revealTimer = useRef<number | null>(null);
  const safetyTimer = useRef<number | null>(null);

  useEffect(() => {
    phaseRef.current = phase;
  }, [phase]);

  useEffect(() => {
    if (previousPathname.current === pathname) return;

    previousPathname.current = pathname;
    if (safetyTimer.current) window.clearTimeout(safetyTimer.current);
    setPhase(reducedMotion ? "idle" : "revealing");

    if (!reducedMotion) {
      revealTimer.current = window.setTimeout(() => setPhase("idle"), 320);
    }

    return () => {
      if (revealTimer.current) window.clearTimeout(revealTimer.current);
    };
  }, [pathname, reducedMotion]);

  useEffect(() => {
    function handleInternalNavigation(event: MouseEvent) {
      if (
        reducedMotion ||
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey ||
        phaseRef.current !== "idle"
      ) {
        return;
      }

      const target = event.target;
      if (!(target instanceof Element)) return;

      const anchor = target.closest("a");
      if (!anchor || anchor.target === "_blank" || anchor.hasAttribute("download")) return;

      const href = anchor.getAttribute("href");
      if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) return;

      const destination = new URL(anchor.href, window.location.href);
      if (destination.origin !== window.location.origin) return;

      const current = new URL(window.location.href);
      if (destination.pathname === current.pathname && destination.search === current.search) return;

      event.preventDefault();
      phaseRef.current = "covering";
      setPhase("covering");
      navigationTimer.current = window.setTimeout(() => {
        router.push(`${destination.pathname}${destination.search}${destination.hash}`);
        safetyTimer.current = window.setTimeout(() => {
          phaseRef.current = "idle";
          setPhase("idle");
        }, 1600);
      }, 280);
    }

    document.addEventListener("click", handleInternalNavigation);
    return () => {
      document.removeEventListener("click", handleInternalNavigation);
      if (navigationTimer.current) window.clearTimeout(navigationTimer.current);
      if (safetyTimer.current) window.clearTimeout(safetyTimer.current);
    };
  }, [reducedMotion, router]);

  return (
    <div className={`page-transition-veil page-transition-${phase}`} aria-hidden="true">
      <span className="page-transition-arch" />
      <AsciiSpecimen variant="butterfly-conservatory" state="static" />
    </div>
  );
}
