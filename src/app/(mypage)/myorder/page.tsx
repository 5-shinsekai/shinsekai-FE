import { getMyOrderList } from '@/action/payment-service';
import MyOrderLog from '@/components/pages/mypage/MyOrderLog';
import { MyOrderInfoDataType } from '@/types/PaymentDataType';
import React from 'react';

export default async function page() {
  const getOrderLog: MyOrderInfoDataType[] = await getMyOrderList();
  return (
    <>
      <MyOrderLog orderList={getOrderLog} />
    </>
  );
}
