'use client';
import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import UpArrowIcon from '@/components/ui/icons/UpArrowIcon';
import DownArrowIcon from '@/components/ui/icons/DownArrowIcon';
export default function ProductDescription({
  ImagePath,
}: Readonly<{ ImagePath: string[] }>) {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };
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
        {isExpanded ? (
          <>
            상품정보 접기 <UpArrowIcon className="stroke-black" />
          </>
        ) : (
          <>
            상품정보 더보기 <DownArrowIcon className="stroke-black" />
          </>
        )}
      </div>
    </div>
  );
}
