"use client";

import Link from "next/link";
import { Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Locale } from "@/data/content";

// 🌐 Switch between /fa and /en; the cookie keeps the choice for the root redirect
export default function LangToggle({ locale, label }: { locale: Locale; label: string }) {
  const target = locale === "fa" ? "en" : "fa";
  return (
    <Button asChild variant="outline" size="lg" className="rounded-full bg-background/60 px-3.5 font-semibold">
      <Link
        href={`/${target}`}
        hrefLang={target}
        // 🔤 Label is set in the font whose metrics fit its script (Inter for "English", Vazirmatn for «فارسی») so it sits optically centred on both pages
        className={target === "en" ? "ltr font-latin" : "font-sans"}
        onClick={() => {
          document.cookie = `locale=${target};path=/;max-age=31536000`;
        }}
      >
        <Languages className="size-4" />
        {label}
      </Link>
    </Button>
  );
}
