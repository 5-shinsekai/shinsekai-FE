'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function AddressInfoSection() {
  const router = useRouter();

  return (
    <section className="px-6">
      <h1 className="font-semibold text-[1.125rem]">배송정보</h1>
      <div className="flex flex-col mt-[24px] items-center space-y-[30px] ">
        <div className="text-center text-[0.938rem] font-medium">
          <p>등록된 배송지가 없습니다.</p>
          <p>배송지를 등록해주세요.</p>
        </div>
        <Button size="hug" onClick={() => router.push('/register-address')}>
          배송지 등록
        </Button>
      </div>
    </section>
  );
}
