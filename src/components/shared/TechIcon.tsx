import {
  siReact, siNextdotjs, siTypescript, siJavascript, siTailwindcss, siShadcnui, siMui, siMongodb, siRedis, siZod,
  siSwr, siReacthookform, siVite, siGit, siWebpack, siBootstrap, siEslint, siLeaflet, siReactrouter, siBetterauth,
  siJsonwebtokens, siFramer, type SimpleIcon,
} from "simple-icons";
import {
  Accessibility, Boxes, Component, FlaskConical, Gauge, PilcrowLeft, RefreshCw, Route, Search, Server, Sparkles,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

// 🎨 Official brand marks (simple-icons) — black/white marks fall back to currentColor
const brands: Record<string, SimpleIcon> = {
  "React": siReact, "React 18": siReact, "React 19": siReact,
  "Next.js": siNextdotjs, "Next.js 16": siNextdotjs,
  "TypeScript": siTypescript, "JavaScript": siJavascript,
  "Tailwind": siTailwindcss, "Tailwind CSS": siTailwindcss, "Tailwind v4": siTailwindcss,
  "shadcn/ui": siShadcnui, "MUI": siMui, "MongoDB": siMongodb, "Redis": siRedis, "Zod": siZod, "SWR": siSwr,
  "React Hook Form": siReacthookform, "Vite": siVite, "Git": siGit, "Webpack": siWebpack, "Bootstrap 5": siBootstrap,
  "ESLint + Prettier": siEslint, "Leaflet": siLeaflet, "React-Leaflet": siLeaflet, "React Router 7": siReactrouter,
  "Better Auth": siBetterauth, "JWT / RBAC": siJsonwebtokens, "Motion": siFramer,
};

// 🧩 Concepts without a brand mark → lucide glyphs
const glyphs: Record<string, LucideIcon> = {
  "Playwright": FlaskConical, "RSC": Server, "ISR": RefreshCw, "SEO": Search, "A11y": Accessibility,
  "Accessibility": Accessibility, "RTL": PilcrowLeft, "Context": Boxes, "API Routes": Route,
  "Clean Code": Sparkles, "Component-Driven": Component, "Performance": Gauge,
};

const mono = new Set(["000000", "FFFFFF"]);

// 🗂️ One hidden sprite holds each brand path exactly once; icons reference it via <use> (shrinks HTML ~20 KB gz)
export function TechSprite() {
  const unique = [...new Set(Object.values(brands))];
  return (
    <svg aria-hidden className="hidden">
      {unique.map((b) => (
        <symbol key={b.slug} id={`si-${b.slug}`} viewBox="0 0 24 24">
          <path d={b.path} fill="currentColor" />
        </symbol>
      ))}
    </svg>
  );
}

type Props = { name: string; className?: string };

// 🏷️ Icon for a tech label; renders nothing for unknown names
export default function TechIcon({ name, className }: Props) {
  const brand = brands[name];
  if (brand) {
    const color = mono.has(brand.hex.toUpperCase()) ? "currentColor" : `#${brand.hex}`;
    return (
      <svg aria-hidden className={cn("size-4 shrink-0", className)} style={{ color }}>
        <use href={`#si-${brand.slug}`} />
      </svg>
    );
  }
  const Glyph = glyphs[name];
  return Glyph ? <Glyph aria-hidden className={cn("size-4 shrink-0 text-brand", className)} /> : null;
}
