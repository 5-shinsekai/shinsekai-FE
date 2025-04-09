'use client';

import { Button } from '@/components/ui/button';
import React, { ChangeEvent, useState } from 'react';
import GetAddress from './SearchAddressResult';
import { cn } from '@/lib/utils';
import { InputType } from '@/components/ui/InputInfo';
import { getAddressList } from '@/action/address-service';
import { addressResultType, searchResultType } from '@/types/AddressApiType';

export default function SearchAddressForm() {
  const [submitAddressInfo, setSubmitAddressInfo] = useState<string>();
  const [error, setError] = useState({
    message: '',
  });
  const [isActive, setIsActive] = useState(false);
  const [addressList, setAddressList] = useState<addressResultType[]>([]);
  const [searchResult, setSearchResult] = useState<searchResultType | null>(
    null
  );

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
    setAddressList(res.results.juso);
    setSearchResult(res.results.common);
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
      <section className="fixed top-[3.5rem] w-full text-2xl left-0 bg-white z-5 px-[1.5rem] py-[1.25rem]">
        <h1 className="">어디로 배송할까요?</h1>
        <form onSubmit={handleSearchSubmit} className="space-y-3 pt-3 relative">
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
            type="text"
            defaultValue={submitAddressInfo}
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
      </section>
      {searchResult && (
        <GetAddress searchResult={searchResult} addressList={addressList} />
      )}
    </>
  );
}
