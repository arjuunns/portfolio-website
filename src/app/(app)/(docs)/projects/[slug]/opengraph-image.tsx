import { notFound } from "next/navigation";

import {
  getProjectBySlug,
  getProjectSlug,
  PROJECTS,
} from "@/features/profile/data/projects";
import { OG_CONTENT_TYPE, OG_SIZE, renderSimpleOgImage } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Project";

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: getProjectSlug(project) }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return renderSimpleOgImage(project.title);
}
