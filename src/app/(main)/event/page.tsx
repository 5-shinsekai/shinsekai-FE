import React from 'react';
import ProductList from '@/components/pages/products/ProductList';
import EventDummyImage from '@/components/images/EventDummyImage.png';
import Image from 'next/image';
export default function page() {
  return (
    <main>
      <Image
        src={EventDummyImage}
        alt="EventDummyImage"
        className=" w-full md:w-3xl justify-self-center"
      />
      <ProductList />
    </main>
  );
}
