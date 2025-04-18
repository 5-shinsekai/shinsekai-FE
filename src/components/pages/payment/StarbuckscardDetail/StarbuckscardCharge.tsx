'use client';

import { cn } from '@/lib/utils';
import React, { useState } from 'react';

export default function StarbuckscardCharge({
  memberStarbucksCardUuid,
}: {
  memberStarbucksCardUuid: string;
}) {
  console.log(memberStarbucksCardUuid);
  const chargeOptions = [
    '1만원',
    '3만원',
    '5만원',
    '7만원',
    '10만원',
    '다른 금액',
  ];
  const [chargeAmount, setChargeAmount] = useState('1만원');
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setChargeAmount(e.currentTarget.value);
  };
  return (
    <>
      <h1 className="text-xl font-medium">충전 금액</h1>
      <div className="py-3 flex flex-wrap">
        {chargeOptions.map((option) => (
          <button
            key={option}
            name="chargeAmount"
            value={option}
            onClick={handleClick}
            className={cn(
              'border border-custom-gray-400 text-lg py-2 px-4 mb-3.5 mr-3.5 text-custom-gray-700 font-semibold rounded-sm',
              chargeAmount === option && 'text-white bg-custom-green-200'
            )}
          >
            {option}
          </button>
        ))}
      </div>
      {chargeAmount === '다른 금액' && (
        <input
          name="chargeAmount"
          placeholder="충전 금액을 입력하세요(1,000원 이상)"
          className="border-b outline-none w-full py-2 placeholder:text-lg text-2xl transition-all focus:border-custom-green-300"
        />
      )}
      {/* <button
        name="충전 금액"
        value="2만원"
        onClick={handleClick}
        className={cn(
          'border py-1.5 px-3 text-custom-gray-700 font-bold rounded-md',
          chargeAmount === '2만원' && 'text-white bg-custom-green-100'
        )}
      >
        2만원
      </button> */}
      {/* <DeleteCardButton memberStarbucksCardUuid={memberStarbucksCardUuid} /> */}
    </>
  );
}
