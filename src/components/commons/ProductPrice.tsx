import React from 'react';
import { cn } from '@/lib/utils';

interface ProductPriceProps {
  price: number;
  discountRate: number;
  priceClassName?: string;
  discountPriceClassName?: string;
  discountRateClassName?: string;
  discountContainerClassName?: string;
  layout?: 'horizontal' | 'vertical';
}

export default function ProductPrice({
  price,
  discountRate,
  priceClassName,
  discountPriceClassName,
  discountRateClassName,
  discountContainerClassName,
  layout = 'vertical',
}: Readonly<ProductPriceProps>) {
  const discountedPrice = (
    (price * (100 - discountRate)) /
    100
  ).toLocaleString();

  return (
    <div
      className={`flex ${layout === 'horizontal' ? 'flex-row gap-x-4' : 'flex-col'}`}
    >
      <p
        className={cn(
          `${discountRate ? 'line-through text-custom-gray-500' : 'text-black font-bold'} text-nowrap`,
          priceClassName
        )}
      >
        {price.toLocaleString()}원
      </p>
      {discountRate > 0 && (
        <div
          className={cn(
            'flex justify-between w-full',
            discountContainerClassName
          )}
        >
          <p className={cn('text-4 font-bold', discountPriceClassName)}>
            {discountedPrice}원
          </p>
          <p
            className={cn(
              'text-4 font-bold text-custom-green-200',
              discountRateClassName
            )}
          >
            {discountRate}%
          </p>
        </div>
      )}
    </div>
  );
}
