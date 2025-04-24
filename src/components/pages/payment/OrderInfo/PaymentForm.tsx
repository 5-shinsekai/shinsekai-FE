'use client';

import { useEffect, useState } from 'react';
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
import { getCartData, purchase } from '@/action/payment-service';
import { AddressDataType } from '@/types/AddressDataType';
import { PurchaseResultModal } from '@/components/ui/ChargeResultModal';

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
  const productOptionListId = Number(params.get('productOptiontId')) || 0;
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
  console.log('orderLogInfo 테스트', orderLogInfo);

  const [showModal, setShowModal] = useState(false);
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    try {
      const response = await purchase(formData);

      if (response?.isSuccess) {
        setIsSuccess(true);
      } else {
        setIsSuccess(false);
      }
      setShowModal(true);
    } catch (err) {
      console.error('결제 오류:', err);
      setIsSuccess(false);
      setShowModal(true);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
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

      {showModal && (
        <PurchaseResultModal
          message="결제"
          success={isSuccess || false}
          setModal={setShowModal}
        />
      )}
    </>
  );
}
