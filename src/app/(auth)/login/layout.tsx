import LogInHeader from '@/components/layouts/LogInHeader';
import React from 'react';

export default function layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <LogInHeader />
      {children}
    </>
  );
}
