import React from 'react';
import RegisterAddressForm from '@/components/pages/address/RegisterAddressForm';

interface RegisterAddressFormType {
  addressNickname: string;
  receiverName: string;
  detailedAddress: string;
  firstPhoneNumber: string;
  secondPhoneNumber: string;
  roadAddr: string;
  zipNo: string;
}

export default async function page({
  searchParams,
}: {
  searchParams: Promise<RegisterAddressFormType>;
}) {
  const {
    addressNickname,
    receiverName,
    detailedAddress,
    firstPhoneNumber,
    secondPhoneNumber,
    roadAddr,
    zipNo,
  } = await searchParams;

  return (
    <main className="px-[1.5rem]">
      <h1 className="pt-[5rem] pb-[1.25rem] text-[1.625rem] font-semibold">
        배송지 정보
      </h1>
      <RegisterAddressForm
        addressNickname={decodeURIComponent(
          addressNickname === undefined ? '' : addressNickname
        )}
        receiverName={decodeURIComponent(
          receiverName === undefined ? '' : receiverName
        )}
        detailedAddress={decodeURIComponent(
          detailedAddress === undefined ? '' : detailedAddress
        )}
        firstPhoneNumber={decodeURIComponent(
          firstPhoneNumber === undefined ? '' : firstPhoneNumber
        )}
        secondPhoneNumber={decodeURIComponent(
          secondPhoneNumber === undefined ? '' : secondPhoneNumber
        )}
        roadAddr={decodeURIComponent(roadAddr === undefined ? '' : roadAddr)}
        zipNo={decodeURIComponent(zipNo === undefined ? '' : zipNo)}
      />
    </main>
  );
}
