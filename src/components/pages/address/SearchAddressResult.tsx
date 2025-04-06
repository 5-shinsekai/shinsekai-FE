import { cn } from '@/lib/utils';
import { addressResultType, searchResultType } from '@/types/addressApiType';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function GetAddress({
  addressList,
  searchResult,
}: {
  addressList: addressResultType[];
  searchResult: searchResultType;
}) {
  const router = useRouter();

  const handleGetAddress = (address: addressResultType) => {
    router.push(
      `/register-address?roadAddr=${address.roadAddr}&zipCode=${address.zipNo}`
    );
  };

  if (searchResult.errorCode !== '0') {
    return (
      <section className="mt-[20rem]">
        <p className="text-center text-xs text-red-700">
          검색결과가 없습니다.
          <br />
          다시 입력해주세요
        </p>
      </section>
    );
  }
  console.log(addressList);

  return (
    <>
      <section className="mt-[16rem]">
        <p
          className={cn(
            'fixed top-[15rem] w-full mx-auto bg-white text-right text-green-600 text-xs font-semibold px-12',
            searchResult.totalCount === '0' ? 'hidden' : 'block'
          )}
        >
          총 {searchResult.totalCount}건의 검색결과
        </p>
        <ul className="px-2 mt-4">
          {addressList.map((item, index) => (
            <li
              key={index}
              className="py-4 border-b-1 border-b-gray-200 cursor-pointer"
              onClick={() => handleGetAddress(item)}
            >
              <p>{item.zipNo}</p>
              <p>{item.roadAddr}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
