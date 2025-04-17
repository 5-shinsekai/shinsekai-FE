'use client';

import React from 'react';
import SubHeader from '@/components/layouts/SubHeader';

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <SubHeader title="" showCloseButton />
      <h1 className="text-[1.625rem] font-semibold py-[20px] px-[24px]">
        결제하기
      </h1>
      {children}
    </>
  );
}
