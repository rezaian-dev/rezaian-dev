import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  allowedDevOrigins: ["*.e2b.app"],
  images: {
    // کیفیت‌های مجاز برای next/image — پرتره با ۹۵ و کاور پروژه‌ها با ۹۰ سرو می‌شوند
    qualities: [75, 90, 95],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
