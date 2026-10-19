"use client";

import { motion } from "motion/react";
import { useEffect, useRef } from "react";

import { BrandContextMenu } from "@/components/brand-context-menu";
import { cn } from "@/lib/utils";

const AS_LINES = [
  " █████╗ ███████╗",
  "██╔══██╗██╔════╝",
  "███████║███████╗",
  "██╔══██║╚════██║",
  "██║  ██║███████║",
  "╚═╝  ╚═╝╚══════╝",
];

// Interaction tuning.
const RADIUS = 55; // px — how close the cursor must be to affect a pixel
const MAX_PUSH = 16; // px — max displacement of a pixel
const EASE = 0.18; // lerp factor toward target (spring-like return)

export function ProfileCover() {
  const gridRef = useRef<HTMLDivElement>(null);
  const cellsRef = useRef<HTMLSpanElement[]>([]);
  const basesRef = useRef<{ x: number; y: number }[]>([]);
  const cursorRef = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const cells = cellsRef.current;
    // Per-cell current transform state.
    const cur = cells.map(() => ({ x: 0, y: 0, s: 1 }));

    const measure = () => {
      basesRef.current = cells.map((el) => ({
        x: el.offsetLeft + el.offsetWidth / 2,
        y: el.offsetTop + el.offsetHeight / 2,
      }));
    };
    measure();

    const ro = new ResizeObserver(measure);
    if (gridRef.current) ro.observe(gridRef.current);

    let raf = 0;
    const tick = () => {
      const bases = basesRef.current;
      const cursor = cursorRef.current;

      for (let i = 0; i < cells.length; i++) {
        let tx = 0;
        let ty = 0;
        let ts = 1;

        if (cursor && bases[i]) {
          const dx = bases[i].x - cursor.x;
          const dy = bases[i].y - cursor.y;
          const dist = Math.hypot(dx, dy);

          if (dist < RADIUS) {
            const f = (RADIUS - dist) / RADIUS; // 0 (far) … 1 (at cursor)
            const ang = Math.atan2(dy, dx);
            tx = Math.cos(ang) * f * MAX_PUSH;
            ty = Math.sin(ang) * f * MAX_PUSH;
            ts = 1 + f * 0.7;
          }
        }

        const c = cur[i];
        c.x += (tx - c.x) * EASE;
        c.y += (ty - c.y) * EASE;
        c.s += (ts - c.s) * EASE;

        cells[i].style.transform =
          `translate(${c.x.toFixed(2)}px, ${c.y.toFixed(2)}px) scale(${c.s.toFixed(3)})`;
      }

      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const grid = gridRef.current;
    if (!grid) return;
    const rect = grid.getBoundingClientRect();
    cursorRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
  };

  const handlePointerLeave = () => {
    cursorRef.current = null;
  };

  // Flatten all characters into indexed cells so each is independently animated.
  let cellIndex = 0;

  return (
    <BrandContextMenu>
      <div
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        className={cn(
          "aspect-4/1 border-x border-edge select-none sm:aspect-6/1",
          "flex items-center justify-center text-black dark:text-white",
          "screen-line-before screen-line-after before:-top-px after:-bottom-px",
          "bg-black/0.75 bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-size-[10px_10px] bg-center [--pattern-foreground:var(--color-zinc-950)]/5 dark:bg-white/0.75 dark:[--pattern-foreground:var(--color-white)]/5"
        )}
      >
        <motion.div
          ref={gridRef}
          id="js-cover-mark"
          aria-label="Arjun Singh"
          role="img"
          className="relative font-mono text-[6px] leading-none font-bold sm:text-[9px]"
          initial={{ opacity: 0, y: 8, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {AS_LINES.map((line, li) => (
            <div key={li} className="flex">
              {Array.from(line).map((ch, ci) => {
                const idx = cellIndex++;
                return (
                  <span
                    key={ci}
                    ref={(el) => {
                      if (el) cellsRef.current[idx] = el;
                    }}
                    className="inline-block whitespace-pre [will-change:transform]"
                  >
                    {ch}
                  </span>
                );
              })}
            </div>
          ))}
        </motion.div>
      </div>
    </BrandContextMenu>
  );
}
