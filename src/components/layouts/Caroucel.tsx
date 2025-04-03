'use client';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import DummyEventImage from '@/components/images/DummyEventImage.png';

export default function Carousel() {
  const items = [
    { id: 1, src: DummyEventImage, alt: 'main_banner' },
    { id: 2, src: DummyEventImage, alt: 'main_banner' },
    { id: 3, src: DummyEventImage, alt: 'main_banner' },
    { id: 4, src: DummyEventImage, alt: 'main_banner' },
    { id: 5, src: DummyEventImage, alt: 'main_banner' },
  ];
  // 실제로 쓸 데이터 형식으로
  const extendedItems = [items[items.length - 1], ...items, items[0]]; // 무한 루프를 위한 확장 배열
  const [currentIndex, setCurrentIndex] = useState(1); // 실제 첫 번째 아이템에서 시작
  const [transition, setTransition] = useState(true); // 애니메이션 제어
  const [isDragging, setIsDragging] = useState(false);
  const [isPaused, setIsPaused] = useState(false); // 사용자 상호작용 중 자동 슬라이드 일시 정지
  const [isClick, setIsClick] = useState(false); // 클릭과 드래그 구분
  const startX = useRef(0);
  const currentTranslate = useRef(0);
  const prevTranslate = useRef(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
    setTransition(true);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
    setTransition(true);
  };

  useEffect(() => {
    if (isPaused) return; // 일시 정지 상태에서는 자동 슬라이드 중지
    const interval = setInterval(() => {
      goToNext();
    }, 3000); // 3초마다 자동 슬라이드

    return () => clearInterval(interval);
  }, [goToNext, isPaused]);

  useEffect(() => {
    if (currentIndex === 0) {
      // 0번(가장 처음 이전)으로 이동 시
      setTimeout(() => {
        setTransition(false); // 애니메이션 제거
        setCurrentIndex(extendedItems.length - 2); // 마지막 실제 아이템으로 점프
      }, 500);
    } else if (currentIndex === extendedItems.length - 1) {
      // 마지막 다음(6번)으로 이동 시
      setTimeout(() => {
        setTransition(false); // 애니메이션 제거
        setCurrentIndex(1); // 첫 번째 실제 아이템으로 점프
      }, 500);
    }
  }, [currentIndex, extendedItems.length]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setIsClick(true); // 클릭 여부 초기화
    setIsPaused(true); // 드래그 중 자동 슬라이드 일시 정지
    startX.current = e.touches[0].clientX;
    prevTranslate.current = -currentIndex * 100; // 현재 위치 기준으로 시작
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    setIsClick(false); // 드래그 중 클릭이 아님을 설정
    const currentX = e.touches[0].clientX;
    const diff = currentX - startX.current;
    currentTranslate.current =
      prevTranslate.current + (diff / window.innerWidth) * 100; // 드래그 거리 정규화

    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(${currentTranslate.current}%)`;
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    setIsPaused(false); // 드래그 종료 후 자동 슬라이드 재개

    if (isClick) return; // 클릭만 발생한 경우 이동하지 않음

    const threshold = 20; // 드래그 임계값 (퍼센트 기준)
    const diff = currentTranslate.current - prevTranslate.current;

    if (diff > threshold) {
      goToPrevious();
    } else if (diff < -threshold) {
      goToNext();
    } else {
      // 드래그가 임계값 이하일 경우 위치 초기화
      if (sliderRef.current) {
        sliderRef.current.style.transition = 'transform 0.3s ease-out';
        sliderRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
      }
    }
  };

  return (
    <div
      className="relative w-full overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        ref={sliderRef}
        className={`flex ${transition && 'transition-transform duration-500 ease-in-out'}`}
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {extendedItems.map((item, index) => (
          <div key={index} className="w-full flex-shrink-0 relative">
            <Image
              src={item.src}
              alt={item.alt}
              width={600}
              height={600}
              className="w-full md:w-3xl justify-self-center"
            />
          </div>
        ))}
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index + 1)} // 확장 배열에 맞게 조정
            className={`w-3 h-3 rounded-full ${
              currentIndex === index + 1 || // 현재 인덱스가 실제 아이템에 해당하거나
              (currentIndex === 0 && index === items.length - 1) || // 0번(가장 처음 이전)일 때 마지막 점
              (currentIndex === extendedItems.length - 1 && index === 0) // 마지막 다음(6번)일 때 첫 번째 점
                ? 'bg-white'
                : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
