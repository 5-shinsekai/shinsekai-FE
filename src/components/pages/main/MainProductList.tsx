import React from 'react';
import { EventType } from '@/types/ProductDataTypes';
import ProductListItem from '../products/ProductListItem';
import ScrollableList from '@/components/layouts/ScrollableList';
import { getEventProductList } from '@/action/product-service';

export default async function MainProductList({
  event,
}: Readonly<{ event: EventType }>) {
  const productList = await getEventProductList(event.eventId);
  console.log(productList);
  return (
    <ScrollableList className="gap-x-[1.125rem]">
      {productList.slice(0, 10).map((product) => (
        <ProductListItem key={product} productCode={product} size={140} />
      ))}
    </ScrollableList>
  );
}
