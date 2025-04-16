'use server';

import { cookies } from 'next/headers';

export const getCartItems = async () => {
  const cookieStore = await cookies();
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/cart`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${cookieStore.get('accessToken')?.value}`,
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
  const cookieStore = await cookies();
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/cart`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${cookieStore.get('accessToken')?.value}`,
    },
    body: JSON.stringify({ cartUuid, quantity, checked, productOptionListId }),
  });
  const data = await res.json();
  return data;
};
