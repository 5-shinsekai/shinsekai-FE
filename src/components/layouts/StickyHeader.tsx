import React from 'react';

export default function StickyHeader({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <header className="sticky top-0 z-100  bg-white">{children}</header>;
}
