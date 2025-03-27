import React from 'react';
import Image from 'next/image';
import img from '@/components/ui/logo.png';

export default function WelcomeMessage() {
  return (
    <section className="flex flex-col items-start w-[334px]">
      <Image src={img} alt="로고" className="size-[62px] mb-[24px]" />
      <h1 className="text-[22px] font-semibold">
        안녕하세요.
        <br />
        스타벅스입니다.
      </h1>
      <p className="mt-[12px] text-[14px] text-[#717171] font-medium">
        회원 서비스 이용을 위해 로그인 해주세요.
      </p>
    </section>
  );
}
