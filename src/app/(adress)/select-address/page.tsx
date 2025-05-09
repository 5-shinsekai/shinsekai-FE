'use client';

import React, { useEffect, useState } from 'react';
import ButtonWrapper from '@/components/ui/wrapper/ButtonWrapper';
import { Button } from '@/components/ui/Button';
import { useRouter } from 'next/navigation';
import SelectAddressList from '@/components/pages/address/SelectAddressList';
import { getAddress } from '@/action/address-service';
import { AddressDataType } from '@/types/AddressDataType';

export const dynamic = 'force-dynamic';

export default function Page() {
  const [addressList, setAddressList] = useState<AddressDataType[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchAddressList = async () => {
      try {
        const data = await getAddress();
        setAddressList(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchAddressList();
  }, []);

  const [selectedUuid, setSelectedUuid] = useState<string | null>(null);

  const handleClick = () => {
    if (!selectedUuid) return;
    router.push(`/payment?addressUuid=${selectedUuid}`);
  };

  return (
    <main className="px-5">
      <div className="flex justify-between items-center py-10">
        <h1 className="text-[1.625rem] font-semibold">배송지 선택</h1>
        <button
          onClick={() => router.push('/register-address?back=select-address')}
          className="text-custom-green-100 inline-flex items-center space-x-1"
        >
          <span className="text-2xl font-light">+</span>
          <span className="text-sm">새 배송지 추가</span>
        </button>
      </div>
      <div>
        <SelectAddressList
          myAddressList={addressList}
          onSelect={setSelectedUuid}
        />
      </div>
      <div className="py-15"></div>
      <ButtonWrapper className="z-50">
        <Button color="green" className="w-full" onClick={handleClick}>
          변경
        </Button>
      </ButtonWrapper>
    </main>
  );
}
