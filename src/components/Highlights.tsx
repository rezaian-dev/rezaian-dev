import { CalendarDays, Layers, ShieldCheck, Zap, type LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Reveal from "@/components/shared/Reveal";
import SectionHeading from "@/components/shared/SectionHeading";
import GlowCard from "@/components/shared/GlowCard";
import type { Content } from "@/data/content";

const icons: Record<string, LucideIcon> = {
  calendar: CalendarDays,
  shield: ShieldCheck,
  zap: Zap,
  layers: Layers,
};

// 🏆 Real engineering problems solved in shipped products
export default function Highlights({ c }: { c: Content }) {
  const h = c.highlights;
  return (
    <section id="highlights" className="cv-auto relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading eyebrow={h.eyebrow} title={h.title} description={h.description} />

        <div className="grid gap-5 md:grid-cols-2">
          {h.items.map((item, i) => {
            const Icon = icons[item.icon];
            return (
              <Reveal key={item.title} delay={i * 0.08} as="article">
                <GlowCard className="group h-full p-7">
                  <div className="flex items-center justify-between">
                    <span className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-brand/25 to-brand-2/20 text-brand transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                      <Icon className="size-6" />
                    </span>
                    <Badge variant="outline" className="h-auto rounded-full px-3 py-1 text-muted-foreground">
                      {item.project}
                    </Badge>
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-foreground md:text-xl">{item.title}</h3>
                  <p className="mt-3 text-sm leading-8 text-foreground/80">{item.text}</p>
                </GlowCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
