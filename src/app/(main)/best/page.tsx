import React, { Suspense } from 'react';
import MenuTab from '@/components/layouts/MenuTab';
import ProductList from '@/components/pages/products/ProductList';
import { bestData } from '@/data/DummyData/CategoryDummyData';
export default function page() {
  return (
    <main>
      <nav className=" sticky top-28 shadow z-10 bg-white ">
        <Suspense>
          <MenuTab data={bestData} isDefault={true} isMultiple={false} />
        </Suspense>
      </nav>
      <ProductList bestTag={true} />
    </main>
  );
}
