import Reveal from "@/components/shared/Reveal";
import SectionHeading from "@/components/shared/SectionHeading";
import type { Content } from "@/data/content";

// 🧭 Working habits — editorial numbered list, no decorative graphics
export default function Work({ c }: { c: Content }) {
  const w = c.work;
  return (
    <section id="work" className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-brand/50 to-transparent" />
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading eyebrow={w.eyebrow} title={w.title} description={w.description} />

        <ol className="divide-y divide-border/80 border-y border-border/80">
          {w.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06} as="li">
              <div className="grid gap-3 py-8 sm:grid-cols-[4.5rem_1fr] sm:gap-8 md:py-10">
                <span className="ltr font-latin text-sm font-semibold tabular-nums tracking-widest text-brand">
                  0{i + 1}
                </span>
                <div className="min-w-0">
                  <h3 className="text-lg font-bold tracking-tight text-foreground md:text-xl">{item.title}</h3>
                  <p className="mt-2 max-w-3xl text-sm leading-8 text-foreground/80 md:text-base">{item.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
