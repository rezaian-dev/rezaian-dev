import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Direction } from "radix-ui";
import { TooltipProvider } from "@/components/ui/tooltip";
import ThemeProvider from "@/components/providers/ThemeProvider";
import { getContent, isLocale, links, locales } from "@/data/content";
import { inter, vazirmatn } from "@/lib/fonts";
import { cn } from "@/lib/utils";

type Props = { children: React.ReactNode; params: Promise<{ locale: string }> };

// 🗺️ Pre-render both locales at build time
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// 🔎 Locale-aware SEO metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const c = getContent(isLocale(locale) ? locale : "fa");
  return {
    title: c.meta.title,
    description: c.meta.description,
    keywords: ["Front-End Engineer", "React", "Next.js", "TypeScript", "محمدرضا رضائیان", "Mohammadreza Rezaian"],
    authors: [{ name: "Mohammadreza Rezaian", url: links.github }],
    metadataBase: new URL("https://rezaian.dev"),
    alternates: { languages: { fa: "/fa", en: "/en" } },
    openGraph: {
      title: c.meta.title,
      description: c.meta.description,
      images: [links.photo],
      locale: locale === "en" ? "en_US" : "fa_IR",
      type: "website",
    },
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#0f1117" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dir = locale === "fa" ? "rtl" : "ltr";

  return (
    // 🎨 suppressHydrationWarning: next-themes sets the class before paint (no theme flash)
    <html lang={locale} dir={dir} className={cn(vazirmatn.variable, inter.variable)} suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Direction.Provider dir={dir}>
            <TooltipProvider>{children}</TooltipProvider>
          </Direction.Provider>
        </ThemeProvider>
      </body>
    </html>
  );
}
