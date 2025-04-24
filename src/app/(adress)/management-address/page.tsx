'use client';

import React, { useEffect, useState } from 'react';
import ShowAddressList from '@/components/pages/address/ShowAddressList';
import ButtonWrapper from '@/components/ui/wrapper/ButtonWrapper';
import { Button } from '@/components/ui/Button';
import { getAddress } from '@/action/address-service';
import { AddressDataType } from '@/types/AddressDataType';
import { useRouter } from 'next/navigation';
import LoadingIcon from '@/components/ui/icons/LoadingIcon';

export const dynamic = 'force-dynamic';

export default function Page() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [addressList, setAddressList] = useState<AddressDataType[]>([]);
  useEffect(() => {
    const fetchAddressList = async () => {
      const addressList = await getAddress();
      setAddressList(addressList);
      setIsLoading(false);
      return addressList;
    };
    fetchAddressList();
  }, []);

  return (
    <main className="px-5">
      <h1 className="pt-10 pb-6 text-[1.625rem] font-semibold">배송지 관리</h1>
      {isLoading ? (
        <section className="w-full py-15 flex items-center justify-center animate-pulse">
          <LoadingIcon otherContent="배송지 정보를 불러오는 중입니다..." />
        </section>
      ) : (
        <section>
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
        </section>
      )}
    </main>
  );
}
