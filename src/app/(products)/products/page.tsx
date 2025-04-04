import MenuTab from '@/components/layouts/MenuTabModule';
import ProductListArticle from '@/components/pages/products/ProductList';
import ProductSubCategory from '@/components/pages/products/ProductSubCategory';
import LoadingIcon from '@/components/ui/icons/LoadingIcon';
import { CategoryData } from '@/data/DummyData/CategoryDummyData';
import { productDummyData } from '@/data/DummyData/ProductDummyData';
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
      <ProductListArticle data={productDummyData} />

      <LoadingIcon />
    </div>
  );
}
