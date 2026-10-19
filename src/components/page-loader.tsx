import { USER } from "@/features/profile/data/user";

export function PageLoader() {
  return (
    <div
      aria-hidden
      className="page-splash fixed inset-0 z-100 flex flex-col items-center justify-center gap-4 bg-background"
    >
      <p className="page-splash-label font-mono text-sm tracking-widest text-muted-foreground uppercase">
        {USER.displayName}
      </p>
      <div className="h-px w-40 overflow-hidden bg-border">
        <div className="page-splash-bar h-full bg-foreground" />
      </div>
    </div>
  );
}
