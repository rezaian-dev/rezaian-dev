import type { MetadataRoute } from "next";
import { locales } from "@/data/content";
import { SITE_URL } from "@/lib/seo";

// 🗺️ One entry per locale with hreflang alternates
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return locales.map((locale) => ({
    url: `${SITE_URL}/${locale}`,
    lastModified,
    changeFrequency: "monthly",
    priority: locale === "fa" ? 1 : 0.9,
    alternates: { languages: { fa: `${SITE_URL}/fa`, en: `${SITE_URL}/en` } },
  }));
}
