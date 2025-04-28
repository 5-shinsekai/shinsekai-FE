'use client';

import { Button } from '@/components/ui/Button';
import React, { ChangeEvent, useState } from 'react';
import GetAddress from './SearchAddressResult';
import { cn } from '@/lib/utils';
import { getAddressList } from '@/action/address-service';
import { AddressResultType, SearchResultType } from '@/types/AddressApiType';

export default function SearchAddressForm() {
  const [submitAddressInfo, setSubmitAddressInfo] = useState<string>();
  const [error, setError] = useState({
    message: '',
  });
  const [isActive, setIsActive] = useState(false);
  const [addressList, setAddressList] = useState<AddressResultType[]>([]);
  const [searchResult, setSearchResult] = useState<SearchResultType | null>(
    null
  );

  const handleInputchange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSubmitAddressInfo(value);

    if (value.trim().length === 0) {
      setError({ message: '검색어를 입력해 주세요.' });
      setIsActive(false);
      return;
    }

    setError({ message: '' });
    setIsActive(true);
  };

  const getData = async (keyword: string) => {
    const res = await getAddressList(keyword, '1', '100');
    setAddressList(res.results.juso);
    setSearchResult(res.results.common);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!submitAddressInfo) {
      setError({ message: '검색어를 입력해 주세요.' });
      return;
    }
    getData(submitAddressInfo);
  };

  return (
    <>
      <section className="fixed top-[3.5rem] w-full text-2xl left-0 bg-white z-5 px-[1.5rem] py-[2rem]">
        <h1 className="">어디로 배송할까요?</h1>
        <form onSubmit={handleSearchSubmit} className="space-y-3 pt-3 relative">
          <p
            className={cn(
              'w-fit px-3 py-1 bg-red-400 text-[0.6rem] text-white rounded-full absolute top-[-1.8rem] left-[-0.3rem]',
              'after:content-[""] after:absolute after:left-[1.5rem] after:transform after:-translate-x-1/2 after:-bottom-1.5 after:w-0 after:h-0 after:border-l-8 after:border-l-transparent after:border-r-8 after:border-r-transparent after:border-t-8 after:border-t-red-400',
              error.message ? 'block' : 'hidden',
              'transition-all duration-300 ease-in-out',
              'top-[0rem]'
            )}
          >
            {error.message}
          </p>
          <input
            onChange={handleInputchange}
            type="text"
            value={submitAddressInfo || ''}
            id="searchAddress"
            name="searchAddress"
            placeholder="주소를 입력해주세요"
            className="text-sm border mt-5 px-3 py-2 w-full placeholder:text-sm"
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
