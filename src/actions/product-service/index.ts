'use server';

import { productDetailType } from '@/types/ProductDataTypes';

export const getProductDetail = async ({
  productCode,
}: Readonly<{
  productCode: string;
}>) => {
  const res = await fetch(
    `${process.env.BASE_API_URL}/products/${productCode}`
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json() as Promise<productDetailType>;
};

export const getCategoryList = async ({
  categoryId,
}: Readonly<{ categoryId: string }>) => {
  const res = await fetch(
    `${process.env.BASE_API_URL}/categories?categoryId=${categoryId}`
  );
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
};
