"use client";

import type { MouseEvent, ReactNode } from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type Props = { children: ReactNode; className?: string };

// ✨ shadcn Card with a mouse-tracking glow border + hover lift
export default function GlowCard({ children, className }: Props) {
  function onMove(e: MouseEvent<HTMLDivElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`);
  }
  return (
    <Card
      onMouseMove={onMove}
      className={cn("glow-card glass hover-lift block gap-0 rounded-3xl py-0 text-base ring-0", className)}
    >
      {children}
    </Card>
  );
}
