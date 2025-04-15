'use client';

import React from 'react';
import ShowAddressList from '@/components/pages/address/ShowAddressList';
import ButtonWrapper from '@/components/ui/wrapper/buttonWrapper';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { myAddressListData } from '@/data/DummyData/myAddressDummyData';

export default function Page() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/register-address');
  };

  const sortedList = [...myAddressListData].sort((a) =>
    a.isMainAddress ? -1 : 1
  );

  return (
    <main className="px-5">
      <h1 className="py-6 text-[1.625rem] font-semibold">배송지 관리</h1>
      <div>
        <ShowAddressList myAddressList={sortedList} />
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
