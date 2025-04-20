'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import CartIcon from '@/components/ui/icons/CartIcon';
import { cn } from '@/lib/utils';

export default function ProductActionBar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedOption, setSelectedOption] = useState('각인 옵션');

  const handleCartClick = () => {
    if (isExpanded) {
      console.log('장바구니 담기');
    } else {
      setIsExpanded(true);
    }
  };

  const handlePurchaseClick = () => {
    if (isExpanded) {
      console.log('구매하기');
    } else {
      setIsExpanded(true);
    }
  };

  return (
    <section className="rounded-t-3xl transition-all fixed bottom-0 w-full">
      <div
        className={cn(
          'bg-white rounded-t-3xl shadow-lg transition-all duration-300 ease-in-out transform absolute bottom-28 w-full',
          isExpanded ? 'translate-y-0' : 'translate-y-full'
        )}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold">옵션(필수)</h3>
            <button
              onClick={() => setIsExpanded(false)}
              className="text-gray-500"
            >
              ✕
            </button>
          </div>
          <div className="space-y-4">
            <button
              className="w-full p-4 border rounded-lg text-left flex justify-between items-center"
              onClick={() => setSelectedOption('각인 옵션')}
            >
              <span>{selectedOption}</span>
              <span>▼</span>
            </button>

            <div className="flex justify-between items-center">
              <span className="font-medium">총 금액</span>
              <span className="text-xl font-bold">0원</span>
            </div>
          </div>
        </div>
      </div>

      <div
        className={cn(
          'w-full bg-white h-28 relative z-10 transition-all duration-300 ease-in-out',
          isExpanded ? 'rounded-t-none' : 'rounded-t-3xl'
        )}
      >
        <div className="flex px-6 pt-4 justify-between">
          <CartIcon className="min-w-9 size-9 " />
          <Button
            size="md"
            color="green"
            className="w-5/6"
            onClick={handlePurchaseClick}
          >
            구매하기
          </Button>
        </div>
      </div>
    </section>
  );
}
