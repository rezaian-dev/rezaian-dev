import Image from "next/image";
import { BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github } from "@/components/shared/BrandIcons";
import Reveal from "@/components/shared/Reveal";
import SectionHeading from "@/components/shared/SectionHeading";
import GlowCard from "@/components/shared/GlowCard";
import type { Content } from "@/data/content";
import { blurData } from "@/data/blur";

// 📚 Open-source Persian handbooks
export default function Books({ c }: { c: Content }) {
  const b = c.books;
  return (
    <section id="books" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading eyebrow={b.eyebrow} title={b.title} description={b.description} />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {b.items.map((book, i) => (
            <Reveal key={book.title} delay={i * 0.1} as="article">
              <GlowCard className="group flex h-full flex-col overflow-hidden">
                <div className="relative aspect-[3/4] overflow-hidden bg-muted/40">
                  <Image
                    src={book.image}
                    alt={book.title}
                    fill
                    quality={85}
                    placeholder="blur"
                    blurDataURL={blurData[book.blur]}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain p-4 transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <Badge
                    className="absolute top-4 end-4 h-auto rounded-full px-3 py-1 text-xs font-bold text-slate-950"
                    style={{ background: book.accent }}
                  >
                    {book.chapters}
                  </Badge>
                </div>
                <div className="px-5 pt-5">
                  <h3 className="text-lg font-black leading-snug text-foreground md:text-xl">{book.title}</h3>
                  <p className="mt-1 text-sm leading-7 text-muted-foreground">{book.subtitle}</p>
                </div>
                <div className="mt-auto flex gap-2 p-4">
                  <Button asChild size="lg" className="flex-1 rounded-xl btn-glow">
                    <a href={book.read} target="_blank" rel="noopener noreferrer">
                      <BookOpen data-icon="inline-start" />
                      {c.ui.readOnline}
                    </a>
                  </Button>
                  <Button asChild size="icon-lg" variant="outline" className="rounded-xl">
                    <a href={book.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                      <Github className="size-4" />
                    </a>
                  </Button>
                </div>
              </GlowCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
