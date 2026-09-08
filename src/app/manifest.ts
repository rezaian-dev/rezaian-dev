import type { MetadataRoute } from "next";

// 📱 PWA manifest — enables "Add to Home Screen" with the brand icon
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mohammadreza Rezaian — Front-End Engineer",
    short_name: "Rezaian",
    description: "Front-End Engineer · React & Next.js",
    start_url: "/",
    display: "standalone",
    background_color: "#0f1117",
    theme_color: "#6366f1",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
