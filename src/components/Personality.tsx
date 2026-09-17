import Reveal from "@/components/shared/Reveal";
import SectionHeading from "@/components/shared/SectionHeading";
import GlowCard from "@/components/shared/GlowCard";
import type { Content } from "@/data/content";

// 🧠 Self-description, collaboration habits, a small human note — visually quiet on purpose
export default function Personality({ c }: { c: Content }) {
  const p = c.personality;
  const s = c.softSkills;
  const b = c.beyond;
  return (
    <section id="personality" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading eyebrow={p.eyebrow} title={p.title} />

        <Reveal>
          <GlowCard className="p-7 md:p-10">
            <p className="max-w-3xl text-base leading-8 text-foreground/85 md:text-lg">{p.lead}</p>
            <ul className="mt-8 space-y-3">
              {p.traits.map((trait) => (
                <li key={trait} className="flex gap-3 text-sm leading-7 text-muted-foreground md:text-base">
                  <span aria-hidden className="mt-3 h-px w-4 shrink-0 bg-border" />
                  <span>{trait}</span>
                </li>
              ))}
            </ul>
          </GlowCard>
        </Reveal>

        <div className="mt-16 md:mt-20">
          <Reveal className="mb-8 max-w-2xl">
            <p className="ltr mb-3 flex items-center gap-3 text-xs font-semibold tracking-[0.25em] text-brand rtl:flex-row-reverse rtl:justify-end">
              <span className="h-px w-8 bg-gradient-to-r from-brand to-brand-2" />
              {s.eyebrow}
            </p>
            <h2 className="text-2xl font-extrabold tracking-tight text-foreground md:text-3xl">{s.title}</h2>
          </Reveal>

          <div className="grid gap-4 md:grid-cols-3">
            {s.items.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06} as="article">
                <div className="glass h-full rounded-2xl p-6">
                  <h3 className="font-bold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="mt-16 max-w-2xl md:mt-20">
          <p className="ltr mb-3 flex items-center gap-3 text-xs font-semibold tracking-[0.25em] text-brand rtl:flex-row-reverse rtl:justify-end">
            <span className="h-px w-8 bg-gradient-to-r from-brand to-brand-2" />
            {b.eyebrow}
          </p>
          <h2 className="text-2xl font-extrabold tracking-tight text-foreground md:text-3xl">{b.title}</h2>
          <p className="mt-4 text-base leading-8 text-muted-foreground md:text-lg">{b.text}</p>
        </Reveal>
      </div>
    </section>
  );
}
