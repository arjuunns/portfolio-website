import Image from "next/image";

import { cn } from "@/lib/utils";

import { TECH_STACK } from "../../data/tech-stack";
import type { TechStack } from "../../types/tech-stack";

// Map a free-text skill label to a tech-stack entry (for its icon).
const BY_TITLE = new Map<string, TechStack>(
  TECH_STACK.map((t) => [t.title.toLowerCase(), t])
);

// Aliases for skill labels that differ from the tech-stack title.
const ALIASES: Record<string, string> = {
  "prisma orm": "prisma",
  node: "node.js",
  nodejs: "node.js",
  reactjs: "react",
  "react.js": "react",
  nextjs: "next.js",
  postgres: "postgresql",
  "postgres sql": "postgresql",
  "javascript (es6+)": "javascript",
};

function findIcon(skill: string): TechStack | undefined {
  const key = skill.toLowerCase().trim();
  return BY_TITLE.get(key) ?? BY_TITLE.get(ALIASES[key] ?? "");
}

export function ProjectSkills({ skills }: { skills: string[] }) {
  if (skills.length === 0) return null;

  return (
    <ul className="not-prose mt-4 flex flex-wrap items-center gap-2">
      {skills.map((skill) => {
        const tech = findIcon(skill);
        return (
          <li
            key={skill}
            className={cn(
              "flex items-center gap-1.5 rounded-lg border border-edge bg-muted/40 px-2.5 py-1",
              "font-mono text-sm text-muted-foreground select-none"
            )}
          >
            {tech && (
              <Image
                src={tech.iconUrl}
                alt=""
                width={16}
                height={16}
                unoptimized
                aria-hidden
                className={cn(
                  "size-4 shrink-0 object-contain",
                  tech.theme && "dark:invert"
                )}
              />
            )}
            <span>{skill}</span>
          </li>
        );
      })}
    </ul>
  );
}
