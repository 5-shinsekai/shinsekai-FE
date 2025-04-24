'use client';

import React, { useState } from 'react';
import EmptyStarbuckscard from '@/components/ui/EmptyStarbuckscard';
import { DefaultCheck } from '@/components/ui/forms/DefaultCheck';
import { StarbuckscardInfoType } from '@/types/PaymentDataType';
import { PaymentPageStarbucksCards } from './StarbucksCard';

export default function PayMethodInfo({
  cardList = [],
  totalAmount,
}: {
  cardList?: StarbuckscardInfoType[];
  totalAmount: number;
}) {
  const [selectedCard, setSelectedCard] = useState<number>(0);

  const handleSelectCard = (index: number) => {
    setSelectedCard((prev) => (prev === index ? 0 : index));
  };

  return (
    <section className="px-6">
      <h1 className="font-semibold text-[1.125rem]">결제수단</h1>
      <h2 className="py-3 text-[0.875rem] font-semibold">
        스타벅스 카드 ({cardList.length})
      </h2>
      <div className="flex overflow-x-auto gap-5">
        {/* 등록된 카드 리스트 */}
        {cardList.length > 0 &&
          cardList.map((card, index) => (
            <div
              key={card.memberStarbucksCardListUuid}
              className="relative flex-shrink-0 w-[262px]"
            >
              <div className="absolute top-2 left-2 z-10">
                <DefaultCheck
                  id="1"
                  name="cardcheck"
                  defaultChecked={selectedCard === index}
                />
              </div>

              <PaymentPageStarbucksCards
                card={card}
                index={index}
                handleSelectCard={handleSelectCard}
                totalAmount={totalAmount}
              />
            </div>
          ))}
        {cardList[selectedCard] && (
          <input
            type="hidden"
            name="paymentCardUuid"
            value={cardList[selectedCard].memberStarbucksCardListUuid}
            readOnly
          />
        )}
        {/* 카드 등록 버튼 */}
        <EmptyStarbuckscard redirectPage="payment" />
      </div>
    </section>
  );
}
