import type { NextConfig } from 'next';
const nextConfig: NextConfig = {
  /* config options here */
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      // Basic redirect
      {
        source: '/',
        destination: '/main',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
