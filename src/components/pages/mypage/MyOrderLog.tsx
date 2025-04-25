'use client';

import { Button } from '@/components/ui/Button';
import { OrderDetailModal } from '@/components/ui/ChargeResultModal';
import DownArrowIcon from '@/components/ui/icons/DownArrowIcon';
import UpArrowIcon from '@/components/ui/icons/UpArrowIcon';
import { cn } from '@/lib/utils';
import {
  MyOrderInfoDataType,
  PurchaseProductLogDataType,
} from '@/types/PaymentDataType';

import Image from 'next/image';
import { useState } from 'react';

export default function MyOrderLog({
  orderList,
}: {
  orderList: MyOrderInfoDataType[];
}) {
  return (
    <main className="px-6 py-6">
      <h1 className="text-[1.875rem] font-semibold">주문 내역</h1>
      {orderList.length > 0 ? (
        orderList.map((item, index) => (
          <MyOrderLogInfo key={index} orderInfo={item} />
        ))
      ) : (
        <div>주문 내역이 없습니다</div>
      )}
    </main>
  );
}

export function MyOrderLogInfo({
  orderInfo,
}: {
  orderInfo: MyOrderInfoDataType;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const productInfoList = orderInfo.orderProductList;

  return (
    <>
      <section className="my-5 p-3 bg-white border-1 rounded-lg">
        {!isExpanded ? (
          <MyOrderProductInfo
            productInfo={productInfoList[0]}
            className="border-b last:border-b-0"
          />
        ) : (
          <>
            {productInfoList.map((item, idx) => (
              <MyOrderProductInfo
                productInfo={item}
                key={idx}
                className="border-b last:border-b-0"
              />
            ))}
          </>
        )}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full pt-2 flex items-center justify-center"
        >
          {isExpanded ? <UpArrowIcon /> : <DownArrowIcon />}
        </button>
        <Button
          onClick={() => setShowModal(!showModal)}
          className="w-full text-sm  py-4 mx-auto mt-3 mb-2 "
          size="sm"
        >
          주문상세
        </Button>
      </section>
      {showModal && (
        <OrderDetailModal orderInfo={orderInfo} setModal={setShowModal} />
      )}
    </>
  );
}

export function MyOrderProductInfo({
  productInfo,
  className,
}: {
  productInfo: PurchaseProductLogDataType;
  className?: string;
}) {
  return (
    <div className={cn('flex items-center gap-2.5 p-3', className)}>
      <Image
        src={productInfo.productImageUrl || ''}
        alt={productInfo.productName || ''}
        width={80}
        height={80}
        className="rounded-sm"
      />
      <div className="space-y-1">
        <p className="text-[0.8rem] leading-3">{productInfo.productName}</p>

        <p className="text-[0.85rem] font-semibold">
          {(productInfo.productPrice || 0).toLocaleString()}원
          <span className="px-3 text-[0.7rem] text-gray-500">
            {productInfo.quantity}개
          </span>
        </p>
      </div>
    </div>
  );
}
