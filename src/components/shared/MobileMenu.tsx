"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion, type Variants } from "motion/react";
import { ArrowUpRight, Download, Mail, MapPin, Send, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "@/components/shared/BrandIcons";
import TehranClock from "@/components/shared/TehranClock";
import { links, type Content, type Locale } from "@/data/content";
import { blurData } from "@/data/blur";
import { cn } from "@/lib/utils";

type Props = { locale: Locale; c: Content };

const ease = [0.22, 1, 0.36, 1] as const;

// 🧭 Rows rise in one after another; hairlines draw in from the start edge
const list: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.35 } },
  exit: { transition: { staggerChildren: 0.03, staggerDirection: -1 } },
};
const row: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
  exit: { opacity: 0, y: 10, transition: { duration: 0.18 } },
};
const line: Variants = {
  hidden: { scaleX: 0 },
  show: { scaleX: 1, transition: { duration: 0.7, ease } },
  exit: { scaleX: 0, transition: { duration: 0.2 } },
};
const pop: Variants = {
  hidden: { opacity: 0, scale: 0.6 },
  show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 380, damping: 22 } },
  exit: { opacity: 0, scale: 0.8, transition: { duration: 0.15 } },
};

// 📱 Immersive mobile menu — ink-drop reveal from the burger, editorial nav, profile card (compositor-only animations)
export default function MobileMenu({ locale, c }: Props) {
  const [open, setOpen] = useState(false);
  const [origin, setOrigin] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const btn = useRef<HTMLButtonElement>(null);
  const reduce = useReducedMotion();

  // 🎯 Remember where the burger sits (reveal origin) and which section is on screen
  const toggle = () => {
    if (!open) {
      const r = btn.current?.getBoundingClientRect();
      if (r) setOrigin({ x: r.left + r.width / 2, y: r.top + r.height / 2 });
      const mid = window.innerHeight / 2;
      const hit = c.nav.find((n) => {
        const el = document.querySelector<HTMLElement>(n.href);
        if (!el) return false;
        const b = el.getBoundingClientRect();
        return b.top <= mid && b.bottom >= mid;
      });
      setActive(hit?.href ?? null);
    }
    setOpen((v) => !v);
  };

  // 🚪 Overlay is portaled to <body> — the glass navbar (backdrop-filter) would otherwise trap `fixed` children
  useEffect(() => setMounted(true), []);

  // 🔒 Lock page scroll (deferred a frame so it doesn't share the click's style-recalc) + Esc closes
  useEffect(() => {
    if (!open) return;
    const prev = document.documentElement.style.overflow;
    const raf = requestAnimationFrame(() => (document.documentElement.style.overflow = "hidden"));
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      cancelAnimationFrame(raf);
      document.documentElement.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // 🫧 Ink-drop reveal: a circle scales up from the burger — transform only, GPU-friendly
  const radius = typeof window === "undefined" ? 1500 : Math.hypot(window.innerWidth, window.innerHeight);

  const socials = [
    { href: links.github, icon: Github, label: "GitHub" },
    { href: links.linkedin, icon: Linkedin, label: "LinkedIn" },
    { href: links.telegram, icon: Send, label: "Telegram" },
    { href: `mailto:${links.email}`, icon: Mail, label: "Email" },
  ];

  return (
    <>
      {/* 🍔 Burger ⇄ ✕ */}
      <Button
        ref={btn}
        variant="outline"
        size="icon-lg"
        aria-label={c.ui.menu}
        aria-expanded={open}
        onClick={toggle}
        className="rounded-full bg-background/60 md:hidden"
      >
        <span className="relative block size-4">
          <span className="absolute inset-x-0 top-[3px] h-[1.5px] rounded-full bg-current" />
          <span className="absolute inset-x-0 top-1/2 h-[1.5px] -translate-y-1/2 rounded-full bg-current" />
          <span className="absolute inset-x-0 bottom-[3px] h-[1.5px] rounded-full bg-current" />
        </span>
      </Button>

      {mounted &&
        createPortal(
        <AnimatePresence>
          {open && (
            <motion.div
              key="menu"
              role="dialog"
              aria-modal
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.2 } }}
              exit={{ opacity: 0, transition: { duration: 0.3, delay: 0.15 } }}
              className="fixed inset-0 z-[60] overflow-hidden [contain:strict] md:hidden"
            >
              {/* 🫧 Ink drop — a flat circle scales up from the burger (cheap to rasterise, transform-only) */}
              <motion.div
                aria-hidden
                initial={reduce ? { scale: 1 } : { scale: 0 }}
                animate={{ scale: 1 }}
                exit={reduce ? { opacity: 0 } : { scale: 0, transition: { duration: 0.4, ease: "easeInOut" } }}
                transition={{ duration: 0.65, ease }}
                style={{ left: origin.x, top: origin.y, width: radius * 2, height: radius * 2, x: "-50%", y: "-50%", willChange: "transform" }}
                className="absolute rounded-full bg-background"
              />
              {/* 🌌 Aurora tint fades in on top once the ink has landed */}
              <motion.div
                aria-hidden
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.35, duration: 0.6 } }}
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_10%,color-mix(in_oklch,var(--brand)_28%,transparent),transparent_45%),radial-gradient(circle_at_10%_55%,color-mix(in_oklch,var(--brand-2)_22%,transparent),transparent_40%),radial-gradient(circle_at_80%_95%,color-mix(in_oklch,#d946ef_14%,transparent),transparent_35%)]"
              />
              <div className="grid-bg pointer-events-none absolute inset-0 opacity-70" />

              {/* ✕ Close — sits exactly where the burger was, spins in */}
              <motion.button
                aria-label={c.ui.menu}
                onClick={() => setOpen(false)}
                initial={{ x: "-50%", y: "-50%", rotate: -90, scale: 0.6, opacity: 0 }}
                animate={{ x: "-50%", y: "-50%", rotate: 0, scale: 1, opacity: 1, transition: { delay: 0.25, type: "spring", stiffness: 300, damping: 20 } }}
                exit={{ x: "-50%", y: "-50%", rotate: 90, scale: 0.6, opacity: 0, transition: { duration: 0.15 } }}
                whileTap={{ scale: 0.9 }}
                style={{ left: origin.x, top: origin.y }}
                className="absolute z-10 grid size-10 place-items-center rounded-full border border-brand/40 bg-card text-foreground transition-colors hover:bg-brand/20"
              >
                <X className="size-4" />
              </motion.button>

              {/* 📜 Scrollable body (short screens scroll; tall screens pin the card to the bottom) */}
              <div className="relative flex h-full flex-col overflow-y-auto overscroll-contain px-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-24">
                {/* 🏷️ Eyebrow */}
                <motion.p
                  initial={{ opacity: 0, x: locale === "fa" ? 12 : -12 }}
                  animate={{ opacity: 1, x: 0, transition: { delay: 0.3, duration: 0.5, ease } }}
                  exit={{ opacity: 0, transition: { duration: 0.15 } }}
                  className="ltr mb-2 flex shrink-0 items-center gap-3 text-[11px] font-semibold tracking-[0.3em] text-brand rtl:flex-row-reverse rtl:text-right"
                >
                  <span className="h-px w-8 bg-brand/60" />
                  MENU
                </motion.p>

                {/* 🧭 Editorial nav list */}
                <motion.ul variants={list} initial="hidden" animate="show" exit="exit" className="shrink-0 flex-1">
                  {c.nav.map((n, i) => {
                    const isActive = active === n.href;
                    return (
                      <motion.li key={n.href} variants={row} className="relative">
                        <a
                          href={n.href}
                          onClick={() => setOpen(false)}
                          className="group flex items-center gap-4 py-[1.05rem]"
                        >
                          <span className={cn("ltr w-7 text-xs font-bold tabular-nums transition-colors duration-300", isActive ? "text-brand" : "text-muted-foreground group-hover:text-brand")}>
                            0{i + 1}
                          </span>
                          <span className="relative flex-1">
                            <span
                              className={cn(
                                "block text-[1.45rem] font-extrabold tracking-tight transition-all duration-500",
                                isActive ? "text-gradient" : "text-foreground group-hover:text-gradient group-hover:translate-x-1 rtl:group-hover:-translate-x-1",
                              )}
                            >
                              {n.label}
                            </span>
                            {isActive && (
                              <motion.span
                                layoutId="active-dot"
                                className="absolute -start-3 top-1/2 size-1.5 -translate-y-1/2 rounded-full bg-brand shadow-[0_0_12px_var(--brand)]"
                              />
                            )}
                          </span>
                          <span className="grid size-9 place-items-center rounded-full border border-foreground/10 bg-card/40 text-muted-foreground opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:border-brand/40 group-hover:text-brand rtl:translate-x-2 ltr:-translate-x-2 group-hover:translate-x-0">
                            <ArrowUpRight className="size-4 rtl:-scale-x-100" />
                          </span>
                        </a>
                        <motion.span variants={line} className="absolute inset-x-0 bottom-0 h-px origin-left bg-gradient-to-r from-foreground/20 via-foreground/10 to-transparent rtl:origin-right rtl:bg-gradient-to-l" />
                      </motion.li>
                    );
                  })}
                </motion.ul>

                {/* 🪪 Profile card */}
                <motion.div
                  initial={{ opacity: 0, y: 40, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1, transition: { delay: 0.7, type: "spring", stiffness: 220, damping: 26 } }}
                  exit={{ opacity: 0, y: 20, transition: { duration: 0.15 } }}
                  className="relative mt-8 shrink-0 overflow-hidden rounded-3xl border border-foreground/10 bg-card p-4 shadow-2xl shadow-black/10 dark:shadow-black/40"
                >
                  <span className="pointer-events-none absolute -top-16 -end-16 size-40 rounded-full bg-[radial-gradient(circle,color-mix(in_oklch,var(--brand)_25%,transparent),transparent_70%)]" />
                  <div className="relative flex items-center gap-3">
                    <span className="relative shrink-0">
                      <Image
                        src={links.photo}
                        alt={c.hero.name}
                        width={52}
                        height={52}
                        placeholder="blur"
                        blurDataURL={blurData.profile}
                        className="size-13 rounded-2xl object-cover ring-2 ring-brand/40"
                      />
                      <span className="absolute -bottom-0.5 -end-0.5 flex size-3.5 items-center justify-center rounded-full bg-card">
                        <span className="absolute size-2.5 animate-ping rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative size-2.5 rounded-full bg-emerald-500" />
                      </span>
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-bold text-foreground">{c.hero.name}</p>
                      <p className="ltr truncate text-xs text-muted-foreground rtl:text-right">
                        {c.hero.role} · {c.hero.roleSub}
                      </p>
                    </div>
                    <span className="shrink-0 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                      {c.footer.status}
                    </span>
                  </div>

                  <div className="relative mt-4 flex flex-wrap items-center gap-2 text-xs">
                    <span className="inline-flex items-center gap-1.5 rounded-full border bg-card/60 px-3 py-1.5 text-muted-foreground">
                      <MapPin className="size-3.5" />
                      {c.hero.location}
                    </span>
                    <TehranClock label={c.footer.localTime} locale={locale} />
                  </div>

                  <Button asChild size="lg" className="relative mt-4 w-full rounded-2xl btn-glow">
                    <a href={links.resume} download>
                      <Download data-icon="inline-start" />
                      {c.ui.downloadResume}
                    </a>
                  </Button>
                </motion.div>

                {/* 🔗 Socials */}
                <motion.ul
                  variants={{ show: { transition: { staggerChildren: 0.06, delayChildren: 0.95 } }, exit: { transition: { staggerChildren: 0.02 } } }}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="mt-4 grid shrink-0 grid-cols-4 gap-2"
                >
                  {socials.map((s) => (
                    <motion.li key={s.label} variants={pop}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.label}
                        className="group flex flex-col items-center gap-1.5 rounded-2xl border border-foreground/10 bg-card/50 py-3 text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/40 hover:bg-brand/10 hover:text-foreground"
                      >
                        <s.icon className="size-[18px] transition-transform duration-300 group-hover:scale-110" />
                        <span className="ltr text-[10px] font-medium">{s.label}</span>
                      </a>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
          document.body,
        )}
    </>
  );
}
