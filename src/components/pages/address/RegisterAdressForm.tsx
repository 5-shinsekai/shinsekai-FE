'use client';

import React from 'react';
import InputInfo from '@/components/ui/InputInfo';
import { Button } from '@/components/ui/button';
import { SelectMemo } from '@/components/ui/selectMemo';
import AdressAgreeCheck from '@/components/ui/forms/adressAgreeCheck';

export default function RegisterAdressForm() {
  return (
    <main>
      <div className="px-[24px] shadow-sm grow">
        <h1 className="pt-[30px] pb-[20px] text-[1.625rem] font-semibold">
          배송지 정보
        </h1>
        <section className="flex flex-col gap-[22px] mt-[20px]">
          <InputInfo id="receiver" name="receiver" title="주소별칭" optional />
          <InputInfo id="receiver" name="receiver" title="받는 분" />
          <div className="flex justify-between items-center gap-5">
            <InputInfo id="receiver" name="receiver" title="우편번호" />
            <Button size="hug">주소검색</Button>
          </div>
          {/* 더미데이터 받아서 처리하도록 변경하기 */}
          <InputInfo id="receiver" name="receiver" title="기본 주소" />
          <InputInfo id="receiver" name="receiver" title="상세 주소" />
          <InputInfo id="receiver" name="receiver" title="연락처1" />
          <InputInfo id="receiver" name="receiver" title="연락처2" optional />
        </section>
        <SelectMemo />
        <AdressAgreeCheck />
      </div>
      <Button color="gray" className="w-full mt-[13px] mb-[35px] mx-auto">
        등록하기
      </Button>
    </main>
  );
}
