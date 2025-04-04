import { addressResultType } from '@/types/addressApiType';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function SearchAdressResult({
  search,
}: {
  search: addressResultType[];
}) {
  const router = useRouter();

  const handleGetAddress = (address: addressResultType) => {
    router.push(
      `/register-address?roadAddr=${address.roadAddr}&zipCode=${address.zipNo}`
    );
  };

  console.log(search);
  if (search.length == 0) {
    return (
      <section className="mt-[20rem]">
        <p className="text-center text-xs text-red-500">검색결과가 없습니다</p>
      </section>
    );
  }
  return (
    <section className="mt-[16rem]">
      <ul className="px-2 mt-4">
        {search.map((item, index) => (
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
  );
}
