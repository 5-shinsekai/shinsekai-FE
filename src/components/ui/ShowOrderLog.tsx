import { ShowOrderProductDataType } from '@/types/PaymentDataType';
import React from 'react';
import Image from 'next/image';

export function ShowOrderLog({
  productInfoList,
  orderListCount,
}: {
  productInfoList: Partial<ShowOrderProductDataType>;
  orderListCount: number;
}) {
  return (
    <div className="relative py-2 flex items-center gap-2.5">
      <Image
        src={productInfoList.productImageUrl || ''}
        alt={productInfoList.productName || ''}
        width={70}
        height={70}
        className="rounded-md"
      />
      <p className="text-xs">{productInfoList.productName}</p>
      <p className="absolute text-xs right-0.5 text-custom-green-300">
        외 {orderListCount}건
      </p>
    </div>
  );
}

export function ExpandedShowOrderLog({
  productInfoList,
}: {
  productInfoList: Partial<ShowOrderProductDataType>;
}) {
  return (
    <div className="flex items-center gap-2.5">
      <Image
        src={productInfoList.productImageUrl || ''}
        alt={productInfoList.productName || ''}
        width={70}
        height={70}
        className="rounded-sm"
      />
      <div className="space-y-0.5 ">
        <p className="text-xs leading-3">{productInfoList.productName}</p>
        <p className="text-[0.7rem] text-gray-500">
          주문수량 : {productInfoList.quantity}개
        </p>
        <p className="text-[0.9rem]">
          {(productInfoList.productTotalPrice || 0).toLocaleString()}원
        </p>
      </div>
    </div>
  );
}
