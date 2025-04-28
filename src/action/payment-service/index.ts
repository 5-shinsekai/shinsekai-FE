'use server';

import {
  ChargeStarbucksCardApiType,
  ExternalStarbucksCardDataType,
  MyOrderInfoDataType,
  MyOrderStatusDataType,
  PurchaseDataType,
  PurchaseProductLogDataType,
  RegisterStarbucksCardDataType,
  StarbuckscardInfoType,
} from '@/types/PaymentDataType';
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { options } from '@/app/api/auth/[...nextauth]/options';

// 스타벅스 카드 등록
export const externalStarbuckscard = async (
  starbuckscardForm: FormData,
  link: string
) => {
  const starbuckscardData: Partial<ExternalStarbucksCardDataType> = {
    cardName: starbuckscardForm.get('cardName') as string,
    cardNumber: starbuckscardForm.get('cardNumber') as string,
    pinNumber: starbuckscardForm.get('pinNumber') as string,
  };
  const session = await getServerSession(options);
  const ACCESS_TOKEN = session?.user.accessToken;
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

  const data = await res.json();
  await registerStarbuckscard(data);

  redirect(`/${link}`);
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
  return data;
};

export const deleteStarbuckscard = async (memberStarbucksCardUuid: string) => {
  const session = await getServerSession(options);
  const ACCESS_TOKEN = session?.user.accessToken;

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
  return data.result;
};

export const getProductInfoByProductCode = async (productCode: string) => {
  const res = await fetch(
    `http://3.37.52.123:8080/api/v1/product/${productCode}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
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

export const getOutlineDataByProductCode = async (productCode: string) => {
  const res = await fetch(
    `http://3.37.52.123:8080/api/v1/product/outline/${productCode}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
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

export const getOptionDataByOptionId = async (optionId: number) => {
  const res = await fetch(
    `http://3.37.52.123:8080/api/v1/product-options/${optionId}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
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
  return data;
};

export const parsePurchaseFormData = async (paymentForm: FormData) => {
  const orderProductListJson = paymentForm.get('orderProductList')?.toString();
  const orderProductList: PurchaseProductLogDataType[] = orderProductListJson
    ? JSON.parse(orderProductListJson)
    : [];

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
  return purchaseData;
};

export const purchase = async (paymentForm: FormData) => {
  const cartUuidListJson = paymentForm.get('cartUuidList')?.toString();
  const cartUuidList = cartUuidListJson ? JSON.parse(cartUuidListJson) : [];

  const purchaseData = await parsePurchaseFormData(paymentForm);
  const response = await submitPurchaseData(purchaseData);

  if (response?.isSuccess) {
    await deleteCartList(cartUuidList);
  }

  return { isSuccess: response.isSuccess };
};

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

  const data = await res.json();
  return data;
};

export const deleteCartList = async (cartUuidList: string[]) => {
  const session = await getServerSession(options);
  const ACCESS_TOKEN = session?.user.accessToken;

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
  return data.result;
};

export const getMyOrderList = async (): Promise<MyOrderInfoDataType[]> => {
  const session = await getServerSession(options);
  const ACCESS_TOKEN = session?.user.accessToken;
  const res = await fetch(`http://3.37.52.123:8080/api/v1/purchase`, {
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
  return data;
};

export const getMyOrderStatus = async (): Promise<MyOrderStatusDataType> => {
  const session = await getServerSession(options);
  const ACCESS_TOKEN = session?.user.accessToken;
  const res = await fetch(`http://3.37.52.123:8080/api/v1/purchase/status`, {
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
  return data.result;
};
