import React from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Caveat } from 'next/font/google';
import { productType } from '@/types/ProductDataTypes';

const CaveatFont = Caveat({ subsets: ['latin'] });

export default function ProductListItem({
  product,
  size,
}: Readonly<{ product: productType; size: number }>) {
  return (
    <li
      key={product.id}
      className={`shrink-0 flex justify-self-center flex-col w-${size}`}
    >
      <Image
        src={product.productImage}
        alt={product.title}
        width={size}
        height={size}
      />
      <div
        className={cn(
          'h-6 flex text-[13px] font-bold gap-x-2 items-center',
          CaveatFont.className
        )}
      >
        {product.isNew && <p className="text-[#30BB7A]">new</p>}
        {product.isBest && <p className="text-[#FF5452]">best</p>}
      </div>
      <p className=" text-[15px] font-medium text-wrap">{product.title}</p>
      <p
        className={`mt-2 ${product.discountRate > 0 ? 'line-through text-[13px] text-[#7F7F7F]' : 'text-[16px] font-bold'}`}
      >
        {product.price.toLocaleString()}원
      </p>
      {product.discountRate > 0 && (
        <div className="flex justify-between">
          <p className="text-[16px] font-bold">
            {(
              (product.price * (100 - product.discountRate)) /
              100
            ).toLocaleString()}
            원{' '}
          </p>
          <p className="text-[16px] font-bold text-[#00A862]">
            {product.discountRate}%
          </p>
        </div>
      )}
    </li>
  );
}
