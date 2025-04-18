'use client';

import { deleteAddressByUuid } from '@/action/address-service';
import { deleteStarbuckscard } from '@/action/payment-service';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import React from 'react';

export function DeleteCardButton({
  memberStarbucksCardUuid,
  className,
}: {
  memberStarbucksCardUuid: string;
  className?: string;
}) {
  const handleDelete = async () => {
    await deleteStarbuckscard(memberStarbucksCardUuid);
  };

  return (
    <button
      onClick={handleDelete}
      className={cn('text-custom-red-100', className)}
    >
      카드 삭제
    </button>
  );
}

export function DeleteAddressButton({ addressUuid }: { addressUuid: string }) {
  const router = useRouter();

  const handleDelete = async () => {
    await deleteAddressByUuid(addressUuid);
    router.push('/management-address');
  };

  return <button onClick={handleDelete}>삭제</button>;
}
