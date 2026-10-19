/**
 * Renders a project's demo video from a variety of sources:
 * - YouTube  → responsive iframe embed
 * - Loom     → responsive iframe embed
 * - .mp4 / .webm (or any other URL) → native <video> player
 */
function getEmbedUrl(url: string): string | null {
  try {
    const u = new URL(url, "https://placeholder.local");

    // YouTube
    if (u.hostname.includes("youtu.be")) {
      return `https://www.youtube.com/embed${u.pathname}`;
    }
    if (u.hostname.includes("youtube.com")) {
      const id = u.searchParams.get("v");
      if (id) return `https://www.youtube.com/embed/${id}`;
      if (u.pathname.startsWith("/embed/")) return url;
    }

    // Loom
    if (u.hostname.includes("loom.com")) {
      return url.replace("/share/", "/embed/");
    }

    return null;
  } catch {
    return null;
  }
}

export function ProjectVideo({ url, title }: { url: string; title: string }) {
  const embedUrl = getEmbedUrl(url);

  return (
    <div className="overflow-hidden rounded-xl border border-edge bg-black">
      <div className="relative aspect-video">
        {embedUrl ? (
          <iframe
            src={embedUrl}
            title={`${title} — demo video`}
            className="absolute inset-0 size-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        ) : (
          <video
            src={url}
            controls
            playsInline
            preload="metadata"
            className="absolute inset-0 size-full"
          >
            Your browser does not support the video tag.
          </video>
        )}
      </div>
    </div>
  );
}
