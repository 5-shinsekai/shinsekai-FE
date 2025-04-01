import React from 'react';
import { deliveryStatusType } from '@/types/mypageDataType';
import Link from 'next/link';

export default function DeliveryStatus({title, count, link}: deliveryStatusType) {
  return (
    <ul className="flex flex-col items-center size-15">
      <Link href={link}>
        <li className="text-[1.5rem]">{count}</li>
      </Link>
      <li className="text-[0.75rem] pt-1">{title}</li>
    </ul>
  );
}
