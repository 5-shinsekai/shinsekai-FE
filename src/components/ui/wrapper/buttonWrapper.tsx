import { cn } from '@/lib/utils';
import React from 'react';

export default function ButtonWrapper({
  children,
  className,
}: Readonly<{ children: React.ReactNode; className?: string }>) {
  return (
    <div
      className={cn(
        'fixed w-full space-y-5 border-t-2 border-custom-gray-200 bg-white bottom-0 pb-[1.875rem] pt-3 right-0 px-[1.75rem]',
        className
      )}
    >
      {children}
    </div>
  );
}
