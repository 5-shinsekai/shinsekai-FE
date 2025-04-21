'use client';

import { StarbuckscardInfoType } from '@/types/PaymentDataType';
import React, { useState } from 'react';
import Image from 'next/image';
import { CardDetailModal } from '@/components/ui/CardDetailModal';
import StarbuckscardDetail from '@/components/pages/payment/StarbuckscardInfo/StarbuckscardDetail';

export function StarbucksCard({
  card,
  index,
  handleSelectCard,
}: {
  card: StarbuckscardInfoType;
  index: number;
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
        <p className="font-semibold">
          {card.remainAmount.toLocaleString()}
          <span className="text-sm font-medium">원</span>
        </p>
      </div>
      {modal && (
        <CardDetailModal title="충전하기" setModal={handleClick}>
          <StarbuckscardDetail
            cardInfo={card}
            // onClose={() => setModal(false)}
          />
        </CardDetailModal>
      )}
    </>
  );
}
