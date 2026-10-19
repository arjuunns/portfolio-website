import { getAllPosts, getPostStaticParams } from "@/features/blog/data/posts";
import { getLLMText } from "@/features/blog/lib/get-llm-text";

export const dynamic = "force-static";

export async function generateStaticParams() {
  return getPostStaticParams();
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  const allPosts = getAllPosts();
  const post = allPosts.find((post) => post.slug === slug);

  if (!post) {
    return new Response("# No posts yet\n", {
      headers: {
        "Content-Type": "text/markdown;charset=utf-8",
      },
    });
  }

  return new Response(await getLLMText(post), {
    headers: {
      "Content-Type": "text/markdown;charset=utf-8",
    },
  });
}
