import React from 'react';
import DeliveryStatus from '@/components/ui/DeliveryStatus';
import RightArrowIcon from '@/components/ui/icons/RightArrowIcon';
import { deliveryStatusData } from '@/data/MypageData';

export default function DeliveryStatusSection() {
  return (
    <section className="py-10">
      <header className="flex justify-between items-center px-[1.5rem] pt-[1.25rem] pb-[1.5rem]">
        <h1 className="font-semibold text-[1rem]">주문/배송현황</h1>
        <p className="text-custom-gray-700 text-[0.688rem]">
          최근 3개월동안 구매한 상품
        </p>
      </header>
      <nav className="mx-[1.5rem]">
        <ul className="flex items-center justify-center md:space-x-4 lg:space-x-8">
          {deliveryStatusData.map((status, index) => (
            <React.Fragment key={status.id}>
              <DeliveryStatus
                id={status.id}
                title={status.title}
                count={status.count}
                link={status.link}
              />
              {index !== deliveryStatusData.length - 1 && <RightArrowIcon />}
            </React.Fragment>
          ))}
        </ul>
      </nav>
    </section>
  );
}
