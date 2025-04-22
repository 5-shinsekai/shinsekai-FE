'use client';
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronUp } from 'lucide-react';
import Image from 'next/image';

export default function ProductDescription({
  ImageHTML,
}: Readonly<{ ImageHTML: string }>) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [extractedImages, setExtractedImages] = useState<
    Array<{ src: string; alt: string }>
  >([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);

    // 접을 때 상단으로 스크롤
    if (isExpanded && containerRef.current) {
      containerRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined' && ImageHTML) {
      const parser = new DOMParser();
      const doc = parser.parseFromString(ImageHTML, 'text/html');
      const imgElements = doc.querySelectorAll('img');

      const images = Array.from(imgElements).map((img) => {
        let src = img.getAttribute('src') || '/ImageLoading.png';
        // Convert protocol-relative URLs to https
        if (src.startsWith('//')) {
          src = `https:${src}`;
        }
        return {
          src,
          alt: img.getAttribute('alt') || '상품 이미지',
        };
      });

      setExtractedImages(images);
    }
  }, [ImageHTML]);

  return (
    <section className="relative" ref={containerRef}>
      <h2 className="text-lg font-bold px-6 pb-4 pt-10">상품 정보</h2>
      <div
        className={`image-container ${!isExpanded ? 'max-h-[150vh] overflow-hidden' : ''}`}
      >
        {extractedImages.map((item, index) => (
          <Image
            key={index}
            src={item.src}
            alt={item.alt}
            width={600}
            height={600}
            className="mx-auto w-full md:w-3xl"
          />
        ))}
      </div>

      <div className={cn(isExpanded ? 'mt-5' : 'absolute bottom-5 w-full')}>
        <div
          className={`flex justify-center items-center h-12 text-md mt-2 bg-white text-center w-5/6 rounded-full shadow-md inset-shadow-sm mx-auto cursor-pointer ${
            !isExpanded ? 'sticky bottom-4' : ''
          }`}
          onClick={toggleExpand}
        >
          <p className="w-[120px] pr-2">
            상품정보 {isExpanded ? '접기' : '더보기'}
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
    </section>
  );
}
