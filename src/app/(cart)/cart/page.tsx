'use client';

import React from 'react';
import ButtonWrapper from '@/components/ui/wrapper/buttonWrapper';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function CartPage() {
  return (
    <div className="pb-32">
      {/* 배송지 선택 섹션 */}
      <div className="bg-custom-gray-100 p-6 grid grid-cols-2">
        <p className="text-sm break-keep text-balance">
          등록된 배송지가 없습니다. 배송지를 등록해주세요.
        </p>
        <Link
          href="/register-address"
          className="text-sm text-stone-500 self-center justify-self-end text-nowrap"
        >
          배송지 등록
        </Link>
      </div>

      {/* 빈 장바구니 상태 */}
      <div className="flex flex-col items-center justify-center h-[calc(100vh-300px)]">
        <svg className="w-12 h-12 text-custom-gray-300" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1zm-9-1a2 2 0 1 1 4 0v1h-4V6z"
          />
        </svg>
        <p className="mt-4 text-sm text-custom-gray-400">
          장바구니가 비어있습니다.
        </p>
      </div>

      {/* 하단 버튼 */}
      <ButtonWrapper>
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm">총 0건</span>
          <span className="text-lg font-bold">0원</span>
        </div>

        <div className="flex gap-2 justify-center">
          <Button
            disabled
            size={'md'}
            className="border-custom-gray-300 text-custom-gray-300"
          >
            선물하기
          </Button>
          <Button disabled size={'md'} color={'gray'}>
            구매하기
          </Button>
        </div>
      </ButtonWrapper>
    </div>
  );
}
