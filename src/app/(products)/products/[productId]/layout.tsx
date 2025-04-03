import MainHeader from '@/components/layouts/MainHeader';
import MainFooter from '@/components/layouts/MainFooter';
import React from 'react';
import StickyHeader from '@/components/layouts/StickyHeader';

export default function layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="relative">
      <StickyHeader>
        <MainHeader />
      </StickyHeader>
      {children}
      <MainFooter />
    </div>
  );
}
