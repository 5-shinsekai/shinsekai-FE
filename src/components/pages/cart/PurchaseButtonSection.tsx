import { Button } from '@/components/ui/Button';
import ButtonWrapper from '@/components/ui/wrapper/ButtonWrapper';
import React from 'react';

export default function PurchaseButtonSection() {
  return (
    <section>
      <ButtonWrapper>
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm">총 0건</span>
          <span className="text-lg font-bold">0원</span>
        </div>

        <div className="flex gap-2 justify-center">
          <Button
            disabled
            size={'md'}
            className="border-custom-gray-300 text-custom-gray-300 font-semibold"
          >
            선물하기
          </Button>
          <Button disabled size={'md'} color={'gray'}>
            구매하기
          </Button>
        </div>
      </ButtonWrapper>
    </section>
  );
}
