import React from 'react';
import { deliveryStatusType } from '@/types/mypageDataType';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function DeliveryStatus({
  title,
  count,
  link,
}: deliveryStatusType) {
  return (
    <ul className="flex flex-col items-center">
      <Link href={link}>
        <li
          className={cn('text-[2rem]', count === 0 && 'text-custom-gray-500')}
        >
          {count}
        </li>
      </Link>
      <li className="text-[0.75rem] pt-1">{title}</li>
    </ul>
  );
}
