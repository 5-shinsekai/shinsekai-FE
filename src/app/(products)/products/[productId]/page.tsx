import React from 'react';
import ProductDetail from '@/components/pages/products/ProductDetail';
export default function page({ params }: { params: { productId: string } }) {
  //   Thumbnail,이름 가격 설명
  return (
    <main>
      <ProductDetail productId={params.productId}></ProductDetail>
      <></>
    </main>
  );
}
