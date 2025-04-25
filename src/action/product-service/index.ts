'use server';

import { CommonResponseType } from '@/types/Common';
import {
  ProductListType,
  ProductThumbnailType,
  ProductListResponseType,
  ProductDetailType,
  ProductOptionType,
  OptionNameType,
  FilterDataType,
  MainCategoryType,
  CategoryDataType,
  AlertType,
} from '@/types/ProductDataTypes';
import { EventType, EventDetailType } from '@/types/ProductDataTypes';
import { getServerSession } from 'next-auth';
import { options } from '@/app/api/auth/[...nextauth]/options';

export const getMainCategoryList = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/category/main`, {
    next: {
      revalidate: 3600,
    },
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = (await res.json()) as CommonResponseType<MainCategoryType[]>;
  return data.result;
};

export const getSubCategoryList = async ({
  mainCategoryId,
}: {
  mainCategoryId: number;
}) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/category/sub/${mainCategoryId}`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );
  if (!res.ok) {
    console.log(await res.json());
    throw new Error('Failed to fetch data');
  }
  const data = (await res.json()) as CommonResponseType<CategoryDataType[]>;
  return data.result;
};

export const getFilterList = async ({
  mainCategoryId,
}: {
  mainCategoryId: number | undefined;
}) => {
  console.log(mainCategoryId);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/filter?mainCategoryId=${mainCategoryId == 0 ? '' : mainCategoryId}`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = (await res.json()) as CommonResponseType<FilterDataType>;
  return data.result;
};

export const getProductThumbnail = async (productCode: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/product/outline/${productCode}`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  // console.log('다시작동' + productCode);
  const data = (await res.json()) as CommonResponseType<ProductThumbnailType>;
  return data.result;
};

export const getEventList = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/event`, {
    next: {
      revalidate: 3600,
    },
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = (await res.json()) as CommonResponseType<EventType[]>;
  return data.result;
};

export const getEventDetail = async (eventId: number) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/event/${eventId}`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = (await res.json()) as CommonResponseType<EventDetailType>;
  return data.result;
};

export const getEventProductList = async (eventId: number) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/product-event/${eventId}`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = (await res.json()) as CommonResponseType<ProductListType>;
  return data.result;
};

export const getBestProductList = async ({
  mainCategoryId,
}: {
  mainCategoryId?: number;
}) => {
  console.log(mainCategoryId);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/best-products?mainCategoryId=${mainCategoryId}`
  );
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = (await res.json()) as CommonResponseType<ProductListType>;
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

export const getProductList = async ({
  searchParam,
  size = 10,
}: {
  searchParam: {
    [key: string]: string | string[] | undefined;
  };
  size?: number;
}) => {
  const params = new URLSearchParams();
  params.set('size', size.toString());
  Object.entries(searchParam).forEach(([key, value]) => {
    if (typeof value === 'string') {
      params.append(key, value);
    } else if (Array.isArray(value)) {
      value.forEach((v) => params.append(key, v));
    }
  });
  params.set('size', size.toString());
  if (params.get('mainCategoryId') === '0') {
    params.set('mainCategoryId', '');
  }

  console.log(params.toString());

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/product/filter?${params.toString()}`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const data =
    (await res.json()) as CommonResponseType<ProductListResponseType>;
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

export const getProductPrice = async ({
  productCode,
  productOptionListId,
}: {
  productCode: string;
  productOptionListId: number;
}) => {
  const res1 = await getProductThumbnail(productCode);
  const res2 = await getProductOption({
    productOptionId: productOptionListId,
  });
  return (res1.productPrice + res2.optionPrice) * (1 - res1.discountRate / 100);
};

export const reorderProduct = async (
  productOptionId: string,
  durationDays: number
) => {
  const session = await getServerSession(options);
  const token = session?.user.accessToken;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/restock/notify`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
        productOptionId,
        durationDays,
      }),
    }
  );
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = (await res.json()) as CommonResponseType<null>;
  return data.result;
};

export const getAlertList = async () => {
  const session = await getServerSession(options);
  const token = session?.user.accessToken;
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/restock/find`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = (await res.json()) as CommonResponseType<AlertType[]>;
  return data.result;
};

export const getSize = async (sizeId: number) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/option/size/${sizeId}`
  );
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = (await res.json()) as CommonResponseType<OptionNameType>;
  return data.result;
};

export const getColor = async (colorId: number) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/option/color/${colorId}`
  );
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = (await res.json()) as CommonResponseType<OptionNameType>;
  return data.result;
};
