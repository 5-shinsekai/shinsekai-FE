'use server';

import {
  ChargeStarbucksCardApiType,
  ExternalStarbucksCardDataType,
  PurchaseDataType,
  PurchaseProductLogDataType,
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

// const ACCESS_TOKEN = process.env.ACCESS_TOKEN;

// 스타벅스 카드 등록
export const externalStarbuckscard = async (starbuckscardForm: FormData) => {
  const starbuckscardData: Partial<ExternalStarbucksCardDataType> = {
    cardName: starbuckscardForm.get('cardName') as string,
    cardNumber: starbuckscardForm.get('cardNumber') as string,
    pinNumber: starbuckscardForm.get('pinNumber') as string,
  };
  const session = await getServerSession(options);
  const ACCESS_TOKEN = session?.user.accessToken;
  // console.log(starbuckscardData);
  const res = await fetch(
    'http://3.37.52.123:8080/api/v1/external/starbucks-card',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${ACCESS_TOKEN}`,
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
  redirect(`/payment`);
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

export const getStarbuckscardList = async (): Promise<
  StarbuckscardInfoType[]
> => {
  const session = await getServerSession(options);
  const ACCESS_TOKEN = session?.user.accessToken;
  const res = await fetch(`http://3.37.52.123:8080/api/v1/starbucks-card`, {
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

export const getStarbuckscardbyUuid = async (
  memberStarbucksCardUuid: string
): Promise<StarbuckscardInfoType[]> => {
  const session = await getServerSession(options);
  const ACCESS_TOKEN = session?.user.accessToken;
  const res = await fetch(
    `http://3.37.52.123:8080/api/v1/starbucks-card/${memberStarbucksCardUuid}`,
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
    throw new Error('등록된 스타벅스 카드 조회 실패');
  }

  const data = await res.json();
  console.log('조회된 카드:', data);
  return data;
};

// 0원일 때만 가능.
//
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

  const data = await res.json();
  console.log('삭제api 결과:', data);
  return data.result;
};

export const chargeStarbuckscard = async (
  chargeInfo: ChargeStarbucksCardApiType
) => {
  const starbuckscardData: Partial<ChargeStarbucksCardApiType> = {
    memberStarbucksCardUuid: chargeInfo['memberStarbucksCardUuid'],
    price: chargeInfo['price'],
  };

  const session = await getServerSession(options);
  const ACCESS_TOKEN = session?.user.accessToken;

  console.log(starbuckscardData);
  const res = await fetch(
    'http://3.37.52.123:8080/api/v1/starbucks-card/charge',
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${ACCESS_TOKEN}`,
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

export const getCartData = async () => {
  const session = await getServerSession(options);
  const ACCESS_TOKEN = session?.user.accessToken;
  const res = await fetch(`http://3.37.52.123:8080/api/v1/cart/checked`, {
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
  console.log(data.result);
  console.log('호출결과');
  return data.result;
};

// Cart-Service
export const getProductInfoByProductCode = async (productCode: string) => {
  console.log('productCode', productCode);
  const res = await fetch(
    `http://3.37.52.123:8080/api/v1/product/${productCode}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // 'Authorization': `Bearer ${ACCESS_TOKEN}`,
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
  console.log(data);
  return data.result;
};

export const getOutlineDataByProductCode = async (productCode: string) => {
  console.log(productCode);
  const res = await fetch(
    `http://3.37.52.123:8080/api/v1/product/outline/${productCode}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // 'Authorization': `Bearer ${ACCESS_TOKEN}`,
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
  console.log('outlinedata', data);
  return data.result;
};

export const getOptionDataByOptionId = async (optionId: number) => {
  console.log(optionId);
  const res = await fetch(
    `http://3.37.52.123:8080/api/v1/product-options/${optionId}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // 'Authorization': `Bearer ${ACCESS_TOKEN}`,
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
  console.log(data);
  return data;
};

export const parsePurchaseFormData = async (paymentForm: FormData) => {
  // orderProductList는 JSON 문자열로 전달됨
  const orderProductListJson = paymentForm.get('orderProductList')?.toString();
  const orderProductList: PurchaseProductLogDataType[] = orderProductListJson
    ? JSON.parse(orderProductListJson)
    : [];

  console.log(orderProductList);
  const purchaseData: PurchaseDataType = {
    purchaseStatus: 'PAYMENT_COMPLETED',
    giftCertificationUuid:
      paymentForm.get('giftCertificationUuid')?.toString() || '',
    couponUuid: paymentForm.get('couponUuid')?.toString() || '',
    shipmentFee: Number(paymentForm.get('shipmentFee')) || 0,
    productTotalPrice: Number(paymentForm.get('productTotalPrice')) || 0,
    addressUuid: paymentForm.get('addressUuid')?.toString() || '',
    orderName: paymentForm.get('orderName')?.toString() || '',
    paymentPrice: Number(paymentForm.get('paymentPrice')) || 0,
    paymentMethod:
      paymentForm.get('paymentMethod')?.toString() || 'starbuckscard',
    paymentStatus: 'DONE',
    receiptUrl: paymentForm.get('receiptUrl')?.toString() || '',
    memberStarbucksCardUuid:
      paymentForm.get('paymentCardUuid')?.toString() || '',
    orderProductList,
  };

  console.log('최종 결제 정보:', purchaseData);
  return purchaseData;
};

// export const parsePurchaseFormData = async (paymentForm: FormData) => {
//   const entries = Array.from(paymentForm.entries());
//   console.log(entries);
//   const productInfoMap: Record<
//     number,
//     Partial<PurchaseProductLogDataType>
//   > = {};

//   const orderProductInfo = {
//     productOptionId: 'productOptionId',
//     productCode: 'productCode',
//     productName: 'productName',
//     productPrice: 'productPrice',
//     quantity: 'quantity',
//     thumbnailUrl: 'productImageUrl',
//     productImageDescription: 'productImageDescription',
//   } as const;

//   type FieldMapKey = keyof typeof orderProductInfo;
//   type ProductKey = keyof PurchaseProductLogDataType;

//   for (const [key, value] of entries) {
//     const match = key.match(/^orderProductList\[(\d+)\]\.(\w+)$/);
//     if (!match) continue;

//     const index = Number(match[1]);
//     const rawField = match[2] as FieldMapKey;
//     const mappedField = orderProductInfo[rawField] as ProductKey;

//     if (!mappedField) continue;

//     if (!productInfoMap[index]) productInfoMap[index] = {};

//     const isNumberField = [
//       'productOptionId',
//       'productPrice',
//       'quantity',
//     ].includes(rawField);
//     console.log(isNumberField);

//     if (
//       mappedField === 'productOptionId' ||
//       mappedField === 'productPrice' ||
//       mappedField === 'quantity'
//     ) {
//       productInfoMap[index][mappedField] = Number(
//         value
//       ) as PurchaseProductLogDataType[typeof mappedField];
//     } else {
//       productInfoMap[index][mappedField] = String(
//         value
//       ) as PurchaseProductLogDataType[typeof mappedField];
//     }
//   }

//   const orderProductList: PurchaseProductLogDataType[] = Object.values(
//     productInfoMap
//   ) as PurchaseProductLogDataType[];

//   const purchaseData: PurchaseDataType = {
//     purchaseStatus: 'PAYMENT_COMPLETED',
//     giftCertificationUuid:
//       paymentForm.get('giftCertificationUuid')?.toString() || '',
//     couponUuid: paymentForm.get('couponUuid')?.toString() || '',
//     shipmentFee: Number(paymentForm.get('shipmentFee')) || 0,
//     productTotalPrice: Number(paymentForm.get('productTotalPrice')) || 0,
//     addressUuid: paymentForm.get('addressUuid')?.toString() || '',
//     orderName: paymentForm.get('orderName')?.toString() || '',
//     paymentPrice: Number(paymentForm.get('paymentPrice')) || 0,
//     paymentMethod:
//       paymentForm.get('paymentMethod')?.toString() || 'starbuckscard',
//     paymentStatus: 'DONE',
//     receiptUrl: paymentForm.get('receiptUrl')?.toString() || '',
//     memberStarbucksCardUuid:
//       paymentForm.get('paymentCardUuid')?.toString() || '',
//     orderProductList,
//   };

//   console.log('최종 결제 정보:', purchaseData);
//   return purchaseData;
// };

export const submitPurchaseData = async (purchaseData: PurchaseDataType) => {
  const session = await getServerSession(options);
  const ACCESS_TOKEN = session?.user.accessToken;
  const res = await fetch(`http://3.37.52.123:8080/api/v1/purchase`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${ACCESS_TOKEN}`,
    },
    body: JSON.stringify(purchaseData),
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

export const purchase = async (paymentForm: FormData) => {
  const cartUuidListJson = paymentForm.get('cartUuidList')?.toString();
  const cartUuidList = cartUuidListJson ? JSON.parse(cartUuidListJson) : [];

  const purchaseData = await parsePurchaseFormData(paymentForm);
  const response = await submitPurchaseData(purchaseData);
  console.log('결제 완료:', response);
  await deleteCartList(cartUuidList);
  return { isSuccess: response.isSuccess };
};

export const deleteCartList = async (cartUuidList: string[]) => {
  const session = await getServerSession(options);
  const ACCESS_TOKEN = session?.user.accessToken;

  console.log('cartUuidList (카트 uuid): ', cartUuidList);

  const body = cartUuidList.map((uuid) => ({ cartUuid: uuid }));

  const res = await fetch(`http://3.37.52.123:8080/api/v1/cart/list`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${ACCESS_TOKEN}`,
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const text = await res.text();
    console.error('서버 응답 상태 코드:', res.status);
    console.error('서버 응답 내용:', text);
    throw new Error('Failed to delete cart items');
  }

  const data = await res.json();
  console.log('장바구니 삭제 API 결과:', data);
  return data.result;
};
