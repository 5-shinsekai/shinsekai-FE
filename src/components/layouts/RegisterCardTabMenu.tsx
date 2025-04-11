'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';

export default function RegisterCardTabMenu() {
  const [activeTab, setActiveTab] = useState('register-starbucksCard');
  const router = useRouter();
  const handleClick = (tab: string) => {
    setActiveTab(tab);
    router.push(`/${tab}`);
  };
  return (
    <nav>
      <ul className="flex shadow-md">
        <button
          type="button"
          className={cn(
            'px-4 py-2 border-b-3 border-white transition-all ease-in-out duration-200',
            activeTab === 'register-starbucksCard' &&
              'font-semibold border-b-custom-green-200/90'
          )}
          onClick={() => handleClick('register-starbucksCard')}
        >
          스타벅스 카드
        </button>
        <button
          type="button"
          className={cn(
            'px-4 py-2 border-b-3 border-white transition-all ease-in-out duration-200',
            activeTab === 'register-giftCard' &&
              'font-semibold border-b-custom-green-200/90'
          )}
          onClick={() => handleClick('register-giftCard')}
        >
          모바일 상품권
        </button>
      </ul>
    </nav>
  );
}
