'use client';

import React, { useState } from 'react';
import SubHeader from '@/components/layouts/SubHeader';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import RegisterCardTabMenu from '@/components/layouts/RegisterCardTabMenu';

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <SubHeader title="" showBackButton />
      <h1 className="text-[1.625rem] font-semibold py-[20px] px-[24px]">
        카드 등록
      </h1>
      <RegisterCardTabMenu />
      {children}
    </>
  );
}
