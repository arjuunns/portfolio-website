import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";

import { getProjectSlug } from "../../data/projects";
import type { Project } from "../../types/projects";

/** First line of the description, used as the card's one-line summary. */
function getTagline(project: Project) {
  return project.description?.split("\n")[0]?.trim();
}

export function ProjectCard({
  project,
  shouldPreloadImage,
}: {
  project: Project;
  shouldPreloadImage?: boolean;
}) {
  const cover = project.cover ?? project.banner;
  const tagline = getTagline(project);

  return (
    <Link
      href={`/projects/${getProjectSlug(project)}`}
      className={cn(
        "group/project flex flex-col gap-2 p-2",
        "max-sm:screen-line-before max-sm:screen-line-after",
        "sm:nth-[2n+1]:screen-line-before sm:nth-[2n+1]:screen-line-after"
      )}
    >
      <div className="relative select-none">
        {cover ? (
          <>
            <Image
              src={project.coverLight ?? cover}
              alt={project.title}
              width={1200}
              height={630}
              quality={100}
              priority={shouldPreloadImage}
              className="aspect-1200/630 rounded-xl object-cover object-top dark:hidden"
              unoptimized
            />
            <Image
              src={cover}
              alt=""
              aria-hidden
              width={1200}
              height={630}
              quality={100}
              priority={shouldPreloadImage}
              className="hidden aspect-1200/630 rounded-xl object-cover object-top dark:block"
              unoptimized
            />
          </>
        ) : (
          <div className="flex aspect-1200/630 items-center justify-center rounded-xl bg-muted">
            <Icons.project className="size-8 text-muted-foreground" />
          </div>
        )}

        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-black/10 ring-inset dark:ring-white/10" />
      </div>

      <div className="flex flex-col gap-1 p-2">
        <h3 className="leading-snug font-medium text-balance underline-offset-4 group-hover/project:underline">
          {project.title}
        </h3>

        {tagline && (
          <p className="line-clamp-2 text-sm text-muted-foreground">
            {tagline}
          </p>
        )}

        {project.skills.length > 0 && (
          <p className="mt-1 font-mono text-xs text-muted-foreground">
            {project.skills.slice(0, 4).join(" • ")}
          </p>
        )}
      </div>
    </Link>
  );
}
