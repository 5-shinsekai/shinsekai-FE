'use client';

import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import {
  MyOrderInfoDataType,
  StarbuckscardInfoType,
} from '@/types/PaymentDataType';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import CloseIcon from './icons/CloseIcon';
import Divider from './Divider';
import { MyOrderProductInfo } from '../pages/mypage/MyOrderLog';
import ShortInfo from './ShortInfo';

interface props {
  title?: string;
  setModal?: (value: boolean) => void;
  message?: string;
  className?: string;
  success?: boolean;
  cardInfo?: StarbuckscardInfoType;
  totalAmount?: number;
  onClose?: () => void;
}

export const ChargeResultModal = ({
  title,
  message,
  className,
  setModal,
  success,
  cardInfo,
  totalAmount,
  onClose,
}: props) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'; // 모달 띄워졌을 때 스크롤 막기
    return () => {
      document.body.style.overflow = 'auto';
    };
  });
  return (
    <div
      id="모달 외부"
      className="fixed inset-0 flex justify-center items-center w-full h-full bg-gray-300/60 z-50"
    >
      <div
        id="모달"
        onClick={(e) => e.stopPropagation()}
        className={cn(
          'bg-white w-3/4 h-1/4 rounded-lg z-[100] shadow-xl',
          'transition-all duration-300 ease-out',
          'opacity-100 translate-y-0',
          'md:w-2/5 md:h-1/2',
          success === true && 'h-3/7 md:w-full md:h-2/3',
          className
        )}
      >
        <header>
          <ul className="flex justify-between">
            <li className="text-gray-400">{title}</li>
          </ul>
        </header>
        <main className="relative flex flex-col items-center justify-center">
          <div className="text-black text-[1.4rem]">
            {success ? (
              <div className="flex flex-col items-center justify-center">
                <p className="pt-5.5 pb-4 text-custom-gray-700 font-semibold text-xl md:py-15">
                  {message}이 완료되었습니다
                </p>
                <Image
                  src={cardInfo?.cardImageUrl || ''}
                  alt={cardInfo?.cardName || ''}
                  width={200}
                  height={200}
                  className="mb-2 shadow-lg"
                />
                <p className="text-[1.1rem]">
                  {cardInfo?.cardName}({cardInfo?.cardNumber})
                </p>
                <p className=" leading-5">
                  <span className="text-[1rem]">현재 잔액: </span>
                  <strong className="text-[1.2rem]">
                    {totalAmount?.toLocaleString()}원
                  </strong>
                </p>
              </div>
            ) : (
              <p className="text-center py-16 md:py-15 ">
                {message}에 실패했습니다
                <br />
                다시 시도해주세요
              </p>
            )}
          </div>
          <Button
            type="button"
            className={cn(
              success
                ? 'fixed text-[1.1rem] bottom-5'
                : 'fixed text-[1.3rem] pt-6 bottom-6 border-3 border-custom-gray-500 rounded-none  border-b-0 border-x-0 border-t rounded-b-md w-full'
            )}
            color={success ? 'green' : 'default'}
            size="hug"
            onClick={success ? () => onClose?.() : () => setModal?.(false)}
          >
            확인
          </Button>
        </main>
      </div>
    </div>
  );
};

export const PurchaseResultModal = ({
  title,
  message,
  className,
  setModal,
  success,
}: props) => {
  const router = useRouter();

  useEffect(() => {
    document.body.style.overflow = 'hidden'; // 모달 띄워졌을 때 스크롤 막기
    return () => {
      document.body.style.overflow = 'auto';
    };
  });
  return (
    <div
      id="모달 외부"
      className="fixed inset-0 flex justify-center items-center w-full h-full bg-gray-300/60 z-50"
    >
      <div
        id="모달"
        onClick={(e) => e.stopPropagation()}
        className={cn(
          'bg-white w-3/4 h-1/5 rounded-lg z-[100] shadow-xl',
          'transition-all duration-300 ease-out',
          'opacity-100 translate-y-0',
          'md:w-2/5 md:h-1/2',
          className
        )}
      >
        <header>
          <ul className="flex justify-between">
            <li className="text-gray-400">{title}</li>
          </ul>
        </header>
        <main className="relative flex flex-col items-center justify-center">
          <div className="text-black">
            {success ? (
              <p className="text-center text-[1.4rem] py-10 md:py-15 ">
                {message}가 완료되었습니다
              </p>
            ) : (
              <p className="text-[1.2rem] text-center py-7 md:py-15 font-medium">
                {message}에 실패했습니다
                <br />
                <span className="font-light">다시 시도해주세요</span>
              </p>
            )}
          </div>
          <Button
            type="button"
            className={cn(
              'fixed text-[1.2rem] pt-3 bottom-3 border-3 border-custom-gray-500 rounded-none  border-b-0 border-x-0 border-t rounded-b-md w-full'
            )}
            color="default"
            size="hug"
            onClick={success ? () => router.push('/') : () => setModal?.(false)}
          >
            확인
          </Button>
        </main>
      </div>
    </div>
  );
};

export const OrderDetailModal = ({
  orderInfo,
  className,
  setModal,
}: {
  orderInfo: MyOrderInfoDataType;
  className?: string;
  setModal?: (value: boolean) => void;
}) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'; // 모달 띄워졌을 때 스크롤 막기
    return () => {
      document.body.style.overflow = 'auto';
    };
  });
  return (
    <div
      id="모달 외부"
      className="fixed inset-0 flex justify-center items-center w-full h-full bg-gray-300/60 z-50"
    >
      <div
        id="모달"
        onClick={(e) => e.stopPropagation()}
        className={cn(
          'fixed overflow-scroll bg-white w-full h-11/12 rounded-lg shadow-xl -bottom-2',
          'transition-all duration-500 transform ease-in',
          'opacity-100 translate-y-0',

          className
        )}
      >
        <header className="py-2 px-5">
          <div className="flex justify-between">
            <p className=" text-gray-400 text-md">{orderInfo.purchaseCode}</p>
            <button type="button" onClick={() => setModal?.(false)}>
              <CloseIcon className="size-6" />
            </button>
          </div>
        </header>
        <main className="px-3 mb-20">
          {orderInfo.orderProductList.map((item, idx) => (
            <MyOrderProductInfo
              productInfo={item}
              key={idx}
              className={'border-b last:border-b-0'}
            />
          ))}
          <h1 className="text-lg font-semibold py-2 px-2 mt-6">주문 정보</h1>
          <div className="bg-custom-gray-100 rounded-sm shadow-md px-4 py-3">
            <ShortInfo title="주문 일시" content="2025.04.25 16:03" />
            <ShortInfo title="주문 번호" content={orderInfo.purchaseCode} />
          </div>
          <Divider className="w-full mx-auto" />
          <h1 className="text-lg font-semibold py-2 px-2">결제 정보</h1>
          <div className="bg-custom-gray-100 rounded-sm shadow-md px-4 py-3">
            <ShortInfo
              size="lg"
              className="font-semibold"
              title="주문 금액"
              content={`${(orderInfo.productTotalPrice + orderInfo.shipmentFee).toLocaleString()}원`}
            />
            <ShortInfo
              size="md"
              title="상품 금액"
              content={`${orderInfo.productTotalPrice.toLocaleString()}원`}
            />
            <ShortInfo
              title="배송비"
              content={`${orderInfo.shipmentFee.toLocaleString()}원`}
            />

            <Divider className="w-full mx-auto" />
            <ShortInfo
              title="결제 금액"
              size="xl"
              className="text-lg font-semibold"
              content={`${(
                orderInfo.productTotalPrice + orderInfo.shipmentFee
              ).toLocaleString()}원`}
            />
          </div>
        </main>
      </div>
    </div>
  );
};
