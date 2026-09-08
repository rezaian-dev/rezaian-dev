"use client";

import { useEffect, useState } from "react";
import { Clock } from "lucide-react";
import type { Locale } from "@/data/content";

// 🕰️ Live Tehran wall-clock; renders a fixed-width placeholder until mounted (no shift)
export default function TehranClock({ label, locale }: { label: string; locale: Locale }) {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat(locale === "fa" ? "fa-IR" : "en-GB", {
      timeZone: "Asia/Tehran",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, [locale]);

  return (
    <span className="inline-flex items-center gap-2 rounded-full border bg-card/60 px-3 py-1.5 text-muted-foreground backdrop-blur tabular-nums">
      <Clock className="size-3.5" />
      {label}
      <span className="ltr inline-block min-w-[3ch] font-semibold text-foreground">{time ?? "--:--"}</span>
    </span>
  );
}
