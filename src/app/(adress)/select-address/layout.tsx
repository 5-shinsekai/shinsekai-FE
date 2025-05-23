import React from 'react';
import SubHeader from '@/components/layouts/SubHeader';

export default function layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <SubHeader title="배송지 관리" showBackButton showCloseButton />
      {children}
    </>
  );
}
