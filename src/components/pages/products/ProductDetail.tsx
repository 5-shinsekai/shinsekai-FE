import React from 'react';
import { getProductDetail } from '@/actions/product-service';
import Image from 'next/image';
export default async function ProductDetail({
  productId,
}: Readonly<{ productId: string }>) {
  const productDetail = await getProductDetail({ productCode: '1' });
  console.log(productDetail);
  return (
    <div>
      <Image
        src={productDetail.productImagePath}
        alt="Product Image"
        width={500}
        height={500}
      />
      {productId}
    </div>
  );
}
