import Image from "next/image";
import React from "react";

import { cn } from "@/lib/utils";

import { TECH_STACK } from "../data/tech-stack";
import type { TechStack } from "../types/tech-stack";
import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel";

const GROUP_ORDER = [
  "Languages",
  "Frameworks",
  "Libraries",
  "Data",
  "Tools & DevOps",
  "Others",
] as const;

type GroupLabel = (typeof GROUP_ORDER)[number];

const GROUP_BY_CATEGORY: Record<string, GroupLabel> = {
  Language: "Languages",
  "Runtime Environment": "Languages",
  Framework: "Frameworks",
  Library: "Libraries",
  "Component Library": "Libraries",
  Animation: "Libraries",
  Navigation: "Libraries",
  Database: "Data",
  "Version Control": "Tools & DevOps",
  Containerization: "Tools & DevOps",
  Tools: "Tools & DevOps",
  Design: "Tools & DevOps",
  AI: "Tools & DevOps",
  Others: "Others",
};

function groupTechStack(items: TechStack[]) {
  return GROUP_ORDER.map((label) => ({
    label,
    items: items.filter(
      (tech) => GROUP_BY_CATEGORY[tech.categories[0]] === label
    ),
  })).filter((group) => group.items.length > 0);
}

export function TeckStack() {
  const groups = groupTechStack(TECH_STACK);

  return (
    <Panel id="stack">
      <PanelHeader>
        <PanelTitle>Stack</PanelTitle>
      </PanelHeader>

      <PanelContent
        className={cn(
          "[--pattern-foreground:var(--color-zinc-950)]/5 dark:[--pattern-foreground:var(--color-white)]/5",
          "bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-size-[10px_10px] bg-center",
          "bg-zinc-950/0.75 dark:bg-white/0.75"
        )}
      >
        <div className="grid gap-4 select-none sm:grid-cols-2">
          {groups.map((group) => (
            <section
              key={group.label}
              className="rounded-xl border border-zinc-950/10 bg-white/70 p-4 dark:border-white/10 dark:bg-zinc-950/70"
            >
              <header className="mb-3 flex items-center justify-between">
                <h3 className="text-xs tracking-widest text-zinc-500 uppercase dark:text-zinc-400">
                  {group.label}
                </h3>
                <span className="font-mono text-xs text-zinc-400 tabular-nums">
                  {String(group.items.length).padStart(2, "0")}
                </span>
              </header>

              <ul className="flex flex-wrap gap-2">
                {group.items.map((tech) => (
                  <li key={tech.key}>
                    <a
                      href={tech.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-zinc-950/10 bg-white px-3 py-1.5 text-sm text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-white/10 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"
                    >
                      <Image
                        src={tech.iconUrl}
                        alt=""
                        width={16}
                        height={16}
                        unoptimized
                        className={cn(
                          "size-4 object-contain",
                          tech.theme && "dark:invert"
                        )}
                      />
                      {tech.title}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </PanelContent>
    </Panel>
  );
}
