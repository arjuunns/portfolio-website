"use client";

import { useTheme } from "next-themes";
import { useCallback } from "react";

import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { META_THEME_COLORS } from "@/config/site";
import { useMetaColor } from "@/hooks/use-meta-color";
import { useSound } from "@/hooks/use-sound";
import { cn } from "@/lib/utils";

import { MoonIcon } from "./animated-icons/moon";
import { SunMediumIcon } from "./animated-icons/sun-medium";

export function ToggleTheme() {
  const { resolvedTheme, setTheme } = useTheme();

  const { setMetaColor } = useMetaColor();

  const playClick = useSound("/audio/ui-sounds/click.wav");

  const switchTheme = useCallback(
    (next: "light" | "dark") => {
      playClick();
      setTheme(next);
      setMetaColor(
        next === "dark" ? META_THEME_COLORS.dark : META_THEME_COLORS.light
      );
    },
    [setTheme, setMetaColor, playClick]
  );

  // `resolvedTheme` is undefined until next-themes has read the DOM, so fall
  // back to the class already applied by the blocking theme script.
  const theme = resolvedTheme === "dark" ? "dark" : "light";

  return (
    <AnimatedThemeToggler
      theme={theme}
      onThemeChange={switchTheme}
      duration={500}
      className={cn(
        "relative inline-flex size-9 shrink-0 cursor-pointer items-center justify-center rounded-md",
        "hover:bg-accent hover:text-accent-foreground",
        "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
      )}
    >
      <MoonIcon className="relative hidden after:absolute after:-inset-2 [html.dark_&]:block" />
      <SunMediumIcon className="relative hidden after:absolute after:-inset-2 [html.light_&]:block" />
    </AnimatedThemeToggler>
  );
}
