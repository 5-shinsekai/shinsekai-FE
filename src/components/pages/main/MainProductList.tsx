import React from 'react';
import { productDummyData } from '@/data/DummyData/ProductDummyData';
import { EventType } from '@/types/ProductDataTypes';
import ProductListItem from '../products/ProductListItem';
import ScrollableList from '@/components/layouts/ScrollableList';

export default function MainProductList({
  event,
}: Readonly<{ event: EventType }>) {
  console.log(event);
  return (
    <ScrollableList className="gap-x-[1.125rem]">
      {productDummyData.map((product) => (
        <ProductListItem key={product.id} product={product} size={140} />
      ))}
    </ScrollableList>
  );
}
