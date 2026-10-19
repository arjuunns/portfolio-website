import { ArrowLeftIcon, GithubIcon, LinkIcon } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Markdown } from "@/components/markdown";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Button } from "@/components/ui/button";
import { Prose } from "@/components/ui/typography";
import { ProjectSkills } from "@/features/profile/components/projects/project-skills";
import { ProjectVideo } from "@/features/profile/components/projects/project-video";
import {
  getProjectBySlug,
  getProjectSlug,
  PROJECTS,
} from "@/features/profile/data/projects";
import { cn } from "@/lib/utils";

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: getProjectSlug(project) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return notFound();
  }

  const url = `/projects/${slug}`;
  const description =
    project.overview ??
    project.description
      ?.replace(/[#*`>\-]/g, "")
      .replace(/\s+/g, " ")
      .trim() ??
    `${project.title} — project details.`;

  return {
    title: project.title,
    description,
    alternates: { canonical: url },
    // `opengraph-image.tsx` in this segment supplies the generated card. The
    // `twitter` block is redeclared without `images` so it stops inheriting the
    // site-wide default from the root layout and picks up that card instead.
    openGraph: {
      title: project.title,
      description,
      url,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description,
    },
  };
}

function PatternRow() {
  return (
    <div className="screen-line-before screen-line-after">
      <div
        className={cn(
          "h-8",
          "before:absolute before:-left-[100vw] before:-z-1 before:h-full before:w-[200vw]",
          "before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px] before:[--pattern-foreground:var(--color-edge)]/56"
        )}
      />
    </div>
  );
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const githubUrl = project.githubUrl;
  const liveUrl = project.liveUrl;

  return (
    <>
      <div className="flex items-center justify-between p-2 pl-4">
        <Button
          className="h-7 gap-2 rounded-lg px-0 font-mono text-muted-foreground"
          variant="link"
          asChild
        >
          <Link href="/#projects">
            <ArrowLeftIcon />
            Projects
          </Link>
        </Button>

        <div className="flex items-center gap-2">
          {githubUrl && (
            <Button variant="secondary" size="sm" asChild>
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <GithubIcon />
                Code
              </a>
            </Button>
          )}
          {liveUrl && (
            <Button variant="secondary" size="sm" asChild>
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <LinkIcon />
                Live
              </a>
            </Button>
          )}
        </div>
      </div>

      <PatternRow />

      <Prose className="px-4">
        <ScrollReveal>
          {project.banner && (
            <>
              <img
                className="mt-0 mb-6 w-full rounded-xl border border-edge object-cover dark:hidden"
                src={project.bannerLight ?? project.banner}
                alt={`${project.title} banner`}
              />
              <img
                className="mt-0 mb-6 hidden w-full rounded-xl border border-edge object-cover dark:block"
                src={project.banner}
                alt=""
                aria-hidden
              />
            </>
          )}

          <div className="screen-line-after flex items-center gap-4 pb-4">
            {project.logo && (
              <Image
                src={project.logo}
                alt={project.title}
                width={48}
                height={48}
                quality={100}
                className="m-0 size-10 shrink-0 select-none"
                unoptimized
                aria-hidden
              />
            )}
            <div>
              <h1 className="m-0 font-semibold">{project.title}</h1>
            </div>
          </div>

          <ProjectSkills skills={project.skills} />

          {/* Demo video */}
          {project.videoUrl && (
            <>
              <h2>Demo</h2>
              <div className="not-prose my-4">
                <ProjectVideo url={project.videoUrl} title={project.title} />
              </div>
            </>
          )}

          {/* Overview */}
          {(project.overview || project.description) && (
            <>
              <h2>Overview</h2>
              <Markdown>
                {project.overview ?? project.description ?? ""}
              </Markdown>
            </>
          )}

          {/* Architecture */}
          {project.architecture && (
            <>
              <h2>Architecture</h2>
              <Markdown>{project.architecture}</Markdown>
            </>
          )}

          {/* Gallery */}
          {project.gallery && project.gallery.length > 0 && (
            <>
              <h2>Gallery</h2>
              <div className="not-prose my-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {project.gallery.map((item) => (
                  <figure key={item.src} className="m-0">
                    {}
                    <img
                      className="w-full rounded-xl border border-edge object-cover"
                      src={item.src}
                      alt={item.caption ?? project.title}
                      loading="lazy"
                    />
                    {item.caption && (
                      <figcaption className="mt-2 text-center text-sm text-muted-foreground">
                        {item.caption}
                      </figcaption>
                    )}
                  </figure>
                ))}
              </div>
            </>
          )}
        </ScrollReveal>
      </Prose>

      <div className="screen-line-before h-4 w-full" />
    </>
  );
}
