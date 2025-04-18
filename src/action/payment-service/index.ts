'use server';

import {
  ExternalStarbucksCardDataType,
  RegisterStarbucksCardDataType,
  StarbuckscardInfoType,
} from '@/types/PaymentDataType';
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { options } from '@/app/api/auth/[...nextauth]/options';
// interface ActionState {
//   success: boolean;
//   data: any | null;
//   error: string;
// }

// 스타벅스 카드 등록
export const externalStarbuckscard = async (starbuckscardForm: FormData) => {
  const starbuckscardData: Partial<ExternalStarbucksCardDataType> = {
    cardName: starbuckscardForm.get('cardName') as string,
    cardNumber: starbuckscardForm.get('cardNumber') as string,
    pinNumber: starbuckscardForm.get('pinNumber') as string,
  };

  // console.log(starbuckscardData);
  const res = await fetch(
    'http://3.37.52.123:8080/api/v1/external/starbucks-card',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // 'Authorization': `Bearer ${ACCESS_TOKEN}`,
      },
      body: JSON.stringify(starbuckscardData),
    }
  );
  if (!res.ok) {
    const text = await res.text();
    console.error('서버 응답 상태 코드:', res.status);
    console.error('서버 응답 내용:', text);
    throw new Error('Failed to fetch data');
  }

  // const { cardName, cardNumber } = starbuckscardData;
  const data = await res.json();
  console.log('API로부터 받은 데이터 (외부api):', data);
  const cardData = await registerStarbuckscard(data);
  console.log('카드 등록되었는지 확인', cardData);
  redirect(
    //api response -> uuid 추가하고 수정해야함.
    `/card-complete?cardUuid=${encodeURIComponent(cardData.memberStarbucksCardListUuid)}` //uuid로 redirect 하기
  );
};

const registerStarbuckscard = async (data: RegisterStarbucksCardDataType) => {
  const registerStarbuckscardData: Partial<RegisterStarbucksCardDataType> = {
    cardName: data.cardName,
    cardNumber: data.cardNumber.replace(/-/g, ''),
    remainAmount: data.remainAmount,
    cardImageUrl: data.cardImageUrl,
    cardDescription: data.cardDescription,
    agreed: true,
  };
  const session = await getServerSession(options);
  const ACCESS_TOKEN = session?.user.accessToken;
  console.log(registerStarbuckscardData);
  const res = await fetch('http://3.37.52.123:8080/api/v1/starbucks-card', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${ACCESS_TOKEN}`,
    },
    body: JSON.stringify(registerStarbuckscardData),
  });
  if (!res.ok) {
    const text = await res.text();
    console.error('서버 응답 상태 코드:', res.status);
    console.error('서버 응답 내용:', text);
    throw new Error('Failed to fetch data');
  }
  const success = await res.json();
  console.log('register api 응답', success);
  console.log(success);
  return success.result;
};

export const getStarbuckscard = async (): Promise<StarbuckscardInfoType[]> => {
  const session = await getServerSession(options);
  const ACCESS_TOKEN = session?.user.accessToken;
  const res = await fetch('http://3.37.52.123:8080/api/v1/starbucks-card', {
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

  const data = await res.json();
  console.log('조회된 카드 목록:', data);
  return data;
};

export const deleteStarbuckscard = async (memberStarbucksCardUuid: string) => {
  const session = await getServerSession(options);
  const ACCESS_TOKEN = session?.user.accessToken;
  console.log('uuid (스벅카드): ', memberStarbucksCardUuid);

  const res = await fetch(
    `http://3.37.52.123:8080/api/v1/starbucks-card/${memberStarbucksCardUuid}`,
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

  // const { cardName, cardNumber } = starbuckscardData;
  const data = await res.json();
  console.log('삭제api 결과:', data);
  return data;
};
