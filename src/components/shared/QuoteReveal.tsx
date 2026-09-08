"use client";

import type { CSSProperties } from "react";
import { Quote } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

// 💬 Signature quote — words rise in one by one (CSS stagger); `*text*` becomes a gradient highlight
export default function QuoteReveal({ text }: { text: string }) {
  const { ref, inView } = useInView<HTMLQuoteElement>();
  const words = text.split(" ");
  let highlight = false;

  return (
    <blockquote
      ref={ref}
      className={cn(
        "reveal-group group relative mt-8 overflow-hidden rounded-2xl border border-brand/25 bg-gradient-to-br from-brand/10 via-transparent to-brand-2/10 p-6 md:p-7",
        inView && "in",
      )}
    >
      {/* ✨ Sweeping light beam */}
      <span className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-[1400ms] ease-out group-hover:translate-x-[400%]" />
      <span className="pointer-events-none absolute -top-16 -end-16 size-48 rounded-full bg-[radial-gradient(circle,color-mix(in_oklch,var(--brand)_25%,transparent),transparent_70%)]" />

      <Quote className="mb-3 size-6 text-brand" />
      <p className="text-xl font-bold leading-10 text-foreground md:text-2xl md:leading-[2.75rem]">
        {words.map((raw, i) => {
          // 🔦 Toggle highlight on opening/closing asterisks
          const opens = raw.startsWith("*");
          const closes = raw.endsWith("*") || raw.endsWith("*.") || raw.endsWith("*،");
          if (opens) highlight = true;
          const active = highlight;
          if (closes) highlight = false;
          const word = raw.replaceAll("*", "");
          return (
            <span
              key={i}
              className={cn("reveal-item inline-block", active && "text-gradient")}
              style={{ "--d": `${0.15 + i * 0.07}s` } as CSSProperties}
            >
              {word}
              {i < words.length - 1 && "\u00A0"}
            </span>
          );
        })}
      </p>
    </blockquote>
  );
}
