import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
      additionalData: `$var: red;`,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-*.r2.dev",
      },
    ],
  },
};

export default nextConfig;
