import React from 'react';
import { getProductDetail } from '@/actions/product-service';
import Image from 'next/image';
import ProductDescription from './ProductDescription';
import { Button } from '@/components/ui/button';
import CartIcon from '@/components/ui/icons/CartIcon';
import ProductPrice from '@/components/commons/ProductPrice';
export default async function ProductDetail({
  productId,
}: Readonly<{ productId: string }>) {
  const productDetail = await getProductDetail({ productCode: '1' });
  console.log(productDetail);
  return (
    <div className="pb-30">
      <Image
        src={productDetail.productImagePath}
        alt="Product Image"
        width={600}
        height={600}
        className="mx-auto w-full md:w-3xl"
      />
      <p>{productDetail.title}</p>
      <p>{productDetail.isBest}</p>
      <p>{productDetail.isNew}</p>
      <p>{productDetail.productSummary}</p>
      <ProductPrice
        price={productDetail.productPrice}
        discountRate={2}
        priceClassName={productDetail.discountRate ? 'text-2xl' : 'text-xl'}
        discountPriceClassName="text-2xl"
        discountRateClassName="text-2xl"
        discountContainerClassName="justify-end gap-x-4 flex-row-reverse"
      />
      <ProductDescription ImagePath={productDetail.productDescriptionPath} />

      <div className="flex px-6 pt-4 justify-between bg-white inset-shadow-xs h-28 w-full rounded-t-3xl fixed bottom-0">
        <CartIcon className="min-w-9 size-9 " />
        <Button size="md" color="green" className="w-5/6">
          구매하기
        </Button>
      </div>
    </div>
  );
}
