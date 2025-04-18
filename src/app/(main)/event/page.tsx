import React from 'react';

import MenuTab from '@/components/layouts/MenuTab';
import { getEventList } from '@/action/product-service';
import EventDetailSection from '@/components/pages/main/EventDetailSection';
export default async function Page({
  searchParams,
}: {
  searchParams: Promise<Readonly<{ eventId: number | undefined }>>;
}) {
  const eventList = await getEventList();
  const { eventId } = await searchParams;
  return (
    <main>
      <section className=" sticky top-28 shadow z-10 bg-white">
        <MenuTab
          category={eventList}
          keyname="eventId"
          isMultiple={false}
          isDefault={true}
        />
      </section>
      {/* 안에 넣을 것 */}
      <EventDetailSection eventId={eventId ?? eventList[0].code} />
    </main>
  );
}
