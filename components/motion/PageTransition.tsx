"use client";

import { useCallback, useEffect, useRef, useState } from "react";
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
  const pendingDestination = useRef<string | null>(null);
  const fallbackTimer = useRef<number | null>(null);

  const updatePhase = useCallback((nextPhase: TransitionPhase) => {
    phaseRef.current = nextPhase;
    setPhase(nextPhase);
  }, []);

  const clearFallback = useCallback(() => {
    if (fallbackTimer.current) {
      window.clearTimeout(fallbackTimer.current);
      fallbackTimer.current = null;
    }
  }, []);

  const commitNavigation = useCallback(() => {
    const destination = pendingDestination.current;
    if (!destination) return;

    clearFallback();
    pendingDestination.current = null;
    router.push(destination);

    fallbackTimer.current = window.setTimeout(() => updatePhase("idle"), 1600);
  }, [clearFallback, router, updatePhase]);

  useEffect(() => {
    if (reducedMotion) {
      clearFallback();
      pendingDestination.current = null;
      updatePhase("idle");
      previousPathname.current = pathname;
      return;
    }

    if (previousPathname.current === pathname) return;

    previousPathname.current = pathname;
    clearFallback();
    updatePhase("revealing");

    fallbackTimer.current = window.setTimeout(() => updatePhase("idle"), 650);

    return clearFallback;
  }, [clearFallback, pathname, reducedMotion, updatePhase]);

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
      pendingDestination.current = `${destination.pathname}${destination.search}${destination.hash}`;
      updatePhase("covering");
      clearFallback();
      fallbackTimer.current = window.setTimeout(commitNavigation, 450);
    }

    document.addEventListener("click", handleInternalNavigation);
    return () => {
      document.removeEventListener("click", handleInternalNavigation);
      clearFallback();
    };
  }, [clearFallback, commitNavigation, reducedMotion, updatePhase]);

  function handleTransitionEnd(event: React.TransitionEvent<HTMLDivElement>) {
    if (event.currentTarget !== event.target || event.propertyName !== "clip-path") return;

    if (phaseRef.current === "covering") {
      commitNavigation();
    } else if (phaseRef.current === "revealing") {
      clearFallback();
      updatePhase("idle");
    }
  }

  return (
    <div
      className={`page-transition-veil page-transition-${phase}`}
      aria-hidden="true"
      onTransitionEnd={handleTransitionEnd}
    >
      <span className="page-transition-arch" />
      <AsciiSpecimen variant="butterfly-conservatory" state="static" />
    </div>
  );
}
