import { getMyOrderList } from '@/action/payment-service';
import MyOrderLog from '@/components/pages/mypage/MyOrderLog';
import { MyOrderInfoDataType } from '@/types/PaymentDataType';
import React from 'react';

export default async function page() {
  const getOrderLog: MyOrderInfoDataType[] = await getMyOrderList();
  console.log('주문목록', getOrderLog);
  return (
    <>
      <MyOrderLog orderList={getOrderLog} />
    </>
  );
}
