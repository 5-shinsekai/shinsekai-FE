// export interface cardListType {
//   memberStarbucksCardListUuid: string;
//   cardName: string;
//   cardNumber: string;
//   cardImageUrl: string;
//   remainAmount: number;
// }[];

import { externalStarbuckscard } from '@/action/payment-service';
import RegisterStarbuckscardForm from '@/components/ui/forms/RegisterStarbuckscardForm';

import { Suspense } from 'react';

export default async function RegisterStarbucksCard() {
  return (
    <Suspense>
      <RegisterStarbuckscardForm action={externalStarbuckscard} />
    </Suspense>
  );
}
