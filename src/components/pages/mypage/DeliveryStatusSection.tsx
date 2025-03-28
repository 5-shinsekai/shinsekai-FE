import React from 'react';
import DeliveryStatus from '@/components/ui/DeliveryStatus';
import RightArrowIcon from '@/components/ui/icons/RightArrowIcon';
import ShoppingInfo from './ShoppingInfo';

export default function DeliveryStatusSection() {
  return (
    <>
      <section className="py-[40px]">
        <header className="flex justify-between items-center px-[24px] pt-[20px] pb-[24px]">
          <h1 className="font-semibold text-[1rem]">주문/배송현황</h1>
          <p className="text-[#656565] text-[0.688rem]">
            최근 3개월동안 구매한 상품
          </p>
        </header>
        <div className="flex items-center justify-center mx-auto">
          <DeliveryStatus />
          <RightArrowIcon />
          <DeliveryStatus />
          <RightArrowIcon />
          <DeliveryStatus />
          <RightArrowIcon />
          <DeliveryStatus />
        </div>
      </section>
      <div>
        <ShoppingInfo />
      </div>
    </>
  );
}
