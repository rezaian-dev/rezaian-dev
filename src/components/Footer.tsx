import { Separator } from "@/components/ui/separator";
import type { Content } from "@/data/content";

// 🔻 Copyright + stack credit
export default function Footer({ c }: { c: Content }) {
  const year = new Date().getFullYear();
  return (
    <footer className="pb-8">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <Separator className="mb-8" />
        <div className="flex flex-col items-center justify-between gap-3 text-sm text-muted-foreground md:flex-row">
          <p>
            © {year} · {c.hero.name}
          </p>
          <p className="ltr">{c.ui.builtWith}</p>
        </div>
      </div>
    </footer>
  );
}
