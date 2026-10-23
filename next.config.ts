import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  // Lets a phone on the same Wi-Fi load the dev server (this computer's address). Dev only.
  allowedDevOrigins: ["192.168.1.8"],
  images: {
    // Static export can't use the on-demand image optimizer; images are served as-is.
    unoptimized: true,
  },
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
