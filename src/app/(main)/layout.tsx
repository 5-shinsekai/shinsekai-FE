import MainHeader from '@/components/layouts/MainHeader';
import MainFooter from '@/components/layouts/MainFooter';
import React from 'react';
import MainTabMenu from '@/components/layouts/MainTabMenu';
import StickyHeader from '@/components/layouts/StickyHeader';

export default function layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="relative">
      <StickyHeader>
        <MainHeader />
        <MainTabMenu />
      </StickyHeader>
      {children}
      <MainFooter />
    </div>
  );
}
