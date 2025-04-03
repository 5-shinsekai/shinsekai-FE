import React from 'react';
import RegisterAddressForm from '@/components/pages/address/RegisterAddressForm';

export default async function page({
  searchParams,
}: {
  searchParams: { roadAddr: string; zipCode: string };
}) {
  const { roadAddr, zipCode } = await searchParams;
  return (
    <main className="px-[1.5rem]">
      <h1 className="pt-[1.875rem] pb-[1.25rem] text-[1.625rem] font-semibold">
        배송지 정보
      </h1>
      <RegisterAddressForm
        roadAddr={decodeURIComponent(roadAddr === undefined ? '' : roadAddr)}
        zipCode={decodeURIComponent(zipCode === undefined ? '' : zipCode)}
      />
    </main>
  );
}
