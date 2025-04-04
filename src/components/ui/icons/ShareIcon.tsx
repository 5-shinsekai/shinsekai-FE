import React from 'react';
import { cn } from '@/lib/utils';
export default function ShareIcon({
  className,
}: Readonly<{ className?: string }>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 30 30"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn('lucide lucide-share-icon lucide-share', className)}
    >
      <path d="M4 12v8a2 4 0 0 0 2 2h20a2 2 0 0 0 2-2v-8" />
      <polyline points="20 6 16 2 12 6" />
      <line x1="16" x2="16" y1="2" y2="15" />
    </svg>
  );
}
