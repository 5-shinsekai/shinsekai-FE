'use client';
import React from 'react';
import { cn } from '@/lib/utils';
import { deleteCartItem } from '@/action/cart-service';
export default function CircleXIcon({
  className,
  onClick,
  type,
  cartUuid,
}: Readonly<{
  className?: string;
  onClick?: () => void;
  type?: string;
  cartUuid?: string;
}>) {
  const isCart = type === 'cart';

  const handleClick = () => {
    if (isCart) {
      deleteCartItem(cartUuid ?? '');
    } else {
      onClick?.();
    }
  };

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
      className={cn('lucide lucide-circle-x-icon lucide-circle-x', className)}
      onClick={handleClick}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m15 9-6 6" />
      <path d="m9 9 6 6" />
    </svg>
  );
}
