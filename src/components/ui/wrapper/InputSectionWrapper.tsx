import { cn } from '@/lib/utils';
import React from 'react';

export default function InputSectionWrapper({
  children,
  className,
}: Readonly<{ children?: React.ReactNode; className?: string }>) {
  return (
    <section className={cn('p-7 space-y-4 text-center', className)}>
      {children}
    </section>
  );
}
