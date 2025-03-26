'use client';
import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import DummyItemImage from '@/components/images/DummyItemImage.png';
import DummyEventImage from '@/components/images/DummyEventImage.png';

export default function InfiniteCarousel() {
  const images = [
    { id: 1, src: DummyEventImage, alt: 'main_banner', width: 1920 },
    { id: 2, src: DummyItemImage, alt: 'main_banner', width: 1920 },
    { id: 3, src: DummyEventImage, alt: 'main_banner', width: 1920 },
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [direction, setDirection] = useState<'right' | 'left'>('right');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNext = useCallback(() => {
    if (isTransitioning) return;
    setDirection('right');
    setIsTransitioning(true);
    setCurrentImage((prev) => (prev + 1) % images.length);
  }, [isTransitioning, images.length]);

  const handlePrev = useCallback(() => {
    if (isTransitioning) return;
    setDirection('left');
    setIsTransitioning(true);
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  }, [isTransitioning, images.length]);

  // Auto-play functionality
  useEffect(() => {
    const autoPlayInterval = setInterval(() => {
      handleNext();
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(autoPlayInterval);
  }, [handleNext]);

  // Reset transition state
  useEffect(() => {
    const transitionTimer = setTimeout(() => {
      setIsTransitioning(false);
    }, 500); // Match this with your CSS transition duration

    return () => clearTimeout(transitionTimer);
  }, [currentImage]);

  return (
    <div className="relative w-full overflow-hidden">
      <div className="relative w-full h-[500px]">
        {' '}
        {/* Fixed height container */}
        {images.map((image, index) => {
          let positioning = 'absolute top-0 left-0 w-full h-full opacity-0';

          if (index === currentImage) {
            positioning = `absolute top-0 left-0 w-full h-full opacity-100 
              ${
                direction === 'right'
                  ? 'animate-slide-in-right'
                  : 'animate-slide-in-left'
              }`;
          }

          return (
            <Image
              key={image.id}
              src={image.src}
              alt={image.alt}
              fill
              className={`
                object-cover transition-opacity duration-500 
                ${positioning}
              `}
            />
          );
        })}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 -translate-y-1/2 
        bg-black/50 text-white p-2 rounded-full z-10"
      >
        &#10094;
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 -translate-y-1/2 
        bg-black/50 text-white p-2 rounded-full z-10"
      >
        &#10095;
      </button>

      {/* Indicator Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (index > currentImage) {
                setDirection('right');
              } else {
                setDirection('left');
              }
              setCurrentImage(index);
            }}
            className={`
              w-3 h-3 rounded-full 
              ${currentImage === index ? 'bg-white' : 'bg-gray-400'}
            `}
          />
        ))}
      </div>
    </div>
  );
}
