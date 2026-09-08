"use client";

import { createElement, type CSSProperties, type ReactNode } from "react";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article";
};

// 🎬 Fade-up on first viewport entry — pure CSS transition, transform-only so layout never shifts
export default function Reveal({ children, delay = 0, className, as = "div" }: Props) {
  const { ref, inView } = useInView<HTMLElement>();
  return createElement(
    as,
    {
      ref,
      className: cn("reveal", inView && "in", className),
      style: { "--d": `${delay}s` } as CSSProperties,
    },
    children,
  );
}
