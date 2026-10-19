import { GITHUB_USERNAME } from "@/config/site";

export type GitHubPullRequest = {
  id: number;
  title: string;
  url: string;
  repo: string;
  state: "open" | "merged" | "closed";
  createdAt: string;
};

export type GitHubRepoActivity = {
  repo: string;
  events: number;
  lastActiveAt: string;
};

export type GitHubActivity = {
  pullRequests: GitHubPullRequest[];
  repos: GitHubRepoActivity[];
};

type SearchItem = {
  id: number;
  title: string;
  html_url: string;
  repository_url: string;
  state: "open" | "closed";
  created_at: string;
  pull_request?: { merged_at: string | null };
};

type PublicEvent = {
  type: string;
  repo: { name: string };
  created_at: string;
};

const API = "https://api.github.com";

async function githubFetch<T>(path: string): Promise<T | null> {
  const token = process.env.GITHUB_TOKEN;

  try {
    const res = await fetch(`${API}${path}`, {
      headers: {
        Accept: "application/vnd.github+json",
        ...(token && { Authorization: `Bearer ${token}` }),
      },
      next: { revalidate: 3600 },
      signal: AbortSignal.timeout(8000),
    });
    return res.ok ? ((await res.json()) as T) : null;
  } catch {
    return null;
  }
}

async function getPullRequests(): Promise<GitHubPullRequest[]> {
  const data = await githubFetch<{ items: SearchItem[] }>(
    `/search/issues?q=author:${GITHUB_USERNAME}+type:pr&sort=created&order=desc&per_page=8`
  );

  return (data?.items ?? []).map((item) => ({
    id: item.id,
    title: item.title,
    url: item.html_url,
    repo: item.repository_url.split("/repos/")[1] ?? "",
    state: item.pull_request?.merged_at ? "merged" : item.state,
    createdAt: item.created_at,
  }));
}

async function getActiveRepos(): Promise<GitHubRepoActivity[]> {
  const events = await githubFetch<PublicEvent[]>(
    `/users/${GITHUB_USERNAME}/events/public?per_page=100`
  );

  const byRepo = new Map<string, GitHubRepoActivity>();
  for (const event of events ?? []) {
    if (event.type === "WatchEvent") continue;

    const entry = byRepo.get(event.repo.name);
    if (entry) entry.events += 1;
    // Events arrive newest first, so the first hit is the last activity.
    else
      byRepo.set(event.repo.name, {
        repo: event.repo.name,
        events: 1,
        lastActiveAt: event.created_at,
      });
  }

  return [...byRepo.values()].sort((a, b) => b.events - a.events).slice(0, 5);
}

export async function getGitHubActivity(): Promise<GitHubActivity> {
  const [pullRequests, repos] = await Promise.all([
    getPullRequests(),
    getActiveRepos(),
  ]);
  return { pullRequests, repos };
}
