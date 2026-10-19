import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import {
  GitMerge,
  GitPullRequest,
  GitPullRequestClosed,
  type LucideIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";

import {
  getGitHubActivity,
  type GitHubPullRequest,
} from "../../data/github-activity";

dayjs.extend(relativeTime);

const PR_STATE: Record<
  GitHubPullRequest["state"],
  { icon: LucideIcon; label: string; className: string }
> = {
  open: {
    icon: GitPullRequest,
    label: "Open",
    className: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
  },
  merged: {
    icon: GitMerge,
    label: "Merged",
    className: "text-violet-500 bg-violet-500/10 border-violet-500/20",
  },
  closed: {
    icon: GitPullRequestClosed,
    label: "Closed",
    className: "text-violet-500 bg-violet-500/10 border-violet-500/20",
  },
};

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-3 flex items-center gap-2 font-mono text-xs tracking-widest text-muted-foreground uppercase">
      <span className="relative flex size-1.5">
        <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-60" />
        <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500" />
      </span>
      {children}
    </h3>
  );
}

export async function GitHubActivity() {
  const { pullRequests, repos } = await getGitHubActivity();

  if (!pullRequests.length && !repos.length) return null;

  const maxEvents = Math.max(...repos.map((r) => r.events), 1);

  return (
    <div className="grid border-t border-edge md:grid-cols-2 md:divide-x md:divide-edge">
      <div className="p-4">
        <SectionTitle>Currently contributing to</SectionTitle>

        <ul className="space-y-1">
          {repos.map(({ repo, events, lastActiveAt }) => {
            const [owner, name] = repo.split("/");
            return (
              <li key={repo}>
                <a
                  href={`https://github.com/${repo}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-lg border border-transparent p-2 transition-colors hover:border-edge hover:bg-muted/50"
                >
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="truncate text-sm">
                      <span className="text-muted-foreground">{owner}/</span>
                      <span className="font-medium">{name}</span>
                    </span>
                    <span className="shrink-0 font-mono text-xs text-muted-foreground tabular-nums">
                      {dayjs(lastActiveAt).fromNow()}
                    </span>
                  </div>

                  <div className="mt-2 flex items-center gap-3">
                    <div className="h-1 flex-1 overflow-hidden rounded-full bg-muted">
                      <div
                        className="h-full rounded-full bg-emerald-500/70 transition-all group-hover:bg-emerald-500"
                        style={{ width: `${(events / maxEvents) * 100}%` }}
                      />
                    </div>
                    <span className="font-mono text-xs text-muted-foreground tabular-nums">
                      {events} event{events > 1 ? "s" : ""}
                    </span>
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="border-t border-edge p-4 md:border-t-0">
        <SectionTitle>Recent pull requests</SectionTitle>

        <ul className="space-y-1">
          {pullRequests.map((pr) => {
            const { icon: Icon, label, className } = PR_STATE[pr.state];
            return (
              <li key={pr.id}>
                <a
                  href={pr.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 rounded-lg border border-transparent p-2 transition-colors hover:border-edge hover:bg-muted/50"
                >
                  <Icon
                    className={cn(
                      "mt-0.5 size-4 shrink-0 border-0 bg-transparent",
                      className
                    )}
                  />

                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium">{pr.title}</p>
                    <p className="truncate font-mono text-xs text-muted-foreground">
                      {pr.repo} &middot; {dayjs(pr.createdAt).fromNow()}
                    </p>
                  </div>

                  <span
                    className={cn(
                      "shrink-0 rounded-full border px-2 py-0.5 text-xs",
                      className
                    )}
                  >
                    {label}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export function GitHubActivityFallback() {
  return (
    <div className="h-48 animate-pulse border-t border-edge bg-muted/30" />
  );
}
