import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  allowedDevOrigins: ["*.e2b.app"],
  images: {
    // 🖼️ Allowed next/image qualities — portrait 90, project covers 85
    qualities: [75, 85, 90],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
