'use client';

import { getProductInfoByProductCode } from '@/action/payment-service';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import ShowOrderProductList from './ShowOrderProductList';

export interface CartOrderItemInfoType {
  cartUuid: string;
  productCode: string;
  productOptionListId: number;
  quantity: number;
  checked: boolean;
  engravingMessage: string;
}

export interface OrderListType {
  ordinaryProducts: Partial<CartOrderItemInfoType>[];
  frozenProducts: Partial<CartOrderItemInfoType>[];
}

interface ProductDataType {
  productCode: string;
  productName: string;
  productPrice: number;
  productSummary: string;
  contentImages: string;
  thumbnailUrl: string;
  userPurchaseLimit: number;
  discountRate: number;
  productOptionIds: [number];
  frozen: boolean;
  new: boolean;
  best: boolean;
  engraving: boolean;
}

export interface ShowOrderProductDataType {
  productCode: string;
  productName: string;
  productPrice: number;
  discountRate: number;
  quantity: number;
  thumbnailUrl: string;
}

export default function OrderLogInfoSection() {
  const params = useSearchParams();
  const productCode = params.get('productCode') || '';
  const productOptionListId = Number(params.get('productOptionListId')) || 0;
  const quantity = Number(params.get('quantity')) || 1;
  const engravingMessage = params.get('engravingMessage') || '';

  const directOrderLog: Partial<CartOrderItemInfoType> = {
    productCode,
    productOptionListId,
    quantity,
    engravingMessage,
  };

  const [orderLogInfo, setOrderLogInfo] = useState<
    Partial<CartOrderItemInfoType>[]
  >([directOrderLog]);

  const [showInfoList, setShowInfoList] = useState<ShowOrderProductDataType[]>(
    []
  );

  const totalQuantity = orderLogInfo.reduce(
    (sum, item) => sum + (item.quantity || 0),
    0
  );

  useEffect(() => {
    if (directOrderLog) {
      const fetchCartData = async () => {
        const data: ProductDataType =
          await getProductInfoByProductCode(productCode);
        setShowInfoList([
          {
            productCode: data.productCode,
            productName: data.productName,
            productPrice: data.productPrice,
            discountRate: data.discountRate,
            quantity: quantity,
            thumbnailUrl: data.thumbnailUrl,
          },
        ]);
        console.log(showInfoList);
      };
      fetchCartData();
    } else {
      // 장바구니 데이터 fetch
      setOrderLogInfo([]);
    }
  }, []);

  return (
    <section className="px-6">
      <header className="flex items-center">
        <h1 className="font-semibold text-[1.125rem] py-2">주문내역</h1>
        <p className="before:content-['|'] before:mr-2 px-2 text-xs text-custom-gray-700">
          배송지 1곳 / 상품 {totalQuantity}개
        </p>
      </header>
      <ShowOrderProductList showInfoList={showInfoList} />
    </section>
  );
}
