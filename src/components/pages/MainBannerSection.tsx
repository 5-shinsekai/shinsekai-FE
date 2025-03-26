import React from 'react';
import Image from 'next/image';
import DummyEventImage from '@/components/images/DummyEventImage.png';
import Caroucel from '../layouts/Caroucel';
export default function MainBannerSection() {
  return (
    <div>
      <div className="w-full">
        <Caroucel></Caroucel>
      </div>
    </div>
  );
}
