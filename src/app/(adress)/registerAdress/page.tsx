import React from 'react';
import InputInfo from '@/components/ui/InputInfo';
import { Button } from '@/components/ui/button';
import { SelectMemo } from '@/components/ui/selectMemo';

export default function page() {
  return (
    <main className="mt-[30px] mx-[24px]">
      <h1>배송지 정보</h1>
      <section className="flex flex-col gap-[22px] mt-[20px]">
        <InputInfo id="receiver" name="receiver" title="받는 분" />
        <div className="flex justify-between items-center gap-5">
          <InputInfo id="receiver" name="receiver" title="우편번호" />
          <Button size="sm">주소검색</Button>
        </div>
        {/* 더미데이터 받아서 처리하도록 변경하기 */}
        <InputInfo id="receiver" name="receiver" title="기본 주소" />
        <InputInfo id="receiver" name="receiver" title="상세 주소" />
        <InputInfo id="receiver" name="receiver" title="연락처1" />
        <InputInfo id="receiver" name="receiver" title="연락처2" optional />
      </section>
      <SelectMemo />

      <div className="pt-[13px] pb-[35px] px-[28px]">
        <Button color="gray" className="w-full">
          등록하기
        </Button>
      </div>
    </main>
  );
}
