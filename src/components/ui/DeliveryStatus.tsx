import React from 'react';
import { DeliveryStatusType } from '@/types/MypageDataType';
import { cn } from '@/lib/utils';

export default function DeliveryStatus({ title, count }: DeliveryStatusType) {
  return (
    <ul className="flex flex-col items-center">
      <li
        className={cn(
          'text-[2rem] leading-12',
          count === 0 && 'text-custom-gray-500'
        )}
      >
        {count}
      </li>
      <li className="text-[0.75rem]">{title}</li>
    </ul>
  );
}
