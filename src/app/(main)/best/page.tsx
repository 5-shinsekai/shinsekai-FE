import React from 'react';
import MenuTab from '@/components/layouts/MenuTabModule';
import ProductList from '@/components/pages/products/ProductList';
import { bestData } from '@/data/DummyData/CategoryDummyData';
export default function page() {
  return (
    <main>
      <nav className=" sticky top-28 shadow z-10 bg-white ">
        <MenuTab data={bestData} isDefault={true} isMultiple={false} />
      </nav>
      <ProductList bestTag={true} />
    </main>
  );
}
