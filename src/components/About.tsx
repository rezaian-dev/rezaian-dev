import { GraduationCap, Languages, Quote } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import SectionHeading from "@/components/shared/SectionHeading";
import GlowCard from "@/components/shared/GlowCard";
import LighthouseRing from "@/components/LighthouseRing";
import type { Content } from "@/data/content";

const lighthouse = [
  { label: "Performance", value: 93 },
  { label: "Accessibility", value: 93 },
  { label: "Best Practices", value: 92 },
  { label: "SEO", value: 100 },
];

// 👤 Bio, quote, education, Lighthouse scores and working principles
export default function About({ c }: { c: Content }) {
  const a = c.about;
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading eyebrow={a.eyebrow} title={a.title} />

        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <GlowCard className="h-full p-7 md:p-10">
              <div className="space-y-5 text-base leading-9 text-foreground/85 md:text-lg">
                {a.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>

              <blockquote className="mt-8 flex items-start gap-3 rounded-2xl border border-brand/20 bg-brand/10 p-5">
                <Quote className="mt-1 size-5 shrink-0 text-brand" />
                <p className="text-lg font-semibold leading-8 text-foreground">{a.quote}</p>
              </blockquote>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="flex items-start gap-3">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-accent">
                    <GraduationCap className="size-5 text-brand" />
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">{a.education.degree}</p>
                    <p className="text-sm text-muted-foreground">{a.education.school}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-accent">
                    <Languages className="size-5 text-brand" />
                  </span>
                  <div>
                    {a.languages.map((l) => (
                      <p key={l.name} className="text-sm">
                        <span className="font-semibold text-foreground">{l.name}</span>
                        <span className="text-muted-foreground"> — {l.level}</span>
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </GlowCard>
          </Reveal>

          <Reveal delay={0.1}>
            <GlowCard className="h-full p-7 md:p-8">
              <p className="ltr text-xs font-semibold tracking-[0.25em] text-brand rtl:text-right">{a.lighthouse.eyebrow}</p>
              <h3 className="mt-2 text-xl font-bold text-foreground">{a.lighthouse.title}</h3>
              <div className="mt-8 grid grid-cols-2 gap-6">
                {lighthouse.map((m, i) => (
                  <LighthouseRing key={m.label} {...m} delay={i * 0.15} />
                ))}
              </div>
            </GlowCard>
          </Reveal>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {a.principles.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="glass group h-full rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 hover:bg-accent/60">
                <span className="mb-4 block h-1 w-10 rounded-full bg-gradient-to-r from-brand to-brand-2 transition-all duration-500 group-hover:w-16" />
                <p className="font-bold text-foreground">{p.title}</p>
                <p className="mt-1 text-sm leading-7 text-muted-foreground">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
