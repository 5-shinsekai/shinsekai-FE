import React from 'react';
import { cn } from '@/lib/utils';
export default function EmptyCart({ className }: { className?: string }) {
  return (
    <div className={cn('justify-items-center pt-[40%]', className)}>
      <svg
        className="w-12 h-12 items-center text-custom-gray-300"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1zm-9-1a2 2 0 1 1 4 0v1h-4V6z"
        />
      </svg>
      <p className="mt-4 text-sm text-custom-gray-400">
        장바구니가 비어있습니다.
      </p>
    </div>
  );
}
