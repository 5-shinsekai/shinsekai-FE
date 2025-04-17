'use server';
import { productThumbnailType } from '@/types/ProductDataTypes';
export const getMainCategoryList = async () => {
  const res = await fetch(`${process.env.BASE_API_URL}/category/main`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
};

export const getProductThumbnail = async (productCode: string) => {
  const res = await fetch(
    `${process.env.BASE_API_URL}/product/${productCode}/outline`
  );
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = await res.json();
  return data.result as productThumbnailType;
};
