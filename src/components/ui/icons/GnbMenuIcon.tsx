import React from 'react';
import { cn } from '@/lib/utils';

export default function GnbMenuIcon({
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
      <path d="M24.3996 10H7.59961V11.2H24.3996V10Z" fill="#666767" />
      <path d="M24.3996 16.2H7.59961V17.4H24.3996V16.2Z" fill="#666767" />
      <path d="M24.3996 22.4H7.59961V23.6H24.3996V22.4Z" fill="#666767" />
    </svg>
  );
}
