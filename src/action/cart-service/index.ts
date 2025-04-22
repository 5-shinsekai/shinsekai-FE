'use server';

import { options } from '@/app/api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth';
import { CommonResponseType } from '@/types/Common';
import {
  CartDataType,
  CartListType,
  CartUuidListType,
} from '@/types/CartDataType';
import { revalidateTag } from 'next/cache';

export const addCartItem = async (
  productCode: string,
  isFrozen: boolean,
  quantity: number,
  productOptionListId?: string,
  engravingMessage?: string
) => {
  const session = await getServerSession(options);
  const token = session?.user.accessToken;
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/cart`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify({
      productCode,
      isFrozen,
      productOptionListId,
      quantity,
      engravingMessage,
    }),
  });
  const data = await res.json();
  return data;
};

export const getCartItemList = async () => {
  const session = await getServerSession(options);
  const token = session?.user.accessToken;
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/cart/uuid`, {
    method: 'GET',
    next: {
      tags: [`cart-list`],
    },
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  });

  const data = (await res.json()) as CommonResponseType<CartUuidListType>;
  return data.result;
};

export const getCartItem = async (cartUuid: string) => {
  const session = await getServerSession(options);
  const token = session?.user.accessToken;
  // const start = performance.now();
  // const end = performance.now();
  // console.log(`✅ Product ${cartUuid} fetched in ${end - start}ms`);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/cart/${cartUuid}`,
    {
      next: {
        tags: [`cart-${cartUuid}`, 'cart-item'],
      },
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    }
  );

  const data = (await res.json()) as CommonResponseType<CartDataType>;
  return data.result;
};

export const updateCartItem = async (
  cartUuid: string,
  productOptionListId: number,
  quantity?: number,
  checked?: boolean
) => {
  const session = await getServerSession(options);
  const token = session?.user.accessToken;
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/cart`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify({ cartUuid, quantity, checked, productOptionListId }),
  });
  revalidateTag(`cart-${cartUuid}`);

  const data = (await res.json()) as CommonResponseType<''>;
  return data;
};

export const getCheckoutCartItemList = async () => {
  const session = await getServerSession(options);
  const token = session?.user.accessToken;
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/cart/checked`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  });
  const data = (await res.json()) as CommonResponseType<CartListType>;
  return data.result;
};

export const updateAllChecked = async (itemType: string, checked: boolean) => {
  const session = await getServerSession(options);
  const token = session?.user.accessToken;
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/cart/checked`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify({ itemType, checked }),
  });
  revalidateTag(`cart-item`);

  return res.json();
};
