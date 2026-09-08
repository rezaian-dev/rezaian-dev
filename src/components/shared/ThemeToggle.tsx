"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Content } from "@/data/content";

// 🌓 One-click light ⇄ dark toggle; icons cross-fade via CSS so there is no hydration flash
export default function ThemeToggle({ ui }: { ui: Content["ui"] }) {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon-lg"
      aria-label={ui.theme}
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="relative rounded-full bg-background/60"
    >
      <Sun className="size-4 scale-100 rotate-0 transition-all duration-500 dark:scale-0 dark:-rotate-90" />
      <Moon className="absolute size-4 scale-0 rotate-90 transition-all duration-500 dark:scale-100 dark:rotate-0" />
    </Button>
  );
}
