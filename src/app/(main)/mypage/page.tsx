import DeliveryStatusSection from '@/components/pages/mypage/DeliveryStatusSection';
import InfoListSectionLayout from '@/components/layouts/InfoListSection';
import { settingData, shoppingInfoData } from '@/data/MypageData';

import React from 'react';

export default function mypage() {
  return (
    <main className='min-h-screen'>
      <DeliveryStatusSection/>
      <InfoListSectionLayout 
          title="쇼핑정보" 
          items={shoppingInfoData}
          />
      <InfoListSectionLayout
          title="설정"
          items={settingData}
          className='pb-3.5'
          />
  </main>
  )
}
