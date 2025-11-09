import type { NextConfig } from "next";

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
} as any satisfies NextConfig;

export default nextConfig;