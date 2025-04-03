import SearchAddressForm from '@/components/pages/address/SearchAddressForm';
// import SearchAdressForm from '@/components/pages/address/SearchAdressForm';
import React from 'react';

export default function page() {
  return (
    <main className="px-[1.5rem]">
      <h1 className="pt-[1.875rem] pb-[1.25rem] text-[1.625rem] font-semibold">
        어디로 배송할까요?
      </h1>
      <SearchAddressForm />
    </main>
  );
}
