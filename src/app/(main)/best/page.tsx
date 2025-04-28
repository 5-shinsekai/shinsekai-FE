import {
  getMainCategoryList,
  getBestProductList,
} from '@/action/product-service';
import React, { Suspense } from 'react';
import MenuTab from '@/components/layouts/MenuTab';
import ProductList from '@/components/pages/products/ProductList';

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<Readonly<{ mainCategoryId: number | undefined }>>;
}) {
  const eventList = await getMainCategoryList();
  const { mainCategoryId } = await searchParams;
  const bestData = await getBestProductList({
    mainCategoryId: mainCategoryId ?? eventList[0].code,
  });
  return (
    <main>
      <section className=" sticky top-28 shadow z-10 bg-white ">
        <Suspense>
          <MenuTab
            keyname="mainCategoryId"
            category={eventList}
            isDefault={true}
            isMultiple={false}
          />
        </Suspense>
      </section>
      <ProductList data={bestData} bestTag={true} />
    </main>
  );
}
