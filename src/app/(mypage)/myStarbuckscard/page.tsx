import React from 'react';
import { getStarbuckscardList } from '@/action/payment-service';
import MyStarbuckscards from '@/components/pages/mypage/MyStarbuckscards';

export default async function Page() {
  const cardList = await getStarbuckscardList();
  return (
    <div>
      <MyStarbuckscards cardList={cardList} />
    </div>
  );
}
