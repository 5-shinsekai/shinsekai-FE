'use client';

import { getCartData } from '@/action/payment-service';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { CartOrderItemInfoType } from '@/types/PaymentDataType';
import ShowOrderProductList from './ShowOrderProductList';

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

  useEffect(() => {
    const fetchData = async () => {
      if (productCode === '') {
        const cartData = await getCartData();
        console.log(cartData);
        setOrderLogInfo(cartData.ordinaryProducts);
      } else {
        setOrderLogInfo([directOrderLog]);
      }
    };
    fetchData();
  }, [productCode]);

  return <ShowOrderProductList orderLogInfo={orderLogInfo} />;
}
