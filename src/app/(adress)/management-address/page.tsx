import React from 'react';
import ShowAddressList from '@/components/pages/address/ShowAddressList';
import ButtonWrapper from '@/components/ui/wrapper/ButtonWrapper';
import { Button } from '@/components/ui/Button';
import { getAddress } from '@/action/address-service';
import Link from 'next/link';

export default async function Page() {
  const addressList = await getAddress();
  // const sortedList = addressListData?.length
  //   ? addressListData.sort((a, b) => {
  //       if (a.isMainAddress === b.isMainAddress) return 0;
  //       return a.isMainAddress ? -1 : 1;
  //     })
  //   : [];
  return (
    <main className="px-5">
      <h1 className="pt-10 pb-6 text-[1.625rem] font-semibold">배송지 관리</h1>
      <div>
        <ShowAddressList myAddressList={addressList} />
      </div>
      <div className="py-15"></div>
      <ButtonWrapper>
        {addressList.length === 0 ? (
          <Link href="/register-address?isMain=true">
            <Button color="green" className="w-full">
              새 배송지 추가
            </Button>
          </Link>
        ) : (
          <Link href="/register-address">
            <Button color="green" className="w-full">
              새 배송지 추가
            </Button>
          </Link>
        )}
      </ButtonWrapper>
    </main>
  );
}
