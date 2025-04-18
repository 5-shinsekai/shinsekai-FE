import React from 'react';
import MainProductList from '@/components/pages/main/MainProductList';
import { EventType } from '@/types/ProductDataTypes';
import { getEventList } from '@/action/product-service';

export default async function MainProductsSection() {
  const eventList = await getEventList();
  return (
    <section className="space-y-[3.125rem] pb-20 pt-10">
      {eventList.map((event: EventType) => (
        <div key={event.code}>
          <p className="px-6 mb-[1.875rem] text-2xl font-bold">{event.name}</p>
          <MainProductList event={event} />
        </div>
      ))}
    </section>
  );
}
