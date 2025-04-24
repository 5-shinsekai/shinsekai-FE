'use client';

import { StarbuckscardInfoType } from '@/types/PaymentDataType';
import React, { useState } from 'react';
import Image from 'next/image';
import { CardDetailModal } from '@/components/ui/CardDetailModal';
import StarbuckscardDetail from '@/components/pages/payment/StarbuckscardInfo/StarbuckscardDetail';

export function PaymentPageStarbucksCards({
  card,
  index,
  totalAmount,
  handleSelectCard,
}: {
  card: StarbuckscardInfoType;
  index: number;
  totalAmount?: number;
  handleSelectCard: (index: number) => void;
}) {
  const [modal, setModal] = useState(false);

  const handleClick = () => {
    setModal(!modal);
  };

  return (
    <>
      <Image
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
          <button
            type="button"
            className="text-custom-green-100 py-2 text-[0.7rem]"
            onClick={handleClick}
          >
            카드충전하기
          </button>
        </div>
        <div className="font-semibold">
          {card.remainAmount.toLocaleString()}
          <span className="text-sm font-medium">원</span>
          {totalAmount! > card.remainAmount && (
            <p className="text-right text-xs text-red-400">잔액 부족</p>
          )}
        </div>
      </div>
      {modal && (
        <CardDetailModal title="충전하기" setModal={handleClick}>
          <StarbuckscardDetail
            cardInfo={card}
            onClose={() => setModal(false)}
          />
        </CardDetailModal>
      )}
    </>
  );
}

export function MypageStarbucksCards({
  card,
}: {
  card: StarbuckscardInfoType;
  index: number;
  totalAmount?: number;
}) {
  const [modal, setModal] = useState(false);

  const handleClick = () => {
    setModal(!modal);
  };

  return (
    <>
      <section className="flex flex-col items-center pt-2 pb-4 bg-white rounded-2xl shadow-xl">
        <div className="flex justify-between py-2 px-1 w-[260px]">
          <p className="text-md text-custom-gray-600">{card.cardName}</p>
          <p className="font-semibold">
            {card.remainAmount.toLocaleString()}
            <span className="text-md font-medium">원</span>
          </p>
        </div>
        <Image
          src={card.cardImageUrl}
          alt={card.cardName}
          width={262}
          height={166}
          className="rounded-sm "
          onClick={handleClick}
        />
        {/* <Button className="text-[1.2rem] w-[262px] border-3 border-custom-gray-500 border-b-1 border-x-0 border-t-0 rounded-md shadow-xs z-30">
          카드충전하기
        </Button> */}
      </section>

      {modal && (
        <CardDetailModal title="충전하기" setModal={handleClick}>
          <StarbuckscardDetail
            cardInfo={card}
            onClose={() => setModal(false)}
          />
        </CardDetailModal>
      )}
    </>
  );
}
