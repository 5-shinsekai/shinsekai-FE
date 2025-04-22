'use client';

import { useEffect, useState } from 'react';
import { paymentTempService } from '@/action/input-check';
import AddressInfoSection from '@/components/pages/payment/OrderInfo/AddressInfoSection';
import AmountInfo from '@/components/pages/payment/OrderInfo/AmountInfo';
import CashReceiptInfo from '@/components/pages/payment/OrderInfo/CashReceiptInfo';
import OrderLogInfoSection from '@/components/pages/payment/OrderInfo/OrderLogInfoSection';
import PayMethodInfo from '@/components/pages/payment/OrderInfo/PayMethodInfo';
import { Button } from '@/components/ui/Button';
import Divider from '@/components/ui/Divider';
import ButtonWrapper from '@/components/ui/wrapper/ButtonWrapper';
import { useSearchParams } from 'next/navigation';
import {
  CartOrderItemInfoType,
  StarbuckscardInfoType,
} from '@/types/PaymentDataType';
import { getCartData } from '@/action/payment-service';
import { AddressDataType } from '@/types/AddressDataType';

export default function PaymentForm({
  cardList,
  mainAddress,
}: {
  cardList: StarbuckscardInfoType[];
  mainAddress: AddressDataType;
}) {
  const [totalAmount, setTotalAmount] = useState(0);
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

  return (
    <form action={paymentTempService}>
      <AddressInfoSection mainAddress={mainAddress} />
      <Divider />
      <OrderLogInfoSection
        orderLogInfo={orderLogInfo!}
        onTotalAmountChange={setTotalAmount}
      />
      <Divider />
      <PayMethodInfo cardList={cardList} totalAmount={totalAmount} />
      <Divider />
      <CashReceiptInfo />
      <AmountInfo totalAmount={totalAmount} />
      <ButtonWrapper>
        <Button type="submit" className="w-full">
          결제하기
        </Button>
      </ButtonWrapper>
    </form>
  );
}
