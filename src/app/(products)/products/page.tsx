import MenuTab from '@/components/layouts/MenuTabModule';
import ProductSubCategory from '@/components/pages/products/ProductSubCategory';
import { CategoryData } from '@/data/DummyData/CategoryDummyData';
import React from 'react';
export default function page() {
  return (
    <div>
      <MenuTab
        data={{ keyname: 'highCategory', data: CategoryData }}
        isDefault={true}
        isMultiple={false}
      />
      <ProductSubCategory />
      <p>상품 정보들입니다</p>
    </div>
  );
}
