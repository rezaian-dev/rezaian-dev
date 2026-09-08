"use client";

import { useTheme } from "next-themes";
import { Moon, Sun, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { Content } from "@/data/content";

// 🌓 Light / Dark / System switcher — icons cross-fade via CSS only (no hydration flash)
export default function ThemeToggle({ ui }: { ui: Content["ui"] }) {
  const { setTheme, theme } = useTheme();
  const items = [
    { value: "light", label: ui.light, icon: Sun },
    { value: "dark", label: ui.dark, icon: Moon },
    { value: "system", label: ui.system, icon: Monitor },
  ] as const;

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon-lg" aria-label={ui.theme} className="relative rounded-full bg-background/60">
          <Sun className="size-4 scale-100 rotate-0 transition-all duration-500 dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute size-4 scale-0 rotate-90 transition-all duration-500 dark:scale-100 dark:rotate-0" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-36">
        {items.map(({ value, label, icon: Icon }) => (
          <DropdownMenuItem key={value} onClick={() => setTheme(value)} className={theme === value ? "bg-accent" : ""}>
            <Icon className="size-4" />
            {label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
