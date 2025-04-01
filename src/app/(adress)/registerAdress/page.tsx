import React from 'react';
import RegisterAdressForm from '@/components/pages/address/RegisterAdressForm';

export default function page() {
  return (
    <main className="px-[1.5rem]">
      <h1 className="pt-[1.875rem] pb-[1.25rem] text-[1.625rem] font-semibold">
        배송지 정보
      </h1>
      <RegisterAdressForm />
    </main>
  );
}
