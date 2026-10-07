"use client";

import { useEffect, useRef } from "react";

type CountUpProps = {
  value: number;
  suffix?: string;
  durationMs?: number;
};

/**
 * Renders the final value on the server (correct without JS and for crawlers),
 * then counts up from zero the first time it scrolls into view. Updates the
 * DOM directly so the animation never re-renders React.
 */
export function CountUp({ value, suffix = "", durationMs = 1400 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) return; // already on screen: leave as is

    el.textContent = `0${suffix}`;
    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / durationMs);
          const eased = 1 - Math.pow(1 - t, 3);
          el.textContent = `${Math.round(eased * value)}${suffix}`;
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      el.textContent = `${value}${suffix}`;
    };
  }, [value, suffix, durationMs]);

  return (
    <>
      <span ref={ref} aria-hidden className="tabular-nums">
        {value}
        {suffix}
      </span>
      <span className="sr-only">
        {value}
        {suffix}
      </span>
    </>
  );
}
