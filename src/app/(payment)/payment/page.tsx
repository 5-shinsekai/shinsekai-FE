import { tempService } from '@/action/input-check';
import AddressInfoSection from '@/components/pages/payment/OrderInfo/AddressInfoSection';
import AmountInfo from '@/components/pages/payment/OrderInfo/AmountInfo';
import CashReceiptInfo from '@/components/pages/payment/OrderInfo/CashReceiptInfo';
import OrderLogInfoSection from '@/components/pages/payment/OrderInfo/OrderLogInfoSection';
import PayMethodInfo from '@/components/pages/payment/OrderInfo/PayMethodInfo';
import { Button } from '@/components/ui/button';
import Divider from '@/components/ui/Divider';
import ButtonWrapper from '@/components/ui/wrapper/buttonWrapper';
import React, { Suspense } from 'react';

export default function page() {
  return (
    <main className="w-full h-screen mx-auto">
      <Suspense>
        <form action={tempService}>
          <AddressInfoSection />
          <Divider />
          <OrderLogInfoSection />
          <Divider />
          <PayMethodInfo />
          <Divider />
          <CashReceiptInfo />
          <AmountInfo />
          <ButtonWrapper>
            <Button className="w-full">결제하기</Button>
          </ButtonWrapper>
        </form>
      </Suspense>
    </main>
  );
}
