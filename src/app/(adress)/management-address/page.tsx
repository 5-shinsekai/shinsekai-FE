'use client';

import React, { useEffect, useState } from 'react';
import ShowAddressList from '@/components/pages/address/ShowAddressList';
import ButtonWrapper from '@/components/ui/wrapper/ButtonWrapper';
import { Button } from '@/components/ui/Button';
import { getAddress } from '@/action/address-service';
import { AddressDataType } from '@/types/AddressDataType';
import { useRouter } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default function Page() {
  const router = useRouter();

  const [addressList, setAddressList] = useState<AddressDataType[]>([]);
  useEffect(() => {
    const fetchAddressList = async () => {
      const addressList = await getAddress();
      setAddressList(addressList);
      return addressList;
    };
    fetchAddressList();
  }, []);

  return (
    <main className="px-5">
      <h1 className="pt-10 pb-6 text-[1.625rem] font-semibold">배송지 관리</h1>
      <div>
        <ShowAddressList myAddressList={addressList} />
      </div>
      <div className="py-15"></div>
      <ButtonWrapper className="z-50">
        {addressList.length === 0 ? (
          <Button
            onClick={() =>
              router.push(
                '/register-address?back=management-address&isMain=true'
              )
            }
            color="green"
            className="w-full"
          >
            새 배송지 추가
          </Button>
        ) : (
          <Button
            onClick={() =>
              router.push('/register-address?back=management-address')
            }
            color="green"
            className="w-full"
          >
            새 배송지 추가
          </Button>
          // </Link>
        )}
      </ButtonWrapper>
    </main>
  );
}
