'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { getEventThumbnail } from '@/action/event-service';
import { EventThumbnailType } from '@/types/ProductDataTypes';
import {
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselModule,
} from '@/components/ui/CarouselModule';

import Autoplay from 'embla-carousel-autoplay';

export default function Carousel() {
  const [carouselData, setCarouselData] = useState<EventThumbnailType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getCarouselData = async () => {
      const eventThumbnail = await getEventThumbnail();
      setCarouselData(eventThumbnail);
      setIsLoading(false);
    };
    getCarouselData();
  }, []);
  return (
    <CarouselModule plugins={[Autoplay({ delay: 3000 })]}>
      <CarouselContent className="relative">
        {isLoading ? (
          <div className="  bg-gray-200 animate-pulse" />
        ) : (
          carouselData.map((item, index) => (
            <CarouselItem key={index}>
              <Image
                src={item.eventThumbnailImage}
                alt={item.eventThumbnailImageAltText}
                width={800}
                height={800}
                className="mx-auto h-full w-full"
              />
            </CarouselItem>
          ))
        )}
      </CarouselContent>
      <CarouselDots className="absolute bottom-4 left-0 right-0" />
    </CarouselModule>
  );
}
