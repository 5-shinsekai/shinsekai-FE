import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      'upload.wikimedia.org',
      'image.istarbucks.co.kr',
      'sitem.ssgcdn.com',
      'cp-image.starbucks.co.kr',
      'search.pstatic.net',
    ],
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
