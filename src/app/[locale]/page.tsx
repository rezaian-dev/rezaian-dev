import { notFound } from "next/navigation";
import { getContent, isLocale } from "@/data/content";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Books from "@/components/Books";
import Skills from "@/components/Skills";
import Highlights from "@/components/Highlights";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Background from "@/components/shared/Background";
import { TechSprite } from "@/components/shared/TechIcon";

// 🏠 Single-page portfolio — every section receives the locale dictionary
export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const c = getContent(locale);
  // 🪶 Client components only get the slices they render (smaller RSC payload)
  const chrome = { nav: c.nav, ui: c.ui, hero: c.hero, footer: c.footer };

  return (
    <main id="top" className="relative overflow-x-clip">
      <Background />
      <TechSprite />
      <Navbar locale={locale} c={chrome} />
      <Hero c={c} />
      <About c={c} />
      <Projects c={c} />
      <Books c={c} />
      <Skills c={c} />
      <Highlights c={c} />
      <Contact c={c} />
      <Footer c={c} locale={locale} />
    </main>
  );
}
