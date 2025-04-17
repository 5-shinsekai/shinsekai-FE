import React from 'react';
import { cn } from '@/lib/utils';
export default function LeftArrowIcon({
  className,
}: Readonly<{ className?: string }>) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="-2 -7 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.04862 12.0001L15.4244 4.6244L14.5758 3.77588L6.35156 12.0001L14.5758 20.2244L15.4244 19.3758L8.04862 12.0001Z"
        fill="black"
      />
    </svg>
  );
}
