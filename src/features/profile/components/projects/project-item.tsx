import { ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Icons } from "@/components/icons";

import { getProjectSlug } from "../../data/projects";
import type { Project } from "../../types/projects";

export function ProjectItem({
  className,
  project,
}: {
  className?: string;
  project: Project;
}) {
  return (
    <Link
      href={`/projects/${getProjectSlug(project)}`}
      className={className}
      aria-label={`View ${project.title} details`}
    >
      <div className="flex items-center transition-colors hover:bg-accent2">
        {project.logo ? (
          <Image
            src={project.logo}
            alt={project.title}
            width={32}
            height={32}
            quality={100}
            className="mx-4 flex size-6 shrink-0 select-none"
            unoptimized
            aria-hidden="true"
          />
        ) : (
          <div
            className="mx-4 flex size-6 shrink-0 items-center justify-center rounded-lg border border-muted-foreground/15 bg-muted text-muted-foreground ring-1 ring-edge ring-offset-1 ring-offset-background select-none"
            aria-hidden="true"
          >
            <Icons.project className="size-4" />
          </div>
        )}

        <div className="flex-1 border-l border-dashed border-edge">
          <div className="flex w-full items-center gap-4 p-4 pr-2 text-left select-none">
            <h3 className="flex-1 leading-snug font-medium text-balance">
              {project.title}
            </h3>

            <ChevronRightIcon
              className="size-4 shrink-0 text-muted-foreground"
              aria-hidden
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
