import React from 'react';
import Image from 'next/image';
import DummyEventImage from '@/components/images/DummyEventImage.png';
export default function MainBannerSection() {
  return (
    <div>
      <div className="w-full">
        <Image src={DummyEventImage} alt="main_banner" width={1920} />
      </div>
    </div>
  );
}
