import type { Locale } from "@/data/content";

// 🔎 Central SEO config — change the domain here once
export const SITE_URL = "https://rezaian.dev";

export const seo = {
  fa: {
    title: "محمدرضا رضائیان | مهندس فرانت‌اند",
    description:
      "مهندس فرانت‌اند با ۳+ سال تجربه در React، Next.js و TypeScript. سازندهٔ محصولات Production-grade با تمرکز بر Performance، SEO و تجربهٔ کاربر فارسی.",
  },
  en: {
    title: "Mohammadreza Rezaian | Front-End Engineer",
    description:
      "Front-End engineer with 3+ years in React, Next.js and TypeScript. Building production-grade web products focused on performance, SEO and real user experience.",
  },
} satisfies Record<Locale, { title: string; description: string }>;

export const keywords = [
  "Mohammadreza Rezaian",
  "محمدرضا رضائیان",
  "Front-End Engineer",
  "React Developer",
  "Next.js Developer",
  "TypeScript",
  "توسعه‌دهنده فرانت‌اند",
  "برنامه‌نویس React",
];
