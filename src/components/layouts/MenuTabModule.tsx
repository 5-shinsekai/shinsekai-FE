'use client';
import React from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { cn } from '@/lib/utils';
import { MenuBarType } from '@/types/MenuTypes';

export default function MenuTab({
  data,
  isDefault,
  isMultiple,
}: Readonly<MenuBarType>) {
  const menuName = data.keyname;
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
    <>
      <ul
        className="flex overflow-x-scroll items-center shadow"
        style={{ scrollbarWidth: 'none' }}
      >
        {data.data.map((item, index) => (
          <Link
            href={buildQueryString(menuName, String(item.code))}
            key={item.code}
          >
            <li
              key={item.code}
              className={cn(
                'text-center font-normal text-nowrap p-5',
                currentValues.includes(String(item.code)) ||
                  (isDefault && currentValues.length === 0 && index === 0)
                  ? 'text-[#00A862] font-bold'
                  : 'text-[#7F7F7F]'
              )}
            >
              {item.name}
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
}
