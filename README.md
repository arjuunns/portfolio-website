# portfolio-website

Personal portfolio, project write-ups, and blog for Arjun Singh.

Live at [arjuns.app](https://arjuns.app).

## Stack

- Next.js (App Router) with static export (`output: "export"`)
- Tailwind CSS v4 and shadcn/ui
- TypeScript, pnpm
- MDX for blog posts
- Vercel for hosting

## Local development

Requires Node.js 22 or newer and pnpm.

```bash
pnpm install
pnpm dev
```

The site runs at http://localhost:3000.

Useful commands:

```bash
pnpm check-types   # TypeScript
pnpm lint          # ESLint
pnpm build         # static export into out/
```

## Content

All profile content lives in `src/features/profile/data/`:

| File | Contents |
| --- | --- |
| `user.ts` | name, bio, contact, about section, SEO keywords |
| `experiences.ts` | education, roles, capstone |
| `projects.ts` | projects, links, descriptions, architecture |
| `tech-stack.ts` | stack chips and icons |
| `awards.ts` | coding ranks and scholarships |
| `social-links.ts` | GitHub, LinkedIn, X, LeetCode, resume |

Site metadata and navigation are in `src/config/site.ts`. Blog posts are MDX
files in `src/features/blog/content/`.

The resume served at `/resume.pdf` is `public/resume.pdf`.

## Deployment

Hosted on Vercel with Git integration enabled:

- Push to `main` deploys to production (https://arjuns.app).
- Pull requests get their own preview URL.
- Build settings are pinned in `vercel.json` (static export, output directory
  `out`). Do not switch the framework preset back to Next.js server builds.

Environment variables:

| Name | Purpose |
| --- | --- |
| `APP_URL` | canonical URL used in metadata and the sitemap |
| `GITHUB_TOKEN` | optional; avoids GitHub API rate limits when the contribution graph is built |

GitHub Actions (`.github/workflows/ci.yml`) runs type checks and a production
build on every push and pull request.
