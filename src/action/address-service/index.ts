'use server';

import { AddressApiType } from '@/types/AddressApiType';
import { AddressDataType } from '@/types/AddressDataType';
import { getServerSession } from 'next-auth';
import { options } from '@/app/api/auth/[...nextauth]/options';

// const ACCESS_TOKEN =
//   'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJNMjAyNTA0MTYtYjJhZmY4NDQiLCJpYXQiOjE3NDQ3OTE4NjgsImV4cCI6MTc0NDk2NDY2OH0.wStxmfK60Clpma4M22__ngjIng9NjGKMSN5LARDWBP0';
// 주소검색
export const getAddressList = async (
  keyword: string,
  currentPage: string,
  countPerPage: string
): Promise<AddressApiType> => {
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

  const data = (await res.json()) as AddressApiType;
  console.log('주소 검색 API 응답:', data);
  return data;
};

// 배송지 등록
export const postAddress = async (addressForm: FormData) => {
  console.log(addressForm);
  const addressData: Partial<AddressDataType> = {
    addressNickname: addressForm.get('addressNickname') as string,
    receiverName: addressForm.get('receiverName') as string,
    zipNo: addressForm.get('zipNo') as string,
    roadAddress: addressForm.get('roadAddress') as string,
    detailAddress: addressForm.get('detailAddress') as string,
    totalAddress: `${addressForm.get('roadAddress') as string} ${addressForm.get('detailAddress') as string}`,
    firstPhoneNumber:
      addressForm.get('firstPhoneNumber') === '--'
        ? ''
        : (addressForm.get('firstPhoneNumber') as string),
    secondPhoneNumber:
      addressForm.get('secondPhoneNumber') === '--'
        ? ''
        : (addressForm.get('secondPhoneNumber') as string),
    deliveryMemo:
      addressForm.get('deliveryMemo') === '직접입력'
        ? (addressForm.get('isDirectInputMemo') as string)
        : (addressForm.get('deliveryMemo') as string),
    isPersonalMemo:
      addressForm.get('deliveryMemo') === '직접입력' ? true : false,
    isMainAddress:
      (addressForm.get('isMainAddress') as string) === 'true' ? true : false,
  };

  const session = await getServerSession(options);
  const ACCESS_TOKEN = session?.user.accessToken;

  const res = await fetch('http://3.37.52.123:8080/api/v1/address', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${ACCESS_TOKEN}`,
    },
    body: JSON.stringify(addressData),
  });

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

export const getAddress = async (): Promise<AddressDataType[]> => {
  const session = await getServerSession(options);
  const ACCESS_TOKEN = session?.user.accessToken;

  const res = await fetch('http://3.37.52.123:8080/api/v1/address/list', {
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
    throw new Error('배송지 조회 실패');
  }

  const data = await res.json();
  console.log('조회된 배송지 목록:', data.result);
  return data.result;
};

// 배송지 수정
export const editAddress = async (addressForm: FormData) => {
  const session = await getServerSession(options);
  const ACCESS_TOKEN = session?.user.accessToken;

  const addressData: Partial<AddressDataType> = {
    addressUuid: addressForm.get('addressUuid') as string,
    addressNickname: addressForm.get('addressNickname') as string,
    receiverName: addressForm.get('receiverName') as string,
    zipNo: addressForm.get('zipNo') as string,
    roadAddress: addressForm.get('roadAddress') as string,
    detailAddress: addressForm.get('detailAddress') as string,
    totalAddress: `${addressForm.get('roadAddress') as string} ${addressForm.get('detailAddress') as string}`,
    firstPhoneNumber:
      addressForm.get('firstPhoneNumber') === '--'
        ? ''
        : (addressForm.get('firstPhoneNumber') as string),
    secondPhoneNumber:
      addressForm.get('secondPhoneNumber') === '--'
        ? ''
        : (addressForm.get('secondPhoneNumber') as string),
    deliveryMemo:
      addressForm.get('deliveryMemo') === '직접입력'
        ? (addressForm.get('isDirectInputMemo') as string)
        : (addressForm.get('deliveryMemo') as string),
    isPersonalMemo:
      addressForm.get('deliveryMemo') === '직접입력' ? true : false,
    isMainAddress:
      (addressForm.get('isMainAddress') as string) === 'true' ? true : false,
  };

  console.log(addressData);
  console.log(ACCESS_TOKEN);
  const res = await fetch('http://3.37.52.123:8080/api/v1/address', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${ACCESS_TOKEN}`,
    },
    body: JSON.stringify(addressData),
  });

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

export const getAddressByUuid = async (adressUuid: string) => {
  const session = await getServerSession(options);
  const ACCESS_TOKEN = session?.user.accessToken;

  console.log('uuid (배송지): ', adressUuid);

  const res = await fetch(
    `http://3.37.52.123:8080/api/v1/address/${adressUuid}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${ACCESS_TOKEN}`,
      },
    }
  );
  if (!res.ok) {
    const text = await res.text();
    console.error('서버 응답 상태 코드:', res.status);
    console.error('서버 응답 내용:', text);
    throw new Error('Failed to fetch data');
  }

  const data = await res.json();
  return data.result;
};

export const deleteAddressByUuid = async (adressUuid: string) => {
  const session = await getServerSession(options);
  const ACCESS_TOKEN = session?.user.accessToken;

  console.log('uuid (배송지): ', adressUuid);

  const res = await fetch(
    `http://3.37.52.123:8080/api/v1/address/${adressUuid}`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${ACCESS_TOKEN}`,
      },
    }
  );
  if (!res.ok) {
    const text = await res.text();
    console.error('서버 응답 상태 코드:', res.status);
    console.error('서버 응답 내용:', text);
    throw new Error('Failed to fetch data');
  }

  const data = await res.json();
  console.log('배송지 삭제 결과:', data);
  return data.result;
};

export const getMainAddress = async () => {
  const session = await getServerSession(options);
  const ACCESS_TOKEN = session?.user.accessToken;

  const res = await fetch(`http://3.37.52.123:8080/api/v1/address/main`, {
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
    throw new Error('Failed to fetch data');
  }

  const data = await res.json();
  return data.result;
};
