import React from 'react';
import { getProductDetail } from '@/actions/product-service';
import Image from 'next/image';
import ProductDescription from './ProductDescription';
import { Button } from '@/components/ui/button';
import CartIcon from '@/components/ui/icons/CartIcon';
import ProductPrice from '@/components/commons/ProductPrice';
import Tag from '@/components/commons/Tag';
import ShareIcon from '@/components/ui/icons/ShareIcon';
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
      <div id="productSummary" className="p-6 space-y-4">
        <div className="flex justify-between">
          <div className="space-x-1 items-center">
            <span className=" text-[1.375rem] font-bold">
              {productDetail.title}
            </span>
            <Tag
              active={productDetail.isNew}
              text="new"
              className="text-custom-green-100 text-sm"
            />
            <Tag
              active={productDetail.isBest}
              text="best"
              className="text-custom-red-100 text-sm"
            />
          </div>
          <ShareIcon className=" min-w-5 size-5 mt-2" />
        </div>
        <p className=" text-xs text-custom-gray-500">
          {productDetail.productSummary}
        </p>
        <ProductPrice
          price={productDetail.productPrice}
          discountRate={2}
          priceClassName={
            productDetail.discountRate ? 'text-[1.25rem]' : 'text-[1.125rem]'
          }
          discountPriceClassName="text-[1.25rem]"
          discountRateClassName="text-[1.25rem]"
          discountContainerClassName="justify-end gap-x-4 flex-row-reverse"
        />
      </div>
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
