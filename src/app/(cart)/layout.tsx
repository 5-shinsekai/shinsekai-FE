import MainFooter from '@/components/layouts/MainFooter';
import React from 'react';
import StickyHeader from '@/components/layouts/StickyHeader';
import SubHeader from '@/components/layouts/SubHeader';

export default function layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="relative">
      <StickyHeader>
        <SubHeader title="장바구니" showCloseButton />
      </StickyHeader>
      {children}
      <MainFooter />
    </div>
  );
}
