'use client';

import { Button } from '@/components/ui/button';
import React from 'react';
import { useState, useRef } from 'react';
import SearchAdressResult from './SearchAdressResult';

export default function InputAddressDemo() {
  const addressInput = useRef<HTMLInputElement>(null);
  const [submittedInputAddress, setSubmittedInputAddress] = useState('');

  const handleSearch = () => {
    const value = addressInput.current?.value || '';
    setSubmittedInputAddress(value);
  };

  return (
    <div className="p-4">
      <div className="mb-4 flex items-center gap-2">
        <input
          placeholder="주소입력"
          ref={addressInput}
          className="border px-3 py-2 rounded w-full"
        />
        <Button onClick={handleSearch}>검색</Button>
      </div>

      <SearchAdressResult search={submittedInputAddress} />
    </div>
  );
}
