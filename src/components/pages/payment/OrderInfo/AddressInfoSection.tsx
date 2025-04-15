'use client';

import { Button } from '@/components/ui/button';
import { getAddressListData } from '@/data/DummyData/myAddressDummyData';
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

export default function AddressInfoSection() {
  const searchParams = useSearchParams();
  const selectedUuid = searchParams.get('selected');
  const selectedAddress = getAddressListData.find(
    (item) => item.addressUuid === selectedUuid
  );

  const address =
    selectedAddress || getAddressListData.find((item) => item.isMainAddress);

  console.log(address);

  const router = useRouter();
  return (
    <>
      {address && (
        <section className="px-6">
          <div className="flex justify-between items-center">
            <h1 className="font-semibold text-[1.125rem]">배송정보</h1>
            <Button
              color="white"
              size="xs"
              className="font-light border-gray-300"
              onClick={() => router.push('/select-address')}
            >
              변경
            </Button>
          </div>
          <div className="py-3 space-y-[0.4rem]">
            {address.isMainAddress ? (
              <p className="font-semibold text-[1rem]">
                {address.receiverName} ({address.addressNickname})
                <span className="text-[0.7rem] font-light bg-custom-green-300/20 text-custom-green-300 px-[0.2rem] py-[0.1rem] mx-2">
                  기본
                </span>
              </p>
            ) : (
              <p className="font-semibold text-[1rem]">
                {address.receiverName} ({address.addressNickname})
              </p>
            )}

            <p className="leading-[1.3]">
              ({address.zipNo}) {address.totalAddress}
            </p>
            {address.secondPhoneNumber ? (
              <p className="text-[1rem]">
                {address.firstPhoneNumber} | {address.secondPhoneNumber}
              </p>
            ) : (
              <p>{address.firstPhoneNumber}</p>
            )}
            {address.deliveryMemo && (
              <p className="text-[0.875rem] text-custom-gray-700">
                {address.deliveryMemo}
              </p>
            )}
          </div>
          <input type="hidden" name="addressUuid" value={address.addressUuid} />
        </section>
      )}
      {address === null && (
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
      )}
    </>
  );
}
