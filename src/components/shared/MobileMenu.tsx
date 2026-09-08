"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, type Variants } from "motion/react";
import { ArrowUpRight, Download, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "@/components/shared/BrandIcons";
import { links, type Content, type Locale } from "@/data/content";
import { cn } from "@/lib/utils";

type Props = { locale: Locale; c: Content };

const spring = { type: "spring", stiffness: 260, damping: 28 } as const;

// 🧭 Nav links glide in one by one — blur → sharp, with a soft slide
const list: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.18 } },
  exit: { transition: { staggerChildren: 0.03, staggerDirection: -1 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(10px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: 12, filter: "blur(6px)", transition: { duration: 0.2 } },
};

// 📱 Full-screen mobile menu with animated burger, blurred backdrop and staggered links
export default function MobileMenu({ locale, c }: Props) {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const rtl = locale === "fa";

  // 🔒 Lock scroll + close on Escape while open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const socials = [
    { href: links.github, icon: Github, label: "GitHub" },
    { href: links.linkedin, icon: Linkedin, label: "LinkedIn" },
    { href: links.telegram, icon: Send, label: "Telegram" },
    { href: `mailto:${links.email}`, icon: Mail, label: "Email" },
  ];

  return (
    <>
      {/* 🍔 Burger → ✕ morph */}
      <Button
        variant="outline"
        size="icon-lg"
        aria-label={c.ui.menu}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="relative z-[70] rounded-full bg-background/60 md:hidden"
      >
        <span className="relative block size-4">
          <span className={cn("absolute inset-x-0 top-[3px] h-[1.5px] rounded-full bg-current transition-all duration-300", open && "top-1/2 -translate-y-1/2 rotate-45")} />
          <span className={cn("absolute inset-x-0 top-1/2 h-[1.5px] -translate-y-1/2 rounded-full bg-current transition-all duration-200", open && "scale-x-0 opacity-0")} />
          <span className={cn("absolute inset-x-0 bottom-[3px] h-[1.5px] rounded-full bg-current transition-all duration-300", open && "bottom-1/2 translate-y-1/2 -rotate-45")} />
        </span>
      </Button>

      <AnimatePresence>
        {open && (
          <motion.div
            key="menu"
            role="dialog"
            aria-modal
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.25, delay: 0.1 } }}
            className="fixed inset-0 z-[60] md:hidden"
          >
            {/* 🌫️ Backdrop */}
            <motion.button
              aria-label="close"
              onClick={() => setOpen(false)}
              initial={{ backdropFilter: "blur(0px)" }}
              animate={{ backdropFilter: "blur(16px)" }}
              exit={{ backdropFilter: "blur(0px)" }}
              className="absolute inset-0 bg-background/70"
            />

            {/* 🪟 Panel */}
            <motion.div
              initial={reduce ? { opacity: 0 } : { x: rtl ? "100%" : "-100%", opacity: 0.6 }}
              animate={reduce ? { opacity: 1 } : { x: 0, opacity: 1 }}
              exit={reduce ? { opacity: 0 } : { x: rtl ? "100%" : "-100%", opacity: 0.6, transition: { duration: 0.28, ease: [0.4, 0, 1, 1] } }}
              transition={spring}
              className={cn(
                "absolute inset-y-0 flex w-[min(86vw,22rem)] flex-col overflow-hidden border-border/60 bg-card/90 pt-24 shadow-2xl backdrop-blur-2xl",
                rtl ? "right-0 rounded-l-3xl border-l" : "left-0 rounded-r-3xl border-r",
              )}
            >
              {/* ✨ Ambient glow + dots */}
              <span className="pointer-events-none absolute -top-24 -end-24 size-72 rounded-full bg-brand/25 blur-3xl" />
              <span className="pointer-events-none absolute -bottom-24 -start-24 size-64 rounded-full bg-brand-2/20 blur-3xl" />
              <span className="dots-bg pointer-events-none absolute inset-0 opacity-30" />

              <motion.ul variants={list} initial="hidden" animate="show" exit="exit" className="relative flex flex-col gap-1 px-5">
                {c.nav.map((n, i) => (
                  <motion.li key={n.href} variants={item}>
                    <a
                      href={n.href}
                      onClick={() => setOpen(false)}
                      className="group flex items-center gap-4 rounded-2xl px-4 py-3.5 transition-colors hover:bg-accent/70 active:bg-accent"
                    >
                      <span className="ltr text-xs font-bold tabular-nums text-brand/70">0{i + 1}</span>
                      <span className="text-2xl font-black tracking-tight text-foreground transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1">
                        {n.label}
                      </span>
                      <ArrowUpRight className="ms-auto size-5 text-muted-foreground opacity-0 transition-all duration-300 group-hover:opacity-100 rtl:-scale-x-100" />
                    </a>
                  </motion.li>
                ))}
              </motion.ul>

              {/* 📎 Resume + socials */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, transition: { delay: 0.55, duration: 0.5, ease: [0.22, 1, 0.36, 1] } }}
                exit={{ opacity: 0, transition: { duration: 0.15 } }}
                className="relative mt-auto space-y-4 border-t border-border/60 p-5"
              >
                <Button asChild size="lg" className="w-full rounded-2xl btn-glow">
                  <a href={links.resume} download>
                    <Download data-icon="inline-start" />
                    {c.ui.downloadResume}
                  </a>
                </Button>
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="relative flex size-2">
                      <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                    </span>
                    {c.footer.status}
                  </span>
                  <div className="flex gap-1">
                    {socials.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.label}
                        className="grid size-9 place-items-center rounded-xl text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                      >
                        <s.icon className="size-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
