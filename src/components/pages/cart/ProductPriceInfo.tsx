'use client';
import ProductPrice from '@/components/commons/ProductPrice';
import CircleMinusIcon from '@/components/ui/icons/CircleMinusIcon';
import CirclePlusIcon from '@/components/ui/icons/CirclePlusIcon';
import { cn } from '@/lib/utils';
import { productThumbnailType } from '@/types/ProductDataTypes';
import React from 'react';

export default function ProductPriceInfo({
  quantity,
  product,
}: {
  quantity: number;
  product: productThumbnailType;
}) {
  return (
    <div className="flex justify-between items-end">
      <div className="flex gap-x-4">
        <CircleMinusIcon
          className={cn(
            'w-6 h-6 stroke-1 ',
            quantity === 2 ? 'stroke-custom-gray-300' : 'stroke-custom-gray-600'
          )}
          onClick={() => console.log('minus')}
        />
        <p className="font-semibold">{quantity}</p>
        <CirclePlusIcon
          className="w-6 h-6 stroke-1 stroke-custom-gray-600"
          onClick={() => console.log('plus')}
        />
      </div>
      <ProductPrice
        price={product.productPrice}
        discountRate={product.discountRate}
        priceClassName={cn(
          ' text-end',
          product.discountRate === 0
            ? 'text-[13px] font-semibold'
            : 'text-[11px]'
        )}
        discountPriceClassName="font-semibold text-[13px] text-center"
        discountRateClassName="hidden"
      />
    </div>
  );
}
