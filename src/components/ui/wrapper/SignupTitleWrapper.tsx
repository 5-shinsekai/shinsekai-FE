import { cn } from '@/lib/utils';
import React from 'react';

export default function SignupTitleWrapper({
  children,
  className,
}: Readonly<{ children?: React.ReactNode; className?: string }>) {
  return (
    <section
      className={cn(
        'items-center px-7 mt-15 mb-10 space-y-6 break-keep text-balance',
        className
      )}
    >
      <h1 className="text-3xl font-bold">{children}</h1>
    </section>
  );
}
