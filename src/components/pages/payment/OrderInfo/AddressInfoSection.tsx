'use client';

import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/Button';
import { AddressDataType } from '@/types/AddressDataType';
import { useRouter, useSearchParams } from 'next/navigation';
import { getAddressByUuid } from '@/action/address-service';

export default function AddressInfoSection({
  mainAddress,
}: {
  mainAddress: AddressDataType;
}) {
  const [selectedAddress, setSelectAddress] =
    useState<AddressDataType>(mainAddress);

  const searchParams = useSearchParams();
  const selectedUuid = searchParams.get('addressUuid');
  const router = useRouter();

  useEffect(() => {
    const fetchAddress = async () => {
      if (!selectedUuid) return;
      try {
        const data = await getAddressByUuid(selectedUuid);
        if (data) {
          setSelectAddress(data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchAddress();
  }, [selectedUuid]);

  const address = selectedAddress || mainAddress;

  return (
    <>
      {address && (
        <section className="px-6">
          <div className="flex justify-between items-center">
            <h1 className="font-semibold text-[1.125rem]">배송정보</h1>
            <Button
              color="white"
              size="xs"
              type="button"
              className="font-light border-gray-300"
              onClick={() =>
                router.push(
                  `/select-address?addressUuid=${address.addressUuid}`
                )
              }
            >
              변경
            </Button>
          </div>
          <div className="py-3 space-y-[0.4rem]">
            {address.isMainAddress ? (
              <p className="font-semibold text-[1rem] inline-flex items-center">
                {address.receiverName} ({address.addressNickname})
                <span className="text-[0.6rem] font-light bg-custom-green-300/15 text-custom-green-300 px-[0.3rem] py-[0.15rem] mx-2">
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
          <input
            type="hidden"
            name="addressUuid"
            value={address.addressUuid}
            readOnly
          />
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
