import React from 'react';
import { cn } from '@/lib/utils';
export default function ScrollableList({
  children,
  className,
}: Readonly<{ children: React.ReactNode; className?: string }>) {
  return (
    <ul
      className={cn('flex overflow-x-scroll px-6', className)}
      style={{ scrollbarWidth: 'none' }}
    >
      {children}
    </ul>
  );
}
