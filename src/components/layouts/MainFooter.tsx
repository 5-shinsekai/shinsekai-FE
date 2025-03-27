'use client';
import React, { useState } from 'react';
import StarbucksLogo from '@/components/images/StarbucksLogo.png';
import DownArrowIcon from '@/components/ui/icons/DownArrowIcon';
import UpArrowIcon from '@/components/ui/icons/UpArrowIcon';
import Image from 'next/image';
export default function MainFooter() {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };
  return (
    <footer>
      <div className="bg-[#F2F2F2] text-[#808080] h-full items-center px-6 py-4 flex text-[11px] flex-wrap font-sans gap-x-3 gap-y-1">
        <p>개인정보처리방침</p>|<p>홈페이지 이용약관</p>|
        <p>스타벅스카드 이용약관</p>
      </div>
      <div className="px-6 py-2 min-h-[180px]">
        <div className="flex items-center gap-2">
          <Image src={StarbucksLogo} alt="Starbucks Logo" />
          <div onClick={toggleExpand} className="cursor-pointer">
            {isExpanded ? <UpArrowIcon /> : <DownArrowIcon />}
          </div>
        </div>
        {isExpanded && (
          <div className="my-3 text-[#808080] text-[11px]">
            <p className="mb-1">주식회사 에스씨케이컴퍼니</p>
            <div className="flex flex-wrap gap-x-3 gap-y-0.5">
              <p>대표이사 : 손정현</p>|<p>사업자등록번호 : 201-81-21515</p>|
              <p>TEL : 1522-3232</p>|<p>개인정보 보호책임자 : 이찬우</p>|
              <p>통신판매업신고 : 2011-서울중구-1066</p>
              <p>주소 : 서울시 중구 퇴계로 100 (스테이트타워 남산) 8~10층</p>
              <p>(우 : 04631)</p>
            </div>
          </div>
        )}
        <p className="text-[#808080] text-[11px]">
          © 2025 Starbucks Coffee Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
