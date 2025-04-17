// 'use client';

import StarbuckscardCharge from '@/components/pages/payment/StarbuckscardDetail/StarbuckscardCharge';

// import { deleteStarbuckscard } from '@/action/payment-service';
// import React from 'react';

// export default function DeleteCardButton() {
//   const handleDelete = async () => {
//     try {
//       const res = await deleteStarbuckscard('MS20250416-38580d54');
//       alert('삭제 완료');
//     } catch (e) {
//       alert('삭제 실패');
//     }
//   };

//   return <button onClick={handleDelete}>카드 삭제</button>;
// }

export default async function Page({
  params,
}: {
  params: Promise<{ memberStarbucksCardUuid: string }>;
}) {
  const { memberStarbucksCardUuid } = await params;
  return (
    <>
      <StarbuckscardCharge memberStarbucksCardUuid={memberStarbucksCardUuid} />
    </>
  );
}
