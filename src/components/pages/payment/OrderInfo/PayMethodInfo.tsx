'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { paymentMethodDummyData } from '@/data/DummyData/PaymentDummyData';
import EmptyStarbuckscard from '@/components/ui/EmptyStarbuckscard';
import { DefaultCheck } from '@/components/ui/forms/defaultCheck';

export default function PayMethodInfo() {
  const cards = paymentMethodDummyData;
  const [selectedCard, setSelectedCard] = useState<number>(0);

  const handleSelectCard = (index: number) => {
    setSelectedCard((prev) => (prev === index ? 0 : index));
  };

  return (
    <section className="px-6">
      <h1 className="font-semibold text-[1.125rem]">결제수단</h1>
      <h2 className="py-3 text-[0.875rem] font-semibold">
        스타벅스 카드 ({cards.length})
      </h2>
      <div className="flex overflow-x-auto gap-5">
        {/* 등록된 카드 리스트 */}
        {cards.map((card, index) => (
          <div key={index} className="relative flex-shrink-0 w-[262px]">
            <div className="absolute top-2 left-2 z-10">
              <DefaultCheck
                id="1"
                name="cardcheck"
                defaultChecked={selectedCard === index}
                // onChange={() => handleSelectCard(index)}
              />
            </div>
            <Image
              key={index}
              src={card.cardImageUrl}
              alt={card.cardName}
              width={262}
              height={166}
              className="rounded-sm"
              onClick={() => handleSelectCard(index)}
            />
            <div className="flex justify-between py-2 px-1">
              <div className="flex items-center gap-2 text-sm ">
                <p className="text-custom-gray-600">{card.cardName}</p>
                <button className="text-custom-green-100">카드충전하기</button>
              </div>
              <p className="font-semibold">
                {card.remainAmount.toLocaleString()}
                <span className="text-sm font-medium">원</span>
              </p>
            </div>
          </div>
        ))}
        {/* 카드 등록 버튼 */}
        <EmptyStarbuckscard />
      </div>
      {/* <Image
          src="/starbucksCard1.png"
          alt="starbucksCard"
          width={262}
          height={166}
          className="shadow-lg my-4"
        />
        <Image
          src="/starbucksCard1.png"
          alt="starbucksCard"
          width={262}
          height={166}
          className="shadow-lg my-4"
        />
        <Image
          src="/starbucksCard1.png"
          alt="starbucksCard"
          width={262}
          height={166}
          className="shadow-lg my-4"
        /> */}
    </section>
  );
}
