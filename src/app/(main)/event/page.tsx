import React from 'react';
import ProductList from '@/components/pages/products/ProductList';
import EventDummyImage from '@/components/images/EventDummyImage.png';
import Image from 'next/image';
import MenuTab from '@/components/layouts/MenuTabModule';
import { eventData } from '@/data/DummyData/CategoryDummyData';
export default function page() {
  return (
    <main>
      <MenuTab data={eventData} isMultiple={false} isDefault={true} />
      <Image
        src={EventDummyImage}
        alt="EventDummyImage"
        className=" w-full md:w-3xl justify-self-center"
      />
      <ProductList />
    </main>
  );
}
