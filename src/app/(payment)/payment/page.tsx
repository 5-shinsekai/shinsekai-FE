import { getMainAddress } from '@/action/address-service';
import { paymentTempService } from '@/action/input-check';
import { getStarbuckscard } from '@/action/payment-service';
import AddressInfoSection from '@/components/pages/payment/OrderInfo/AddressInfoSection';
import AmountInfo from '@/components/pages/payment/OrderInfo/AmountInfo';
import CashReceiptInfo from '@/components/pages/payment/OrderInfo/CashReceiptInfo';
import OrderLogInfoSection from '@/components/pages/payment/OrderInfo/OrderLogInfoSection';
import PayMethodInfo from '@/components/pages/payment/OrderInfo/PayMethodInfo';
import { Button } from '@/components/ui/Button';
import Divider from '@/components/ui/Divider';
import ButtonWrapper from '@/components/ui/wrapper/ButtonWrapper';
import React, { Suspense } from 'react';

export default async function page() {
  const cardList = await getStarbuckscard();
  const mainAddress = await getMainAddress();
  console.log('기본배송지');

  return (
    <main className="w-full h-screen mx-auto">
      <Suspense>
        <form action={paymentTempService}>
          <AddressInfoSection mainAddress={mainAddress} />
          <Divider />
          <OrderLogInfoSection />
          <Divider />
          <PayMethodInfo cardList={cardList} />
          <Divider />
          <CashReceiptInfo />
          <AmountInfo />
          <ButtonWrapper>
            <Button type="submit" className="w-full">
              결제하기
            </Button>
          </ButtonWrapper>
        </form>
      </Suspense>
    </main>
  );
}
