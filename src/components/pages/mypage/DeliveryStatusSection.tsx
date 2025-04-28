'use client';

import React, { useEffect, useState } from 'react';
import RightArrowIcon from '@/components/ui/icons/RightArrowIcon';
import { getMyOrderStatus } from '@/action/payment-service';
import { MyOrderStatusDataType } from '@/types/PaymentDataType';
import DeliveryStatus from '@/components/ui/DeliveryStatus';

export default function DeliveryStatusSection() {
  const [deliveryStatus, setDeliveryStatus] = useState<MyOrderStatusDataType>({
    cancelled: 0,
    delivered: 0,
    paymentCompleted: 0,
    preparing: 0,
    shipping: 0,
  });

  useEffect(() => {
    const fetchDeliveryStatus = async () => {
      const deliveryStatusData = await getMyOrderStatus();
      setDeliveryStatus(deliveryStatusData);
    };
    fetchDeliveryStatus();
  }, []);
  return (
    <section className="py-10">
      <header className="flex justify-between items-center px-8 pb-[1.5rem]">
        <h1 className="font-semibold text-[1.1rem]">주문/배송현황</h1>
        <p className="text-custom-gray-700 text-[0.688rem]">
          최근 3개월동안 구매한 상품
        </p>
      </header>
      <nav className="">
        <ul className="flex items-center justify-center space-x-1.5">
          <DeliveryStatus
            title="결제완료"
            count={deliveryStatus.paymentCompleted}
          />
          <RightArrowIcon />
          <DeliveryStatus title="배송준비중" count={deliveryStatus.preparing} />
          <RightArrowIcon />
          <DeliveryStatus title="배송중" count={deliveryStatus.shipping} />
          <RightArrowIcon />
          <DeliveryStatus title="배송완료" count={deliveryStatus.delivered} />
        </ul>
      </nav>
    </section>
  );
}
