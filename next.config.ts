import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Serve images directly without the optimizer. The product shots are already
  // small webp files, and this avoids host-side optimizer failures.
  images: { unoptimized: true },
};

export default nextConfig;
