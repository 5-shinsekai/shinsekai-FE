'use server';

import { productDetailType } from '@/types/ProductDataTypes';

export const getProductDetail = async ({
  productCode,
}: {
  productCode: string;
}) => {
  const res = await fetch(
    `${process.env.BASE_API_URL}/products/${productCode}`
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json() as Promise<productDetailType>;
};
