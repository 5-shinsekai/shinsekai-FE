import React from 'react';
import SubHeader from '@/components/layouts/SubHeader';

export default function layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <SubHeader title="주소검색" showBackButton />
      {children}
    </>
  );
}
