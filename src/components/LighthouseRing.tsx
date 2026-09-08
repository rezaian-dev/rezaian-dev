"use client";

import { animate, useInView } from "motion/react";
import { useEffect, useRef } from "react";

type Props = { label: string; value: number; delay?: number };

const R = 34;
const C = 2 * Math.PI * R;

// 💡 Lighthouse score ring — one `animate()` drives both the arc and the number, writing to the DOM directly (no re-renders)
export default function LighthouseRing({ label, value, delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const arc = useRef<SVGCircleElement>(null);
  const num = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      delay,
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        if (arc.current) arc.current.style.strokeDashoffset = String(C - (C * v) / 100);
        if (num.current) num.current.textContent = String(Math.round(v));
      },
    });
    return () => controls.stop();
  }, [inView, value, delay]);

  const color = value >= 90 ? "#22c55e" : value >= 50 ? "#f59e0b" : "#ef4444";

  return (
    <div ref={ref} className="flex flex-col items-center gap-3">
      <div className="relative size-24">
        <svg viewBox="0 0 80 80" className="size-full -rotate-90">
          <circle cx="40" cy="40" r={R} fill="none" className="stroke-foreground/10" strokeWidth="6" />
          <circle
            ref={arc}
            cx="40" cy="40" r={R} fill="none" stroke={color} strokeWidth="6" strokeLinecap="round"
            strokeDasharray={C}
            strokeDashoffset={C}
          />
        </svg>
        <span ref={num} className="ltr absolute inset-0 grid place-items-center text-2xl font-black text-foreground">0</span>
      </div>
      <span className="ltr text-xs font-medium text-muted-foreground">{label}</span>
    </div>
  );
}
