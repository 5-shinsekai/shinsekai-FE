import MenuTab from '@/components/layouts/MenuTab';
import ProductSubCategory from '@/components/pages/products/ProductSubCategory';
import { CategoryDataType } from '@/types/ProductDataTypes';
import React, { Suspense } from 'react';
export default function page() {
  const Data: CategoryDataType[] = [
    {
      code: 1,
      name: '전체',
    },
    {
      code: 2,
      name: '텀블러/보온병',
    },
    {
      code: 3,
      name: '머그/컵',
    },
    {
      code: 4,
      name: '라이프스타일',
    },
    {
      code: 5,
      name: '티/커피용품',
    },
    {
      code: 6,
      name: '케이크',
    },
    {
      code: 7,
      name: '초콜릿/스낵',
    },
    {
      code: 8,
      name: '세트',
    },
  ];

  return (
    <div>
      <MenuTab
        data={{ keyname: 'highCategory', data: Data }}
        isDefault={true}
        isMultiple={false}
      />
      <Suspense>
        <ProductSubCategory />
      </Suspense>
      <p>상품 정보들입니다</p>
    </div>
  );
}
