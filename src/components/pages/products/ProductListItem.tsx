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
          {/* svg 분리할 것 */}
          {rank && (
            <svg
              className=" absolute top-0 right-1/12 text-xs fill-custom-green-200"
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
            'h-6 flex text-[0.8125rem] font-bold gap-x-2 items-center',
            CaveatFont.className
          )}
        >
          {product.isNew && <p className="text-custom-green-100">new</p>}
          {product.isBest && <p className="text-custom-red-100">best</p>}
        </div>
        <p className=" text-[0.9375rem] font-medium break-all">
          {product.title}
        </p>
        <p
          className={`mt-2 ${product.discountRate > 0 ? 'line-through text-[0.8125rem] text-custom-gray-500' : 'text-4 font-bold'}`}
        >
          {product.price.toLocaleString()}원
        </p>
        {product.discountRate > 0 && (
          <div className="flex justify-between">
            <p className="text-4 font-bold">
              {(
                (product.price * (100 - product.discountRate)) /
                100
              ).toLocaleString()}
              원{' '}
            </p>
            {/* 자주쓰는 스타일 등을 컴포넌트화 진행 */}
            <p className="text-4 font-bold text-custom-green-200">
              {product.discountRate}%
            </p>
          </div>
        )}
      </li>
    </Link>
  );
}
