// 'use client';

import StarbuckscardCharge from '@/components/pages/payment/StarbuckscardDetail/StarbuckscardCharge';
import { Button } from '@/components/ui/Button';
import { DeleteCardButton } from '@/components/ui/DeleteButtonComponent';
import Divider from '@/components/ui/Divider';
import PaymentNotice from '@/components/ui/PaymentNotice';
import ButtonWrapper from '@/components/ui/wrapper/ButtonWrapper';
import Image from 'next/image';

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
    <main className="px-6 min-h-screen">
      {/* 카드 정보 */}
      <div className="relative flex gap-3 w-full mx-auto">
        <Image src="/starbucksCard1.png" alt="card" width={100} height={50} />
        <div className="">
          <p>카드이름(카드번호)</p>
          <p>
            26,120 <span>원</span>
          </p>
        </div>
        {/* 카드 삭제 */}
        <DeleteCardButton
          className="absolute top-0 right-0 text-xs"
          memberStarbucksCardUuid={memberStarbucksCardUuid}
        />
      </div>
      <Divider className="mx-0 my-8 border" />
      {/* 충전 금액 */}
      <StarbuckscardCharge memberStarbucksCardUuid={memberStarbucksCardUuid} />
      <Divider className="mx-0 my-4 border" />
      {/* 유의사항 */}
      <PaymentNotice />
      <ButtonWrapper className="pb-0">
        <div className="flex justify-between items-center">
          <p className="text-amber-700 text-sm">충전 후 예상 총 카드 잔액</p>
          <p className="text-xl font-bold">
            36,120<span className="text-lg font-semibold"> 원</span>
          </p>
        </div>
        <Button className="w-full mx-auto" color="green">
          충전하기
        </Button>
      </ButtonWrapper>
    </main>
  );
}
