import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // Skip ESLint during production builds (useful for Vercel deployments)
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
