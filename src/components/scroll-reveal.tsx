"use client";

import { useEffect, useRef } from "react";

/**
 * Progressively reveals its block-level children as they scroll into view.
 * Elements already in the viewport on mount are shown immediately (no flicker);
 * everything below the fold fades + slides up when it enters the viewport.
 * Respects `prefers-reduced-motion`.
 */
export function ScrollReveal({
  children,
  className,
  selector = ":scope > *",
}: {
  children: React.ReactNode;
  className?: string;
  selector?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const elements = Array.from(root.querySelectorAll<HTMLElement>(selector));

    const observer = new IntersectionObserver(
      (entries, obs) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            obs.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    for (const el of elements) {
      // Already visible on load → show immediately, don't animate/hide.
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.92) {
        el.classList.add("reveal-visible");
        continue;
      }
      el.classList.add("reveal-item");
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, [selector]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
