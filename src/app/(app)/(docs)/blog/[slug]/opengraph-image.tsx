import { getPostBySlug, getPostStaticParams } from "@/features/blog/data/posts";
import { USER } from "@/features/profile/data/user";
import { OG_CONTENT_TYPE, OG_SIZE, renderSimpleOgImage } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Blog post";

export function generateStaticParams() {
  return getPostStaticParams();
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  return renderSimpleOgImage(post?.metadata.title ?? USER.displayName);
}
