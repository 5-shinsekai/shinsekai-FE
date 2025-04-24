'use client';

import { deleteAddressByUuid } from '@/action/address-service';
import { deleteStarbuckscard } from '@/action/payment-service';
import { cn } from '@/lib/utils';
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
      type="button"
      onClick={handleDelete}
      className={cn('text-custom-red-100', className)}
    >
      카드 삭제
    </button>
  );
}

export function DeleteAddressButton({ addressUuid }: { addressUuid: string }) {
  const handleDelete = async () => {
    const confirmed = confirm('정말 삭제하시겠습니까?');
    if (!confirmed) return;

    try {
      await deleteAddressByUuid(addressUuid);
      window.location.reload();
    } catch (error) {
      console.error('삭제 중 오류 발생:', error);
    }
  };

  return <button onClick={handleDelete}>삭제</button>;
}
