import React from 'react';
import { productDummyData } from '@/data/DummyData/ProductDummyData';
import { seasonType } from '@/types/ProductDataTypes';
import ProductListItem from '../products/ProductListItem';
import ScrollableList from '@/components/layouts/ScrollableList';

export default function MainProductList({
  season,
}: Readonly<{ season: seasonType }>) {
  // 데이터 fetch 관련 필요 현재 dummy 이용
  console.log(season);
  return (
    <ScrollableList className="gap-x-[1.125rem]">
      {productDummyData.map((product) => (
        <ProductListItem key={product.id} product={product} size={140} />
      ))}
    </ScrollableList>
  );
}
