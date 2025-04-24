'use client';

import { AddressDataType } from '@/types/AddressDataType';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

export default function SelectAddressList({
  myAddressList,
  onSelect,
}: {
  myAddressList: AddressDataType[];
  onSelect?: (uuid: string) => void;
}) {
  const params = useSearchParams();
  const [selectedAddressUuid, setSelectedAddressUuid] = useState<string | null>(
    params.get('addressUuid') || null
  );

  const handleChange = (uuid: string) => {
    setSelectedAddressUuid(uuid);
    onSelect?.(uuid);
  };

  const router = useRouter();

  const handleEdit = (item: Partial<AddressDataType>) => {
    const query = new URLSearchParams({
      addressUuid: item.addressUuid || '',
    });
    router.push(`/edit-address?${query.toString()}`);
  };

  return (
    <section className="w-full mx-auto relative">
      {myAddressList.map((item) => (
        <div
          className="flex items-start border-b py-4 last:border-none"
          key={item.addressUuid}
          onClick={() => handleChange(item.addressUuid)}
        >
          <input
            type="radio"
            name="selectAddress"
            value={item.addressUuid}
            checked={selectedAddressUuid === item.addressUuid}
            onChange={() => handleChange(item.addressUuid)}
            className="mt-[0rem] mr-3 size-6 accent-custom-green-200 z-20"
          />
          <div className="w-full">
            <div className="flex justify-between">
              <p className="text-sm font-semibold py-0.5 inline-flex items-center">
                {item.receiverName}({item.addressNickname})
                {item.isMainAddress && (
                  <span className="text-[0.6rem] font-light bg-custom-green-300/15 text-custom-green-300 px-[0.2rem] py-[0.1rem] mx-2">
                    기본
                  </span>
                )}
              </p>
              {item.isMainAddress ? (
                <nav className="text-xs text-custom-gray-400 z-30">
                  <span
                    className="px-3"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleEdit(item);
                    }}
                  >
                    수정
                  </span>
                </nav>
              ) : (
                <nav className="text-xs text-custom-gray-400 z-30">
                  <span
                    className="px-3"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleEdit(item);
                    }}
                  >
                    수정
                  </span>
                </nav>
              )}
            </div>
            <p className="text-sm">
              ({item.zipNo}){item.roadAddress}
            </p>

            <p className="text-sm leading-tight">{item.detailAddress}</p>
            {item.secondPhoneNumber ? (
              <p className="text-xs text-custom-gray-700 py-2">
                {item.firstPhoneNumber} | {item.secondPhoneNumber}
              </p>
            ) : (
              <p className="text-xs text-custom-gray-700 py-2">
                {item.firstPhoneNumber}
              </p>
            )}
            <p className="text-xs text-custom-gray-700">{item.deliveryMemo}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
