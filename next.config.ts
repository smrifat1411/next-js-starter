import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Enable Turbopack configuration
  turbopack: {
    // Turbopack configuration options
  },
  // Optimize images
  images: {
    formats: ['image/webp', 'image/avif'],
  },
};

export default nextConfig;
