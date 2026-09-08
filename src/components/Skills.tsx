import { Badge } from "@/components/ui/badge";
import Reveal from "@/components/shared/Reveal";
import SectionHeading from "@/components/shared/SectionHeading";
import GlowCard from "@/components/shared/GlowCard";
import type { Content } from "@/data/content";

const marquee = [
  "React", "Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "MongoDB", "Redis", "Zod", "Playwright",
  "SWR", "React Hook Form", "MUI", "Vite", "Git", "RSC", "ISR", "SEO", "A11y", "RTL",
];

// 🧰 Skill groups as shadcn badges
export default function Skills({ c }: { c: Content }) {
  const s = c.skills;
  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading eyebrow={s.eyebrow} title={s.title} description={s.description} />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {s.groups.map((g, i) => (
            <Reveal key={g.group} delay={i * 0.07}>
              <GlowCard className="h-full p-6">
                <p className="ltr text-xs font-semibold tracking-[0.2em] text-brand rtl:text-right">{g.group}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <li key={item}>
                      <Badge
                        variant="outline"
                        className="ltr h-auto rounded-xl bg-background/50 px-3.5 py-2 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/60 hover:bg-brand/10 hover:text-foreground"
                      >
                        {item}
                      </Badge>
                    </li>
                  ))}
                </ul>
              </GlowCard>
            </Reveal>
          ))}
        </div>
      </div>

      {/* 🎠 Infinite marquee — pauses on hover */}
      <div dir="ltr" className="relative mt-16 overflow-hidden py-4 [mask-image:linear-gradient(90deg,transparent,#000_15%,#000_85%,transparent)]">
        <div className="flex w-max animate-marquee gap-3 hover:[animation-play-state:paused]">
          {[...marquee, ...marquee].map((item, i) => (
            <span key={i} className="rounded-full border bg-card/60 px-5 py-2 text-sm font-semibold text-muted-foreground backdrop-blur">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
