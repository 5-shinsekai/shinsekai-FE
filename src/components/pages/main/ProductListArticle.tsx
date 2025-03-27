import React from 'react';
import { productDummyData } from '@/data/DummyData/ProductDummyData';
import { seasonType } from '@/types/ProductDataTypes';
import Image from 'next/image';
export default function ProductListArticle({
  season,
}: Readonly<{ season: seasonType }>) {
  // 데이터 fetch 관련 필요 현재 dummy 이용

  return (
    <article className="">
      <p className="px-6 mb-[30px] text-2xl font-bold">{season.seasonName}</p>
      <ul
        style={{ scrollbarWidth: 'none' }}
        className="flex flex-nowrap overflow-x-scroll whitespace-nowrap px-6 gap-x-[18px] scrollbar-hide"
      >
        {productDummyData.map((product) => (
          <li
            key={product.id}
            className="shrink-0 flex flex-col gap-y-3 w-[140px]"
          >
            <Image
              src={product.productImage}
              alt={product.title}
              width={140}
              height={140}
            />
            <p className=" text-[15px] font-medium text-wrap">
              {product.title}
            </p>
            <p className="text-[16px] font-bold">
              {product.price.toLocaleString()}원
            </p>
          </li>
        ))}
      </ul>
    </article>
  );
}
