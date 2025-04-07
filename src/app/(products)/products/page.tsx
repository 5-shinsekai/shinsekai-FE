import MenuTab from '@/components/layouts/MenuTab';
import ProductListArticle from '@/components/pages/products/ProductList';
import ProductSubCategory from '@/components/pages/products/ProductSubCategory';
import LoadingIcon from '@/components/ui/icons/LoadingIcon';
import { CategoryData } from '@/data/DummyData/CategoryDummyData';
import { productDummyData } from '@/data/DummyData/ProductDummyData';
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
              </Suspense>

      <ProductListArticle data={productDummyData} />

      <LoadingIcon />

    </div>
  );
}
