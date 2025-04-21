import React from 'react';
import { getProductDetail } from '@/action/product-service';
import Image from 'next/image';
import ProductPrice from '@/components/commons/ProductPrice';
import Tag from '@/components/commons/Tag';
import ShareIcon from '@/components/ui/icons/ShareIcon';
import ProductDescription from './ProductDescription';
import ProductActionBar from './ProductActionBar';
export default async function ProductDetail({
  productId,
}: Readonly<{ productId: string }>) {
  const productDetail = await getProductDetail({ productCode: productId });
  console.log(productDetail);
  return (
    <div className="pb-30">
      <Image
        src={productDetail.thumbnailUrl}
        alt={productDetail.productSummary}
        width={600}
        height={600}
        className="mx-auto w-full md:w-3xl"
      />
      <section id="productSummary" className="p-6 space-y-4">
        <div className="flex justify-between">
          <h1 className=" text-[1.375rem] font-bold w-fit space-x-2 ">
            <span>{productDetail.productName}</span>
            <Tag
              active={true}
              text="new"
              className="text-custom-green-100 text-sm"
            />
            <Tag
              active={true}
              text="best"
              className="text-custom-red-100 text-sm"
            />
          </h1>
          <ShareIcon className=" min-w-5 size-5 mt-2" />
        </div>
        <h2 className=" text-xs text-custom-gray-500">
          {productDetail.productSummary}
        </h2>
        <ProductPrice
          price={productDetail.productPrice}
          discountRate={productDetail.discountRate}
          priceClassName={
            productDetail.discountRate ? 'text-[1.25rem]' : 'text-[1.125rem]'
          }
          discountPriceClassName="text-[1.25rem]"
          discountRateClassName="text-[1.25rem]"
          discountContainerClassName="justify-end gap-x-4 flex-row-reverse"
        />
      </section>

      <ProductDescription ImageHTML={productDetail.contentImages} />

      <ProductActionBar productDetail={productDetail} />
    </div>
  );
}
