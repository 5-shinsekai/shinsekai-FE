import React from 'react';
import ProductListItem from '@/components/pages/products/ProductListItem';
import { productType } from '@/types/ProductDataTypes';
export default function ProductList({
  data,
  bestTag = false,
}: Readonly<{ data: productType[]; bestTag?: boolean }>) {
  return (
    <section>
      <ul className=" grid grid-cols-2 p-6 gap-x-3 gap-y-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {data.map((product, index) => (
          <ProductListItem
            key={product.id + index}
            product={product}
            size={165}
            {...(bestTag ? { rank: index + 1 } : {})}
          />
        ))}
      </ul>
    </section>
  );
}
