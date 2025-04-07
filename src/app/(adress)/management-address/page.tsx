'use client';

import React from 'react';
import MyAddressWrapper from '@/components/ui/wrapper/myAddressWrapper';
import ButtonWrapper from '@/components/ui/wrapper/buttonWrapper';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/register-address');
  };
  return (
    <main className="px-3">
      <h1 className="pt-[5rem] pb-[1.25rem] text-[1.625rem] font-semibold">
        배송지 관리 페이지입니다..^^
      </h1>
      <div>
        <MyAddressWrapper />
      </div>
      <div className="py-15"></div>
      <ButtonWrapper>
        <Button color="green" className="w-full" onClick={handleClick}>
          새 배송지 추가
        </Button>
      </ButtonWrapper>
    </main>
  );
}
