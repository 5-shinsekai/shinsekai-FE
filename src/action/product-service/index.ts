'use server';

import { CommonResponseType } from '@/types/Common';
import {
  ProductListType,
  ProductThumbnailType,
  ProductListResponseType,
  ProductDetailType,
  ProductOptionType,
  OptionNameType,
} from '@/types/ProductDataTypes';
import { MainCategoryType } from '@/types/CategoryTypes';
import { EventType, EventDetailType } from '@/types/ProductDataTypes';

export const getMainCategoryList = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/category/main`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = (await res.json()) as CommonResponseType<MainCategoryType[]>;
  return data.result;
};

export const getProductThumbnail = async (productCode: string) => {
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
    throw new Error('Failed to fetch data');
  }
  const data = (await res.json()) as CommonResponseType<EventType[]>;
  return data.result;
};

export const getEventDetail = async (eventId: number) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/event/${eventId}`
  );
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = (await res.json()) as CommonResponseType<EventDetailType>;
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

export const getProductList = async ({
  mainCategoryId,
  subCategoryIds,
  seasonIds,
  priceRangeId,
  sort = [],
  page = 1,
  size = 10,
}: {
  mainCategoryId: number;
  subCategoryIds?: number[] | undefined;
  seasonIds?: number[] | undefined;
  priceRangeId?: number | undefined;
  sort?: string[];
  page?: number;
  size?: number;
}) => {
  const params = new URLSearchParams();

  params.set('mainCategoryId', mainCategoryId.toString());
  params.set('page', page.toString());
  params.set('size', size.toString());
  params.set('sort', sort?.join(',') ?? '');
  params.set('subCategoryIds', subCategoryIds?.join(',') ?? '');
  params.set('seasonIds', seasonIds?.join(',') ?? '');
  params.set('priceRangeId', priceRangeId?.toString() ?? '');

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/product/filter?${params.toString()}`
  );
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const data =
    (await res.json()) as CommonResponseType<ProductListResponseType>;
  return data.result;
};

export const getProductDetail = async ({
  productCode,
}: Readonly<{
  productCode: string;
}>) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/product/${productCode}`
  );
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = (await res.json()) as CommonResponseType<ProductDetailType>;
  return data.result;
};

export const getProductOption = async ({
  productOptionId,
}: Readonly<{
  productOptionId: number;
}>) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/product-options/${productOptionId}`
  );
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = (await res.json()) as CommonResponseType<ProductOptionType>;
  return data.result;
};

export const getOptionName = async ({
  optionType,
  optionId,
}: Readonly<{
  optionType: string;
  optionId: number;
}>) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/option/${optionType}/${optionId}`
  );
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = (await res.json()) as CommonResponseType<OptionNameType>;
  return data.result;
};
