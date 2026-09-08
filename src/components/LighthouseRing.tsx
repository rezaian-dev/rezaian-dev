"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";

type Props = { label: string; value: number; delay?: number };

const R = 34;
const C = 2 * Math.PI * R;

// 💡 Animated Lighthouse score ring with a counting number
export default function LighthouseRing({ label, value, delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { stiffness: 60, damping: 20 });
  const dash = useTransform(spring, (v) => C - (C * v) / 100);
  const [num, setNum] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const t = setTimeout(() => mv.set(value), delay * 1000);
    return () => clearTimeout(t);
  }, [inView, value, delay, mv]);

  useEffect(() => spring.on("change", (v) => setNum(Math.round(v))), [spring]);

  const color = value >= 90 ? "#22c55e" : value >= 50 ? "#f59e0b" : "#ef4444";

  return (
    <div ref={ref} className="flex flex-col items-center gap-3">
      <div className="relative size-24">
        <svg viewBox="0 0 80 80" className="size-full -rotate-90">
          <circle cx="40" cy="40" r={R} fill="none" className="stroke-foreground/10" strokeWidth="6" />
          <motion.circle
            cx="40" cy="40" r={R} fill="none" stroke={color} strokeWidth="6" strokeLinecap="round"
            strokeDasharray={C}
            style={{ strokeDashoffset: dash, filter: `drop-shadow(0 0 6px ${color}88)` }}
          />
        </svg>
        <span className="ltr absolute inset-0 grid place-items-center text-2xl font-black text-foreground">{num}</span>
      </div>
      <span className="ltr text-xs font-medium text-muted-foreground">{label}</span>
    </div>
  );
}
