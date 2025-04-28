'use client';

import { cn } from '@/lib/utils';
import { StarbuckscardChargeOptionType } from '@/types/PaymentDataType';
import React from 'react';

export default function StarbuckscardCharge({
  chargeAmount,
  setChargeAmount,
  chargeOptions,
}: {
  chargeAmount: {
    option: string;
    amount: number;
  };
  setChargeAmount: (amount: { option: string; amount: number }) => void;
  chargeOptions: StarbuckscardChargeOptionType[];
}) {
  return (
    <>
      <h1 className="text-xl font-medium">충전 금액</h1>
      <div className="py-3 flex flex-wrap">
        {chargeOptions.map(({ option, amount }) => (
          <button
            type="button"
            key={option}
            name="chargeAmount"
            value={option}
            onClick={() => setChargeAmount({ option: option, amount: amount })}
            className={cn(
              'border border-custom-gray-400 text-lg py-2 px-4 mb-3.5 mr-3.5 text-custom-gray-700 font-semibold rounded-sm',
              chargeAmount.option === option && 'text-white bg-custom-green-200'
            )}
          >
            {option}
          </button>
        ))}
      </div>
      {chargeAmount.option === '다른 금액' && (
        <input
          name="chargeAmount"
          type="number"
          min={1000}
          placeholder="충전 금액을 입력하세요(1,000원 이상)"
          className="border-b outline-none w-full py-2 placeholder:text-lg text-2xl transition-all focus:border-custom-green-300"
          onChange={(e) =>
            setChargeAmount({
              option: chargeAmount.option,
              amount: Number(e.target.value),
            })
          }
        />
      )}
    </>
  );
}
