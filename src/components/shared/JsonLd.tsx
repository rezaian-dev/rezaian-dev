import { getContent, links, type Locale } from "@/data/content";
import { SITE_URL, seo } from "@/lib/seo";

// 🧾 Schema.org Person + WebSite structured data for rich results
export default function JsonLd({ locale }: { locale: Locale }) {
  const c = getContent(locale);
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: "Mohammadreza Rezaian",
        alternateName: "محمدرضا رضائیان",
        jobTitle: "Front-End Engineer",
        description: seo[locale].description,
        url: `${SITE_URL}/${locale}`,
        image: `${SITE_URL}${links.photo}`,
        email: `mailto:${links.email}`,
        telephone: links.phone,
        address: { "@type": "PostalAddress", addressLocality: "Karaj", addressCountry: "IR" },
        sameAs: [links.github, links.linkedin, links.telegram],
        knowsAbout: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Web Performance", "SEO", "Accessibility"],
        alumniOf: { "@type": "CollegeOrUniversity", name: c.about.education.school },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "Mohammadreza Rezaian",
        inLanguage: locale === "fa" ? "fa-IR" : "en-US",
        publisher: { "@id": `${SITE_URL}/#person` },
      },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
