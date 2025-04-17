'use client';
import React from 'react';
import { cn } from '@/lib/utils';
export default function CirclePlusIcon({
  className,
  onClick,
}: Readonly<{ className?: string; onClick?: () => void }>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn(
        'lucide lucide-circle-plus-icon lucide-circle-plus',
        className
      )}
      onClick={onClick}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M8 12h8" />
      <path d="M12 8v8" />
      <circle cx="12" cy="12" r="10" />
      <path d="M8 12h8" />
    </svg>
  );
}
