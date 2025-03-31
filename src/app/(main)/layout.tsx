import MainHeader from '@/components/layouts/MainHeader';
import MainFooter from '@/components/layouts/MainFooter';
import React from 'react';
import MainTabMenu from '@/components/layouts/MainTabMenu';

export default function layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="relative">
      <div className=" sticky top-0 z-10  bg-white">
        <MainHeader />
        <MainTabMenu />
      </div>
      {children}
      <MainFooter />
    </div>
  );
}
