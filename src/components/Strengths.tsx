import Reveal from "@/components/shared/Reveal";
import SectionHeading from "@/components/shared/SectionHeading";
import type { Content } from "@/data/content";

// 💪 Behavioral strengths + a quieter growth block — same language as the rest of the site
export default function Strengths({ c }: { c: Content }) {
  const s = c.strengths;
  const g = c.growth;
  return (
    <section id="strengths" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading eyebrow={s.eyebrow} title={s.title} />

        <div className="grid gap-4 sm:grid-cols-2">
          {s.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06} as="article">
              <div className="glass h-full rounded-2xl p-6 md:p-7">
                <span className="mb-4 block h-1 w-10 rounded-full bg-gradient-to-r from-brand to-brand-2" />
                <h3 className="font-bold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 md:mt-20">
          <Reveal className="mb-8 max-w-2xl">
            <p className="ltr mb-3 flex items-center gap-3 text-xs font-semibold tracking-[0.25em] text-brand rtl:flex-row-reverse rtl:justify-end">
              <span className="h-px w-8 bg-gradient-to-r from-brand to-brand-2" />
              {g.eyebrow}
            </p>
            <h2 className="text-2xl font-extrabold tracking-tight text-foreground md:text-3xl">{g.title}</h2>
          </Reveal>

          <div className="grid gap-4 md:grid-cols-2">
            {g.items.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06} as="article">
                <div className="h-full border-s-2 border-border ps-5 md:ps-6">
                  <h3 className="font-bold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
