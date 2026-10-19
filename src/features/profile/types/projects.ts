export type Project = {
  /** Stable unique identifier (used as list key/anchor). */
  id: string;
  title: string;
  /**
   * Optional project period for display and sorting.
   * Omit when dates shouldn't be shown.
   */
  period?: {
    /** Start date (e.g., "05.2025"). */
    start: string;
    /** End date; leave undefined for "Present". */
    end?: string;
  };
  /** Public URL (site, repository, demo, or video). */
  link: string;
  /** Tags/technologies for chips or filtering. */
  skills: string[];
  /** Optional rich description; Markdown and line breaks supported. */
  description?: string;
  /** Logo image URL (absolute or path under /public). */
  logo?: string;
  /** Whether the project card is expanded by default in the UI. */
  isExpanded?: boolean;

  /**
   * Stable URL slug for the project detail page (`/projects/<slug>`).
   * Falls back to `id` when omitted.
   */
  slug?: string;
  /**
   * Video demo URL shown on the detail page. Supports:
   * - YouTube (`https://youtu.be/...` or `https://www.youtube.com/watch?v=...`)
   * - Loom (`https://www.loom.com/share/...`)
   * - A direct video file under /public or an absolute URL (`.mp4`, `.webm`).
   */
  videoUrl?: string;
  /** Architecture / technical deep-dive; Markdown supported. */
  architecture?: string;
  /** Longer overview shown on the detail page; Markdown supported. */
  overview?: string;
  /** Hero/banner image shown at the top of the detail page (dark theme). */
  banner?: string;
  /** Light-theme banner variant; falls back to `banner`. */
  bannerLight?: string;
  /** Wide screenshot used as the card image on the projects index (dark theme). */
  cover?: string;
  /** Light-theme cover variant; falls back to `cover`. */
  coverLight?: string;
  /** Screenshot gallery shown on the detail page. */
  gallery?: { src: string; caption?: string }[];
  /** Public GitHub repository URL. */
  githubUrl?: string;
  /** Live deployment / demo URL. */
  liveUrl?: string;
};
