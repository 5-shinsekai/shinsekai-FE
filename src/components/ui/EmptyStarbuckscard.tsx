'use client';

import React from 'react';
import { Button } from './Button';
import { useRouter } from 'next/navigation';

export default function EmptyStarbuckscard({
  redirectPage,
}: {
  redirectPage: string;
}) {
  const router = useRouter();
  return (
    <div className="flex-shrink-0 text-center text-custom-gray-700 content-center w-[262px] h-[166px] border-2 border-custom-gray-300 border-dashed rounded-md">
      <p className="leading-4">스타벅스 카드를 등록하고</p>
      <p>편리하게 결제해 보세요</p>
      <Button
        onClick={() =>
          router.push(`/register-starbucksCard?redirect=${redirectPage}`)
        }
        size="hug"
        className="py-1 px-4 text-sm mt-3"
      >
        등록하기
      </Button>
    </div>
  );
}
