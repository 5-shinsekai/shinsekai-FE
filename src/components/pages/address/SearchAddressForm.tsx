'use client';

import { Button } from '@/components/ui/button';
import React from 'react';
import { useState, useRef } from 'react';
import SearchAddressResult from './SearchAddressResult';

export default function SearchAddressForm() {
  // input에 접근하기 위한 ref
  const inputRef = useRef<HTMLInputElement>(null);
  const [submitAddressInfo, setSubmitAddressInfo] = useState('');
  const [buttonActive, setButtonActive] = useState(false);

  const handleInputchange = () => {
    const value = inputRef.current?.value || '';
    setButtonActive(value.length != 0);
  };

  const handleSearch = () => {
    // 현재 input에 적힌 값
    const value = inputRef.current?.value || '';
    setSubmitAddressInfo(value);
  };

  return (
    <div className="">
      <div className="space-y-3 py-3">
        <input
          onChange={handleInputchange}
          ref={inputRef}
          placeholder="주소입력"
          className="border px-3 py-2 rounded w-full"
        />
        <Button
          onClick={handleSearch}
          disabled={!buttonActive}
          color={!buttonActive ? 'gray' : 'green'}
          className="w-full mx-auto"
        >
          검색
        </Button>
      </div>

      {submitAddressInfo && <SearchAddressResult search={submitAddressInfo} />}
    </div>
  );
}
