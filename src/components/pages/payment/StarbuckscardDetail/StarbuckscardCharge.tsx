import { DeleteCardButton } from '@/components/ui/DeleteButtonComponent';
import React from 'react';

export default function StarbuckscardCharge({
  memberStarbucksCardUuid,
}: {
  memberStarbucksCardUuid: string;
}) {
  return (
    <main>
      <DeleteCardButton memberStarbucksCardUuid={memberStarbucksCardUuid} />
    </main>
  );
}
