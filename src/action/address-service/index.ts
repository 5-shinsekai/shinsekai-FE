'use server';

import { addressApiType } from '@/types/addressApiType';

export const getAddressList = async (
  keyword: string,
  currentPage: string,
  countPerPage: string
): Promise<addressApiType> => {
  const baseUrl = process.env.NEXT_PUBLIC_SEARCH_ADRESS_BASE_URL;
  const serviceKey = process.env.NEXT_PUBLIC_SEARCH_ADRESS_SECRET_KEY;
  const params = {
    keyword: keyword.trim(), // 공백 제거 후 넘겨주기 (띄어쓰기 여러 번 했을 때 검색 안되는 것 방지)
    currentPage: currentPage,
    countPerPage: countPerPage,
    resultType: 'json',
  };

  const queryString = new URLSearchParams(params).toString();
  const fullUrl = `${baseUrl}?${queryString}&confmKey=${serviceKey}`;

  const res = await fetch(fullUrl);
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }

  const data = (await res.json()) as addressApiType;
  console.log('주소 검색 API 응답:', data);
  return data;
};

export const setAddress = async (addressForm: FormData) => {
  const addressNickname = addressForm.get('addressNickname');
  const receiverName = addressForm.get('receiverName');
  const zipNo = addressForm.get('zipNo');
  const roadAddr = addressForm.get('roadAddr');
  const detailedAddress = addressForm.get('detailedAddress');
  const firstPhoneNumber = addressForm.get('firstPhoneNumber');
  const secondPhoneNumber = addressForm.get('secondPhoneNumber');
  const deliveryMemo =
    addressForm.get('deliveryMemo') === '직접입력'
      ? addressForm.get('deliveryMemo')
      : addressForm.get('isDirectInputMemo');
  const defaultAddress = addressForm.get('defaultAddress');
  // const isDirectInputMemo = addressForm.get('isDirectInputMemo');
  const totalAddress = `${roadAddr} ${detailedAddress}`;
  const isMainAddress = defaultAddress === 'on' ? true : false;
  console.log('rr', addressNickname);

  const addressData = {
    addressNickname,
    receiverName,
    zipNo,
    totalAddress,
    firstPhoneNumber,
    secondPhoneNumber,
    deliveryMemo,
    isMainAddress,
    // isDirectInputMemo,
  };

  console.log('addressData', addressData);
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
