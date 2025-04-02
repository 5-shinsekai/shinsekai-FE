import React from 'react';

export default function ProductPrice({
  price,
  discountRate,
}: Readonly<{ price: number; discountRate: number }>) {
  return (
    <>
      <p
        className={`mt-2 ${discountRate > 0 ? 'line-through text-[0.8125rem] text-custom-gray-500' : 'text-4 font-bold'}`}
      >
        {price.toLocaleString()}원
      </p>
      {discountRate > 0 && (
        <div className="flex justify-between">
          <p className="text-4 font-bold">
            {((price * (100 - discountRate)) / 100).toLocaleString()}원
          </p>
          {/* 자주쓰는 스타일 등을 컴포넌트화 진행 */}
          <p className="text-4 font-bold text-custom-green-200">
            {discountRate}%
          </p>
        </div>
      )}
    </>
  );
}
