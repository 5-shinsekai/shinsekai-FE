import MainHeader from '@/components/layouts/MainHeader';
import MainFooter from '@/components/layouts/MainFooter';
import React from 'react';

export default function layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="relative">
      <div className=" sticky top-0 z-10  bg-white">
        <MainHeader />
      </div>
      {children}
      <MainFooter />
    </div>
  );
}
