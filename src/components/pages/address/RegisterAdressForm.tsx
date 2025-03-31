'use client';

import React from 'react';
import InputInfo from '@/components/ui/InputInfo';
import { Button } from '@/components/ui/button';
import { SelectMemo } from '@/components/ui/selectMemo';
import AdressAgreeCheck from '@/components/ui/forms/adressAgreeCheck';
import ButtonWrapper from '@/components/ui/wrapper/buttonWrapper';

export default function RegisterAdressForm() {
  return (
    <form action={''}>
      <section className="space-y-[20px] mt-[20px] ">
        <InputInfo id="receiver" name="receiver" title="주소별칭" />
        <InputInfo id="receiver" name="receiver" title="받는 분" required />
        <div className="flex justify-between items-center gap-5">
          <InputInfo id="receiver" name="receiver" title="우편번호" required />
          <Button size="hug">주소검색</Button>
        </div>
        {/* 데이터 받아서 처리하도록 변경하기 */}
        <InputInfo id="receiver" name="receiver" title="기본 주소" required />
        <InputInfo id="receiver" name="receiver" title="상세 주소" required />
        <InputInfo id="receiver" name="receiver" title="연락처1" required />
        <InputInfo id="receiver" name="receiver" title="연락처2" />
        <SelectMemo />
        <AdressAgreeCheck />
      </section>
      <ButtonWrapper>
        <Button color="gray" className="w-full mx-auto">
          등록하기
        </Button>
      </ButtonWrapper>
    </form>
  );
}
