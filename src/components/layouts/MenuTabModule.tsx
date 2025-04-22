'use client';
import React from 'react';
import { cn } from '@/lib/utils';
import { useSearchParams, useRouter } from 'next/navigation';
import { MenuBarType } from '@/types/MenuTypes';
import ScrollableList from '@/components/layouts/ScrollableList';
export default function MenuTabModule({
  keyname,
  category,
  isDefault,
  isMultiple,
  className,
  highCategory,
}: Readonly<MenuBarType & { className?: string; highCategory?: boolean }>) {
  const menuName = keyname;
  const params = useSearchParams();
  const router = useRouter();

  const isValueSelected = (value: string) => {
    if (isMultiple) {
      return params.getAll(menuName).includes(value);
    }
    return (
      params.get(menuName) === value ||
      (isDefault && !params.get(menuName) && value === String(category[0].code))
    );
  };

  const buildQueryString = (key: string, value: string) => {
    if (highCategory) {
      const query = new URLSearchParams();
      query.set(key, value);
      router.replace(`?${query.toString()}`);
    } else {
      const query = new URLSearchParams(params.toString());
      if (isMultiple) {
        if (isValueSelected(value)) {
          const values = params.getAll(key).filter((v) => v !== value);
          query.delete(key);
          values.forEach((v) => query.append(key, v));
        } else {
          query.append(key, value);
        }
      } else {
        if (isValueSelected(value)) {
          query.delete(key);
        } else {
          query.set(key, value);
        }
      }
      router.replace(`?${query.toString()}`);
    }
  };

  return (
    <ScrollableList className={cn(`gap-x-5`, className)}>
      {category.map((item, index) => (
        <button
          onClick={() => buildQueryString(menuName, String(item.code))}
          key={index}
        >
          <li
            className={cn(
              'text-center font-normal text-nowrap py-3.5',
              isValueSelected(String(item.code)) ||
                (isDefault && !params.get(menuName) && index === 0)
                ? 'text-custom-green-200 font-bold'
                : 'text-custom-gray-500'
            )}
          >
            {item.name}
          </li>
        </button>
      ))}
    </ScrollableList>
  );
}
