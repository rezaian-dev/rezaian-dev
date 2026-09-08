import { Download, Mail, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "@/components/shared/BrandIcons";
import Reveal from "@/components/shared/Reveal";
import Magnetic from "@/components/shared/Magnetic";
import { links, type Content } from "@/data/content";

// 📬 CTA card with all contact channels
export default function Contact({ c }: { c: Content }) {
  const t = c.contact;
  const channels = [
    { label: t.channels.email, value: links.email, href: `mailto:${links.email}`, icon: Mail },
    { label: t.channels.phone, value: t.phoneDisplay, href: `tel:${links.phone}`, icon: Phone },
    { label: t.channels.telegram, value: "@rezaian_dev", href: links.telegram, icon: Send },
    { label: t.channels.linkedin, value: "in/mr-rezaian", href: links.linkedin, icon: Linkedin },
    { label: t.channels.github, value: "rezaian-dev", href: links.github, icon: Github },
  ];

  return (
    <section id="contact" className="cv-auto relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border bg-gradient-to-br from-brand/15 via-card to-brand-2/10 p-8 shadow-2xl shadow-brand/10 md:p-14">
            <div className="grid-bg pointer-events-none absolute inset-0 opacity-60" />
            <div className="pointer-events-none absolute -end-32 -top-32 size-[28rem] animate-blob rounded-full bg-[radial-gradient(circle,color-mix(in_oklch,var(--brand)_28%,transparent),transparent_65%)] will-change-transform" />
            <div className="pointer-events-none absolute -bottom-32 -start-32 size-[28rem] animate-blob-slow rounded-full bg-[radial-gradient(circle,color-mix(in_oklch,var(--brand-2)_24%,transparent),transparent_65%)] will-change-transform" />

            <div className="relative grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
              <div>
                <p className="ltr text-xs font-semibold tracking-[0.25em] text-brand rtl:text-right">{t.eyebrow}</p>
                <h2 className="mt-3 text-3xl font-black leading-tight tracking-tight text-foreground md:text-5xl">
                  {t.titleA}
                  <br />
                  <span className="text-gradient-animated">{t.titleB}</span>
                </h2>
                <p className="mt-5 max-w-lg text-base leading-8 text-muted-foreground md:text-lg">{t.text}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Magnetic>
                    <Button asChild size="lg" className="h-11 rounded-full px-6 btn-glow shine">
                      <a href={`mailto:${links.email}`}>
                        <Mail data-icon="inline-start" />
                        {c.ui.sendEmail}
                      </a>
                    </Button>
                  </Magnetic>
                  <Magnetic>
                    <Button asChild size="lg" variant="outline" className="h-11 rounded-full bg-background/50 px-6 btn-glow">
                      <a href={links.resume} download>
                        <Download data-icon="inline-start" />
                        {c.ui.downloadResume}
                      </a>
                    </Button>
                  </Magnetic>
                </div>
              </div>

              <ul className="grid gap-3">
                {channels.map(({ label, value, href, icon: Icon }, i) => (
                  <Reveal key={label} delay={i * 0.06} as="li">
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 rounded-2xl border bg-background/70 px-5 py-4 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-brand/50 hover:shadow-lg hover:shadow-brand/10"
                    >
                      <span className="grid size-10 place-items-center rounded-xl bg-accent text-brand transition-all duration-300 group-hover:bg-brand group-hover:text-white group-hover:shadow-lg group-hover:shadow-brand/40">
                        <Icon className="size-5" />
                      </span>
                      <span className="flex-1">
                        <span className="block text-xs text-muted-foreground">{label}</span>
                        <span className="ltr block font-semibold text-foreground rtl:text-right">{value}</span>
                      </span>
                    </a>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
