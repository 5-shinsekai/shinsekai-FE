'use client';
import React from 'react';
import { eventData } from '@/data/DummyData/EventDummyData';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { cn } from '@/lib/utils';
import { MenuType } from '@/types/MenuTypes';

export default function MenuTab({
  menuName,
  isDefault,
  isMultiple,
}: Readonly<MenuType>) {
  const params = useSearchParams();
  const currentValues = params.get(menuName)?.split(',') || [];

  const buildQueryString = (key: string, value: string) => {
    const query = new URLSearchParams(params.toString());
    let updatedValues = [...currentValues];

    if (isMultiple) {
      if (updatedValues.includes(value)) {
        updatedValues = updatedValues.filter((v) => v !== value);
      } else {
        updatedValues.push(value);
      }
    } else {
      updatedValues = [value];
    }

    query.set(key, updatedValues.join(','));
    return `?${query.toString()}`;
  };

  return (
    <div>
      <ul
        className="flex overflow-x-scroll h-14 items-center shadow relative"
        style={{ scrollbarWidth: 'none' }}
      >
        {eventData.map((event, index) => (
          <Link
            href={buildQueryString(menuName, String(event.eventCode))}
            key={event.eventCode}
          >
            <li
              key={event.eventCode}
              className={cn(
                'text-center font-normal text-nowrap p-5',
                currentValues.includes(String(event.eventCode)) ||
                  (isDefault && currentValues.length === 0 && index === 0)
                  ? 'text-[#00A862] font-bold'
                  : 'text-[#7F7F7F]'
              )}
            >
              {event.eventName}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
