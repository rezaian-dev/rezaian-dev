import { ArrowUp, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin } from "@/components/shared/BrandIcons";
import TehranClock from "@/components/shared/TehranClock";
import { links, type Content, type Locale } from "@/data/content";

// 🔻 Rich footer — brand, quick links, contact, live Tehran clock and back-to-top
export default function Footer({ c, locale }: { c: Content; locale: Locale }) {
  const f = c.footer;
  const year = locale === "fa" ? new Intl.DateTimeFormat("fa-IR", { year: "numeric" }).format(new Date()) : new Date().getFullYear();
  const socials = [
    { href: links.github, icon: Github, label: "GitHub" },
    { href: links.linkedin, icon: Linkedin, label: "LinkedIn" },
    { href: links.telegram, icon: Send, label: "Telegram" },
    { href: `mailto:${links.email}`, icon: Mail, label: "Email" },
  ];

  return (
    <footer className="relative mt-16 overflow-hidden">
      {/* 🌈 Top glow line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/60 to-transparent" />
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-80 w-[60rem] -translate-x-1/2 rounded-full bg-brand/15 blur-[120px]" />

      <div className="mx-auto max-w-6xl px-4 pt-16 pb-8 md:px-6">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* 🏷️ Brand */}
          <div>
            <a href="#top" className="inline-flex items-center gap-3">
              <span className="ltr grid size-11 place-items-center rounded-2xl bg-gradient-to-br from-brand to-brand-2 text-base font-black text-white shadow-lg shadow-brand/30">
                MR
              </span>
              <span>
                <span className="block text-lg font-bold text-foreground">{c.hero.name}</span>
                <span className="ltr block text-xs text-muted-foreground">{c.hero.role}</span>
              </span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-7 text-muted-foreground">{f.tagline}</p>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
              <span className="inline-flex items-center gap-2 rounded-full border bg-card/60 px-3 py-1.5 backdrop-blur">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                </span>
                {f.status}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border bg-card/60 px-3 py-1.5 text-muted-foreground backdrop-blur">
                <MapPin className="size-3.5" />
                {c.hero.location}
              </span>
              <TehranClock label={f.localTime} locale={locale} />
            </div>
          </div>

          {/* 🔗 Quick links */}
          <nav aria-label={f.navTitle}>
            <p className="text-xs font-semibold tracking-[0.2em] text-brand uppercase">{f.navTitle}</p>
            <ul className="mt-5 space-y-3">
              {c.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <span className="h-px w-0 bg-brand transition-all duration-300 group-hover:w-4" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* 📬 Connect */}
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-brand uppercase">{f.connectTitle}</p>
            <ul className="mt-5 grid grid-cols-2 gap-2">
              {socials.map(({ href, icon: Icon, label }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2.5 rounded-xl border bg-card/60 px-3 py-2.5 text-sm backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/50 hover:shadow-lg hover:shadow-brand/10"
                  >
                    <Icon className="size-4 text-muted-foreground transition-colors group-hover:text-brand" />
                    <span className="ltr text-foreground">{label}</span>
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={`mailto:${links.email}`}
              className="ltr mt-4 block text-sm text-muted-foreground transition-colors hover:text-foreground rtl:text-right"
            >
              {links.email}
            </a>
          </div>
        </div>

        <Separator className="my-8" />

        {/* ⚖️ Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 text-xs text-muted-foreground sm:flex-row">
          <p>
            © {year} {c.hero.name} · {f.rights}
          </p>
          <p className="inline-flex items-center gap-1.5">
            {f.crafted}
            <span className="inline-block animate-pulse text-rose-500">♥</span>
          </p>
          <Button asChild variant="outline" size="sm" className="btn-glow rounded-full bg-card/60">
            <a href="#top" aria-label={f.backToTop}>
              <ArrowUp data-icon="inline-start" />
              {f.backToTop}
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
}
