'use client';
import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { useSearchParams } from 'next/navigation';
import { MenuBarType } from '@/types/MenuTypes';
import ScrollableList from '@/components/layouts/ScrollableList';
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
    <ScrollableList className="gap-x-5">
      {data.data.map((item, index) => (
        <Link
          href={buildQueryString(menuName, String(item.code))}
          key={item.code}
        >
          <li
            key={item.code}
            className={cn(
              'text-center font-normal text-nowrap py-5',
              currentValues.includes(String(item.code)) ||
                (isDefault && currentValues.length === 0 && index === 0)
                ? 'text-custom-green-200 font-bold'
                : 'text-custom-gray-500'
            )}
          >
            {/* 컴포넌트로 안으로 던져서 위로 받는 로직이 필요 한 파일에서 다 진행X */}
            {/* radio checkbox */}
            {item.name}
          </li>
        </Link>
      ))}
    </ScrollableList>
  );
}
