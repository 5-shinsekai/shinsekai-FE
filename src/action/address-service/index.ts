'use server';

import { addressApiType } from '@/types/addressApiType';
import { AddressDataType } from '@/types/AddressDataType';

// 주소검색
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

// 배송지 등록
export const postAddress = async (addressForm: FormData) => {
  const addressData: Partial<AddressDataType> = {
    addressNickname: addressForm.get('addressNickname') as string,
    receiverName: addressForm.get('receiverName') as string,
    zipNo: addressForm.get('zipNo') as string,
    roadAddress: addressForm.get('roadAddress') as string,
    detailedAddress: addressForm.get('detailedAddress') as string,
    totalAddress: `${addressForm.get('roadAddress') as string} ${addressForm.get('detailedAddress') as string}`,
    firstPhoneNumber: '010-0150-0000',
    secondPhoneNumber: '010-0440-0000',
    deliveryMemo:
      addressForm.get('deliveryMemo') === '직접입력'
        ? (addressForm.get('isDirectInputMemo') as string)
        : (addressForm.get('deliveryMemo') as string),
    isPersonalMemo:
      addressForm.get('deliveryMemo') === '직접입력' ? true : false,
    isMainAddress:
      (addressForm.get('defaultAddress') as string) === 'on' ? true : false,
  };
  const ACCESS_TOKEN = process.env.ACCESS_TOKEN;

  console.log(addressData);
  console.log(ACCESS_TOKEN);
  const res = await fetch('http://3.37.52.123:8080/api/v1/address', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${ACCESS_TOKEN}`,
    },
    body: JSON.stringify(addressData),
  });

  // const res = await fetch('http://3.37.52.123:8080/api/v1/address', {
  //   method: 'GET',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'Authorization': `Bearer ${ACCESS_TOKEN}`,
  //   },
  // });
  if (!res.ok) {
    const text = await res.text();
    console.error('서버 응답 상태 코드:', res.status);
    console.error('서버 응답 내용:', text);
    throw new Error('Failed to fetch data');
  }
  const data = await res.json();
  console.log(data);
  return data;
};

export const getAddress = async () => {
  const ACCESS_TOKEN = process.env.ACCESS_TOKEN;

  const res = await fetch('http://3.37.52.123:8080/api/v1/address', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${ACCESS_TOKEN}`,
    },
  });

  if (!res.ok) {
    const text = await res.text();
    console.error('서버 응답 상태 코드:', res.status);
    console.error('서버 응답 내용:', text);
    throw new Error('등록된 스타벅스 카드 조회 실패');
  }

  const address = await res.json();
  console.log('조회된 배송지 목록:', address);
  return address;
};
