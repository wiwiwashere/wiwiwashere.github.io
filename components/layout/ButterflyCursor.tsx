"use client";

import { useEffect, useRef } from "react";

export function ButterflyCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef({ x: -100, y: -100 });
  const targetRef = useRef({ x: -100, y: -100 });
  const rotationRef = useRef(0);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor || window.matchMedia("(pointer: coarse)").matches) return;

    let frameId = 0;
    let lastX = targetRef.current.x;
    let lastY = targetRef.current.y;

    function handlePointerMove(event: PointerEvent) {
      targetRef.current = { x: event.clientX, y: event.clientY };

      const dx = event.clientX - lastX;
      const dy = event.clientY - lastY;

      if (Math.abs(dx) + Math.abs(dy) > 1) {
        rotationRef.current = Math.atan2(dy, dx) * (180 / Math.PI) + 18;
      }

      lastX = event.clientX;
      lastY = event.clientY;
    }

    function animate() {
      const position = positionRef.current;
      const target = targetRef.current;

      position.x += (target.x - position.x) * 0.08;
      position.y += (target.y - position.y) * 0.08;

      const offsetX = 18;
      const offsetY = 14;

      cursor.style.transform = `translate3d(${position.x + offsetX}px, ${position.y + offsetY}px, 0) translate(-50%, -50%) rotate(${rotationRef.current}deg)`;

      frameId = window.requestAnimationFrame(animate);
    }

    window.addEventListener("pointermove", handlePointerMove);
    frameId = window.requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div ref={cursorRef} className="butterfly-cursor" aria-hidden="true">
      ʚlɞ
    </div>
  );
}