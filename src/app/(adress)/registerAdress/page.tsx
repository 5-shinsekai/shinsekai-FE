import React from 'react';
import RegisterAdressForm from '@/components/pages/address/RegisterAdressForm';

export default function page() {
  return (
    <main className="px-[24px]">
      <h1 className="pt-[30px] pb-[20px] text-[1.625rem] font-semibold">
        배송지 정보
      </h1>
      <RegisterAdressForm />
    </main>
  );
}
