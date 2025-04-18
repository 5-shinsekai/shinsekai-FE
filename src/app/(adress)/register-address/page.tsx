import React, { Suspense } from 'react';
import RegisterAddressForm from '@/components/pages/address/RegisterAddressForm';

export default function Page() {
  return (
    <main className="px-[1.5rem]">
      <h1 className="py-10 text-[1.625rem] font-semibold">배송지 정보</h1>
      <Suspense>
        <RegisterAddressForm />
      </Suspense>
    </main>
  );
}
