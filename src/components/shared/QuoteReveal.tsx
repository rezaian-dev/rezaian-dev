"use client";

import { motion, useReducedMotion } from "motion/react";
import { Quote } from "lucide-react";

// 💬 Signature quote — words unblur one by one; `*text*` becomes a gradient highlight
export default function QuoteReveal({ text }: { text: string }) {
  const reduce = useReducedMotion();
  const words = text.split(" ");
  let highlight = false;

  return (
    <motion.blockquote
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ staggerChildren: reduce ? 0 : 0.07, delayChildren: 0.15 }}
      className="group relative mt-8 overflow-hidden rounded-2xl border border-brand/25 bg-gradient-to-br from-brand/10 via-transparent to-brand-2/10 p-6 md:p-7"
    >
      {/* ✨ Sweeping light beam */}
      <span className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-[1400ms] ease-out group-hover:translate-x-[400%]" />
      <span className="pointer-events-none absolute -top-10 -end-10 size-32 rounded-full bg-brand/20 blur-3xl" />

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
            <motion.span
              key={i}
              variants={reduce ? undefined : { hidden: { opacity: 0, y: 10, filter: "blur(8px)" }, show: { opacity: 1, y: 0, filter: "blur(0px)" } }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className={active ? "inline-block text-gradient" : "inline-block"}
            >
              {word}
              {i < words.length - 1 && "\u00A0"}
            </motion.span>
          );
        })}
      </p>
    </motion.blockquote>
  );
}
