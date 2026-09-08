import type { Metadata } from "next";
import { SITE_URL } from "@/lib/seo";
import "./globals.css";

// 🌍 Base URL for every route (incl. not-found) so OG images resolve absolutely
export const metadata: Metadata = { metadataBase: new URL(SITE_URL) };

// 🌱 Root pass-through — the <html> element is rendered per-locale in app/[locale]/layout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
