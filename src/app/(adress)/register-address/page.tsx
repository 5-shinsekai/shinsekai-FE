import React, { Suspense } from 'react';
import RegisterAddressForm from '@/components/pages/address/RegisterAddressForm';
import { setAddress } from '@/action/address-service';

export default function Page() {
  return (
    <main className="px-[1.5rem]">
      <h1 className="pt-[5rem] pb-[1.25rem] text-[1.625rem] font-semibold">
        배송지 정보
      </h1>
      <Suspense>
        <RegisterAddressForm action={setAddress} />
      </Suspense>
    </main>
  );
}
