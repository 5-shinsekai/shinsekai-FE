import React from 'react';
import RegisterAddressForm from '@/components/pages/address/RegisterAddressForm';

export default function page() {
  const setAddress = async (addressForm: FormData) => {
    'use server';
    const addressNickname = addressForm.get('addressNickname');
    const receiverName = addressForm.get('receiverName');
    const zipNo = addressForm.get('zipNo');
    const roadAddr = addressForm.get('roadAddr');
    const detailedAddress = addressForm.get('detailedAddress');
    const firstPhoneNumber = addressForm.get('firstPhoneNumber');
    const secondPhoneNumber = addressForm.get('secondPhoneNumber');
    const deliveryMemo = addressForm.get('deliveryMemo');
    const defaultAddress = addressForm.get('defaultAddress');
    const addressData = {
      addressNickname,
      receiverName,
      zipNo,
      roadAddr,
      detailedAddress,
      firstPhoneNumber,
      secondPhoneNumber,
      deliveryMemo,
      defaultAddress,
    };
    console.log(addressData);
    // const res = await fetch('/api/address', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(addressData),
    // });
    // if (!res.ok) {
    //   throw new Error('Failed to fetch data');
    // }
    // const data = await res.json();
    // console.log(data);
    // return data;
  };
  return (
    <main className="px-[1.5rem]">
      <h1 className="pt-[5rem] pb-[1.25rem] text-[1.625rem] font-semibold">
        배송지 정보
      </h1>
      <RegisterAddressForm setAddress={setAddress} />
    </main>
  );
}
