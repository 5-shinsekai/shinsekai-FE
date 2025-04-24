import DeliveryStatusSection from '@/components/pages/mypage/DeliveryStatusSection';
import InfoListSectionLayout from '@/components/layouts/InfoListSection';
import { shoppingInfoData } from '@/data/MypageData';

import React from 'react';

export default function myPage() {
  return (
    <main className="">
      <DeliveryStatusSection />
      <div className="bg-custom-gray-100 flex flex-col h-full">
        <InfoListSectionLayout
          className="pb-10"
          title="쇼핑정보"
          items={shoppingInfoData}
        />
      </div>
    </main>
  );
}
