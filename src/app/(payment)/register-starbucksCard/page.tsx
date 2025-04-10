import { externalStarbuckscard } from '@/action/payment-service';
import RegisterStarbucksCardForm from '@/components/pages/payment/RegisterStarbucksCardForm/RegisterStarbucksCardForm';
import React, { Suspense } from 'react';

export default function Page() {
  return (
    <main>
      <Suspense>
        <RegisterStarbucksCardForm action={externalStarbuckscard} />
      </Suspense>
    </main>
  );
}
