"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowDown, Download, MapPin, Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Github, Linkedin } from "@/components/shared/BrandIcons";
import Magnetic from "@/components/shared/Magnetic";
import { links, type Content } from "@/data/content";
import { blurData } from "@/data/blur";

// 🎞️ Staggered entrance — opacity + transform only, so nothing reflows
const fade = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export default function Hero({ c }: { c: Content }) {
  const h = c.hero;
  const socials = [
    { href: links.github, icon: Github, label: "GitHub" },
    { href: links.linkedin, icon: Linkedin, label: "LinkedIn" },
    { href: links.telegram, icon: Send, label: "Telegram" },
  ];

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="grid-bg pointer-events-none absolute inset-0" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 md:px-6 lg:grid-cols-[1.15fr_0.85fr]">
        {/* 📝 Copy */}
        <div>
          <motion.div {...fade(0)}>
            <Badge variant="outline" className="h-auto gap-2 rounded-full bg-card/80 px-3.5 py-1.5 text-xs">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              {h.available}
            </Badge>
          </motion.div>

          <motion.h1 {...fade(0.1)} className="mt-6 text-4xl font-black leading-[1.15] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {h.greeting} <span className="text-gradient-animated">{h.name}</span>
            {h.suffix && (
              <>
                <br />
                {h.suffix}
              </>
            )}
          </motion.h1>

          <motion.p {...fade(0.2)} className="mt-5 text-xl font-semibold text-foreground/90 md:text-2xl">
            <span className="ltr inline-block">{h.role}</span>
            <span className="mx-3 text-muted-foreground/50">·</span>
            <span className="ltr inline-block">{h.roleSub}</span>
          </motion.p>

          <motion.p {...fade(0.3)} className="mt-6 max-w-xl text-base leading-8 text-muted-foreground md:text-lg">
            {h.tagline}
          </motion.p>

          <motion.div {...fade(0.4)} className="mt-8 flex flex-wrap items-center gap-3">
            <Magnetic>
              <Button asChild size="lg" className="btn-glow shine h-11 rounded-full px-6 text-sm">
                <a href="#projects">
                  <Sparkles data-icon="inline-start" />
                  {c.ui.viewProjects}
                </a>
              </Button>
            </Magnetic>
            <Magnetic>
              <Button asChild size="lg" variant="outline" className="btn-glow h-11 rounded-full bg-card/80 px-6 text-sm">
                <a href={links.resume} download>
                  <Download data-icon="inline-start" />
                  {c.ui.downloadResume}
                </a>
              </Button>
            </Magnetic>
          </motion.div>

          <motion.div {...fade(0.5)} className="mt-8 flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="size-4" />
              {h.location}
            </span>
            <div className="flex items-center gap-2">
              {socials.map(({ href, icon: Icon, label }) => (
                <Tooltip key={label}>
                  <TooltipTrigger asChild>
                    <Button asChild variant="outline" size="icon-lg" className="btn-glow rounded-full bg-card/60">
                      <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                        <Icon className="size-4" />
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>{label}</TooltipContent>
                </Tooltip>
              ))}
            </div>
          </motion.div>
        </div>

        {/* 🖼️ Portrait — fixed aspect ratio box, so the image never shifts layout */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm lg:max-w-md"
        >
          <div className="absolute -inset-1 animate-spin-slow rounded-[2.2rem] bg-[conic-gradient(from_0deg,var(--brand),var(--brand-2),transparent_40%,transparent_60%,var(--brand))] opacity-70 will-change-transform" />
          <div className="absolute -inset-16 rounded-full bg-[radial-gradient(circle,color-mix(in_oklch,var(--brand)_22%,transparent),transparent_70%)]" />

          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border bg-card shadow-2xl shadow-black/20 dark:shadow-black/60">
            <Image
              src={links.photo}
              alt={h.name}
              fill
              priority
              quality={95}
              placeholder="blur"
              blurDataURL={blurData.profile}
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 24rem, 28rem"
              className="object-cover object-top"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background/70 to-transparent" />
          </div>

          {/* 🪄 Floating stat chips */}
          <div className="glass absolute -end-3 top-10 animate-float rounded-2xl px-4 py-3 shadow-xl sm:-end-8">
            <p className="ltr text-2xl font-black text-foreground">{h.floatA.value}</p>
            <p className="text-xs text-muted-foreground">{h.floatA.label}</p>
          </div>
          <div className="glass absolute -start-3 bottom-16 animate-float-delayed rounded-2xl px-4 py-3 shadow-xl sm:-start-8">
            <p className="text-2xl font-black text-foreground">{h.floatB.value}</p>
            <p className="text-xs text-muted-foreground">{h.floatB.label}</p>
          </div>
        </motion.div>
      </div>

      {/* 📊 Quick stats */}
      <motion.div {...fade(0.6)} className="relative mx-auto mt-16 grid max-w-6xl grid-cols-2 gap-4 px-4 md:mt-24 md:grid-cols-4 md:px-6">
        {h.stats.map((s) => (
          <div key={s.label} className="glass group relative overflow-hidden rounded-2xl p-5 text-center transition-transform duration-300 hover:-translate-y-1">
            <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <p className="text-3xl font-black text-foreground md:text-4xl">{s.value}</p>
            <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </motion.div>

      <motion.a
        href="#about"
        aria-label={c.ui.scroll}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 text-muted-foreground md:block"
      >
        <ArrowDown className="size-5 animate-bounce" />
      </motion.a>
    </section>
  );
}
