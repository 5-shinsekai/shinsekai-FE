import React from 'react';
import { productDummyData } from '@/data/DummyData/ProductDummyData';
import ProductList from '@/components/pages/products/ProductList';
import EventDummyImage from '@/components/images/EventDummyImage.png';
import Image from 'next/image';
import { getEventDetail, getEventProductList } from '@/action/product-service';
export default async function EventDetailSection({
  eventId,
}: {
  eventId: number;
}) {
  const EventImage = await getEventDetail(eventId);
  const EventProductList = await getEventProductList(eventId);
  return (
    <section>
      <Image
        src={EventImage.eventImage}
        alt={EventImage.eventImageAltText}
        className=" w-full md:w-3xl justify-self-center"
        width={1000}
        height={1000}
      />
      <ProductList data={EventProductList} />
    </section>
  );
}
