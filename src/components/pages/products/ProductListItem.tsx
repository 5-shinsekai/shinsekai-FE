import React from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Caveat } from 'next/font/google';
import { productType } from '@/types/ProductDataTypes';
import Link from 'next/link';
const CaveatFont = Caveat({ subsets: ['latin'] });

export default function ProductListItem({
  product,
  size,
  rank,
}: Readonly<{ product: productType; size: number; rank?: number }>) {
  return (
    <Link href={`/products/${product.id}`} className="shrink-0">
      <li
        key={product.id}
        className="flex flex-col mx-auto"
        style={{
          maxWidth: `${size}px`,
        }}
      >
        <div className="relative">
          <Image
            src={product.productImage}
            alt={product.title}
            width={size}
            height={size}
            className="mx-auto"
          />
          {rank && (
            <svg
              className=" absolute top-0 right-1/12 text-xs fill-[#00A862]"
              viewBox="0 0 24 30"
              width="24"
              height="30"
            >
              <path d="M0 0 H24 V24 L12 30 L0 24 Z" />
              <text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                className="fill-white font-semibold"
              >
                {rank}
              </text>
            </svg>
          )}
        </div>
        <div
          className={cn(
            'h-6 flex text-[13px] font-bold gap-x-2 items-center',
            CaveatFont.className
          )}
        >
          {product.isNew && <p className="text-[#30BB7A]">new</p>}
          {product.isBest && <p className="text-[#FF5452]">best</p>}
        </div>
        <p className=" text-[15px] font-medium break-all">{product.title}</p>
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
    </Link>
  );
}
