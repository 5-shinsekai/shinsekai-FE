import React from 'react';
import { productDummyData } from '@/data/DummyData/ProductDummyData';
import { seasonType } from '@/types/ProductDataTypes';
import ProductListItem from '../products/ProductListItem';

export default function ProductListArticle({
  season,
}: Readonly<{ season: seasonType }>) {
  // 데이터 fetch 관련 필요 현재 dummy 이용

  return (
    <article>
      <p className="px-6 mb-[30px] text-2xl font-bold">{season.seasonName}</p>
      {/* ul 부분은 렌더링 형식 (grid로 보여줄건지 한줄에 스크롤로 보여줄건지)*/}
      <ul
        style={{ scrollbarWidth: 'none' }}
        className="flex flex-nowrap overflow-x-scroll whitespace-nowrap px-6 gap-x-[18px]"
      >
        {productDummyData.map((product) => (
          <ProductListItem key={product.id} product={product} />
        ))}
      </ul>
    </article>
  );
}
