import AddressInfoSection from '@/components/pages/payment/OrderInfo/AddressInfoSection';
import AmountInfo from '@/components/pages/payment/OrderInfo/AmountInfo';
import CashReceiptInfo from '@/components/pages/payment/OrderInfo/CashReceiptInfo';
import OrderLogInfoSection from '@/components/pages/payment/OrderInfo/OrderLogInfoSection';
import PayMethodInfo from '@/components/pages/payment/OrderInfo/PayMethodInfo';
import Divider from '@/components/ui/Divider';
import React from 'react';

export default function page() {
  return (
    <main className="w-full h-screen mx-auto">
      <AddressInfoSection />
      <Divider />
      <OrderLogInfoSection />
      <Divider />
      <PayMethodInfo />
      <Divider />
      <CashReceiptInfo />
      <AmountInfo />
    </main>
  );
}
