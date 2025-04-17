'use client';

import React, { useState } from 'react';
import UpArrowIcon from './icons/UpArrowIcon';
import DownArrowIcon from './icons/DownArrowIcon';
import TextWrapper from './wrapper/TextWrapper';

export default function PaymentNotice() {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };
  return (
    <div>
      <div className="flex justify-between items-center">
        <p className="text-lg font-medium">온라인 충전 시 유의사항</p>
        <div onClick={toggleExpand} className="cursor-pointer">
          {isExpanded ? (
            <UpArrowIcon className="size-7" />
          ) : (
            <DownArrowIcon className="size-7" />
          )}
        </div>
      </div>
      {isExpanded && (
        <div className="my-3 text-custom-gray-500 text-[0.875rem]">
          <ul className="list-disc px-5">
            <li>스타벅스 카드 충전은 1회 1천원부터 가능합니다.</li>
            <li>
              계정당 스타벅스 카드 잔액 보유 한도는 200만원을 초과할 수
              없습니다.
            </li>
          </ul>
          <TextWrapper className="w-full mx-auto rounded-lg">
            재충전 이후 거래 이력이 없는 경우, 충전일로부터 최대 7일 내
            온라인에서 충전 취소가 가능합니다.
          </TextWrapper>
        </div>
      )}
    </div>
  );
}
