'use client';
import React, { useEffect } from 'react';
import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { ChevronUp } from 'lucide-react';
export default function ProductDescription({
  ImageHTML,
}: Readonly<{ ImageHTML: string }>) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [extractedImages, setExtractedImages] = useState<
    Array<{ src: string; alt: string }>
  >([]);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  useEffect(() => {
    // 클라이언트 사이드에서만 실행되도록
    if (typeof window !== 'undefined' && ImageHTML) {
      const parser = new DOMParser();
      const doc = parser.parseFromString(ImageHTML, 'text/html');
      const imgElements = doc.querySelectorAll('img');

      const images = Array.from(imgElements).map((img) => ({
        src: img.getAttribute('src') || '/ImageLoading.png',
        alt: img.getAttribute('alt') || '상품 이미지',
      }));

      setExtractedImages(images);
    }
  }, [ImageHTML]);

  // overflow 활용 - hidden 높이 조절
  // 컴포넌트 분리하기
  return (
    <div className="relative">
      {isExpanded
        ? extractedImages.map((item, index) => (
            <Image
              key={index}
              src={item.src}
              alt={item.alt}
              width={600}
              height={600}
              className="mx-auto w-full md:w-3xl"
            />
          ))
        : extractedImages
            .slice(0, 1)
            .map((item, index) => (
              <Image
                key={index}
                src={item.src}
                alt={item.alt}
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
