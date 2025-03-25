import MainHeader from '@/components/layouts/MainHeader';
import MainFooter from '@/components/layouts/MainFooter';
import React from 'react';

export default function layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <MainHeader />
      {children}
      <MainFooter />
    </>
  );
}
