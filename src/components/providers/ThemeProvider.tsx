"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ComponentProps } from "react";

// 🌓 Class-based theming; the inline script applies the theme before first paint
export default function ThemeProvider(props: ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange {...props} />;
}
