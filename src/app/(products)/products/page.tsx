import MenuTab from '@/components/layouts/MenuTab';
import ProductSubCategory from '@/components/pages/products/ProductSubCategory';
import { CategoryData } from '@/data/DummyData/CategoryDummyData';
import AllProductList from '@/components/pages/products/AllProductList';
import React, { Suspense } from 'react';
import { getAllProductList } from '@/actions/product-service';

export default async function page({
  searchParams,
}: {
  searchParams: Promise<Readonly<{ page: number }>>;
}) {
  const { page } = await searchParams;
  const data = await getAllProductList({ page });

  return (
    <div>
      <MenuTab
        data={{ keyname: 'highCategory', data: CategoryData }}
        isDefault={true}
        isMultiple={false}
      />
      <Suspense>
        <ProductSubCategory />
        <AllProductList data={data} />
      </Suspense>
    </div>
  );
}
