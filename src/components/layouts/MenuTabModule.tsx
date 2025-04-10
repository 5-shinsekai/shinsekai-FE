'use client';
import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { useSearchParams } from 'next/navigation';
import { MenuBarType } from '@/types/MenuTypes';
import ScrollableList from '@/components/layouts/ScrollableList';
export default function MenuTabModule({
  data,
  isDefault,
  isMultiple,
  className,
}: Readonly<MenuBarType & { className?: string }>) {
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
    query.set('page', '1');
    query.set(key, updatedValues.join(','));
    return `?${query.toString()}`;
  };
  return (
    <ScrollableList className={cn(`gap-x-5`, className)}>
      {data.data.map((item, index) => (
        <Link href={buildQueryString(menuName, String(item.code))} key={index}>
          <li
            className={cn(
              'text-center font-normal text-nowrap py-3.5',
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
