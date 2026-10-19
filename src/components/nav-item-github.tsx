import { Button } from "@/components/ui/button";
import { GITHUB_USERNAME } from "@/config/site";

import { Icons } from "./icons";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

export async function NavItemGitHub() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="ghost" size="icon" asChild>
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener"
          >
            <Icons.github />
            <span className="sr-only">GitHub</span>
          </a>
        </Button>
      </TooltipTrigger>

      <TooltipContent>
        <p>Coding since 14y/o</p>
      </TooltipContent>
    </Tooltip>
  );
}
