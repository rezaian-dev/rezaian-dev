import localFont from "next/font/local";

// 🔤 Self-hosted variable fonts — preloaded with metric-matched fallbacks (no FOUT / CLS)
export const vazirmatn = localFont({
  src: "../fonts/Vazirmatn.woff2",
  variable: "--font-vazirmatn",
  weight: "100 900",
  display: "swap",
  adjustFontFallback: "Arial",
});

export const inter = localFont({
  src: "../fonts/Inter.woff2",
  variable: "--font-inter",
  weight: "100 900",
  display: "swap",
  adjustFontFallback: "Arial",
});
