import { Chilanka } from 'next/font/google';
import React from 'react';

export default function StickyHeader({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <header className="sticky top-0 z-10  bg-white">{children}</header>;
}
