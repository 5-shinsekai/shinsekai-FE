'use server';

import {
  ExternalStarbucksCardDataType,
  RegisterStarbucksCardDataType,
} from '@/types/PaymentDataType';

// 스타벅스 카드 등록
export const externalStarbuckscard = async (starbuckscardForm: FormData) => {
  const starbuckscardData: Partial<ExternalStarbucksCardDataType> = {
    // cardName: starbuckscardForm.get('cardName') as string,
    cardNumber: starbuckscardForm.get('cardNumber') as string,
    pinNumber: starbuckscardForm.get('pinNumber') as string,
  };
  const ACCESS_TOKEN = process.env.ACCESS_TOKEN;

  console.log(starbuckscardData);
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
  const data = await res.json();
  console.log(data);

  return data;
};

// const registerStarbuckscard = async () => {
//   const starbuckscardData: Partial<RegisterStarbucksCardDataType> = {

//   };
//   const ACCESS_TOKEN = process.env.ACCESS_TOKEN;

//   console.log(starbuckscardData);
//   const res = await fetch(
//     'http://3.37.52.123:8080/api/v1/external/starbucks-card',
//     {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         // 'Authorization': `Bearer ${ACCESS_TOKEN}`,
//       },
//       body: JSON.stringify(starbuckscardData),
//     }
//   );
//   if (!res.ok) {
//     const text = await res.text();
//     console.error('서버 응답 상태 코드:', res.status);
//     console.error('서버 응답 내용:', text);
//     throw new Error('Failed to fetch data');
//   }
//   const data = await res.json();
//   console.log(data);
//   return data;
// };
