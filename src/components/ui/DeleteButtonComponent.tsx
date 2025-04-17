'use client';

import { deleteAddressByUuid } from '@/action/address-service';
import { deleteStarbuckscard } from '@/action/payment-service';
import React from 'react';

export function DeleteCardButton({
  memberStarbucksCardUuid,
}: {
  memberStarbucksCardUuid: string;
}) {
  const handleDelete = async () => {
    await deleteStarbuckscard(memberStarbucksCardUuid);
  };

  return <button onClick={handleDelete}>카드 삭제</button>;
}

export function DeleteAddressButton({ addressUuid }: { addressUuid: string }) {
  const handleDelete = async () => {
    await deleteAddressByUuid(addressUuid);
  };

  return <button onClick={handleDelete}>삭제</button>;
}
