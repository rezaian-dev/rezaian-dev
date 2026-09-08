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
    <section id="books" className="cv-auto relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading eyebrow={b.eyebrow} title={b.title} description={b.description} />

        <div className="grid gap-6 md:grid-cols-3">
          {b.items.map((book, i) => (
            <Reveal key={book.title} delay={i * 0.1} as="article">
              <GlowCard className="group h-full overflow-hidden">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={book.image}
                    alt={book.title}
                    fill
                    quality={85}
                    placeholder="blur"
                    blurDataURL={blurData[book.blur]}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                  <Badge
                    className="absolute top-4 end-4 h-auto rounded-full px-3 py-1 text-xs font-bold text-slate-950"
                    style={{ background: book.accent }}
                  >
                    {book.chapters}
                  </Badge>
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <h3 className="text-xl font-black text-foreground">{book.title}</h3>
                    <p className="mt-1 text-sm leading-7 text-muted-foreground">{book.subtitle}</p>
                  </div>
                </div>
                <div className="flex gap-2 p-4">
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
