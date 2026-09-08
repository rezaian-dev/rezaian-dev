<div align="center">

# Mohammadreza Rezaian — Portfolio

**Bilingual (FA / EN) · Light & Dark · Zero layout shift**

Next.js 16 · React 19 · TypeScript · shadcn/ui · Tailwind CSS v4 · Motion · next-themes

</div>

---

## ✨ Highlights

- 🌐 **Bilingual routing** — `/fa` (RTL, Vazirmatn) and `/en` (LTR, Inter); root redirects by cookie → `Accept-Language`
- 🌓 **Theming** — light / dark / system via `next-themes`, applied before first paint (no flash)
- 🧩 **shadcn/ui** — Button, Badge, Card, Sheet, Tooltip, DropdownMenu, Separator on semantic tokens
- 🎬 **Animations** — Tailwind `@theme` keyframes + Motion; transform/opacity only, `prefers-reduced-motion` respected
- 🖼️ **Images** — `next/image` with blur placeholders, fixed aspect boxes, AVIF/WebP, quality 90–95
- 📏 **Measured CLS = 0.00** across desktop, mobile, both themes, both locales and throttled 3G

## 🚀 Getting started

```bash
npm install
npm run dev      # http://localhost:3000 → /fa or /en
npm run build && npm start
```

## 🗂️ Project structure

```
src/
├── app/
│   ├── layout.tsx            🌱 root pass-through
│   ├── globals.css           🎨 tokens, themes, utilities, keyframes
│   ├── not-found.tsx
│   └── [locale]/
│       ├── layout.tsx        🌐 <html lang dir>, fonts, providers, metadata
│       └── page.tsx          🏠 section composition
├── components/
│   ├── Navbar · Hero · About · Projects · Books · Skills · Highlights · Contact · Footer
│   ├── shared/               ♻️ Reveal, GlowCard, Magnetic, ThemeToggle, LangToggle, Background
│   ├── providers/            🌓 ThemeProvider
│   └── ui/                   🧩 shadcn/ui primitives
├── data/
│   ├── content.ts            📝 ALL copy, links & projects (fa + en)
│   └── blur.ts               🌫️ base64 blur placeholders
├── fonts/                    🔤 self-hosted variable fonts (next/font/local)
├── lib/                      🛠️ fonts.ts, utils.ts
└── proxy.ts                  🔀 locale redirect
public/                       🖼️ photo, project covers, resume PDF
```

## ✏️ Editing content

Everything lives in **`src/data/content.ts`** — the `fa` and `en` objects share one type, so the compiler flags any missing translation. Add a `demo` URL to a project to show a *Live Demo* button.

## 🧪 Quality checks performed

| Check | Result |
|---|---|
| Cumulative Layout Shift (8 scenarios, incl. slow 3G) | **0.0000** |
| Theme class present at first paint | ✅ |
| Layout unchanged on theme switch / sheet open / close | ✅ |
| Hydration warnings / console errors | 0 |
| Fonts preloaded, no external font requests | ✅ |
| `tsc --noEmit` / `next build` | clean · both locales SSG |

---

<div align="center">
<sub>© Mohammadreza Rezaian · <a href="https://github.com/rezaian-dev">github.com/rezaian-dev</a></sub>
</div>
