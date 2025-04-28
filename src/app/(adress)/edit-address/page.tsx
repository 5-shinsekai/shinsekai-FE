import React, { Suspense } from 'react';
import { getAddressByUuid } from '@/action/address-service';
import EditAddressForm from '@/components/pages/address/EditAddressForm';

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ addressUuid: string }>;
}) {
  const { addressUuid } = await searchParams;
  const addressData = await getAddressByUuid(addressUuid);

  return (
    <main className="px-[1.5rem]">
      <h1 className="py-8 text-[1.625rem] font-semibold">배송지 정보</h1>
      <Suspense>
        <EditAddressForm addressData={addressData!} />
      </Suspense>
    </main>
  );
}
