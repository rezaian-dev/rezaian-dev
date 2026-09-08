"use client";

import { useEffect, useRef } from "react";
import { useInView } from "@/hooks/useInView";

type Props = { label: string; value: number; delay?: number };

const R = 34;
const C = 2 * Math.PI * R;
const DURATION = 1600;
const easeOut = (t: number) => 1 - Math.pow(1 - t, 4);

// 💡 Lighthouse score ring — one rAF loop drives both the arc and the number, writing to the DOM directly (no re-renders)
export default function LighthouseRing({ label, value, delay = 0 }: Props) {
  const { ref, inView } = useInView<HTMLDivElement>("-60px 0px", 0);
  const arc = useRef<SVGCircleElement>(null);
  const num = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now() + delay * 1000;
    const tick = (now: number) => {
      const t = Math.min(Math.max((now - start) / DURATION, 0), 1);
      const v = value * easeOut(t);
      if (arc.current) arc.current.style.strokeDashoffset = String(C - (C * v) / 100);
      if (num.current) num.current.textContent = String(Math.round(v));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
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
