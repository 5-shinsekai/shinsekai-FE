import MenuTab from '@/components/layouts/MenuTab';
import ProductSubCategory from '@/components/pages/products/ProductSubCategory';
import { CategoryData } from '@/data/DummyData/CategoryDummyData';
import AllProductList from '@/components/pages/products/AllProductList';
import React, { Suspense } from 'react';

export default function page() {
  return (
    <div>
      <MenuTab
        data={{ keyname: 'highCategory', data: CategoryData }}
        isDefault={true}
        isMultiple={false}
      />
      <Suspense>
        <ProductSubCategory />
        <AllProductList />
      </Suspense>
    </div>
  );
}
