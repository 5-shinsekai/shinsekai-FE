'use server';

import { CommonResponseType } from '@/types/Common';
import {
  ProductListType,
  ProductThumbnailType,
} from '@/types/ProductDataTypes';
import { MainCategoryType } from '@/types/CategotyTypes';
import { EventType } from '@/types/ProductDataTypes';

export const getMainCategoryList = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/category/main`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = (await res.json()) as CommonResponseType<MainCategoryType[]>;
  return data.result;
};

export const getProductThumbnail = async (productCode: string) => {
  console.log(productCode);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/product/outline/${productCode}`
  );
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = (await res.json()) as CommonResponseType<ProductThumbnailType>;
  return data.result;
};

export const getEventList = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/event`);
  if (!res.ok) {
    console.log(res);
    throw new Error('Failed to fetch data');
  }
  const data = (await res.json()) as CommonResponseType<EventType[]>;
  return data.result;
};

export const getEventProductList = async (eventId: number) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/product-event/${eventId}`
  );
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = (await res.json()) as CommonResponseType<ProductListType>;
  return data.result;
};
