"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/shared/ThemeToggle";
import LangToggle from "@/components/shared/LangToggle";
import MobileMenu from "@/components/shared/MobileMenu";
import { links, type Content, type Locale } from "@/data/content";
import { cn } from "@/lib/utils";

// 🧩 Only the slices the navbar needs — keeps the RSC payload small
type Props = { locale: Locale; c: Pick<Content, "nav" | "ui" | "hero" | "footer"> };

// 🧭 Floating glass navbar with theme / language toggles
export default function Navbar({ locale, c }: Props) {
  const [scrolled, setScrolled] = useState(false);
  // 🪶 One state flip at 24px — no per-frame work
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setScrolled(window.scrollY > 24));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-4 md:pt-4">
      {/* 📏 Scroll progress — CSS scroll-driven animation, runs off the main thread */}
      <div aria-hidden className="scroll-progress fixed inset-x-0 top-0 z-50 h-0.5 origin-left bg-gradient-to-r from-brand to-brand-2 rtl:origin-right" />

      <nav
        className={cn(
          "drop-in mx-auto flex max-w-6xl items-center justify-between rounded-2xl border px-3 py-2.5 transition-[background-color,border-color,box-shadow] duration-500 md:px-5",
          scrolled ? "glass-nav shadow-xl shadow-black/5 dark:shadow-black/40" : "border-transparent",
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
      </nav>
    </header>
  );
}
