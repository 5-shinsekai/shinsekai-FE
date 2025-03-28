import React from 'react';
import ProductListItem from '@/components/pages/products/ProductListItem';
import { productDummyData } from '@/data/DummyData/ProductDummyData';
export default function ProductListArticle() {
  return (
    <section>
      <ul className=" grid grid-cols-2 p-6 gap-x-3 gap-y-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {productDummyData.map((product) => (
          <ProductListItem key={product.id} product={product} size={165} />
        ))}
      </ul>
    </section>
  );
}
