"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";

const variants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

type Props = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article";
};

// 🎬 Fade-up on first viewport entry — transform-only so layout never shifts
export default function Reveal({ children, delay = 0, className, as = "div" }: Props) {
  const Tag = motion[as];
  const reduce = useReducedMotion();
  return (
    <Tag
      className={className}
      variants={reduce ? undefined : variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  );
}
