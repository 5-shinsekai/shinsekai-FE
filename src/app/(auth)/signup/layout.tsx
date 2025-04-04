import SignUpHeader from '@/components/layouts/SignUpHeader';
import StickyHeader from '@/components/layouts/StickyHeader';
import React from 'react';

export default function layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <StickyHeader>
        <SignUpHeader />
      </StickyHeader>
      {children}
    </>
  );
}
