"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useSpring } from "motion/react";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/shared/ThemeToggle";
import LangToggle from "@/components/shared/LangToggle";
import MobileMenu from "@/components/shared/MobileMenu";
import { links, type Content, type Locale } from "@/data/content";
import { cn } from "@/lib/utils";

type Props = { locale: Locale; c: Content };

// 🧭 Floating glass navbar with theme / language toggles
export default function Navbar({ locale, c }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-4 md:pt-4">
      {/* 📏 Scroll progress bar */}
      <motion.div
        style={{ scaleX: progress }}
        className="fixed inset-x-0 top-0 z-50 h-0.5 origin-left bg-gradient-to-r from-brand to-brand-2 rtl:origin-right"
      />

      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between rounded-2xl border px-3 py-2.5 transition-all duration-500 md:px-5",
          scrolled ? "glass shadow-xl shadow-black/5 dark:shadow-black/40" : "border-transparent",
        )}
      >
        <Link href={`/${locale}`} className="flex items-center gap-2.5 font-bold text-foreground">
          <span className="ltr grid size-9 place-items-center rounded-xl bg-gradient-to-br from-brand to-brand-2 text-sm font-black text-white shadow-lg shadow-brand/30">
            MR
          </span>
          <span className="hidden sm:block">{c.hero.name}</span>
        </Link>

        <ul className="hidden items-center gap-0.5 md:flex">
          {c.nav.map((item) => (
            <li key={item.href}>
              <Button asChild variant="ghost" className="rounded-full text-muted-foreground hover:text-foreground">
                <a href={item.href}>{item.label}</a>
              </Button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1.5 md:gap-2">
          <LangToggle locale={locale} label={c.ui.language} />
          <ThemeToggle ui={c.ui} />
          <Button asChild size="lg" className="hidden rounded-full px-4 btn-glow md:inline-flex">
            <a href={links.resume} download>
              <Download data-icon="inline-start" />
              {c.ui.resume}
            </a>
          </Button>

          {/* 📱 Mobile menu */}
          <MobileMenu locale={locale} c={c} />
        </div>
      </motion.nav>
    </header>
  );
}
