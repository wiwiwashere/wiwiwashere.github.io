"use client";

import { useEffect, useRef } from "react";
import { useMotionPreferences } from "@/components/motion/MotionProvider";

export function ButterflyCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef({ x: -100, y: -100 });
  const targetRef = useRef({ x: -100, y: -100 });
  const rotationRef = useRef(0);
  const { isDocumentVisible, reducedMotion } = useMotionPreferences();

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor || window.matchMedia("(pointer: coarse)").matches || reducedMotion || !isDocumentVisible) {
      cursor?.classList.add("is-paused");
      return;
    }

    cursor.classList.remove("is-paused");

    let frameId = 0;
    let lastX = targetRef.current.x;
    let lastY = targetRef.current.y;

    function handlePointerMove(event: PointerEvent) {
      cursorRef.current?.classList.remove("is-awaiting-pointer");
      targetRef.current = { x: event.clientX, y: event.clientY };

      const dx = event.clientX - lastX;
      const dy = event.clientY - lastY;

      if (Math.abs(dx) + Math.abs(dy) > 1) {
        rotationRef.current = Math.atan2(dy, dx) * (180 / Math.PI) + 18;
      }

      lastX = event.clientX;
      lastY = event.clientY;

      if (!frameId) frameId = window.requestAnimationFrame(animate);
    }

    function handlePointerOver(event: PointerEvent) {
      const target = event.target;
      if (!(target instanceof Element) || !cursorRef.current) return;
      const isInteractive = Boolean(target.closest("a, button, input, textarea, select, [tabindex]"));
      cursorRef.current.classList.toggle("is-over-interactive", isInteractive);
    }

    function animate() {
      if (!cursorRef.current) return;

      const cursor = cursorRef.current;
      const position = positionRef.current;
      const target = targetRef.current;

      const followSpeed = 0.08
      position.x += (target.x - position.x) * followSpeed;
      position.y += (target.y - position.y) * followSpeed;

      const offsetX = 18;
      const offsetY = 14;

      cursor.style.transform = `translate3d(${position.x + offsetX}px, ${position.y + offsetY}px, 0) translate(-50%, -50%) rotate(${rotationRef.current}deg)`;

      const distanceX = Math.abs(target.x - position.x);
      const distanceY = Math.abs(target.y - position.y);

      if (distanceX > 0.1 || distanceY > 0.1) {
        frameId = window.requestAnimationFrame(animate);
      } else {
        position.x = target.x;
        position.y = target.y;
        frameId = 0;
      }
    }

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerover", handlePointerOver);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerover", handlePointerOver);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, [isDocumentVisible, reducedMotion]);

  return (
    <div ref={cursorRef} className="butterfly-cursor is-awaiting-pointer" aria-hidden="true">
      <span>ʚlɞ</span>
    </div>
  );
}
