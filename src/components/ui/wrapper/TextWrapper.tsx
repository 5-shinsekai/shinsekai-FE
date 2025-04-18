import { cn } from '@/lib/utils';
import React from 'react';

export default function TextWrapper({
  children,
  term,
  className,
}: {
  children?: React.ReactNode;
  term?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'bg-custom-gray-100 text-custom-gray-500 mx-10 px-5 py-2 my-5',
        className
      )}
    >
      <p className="text-[0.875rem]">{children}</p>
      <p className="text-[0.75rem]">{term}</p>
    </div>
  );
}
