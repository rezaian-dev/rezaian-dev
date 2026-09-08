import "./globals.css";

// 🌱 Root pass-through — the <html> element is rendered per-locale in app/[locale]/layout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
