'use server';

import { ProductDetailType } from '@/types/ProductDataTypes';
import { ProductType } from '@/types/ProductDataTypes';
export const getProductDetail = async ({
  productCode,
}: Readonly<{
  productCode: string;
}>) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/products/${productCode}`
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json() as Promise<ProductDetailType>;
};

export const getCategoryList = async ({
  categoryId,
}: Readonly<{ categoryId: string }>) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/categories?categoryId=${categoryId}`
  );
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
};

export const getAllProductList = async ({
  page,
}: Readonly<{ page: number }>) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/items?_page=${page}&_per_page=10`
  );
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json() as Promise<{ data: ProductType[]; pages: number }>;
};
