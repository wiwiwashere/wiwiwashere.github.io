"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type HomeEntranceMode = "pending" | "full" | "settled";

type MotionContextValue = {
  homeEntranceMode: HomeEntranceMode;
  isDocumentVisible: boolean;
  reducedMotion: boolean;
};

const MotionContext = createContext<MotionContextValue>({
  homeEntranceMode: "pending",
  isDocumentVisible: true,
  reducedMotion: true,
});

const homeEntranceKey = "winnie-home-entrance-seen";

export function MotionProvider({ children }: { children: React.ReactNode }) {
  const motionPreference = useReducedMotion();
  const [homeEntranceMode, setHomeEntranceMode] = useState<HomeEntranceMode>("pending");
  const [isDocumentVisible, setIsDocumentVisible] = useState(true);

  useEffect(() => {
    const updateVisibility = () => setIsDocumentVisible(document.visibilityState === "visible");

    updateVisibility();
    document.addEventListener("visibilitychange", updateVisibility);
    return () => document.removeEventListener("visibilitychange", updateVisibility);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.motionPaused = isDocumentVisible ? "false" : "true";
    return () => {
      delete document.documentElement.dataset.motionPaused;
    };
  }, [isDocumentVisible]);

  useEffect(() => {
    document.documentElement.dataset.reducedMotion = motionPreference ? "true" : "false";
    return () => {
      delete document.documentElement.dataset.reducedMotion;
    };
  }, [motionPreference]);

  useEffect(() => {
    if (motionPreference === null) return;

    if (motionPreference) {
      setHomeEntranceMode("settled");
      document.documentElement.dataset.homeEntrance = "settled";
      return;
    }

    try {
      const bootstrappedMode = document.documentElement.dataset.homeEntrance;

      if (bootstrappedMode === "full") {
        setHomeEntranceMode("full");
        const settleTimer = window.setTimeout(() => {
          setHomeEntranceMode("settled");
          document.documentElement.dataset.homeEntrance = "settled";
        }, 900);

        return () => window.clearTimeout(settleTimer);
      }

      const hasSeenEntrance = window.sessionStorage.getItem(homeEntranceKey) === "true";
      setHomeEntranceMode(hasSeenEntrance ? "settled" : "full");
      document.documentElement.dataset.homeEntrance = hasSeenEntrance ? "settled" : "full";

      if (!hasSeenEntrance) {
        window.sessionStorage.setItem(homeEntranceKey, "true");
      }
    } catch {
      setHomeEntranceMode("full");
      document.documentElement.dataset.homeEntrance = "full";
    }
  }, [motionPreference]);

  const value = useMemo(
    () => ({
      homeEntranceMode,
      isDocumentVisible,
      reducedMotion: motionPreference ?? true,
    }),
    [homeEntranceMode, isDocumentVisible, motionPreference],
  );

  return <MotionContext.Provider value={value}>{children}</MotionContext.Provider>;
}

export function useMotionPreferences() {
  return useContext(MotionContext);
}
