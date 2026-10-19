"use client";

import type { TOCItemType } from "fumadocs-core/toc";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

export function PostToc({ items }: { items: TOCItemType[] }) {
  const [activeId, setActiveId] = useState<string>();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        }
      },
      // Active heading is the one inside the top band of the viewport.
      { rootMargin: "0px 0px -75% 0px" }
    );

    for (const { url } of items) {
      const heading = document.getElementById(url.slice(1));
      if (heading) observer.observe(heading);
    }

    return () => observer.disconnect();
  }, [items]);

  if (!items.length) return null;

  return (
    <nav
      aria-label="Table of contents"
      className="absolute inset-y-0 right-full mr-6 hidden w-52 xl:block"
    >
      <div className="sticky top-24">
        <p className="mb-3 font-mono text-xs tracking-widest text-muted-foreground uppercase">
          On this page
        </p>

        <ul className="space-y-1 border-l border-edge text-sm">
          {items.map((item) => {
            const isActive = activeId === item.url.slice(1);
            return (
              <li key={item.url}>
                <a
                  href={item.url}
                  className={cn(
                    "-ml-px block border-l py-1 transition-colors",
                    isActive
                      ? "border-foreground font-medium text-foreground"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  )}
                  style={{
                    paddingInlineStart: 12 + 12 * Math.max(item.depth - 2, 0),
                  }}
                >
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
