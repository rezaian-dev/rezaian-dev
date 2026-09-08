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

// 🏠 Single-page portfolio — every section receives the locale dictionary
export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const c = getContent(locale);

  return (
    <main id="top" className="relative overflow-x-clip">
      <Background />
      <Navbar locale={locale} c={c} />
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
