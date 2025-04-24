import type { NextConfig } from 'next';
const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      'image.ajunews.com',
      'www.ikea.com',
      'upload.wikimedia.org',
      'image.istarbucks.co.kr',
      'sitem.ssgcdn.com',
      'cp-image.starbucks.co.kr',
      'search.pstatic.net',
      'simg.ssgcdn.com',
      'sitem.ssgcdn.com',
      'sstatic.ssgcdn.com',
      'prod-starbucks-product-details.s3.ap-northeast-2.amazonaws.com',
      'blogfiles.naver.net',
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
