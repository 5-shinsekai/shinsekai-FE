import { tempService } from '@/action/input-check';
import { getStarbuckscard } from '@/action/payment-service';
import AddressInfoSection from '@/components/pages/payment/OrderInfo/AddressInfoSection';
import AmountInfo from '@/components/pages/payment/OrderInfo/AmountInfo';
import CashReceiptInfo from '@/components/pages/payment/OrderInfo/CashReceiptInfo';
import OrderLogInfoSection from '@/components/pages/payment/OrderInfo/OrderLogInfoSection';
import PayMethodInfo from '@/components/pages/payment/OrderInfo/PayMethodInfo';
import { Button } from '@/components/ui/button';
import Divider from '@/components/ui/Divider';
import ButtonWrapper from '@/components/ui/wrapper/buttonWrapper';
import React, { Suspense } from 'react';

export default async function page() {
  const cardList = await getStarbuckscard();
  console.log(cardList, '카드 조회되는지 테스트');
  return (
    <main className="w-full h-screen mx-auto">
      <Suspense>
        <form action={tempService}>
          <AddressInfoSection />
          <Divider />
          <OrderLogInfoSection />
          <Divider />
          <PayMethodInfo cardList={cardList} />
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
