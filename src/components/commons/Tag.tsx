import React from 'react';
import { Caveat } from 'next/font/google';
import { cn } from '@/lib/utils';

const CaveatFont = Caveat({ subsets: ['latin'] });

export default function NewTag({
  active = false,
  text,
  className,
}: Readonly<{ active: boolean; text: string; className?: string }>) {
  return (
    <>
      {active && (
        <p
          className={cn(
            'text-[0.8125rem] font-bold ',
            CaveatFont.className,
            className
          )}
        >
          {text}
        </p>
      )}
    </>
  );
}
