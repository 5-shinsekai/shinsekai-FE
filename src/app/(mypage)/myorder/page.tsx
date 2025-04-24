import { getMyOrderList } from '@/action/payment-service';
import React from 'react';

export default async function page() {
  const getOrderLog = await getMyOrderList();
  console.log('주문목록', getOrderLog);
  return <div></div>;
}
