'use client';
import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { ChevronUp } from 'lucide-react';
export default function ProductDescription({
  ImagePath,
}: Readonly<{ ImagePath: string[] }>) {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };
  // overflow 활용 - hidden 높이 조절
  // 컴포넌트 분리하기
  return (
    <div className="relative">
      {isExpanded
        ? ImagePath.map((path, index) => (
            <Image
              key={index}
              src={path}
              alt={`Product Description ${index + 1}`}
              width={600}
              height={600}
              className="mx-auto w-full md:w-3xl"
            />
          ))
        : ImagePath.slice(0, 1).map((path, index) => (
            <Image
              key={index}
              src={path}
              alt={`Product Description ${index + 1}`}
              width={600}
              height={600}
              className="mx-auto w-full md:w-3xl"
            />
          ))}
      <div
        className="flex justify-center items-center h-12 text-md mt-6 bg-white text-center w-5/6 rounded-full shadow-md inset-shadow-sm mx-auto"
        onClick={toggleExpand}
      >
        <p className="w-[120px] text-left pr-2">
          상품접기{isExpanded ? '접기' : '더보기'}
        </p>
        <ChevronUp
          size={16}
          className={cn(
            isExpanded ? 'rotate-0' : 'rotate-180',
            'stroke-black transition-all'
          )}
        />
      </div>
    </div>
  );
}
