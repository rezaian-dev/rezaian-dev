import Image from "next/image";
import { ArrowUpRight, Briefcase, Lock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github } from "@/components/shared/BrandIcons";
import Reveal from "@/components/shared/Reveal";
import SectionHeading from "@/components/shared/SectionHeading";
import GlowCard from "@/components/shared/GlowCard";
import type { Content, Project } from "@/data/content";
import { blurData } from "@/data/blur";
import TechIcon from "@/components/shared/TechIcon";
import { cn } from "@/lib/utils";

// 🗂️ Alternating project cards — image on one side, details on the other
export default function Projects({ c }: { c: Content }) {
  const p = c.projects;
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-brand/50 to-transparent" />
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading eyebrow={p.eyebrow} title={p.title} description={p.description} />
        <div className="space-y-6">
          {p.items.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} ui={c.ui} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project: p, index, ui }: { project: Project; index: number; ui: Content["ui"] }) {
  const reverse = index % 2 === 1;
  return (
    <Reveal as="article">
      <GlowCard className="group overflow-hidden">
        <div className={cn("grid lg:grid-cols-2", reverse && "lg:[&>*:first-child]:order-2")}>
          {/* 🖼️ Cover — rendered at its own aspect ratio, never cropped */}
          <div className="relative flex items-center justify-center overflow-hidden bg-muted/40 p-5 sm:p-8 lg:p-10">
            <div
              className="absolute inset-0 opacity-50 transition-opacity duration-700 group-hover:opacity-80"
              style={{ background: `radial-gradient(circle at 30% 30%, ${p.accent}, transparent 65%)` }}
            />
            <div className="dots-bg absolute inset-0 opacity-40" />
            <Image
              src={p.image}
              alt={p.title}
              width={p.size.w}
              height={p.size.h}
              quality={85}
              placeholder="blur"
              blurDataURL={blurData[p.slug as keyof typeof blurData]}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="relative h-auto w-full rounded-2xl shadow-2xl shadow-black/30 ring-1 ring-foreground/10 transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />
          </div>

          {/* 📝 Details */}
          <div className="flex flex-col p-6 md:p-9">
            {/* 🏷️ Type + client tags — one wrapping row, nothing overlaps */}
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <Badge variant="outline" className="ltr h-auto rounded-full px-3 py-1 text-xs font-semibold">
                {p.type}
              </Badge>
              {p.client && (
                <Badge className="h-auto gap-1.5 rounded-full bg-amber-400 px-3 py-1 text-xs font-bold text-slate-950 hover:bg-amber-400">
                  <Briefcase className="size-3.5" />
                  {ui.clientProject}
                </Badge>
              )}
            </div>
            <p className="text-sm text-muted-foreground">{p.subtitle}</p>
            <h3 className="mt-1 text-2xl font-black tracking-tight text-foreground md:text-3xl">{p.title}</h3>
            <p className="mt-4 text-sm leading-8 text-foreground/80 md:text-base">{p.description}</p>

            {p.metrics.length > 0 && (
              <div className={cn("mt-6 grid gap-3", p.metrics.length === 4 ? "grid-cols-2 sm:grid-cols-4" : "grid-cols-3")}>
                {p.metrics.map((m) => (
                  <div key={m.label} className="rounded-xl border bg-background/50 p-3 text-center transition-colors group-hover:border-brand/30">
                    <p className="text-xl font-black text-foreground">{m.value}</p>
                    <p className="ltr text-[11px] text-muted-foreground">{m.label}</p>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-6 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <Badge key={s} variant="secondary" className="ltr h-auto gap-1.5 rounded-full px-3 py-1 font-medium">
                  <TechIcon name={s} className="size-3.5" />
                  {s}
                </Badge>
              ))}
            </div>

            <div className="mt-auto flex flex-wrap items-center gap-3 pt-7">
              {p.github && (
                <Button asChild size="lg" className="rounded-full px-5 btn-glow">
                  <a href={p.github} target="_blank" rel="noopener noreferrer">
                    <Github data-icon="inline-start" className="size-4" />
                    {ui.sourceCode}
                    <ArrowUpRight data-icon="inline-end" className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 rtl:-scale-x-100 rtl:group-hover:-translate-x-0.5" />
                  </a>
                </Button>
              )}
              {p.demo && (
                <Button asChild size="lg" variant="outline" className="rounded-full px-5">
                  <a href={p.demo} target="_blank" rel="noopener noreferrer">
                    {ui.liveDemo}
                    <ArrowUpRight data-icon="inline-end" className="rtl:-scale-x-100" />
                  </a>
                </Button>
              )}
              {p.client && !p.github && (
                <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                  <Lock className="size-3.5" />
                  {ui.privateSource}
                </span>
              )}
            </div>
          </div>
        </div>
      </GlowCard>
    </Reveal>
  );
}
