import React from 'react';
import RegisterAddressForm from '@/components/pages/address/RegisterAddressForm';

export default function page() {
  return (
    <main className="px-[1.5rem]">
      <h1 className="pt-[1.875rem] pb-[1.25rem] text-[1.625rem] font-semibold">
        배송지 정보
      </h1>
      <RegisterAddressForm />
    </main>
  );
}
