import MainBannerSection from '@/components/pages/main/MainBannerSection';
import MainProductsSection from '@/components/pages/main/MainProductsSection';
import React from 'react';

export default async function page() {
  return (
    <main>
      <MainBannerSection />
      <MainProductsSection />
    </main>
  );
}
