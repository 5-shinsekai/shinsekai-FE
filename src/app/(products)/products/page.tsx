import MenuTab from '@/components/layouts/MenuTab';
import ProductSubCategory from '@/components/pages/products/ProductSubCategory';
import React, { Suspense } from 'react';
import {
  getFilterList,
  getMainCategoryList,
  getSubCategoryList,
} from '@/action/product-service';
import AllProductList from '@/components/pages/products/AllProductList';

export default async function page({
  searchParams,
}: {
  searchParams: Promise<Readonly<{ highCategory: number }>>;
}) {
  const { highCategory } = await searchParams;
  const Category = await getMainCategoryList();
  const MainCategory = [
    {
      code: 0,
      image: '/ImageLoading.png',
      imageAltText: '전체이미지',
      name: '전체',
    },
    ...Category,
  ];

  const subCategory = await getSubCategoryList({
    mainCategoryId: highCategory ?? 0,
  });

  const filter = await getFilterList({
    mainCategoryId: highCategory ?? 0,
  });
  return (
    <div>
      <MenuTab
        keyname="mainCategoryId"
        category={MainCategory}
        isDefault={true}
        isMultiple={false}
        highCategory={true}
      />
      <Suspense>
        <ProductSubCategory subCategory={subCategory} filter={filter} />
        <AllProductList />
      </Suspense>
    </div>
  );
}
