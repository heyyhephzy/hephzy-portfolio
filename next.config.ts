import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  // Lets a phone on the same Wi-Fi load the dev server (this computer's address). Dev only.
  allowedDevOrigins: ["192.168.1.8"],
  images: {
    // 95 is used on case study pages so screenshots stay sharp
    qualities: [75, 95],
  },
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
