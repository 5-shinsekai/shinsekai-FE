'use client';

import { Button } from '@/components/ui/button';
import React, { ChangeEvent, useState } from 'react';
import SearchAddressResult from './SearchAddressResult';
import { cn } from '@/lib/utils';
import { InputType } from '@/components/ui/InputInfo';
import { getAddressList } from '@/action/address-service';
import { addressResultType } from '@/types/addressApiType';

export default function SearchAddressForm() {
  const [submitAddressInfo, setSubmitAddressInfo] = useState<string>();
  const [error, setError] = useState({
    message: '',
  });
  const [isActive, setIsActive] = useState(false);
  const [addressList, setAddressList] = useState<addressResultType[]>([]);
  const [totalCount, setTotalCount] = useState<string>();

  const handleInputchange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length < 1) {
      setError({ message: '검색어를 입력해 주세요.' });
      setIsActive(false);
      return;
    }
    setIsActive(value.length > 0);
    setError({ message: '' });
    setSubmitAddressInfo(value);
    console.log('keyword:', value);
  };

  const getData = async (keyword: string) => {
    const res = await getAddressList(keyword, '1', '100');
    console.log('주소 검색 결과:', res);
    setAddressList(res.results.juso);
    setTotalCount(res.results.common.totalCount);
    console.log('주소 검색 결과:', res);
  };
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('주소 검색:', submitAddressInfo);
    if (!submitAddressInfo) {
      setError({ message: '검색어를 입력해 주세요.' });
      return;
    }
    getData(submitAddressInfo);
  };

  return (
    <>
      <section className="fixed top-[3.5rem] w-full left-0 bg-white z-5 px-[1.5rem] py-[1.25rem]">
        <h1 className="">어디로 배송할까요?</h1>
        <form onSubmit={handleSearchSubmit} className="space-y-3 py-3 relative">
          <p
            className={cn(
              'w-fit px-4 py-1 bg-red-400 text-xs text-white rounded-full absolute top-[-1.8rem] left-[-0.3rem]',
              'after:content-[""] after:absolute after:left-[2rem] after:transform after:-translate-x-1/2 after:-bottom-2 after:w-0 after:h-0 after:border-l-8 after:border-l-transparent after:border-r-8 after:border-r-transparent after:border-t-8 after:border-t-red-400',
              error.message ? 'block' : 'hidden',
              'transition-all duration-300 ease-in-out',
              'top-[-1.6rem]'
            )}
          >
            {error.message}
          </p>
          <InputType.InputInfo
            onChange={handleInputchange}
            id="searchAddress"
            name="searchAddress"
            title="주소입력"
            className="border px-3 py-2 rounded w-full"
          />
          <Button
            type="submit"
            disabled={!isActive}
            color={isActive ? 'green' : 'gray'}
            className="w-full mx-auto"
          >
            검색
          </Button>
        </form>
        <p
          className={cn(
            'w-full text-right text-green-600 text-xs font-semibold px-4',
            totalCount ? 'block' : 'hidden'
          )}
        >
          총 {totalCount} 건의 검색결과
        </p>
      </section>
      <SearchAddressResult search={addressList} />
    </>
  );
}
