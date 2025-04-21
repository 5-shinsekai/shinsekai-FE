import type { NextConfig } from 'next';
import { domainList } from './domains';
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
