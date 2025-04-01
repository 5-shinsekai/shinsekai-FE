import React from 'react';
import { cn } from '@/lib/utils';
export default function CloseIcon({
  className,
}: Readonly<{ className?: string }>) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
    >
      <path
        d="M8.36304 22.7881L22.7879 8.36328L23.6364 9.2118L9.21156 23.6366L8.36304 22.7881Z"
        fill="black"
      />
      <path
        d="M8.36304 9.21131L9.21156 8.36279L23.6364 22.7877L22.7879 23.6362L8.36304 9.21131Z"
        fill="black"
      />
    </svg>
  );
}
