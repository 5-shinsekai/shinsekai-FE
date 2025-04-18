import { cn } from '@/lib/utils';
import React from 'react';

export default function Divider({ className }: { className?: string }) {
  return <div className={cn('my-3 mx-5 border border-gray-200', className)} />;
}
