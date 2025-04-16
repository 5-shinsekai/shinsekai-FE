import React, { Suspense } from 'react';
import { editAddress, getAddress } from '@/action/address-service';
import EditAddressForm from '@/components/pages/address/EditAddressForm';
import { parse } from 'url';

export default async function Page({
  searchParams,
}: {
  searchParams: { addressUuid: string };
}) {
  const addressListData = await getAddress();
  const addressData = addressListData.find(
    (v) => v.addressUuid === searchParams.addressUuid
  );
  // const [selectedAddressUuid, setSelectedAddressUuid] = useState<string | null>(
  //   myAddressList.find((item) => item.isMainAddress)?.addressUuid ?? null
  // );

  return (
    <main className="px-[1.5rem]">
      <h1 className="py-8 text-[1.625rem] font-semibold">배송지 정보</h1>
      <Suspense>
        <EditAddressForm addressData={addressData!} action={editAddress} />
      </Suspense>
    </main>
  );
}
