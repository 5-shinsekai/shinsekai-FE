'use server';

import { options } from '@/app/api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth';

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

export const getCartItems = async () => {
  const session = await getServerSession(options);
  const token = session?.user.accessToken;
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/cart`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  });
  const data = await res.json();
  return data;
};

export const updateCartItem = async (
  cartUuid: string,
  productOptionListId: string,
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
  const data = await res.json();
  return data;
};
