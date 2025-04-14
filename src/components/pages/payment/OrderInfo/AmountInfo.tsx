import React from 'react';

export default function AmountInfo() {
  return (
    <section>
      <div className="bg-custom-gray-200 px-6 py-5 my-5 space-y-1.5">
        <div className="flex justify-between text-[1rem] font-semibold">
          <h2>주문 금액</h2>
          <p>43,000원</p>
        </div>
        <div className="flex justify-between text-[0.875rem] font-medium">
          <h2>상품 금액</h2>
          <p>43,000원</p>
        </div>
        <div className="flex justify-between text-[0.875rem] font-medium">
          <h2>배송비</h2>
          <p>0원</p>
        </div>
        <div className="flex justify-between font-semibold mt-3">
          <h2 className="text-[1.125rem]">최종 결제 금액</h2>
          <p className="text-[1.375rem]">43,000원</p>
        </div>
      </div>
      <div className="bg-custom-gray-100 text-custom-gray-500 mx-10 px-5 py-2 my-5">
        <p className="text-[0.875rem]">
          위 주문 내용을 확인하였으며, 결제에 동의합니다
        </p>
        <p className="text-[0.75rem]">(전자상거래법 8조 2항)</p>
      </div>
    </section>
  );
}
