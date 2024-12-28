import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "images.credly.com",
      },
    ],
  },
};

export default nextConfig;
