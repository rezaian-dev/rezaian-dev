import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Direction } from "radix-ui";
import { TooltipProvider } from "@/components/ui/tooltip";
import ThemeProvider from "@/components/providers/ThemeProvider";
import JsonLd from "@/components/shared/JsonLd";
import { isLocale, locales } from "@/data/content";
import { inter, vazirmatn } from "@/lib/fonts";
import { SITE_URL, keywords, seo } from "@/lib/seo";
import { cn } from "@/lib/utils";

type Props = { children: React.ReactNode; params: Promise<{ locale: string }> };

// 🗺️ Pre-render both locales at build time
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// 🔎 Concise, locale-aware metadata — OG/Twitter images come from opengraph-image.png
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const l = isLocale(locale) ? locale : "fa";
  const s = seo[l];

  return {
    metadataBase: new URL(SITE_URL),
    title: { default: s.title, template: `%s | Mohammadreza Rezaian` },
    description: s.description,
    keywords,
    authors: [{ name: "Mohammadreza Rezaian", url: SITE_URL }],
    creator: "Mohammadreza Rezaian",
    alternates: {
      canonical: `/${l}`,
      languages: { fa: "/fa", en: "/en", "x-default": "/fa" },
    },
    openGraph: {
      type: "profile",
      siteName: "Mohammadreza Rezaian",
      title: s.title,
      description: s.description,
      url: `/${l}`,
      locale: l === "fa" ? "fa_IR" : "en_US",
      alternateLocale: l === "fa" ? "en_US" : "fa_IR",
      firstName: "Mohammadreza",
      lastName: "Rezaian",
    },
    twitter: { card: "summary_large_image", title: s.title, description: s.description },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
    manifest: "/manifest.webmanifest",
    category: "technology",
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
        <JsonLd locale={locale} />
        <ThemeProvider>
          <Direction.Provider dir={dir}>
            <TooltipProvider>{children}</TooltipProvider>
          </Direction.Provider>
        </ThemeProvider>
      </body>
    </html>
  );
}
