'use client';

import React, { useState } from 'react';
import ButtonWrapper from '@/components/ui/wrapper/ButtonWrapper';
import { Button } from '@/components/ui/Button';
import { useRouter } from 'next/navigation';
import { GetAddressListData } from '@/data/DummyData/MyAddressDummyData';
import SelectAddressList from '@/components/pages/address/SelectAddressList';

export default function Page() {
  const router = useRouter();
  const [selectedUuid, setSelectedUuid] = useState<string | null>(null);

  const handleClick = () => {
    if (!selectedUuid) return;
    router.push(`/payment?selected=${selectedUuid}`);
  };

  const sortedList = [...GetAddressListData].sort((a) =>
    a.isMainAddress ? -1 : 1
  );

  return (
    <main className="px-5">
      <div className="flex justify-between items-center py-10">
        <h1 className="text-[1.625rem] font-semibold">배송지 선택</h1>
        <button
          onClick={() => router.push('/register-address')}
          className="text-custom-green-100 inline-flex items-center space-x-1"
        >
          <span className="text-2xl font-light">+</span>
          <span className="text-sm">새 배송지 추가</span>
        </button>
      </div>
      <div>
        <SelectAddressList
          myAddressList={sortedList}
          onSelect={setSelectedUuid}
        />
      </div>
      <div className="py-15"></div>
      <ButtonWrapper>
        <Button color="green" className="w-full" onClick={handleClick}>
          변경
        </Button>
      </ButtonWrapper>
    </main>
  );
}
