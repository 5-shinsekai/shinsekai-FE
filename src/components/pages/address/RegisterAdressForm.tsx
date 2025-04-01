'use client';

import React from 'react';
import InputInfo from '@/components/ui/InputInfo';
import { Button } from '@/components/ui/button';
import { SelectMemo } from '@/components/ui/selectMemo';
import ButtonWrapper from '@/components/ui/wrapper/buttonWrapper';
import DefaultCheck from '@/components/ui/forms/defaultCheck copy';

export default function RegisterAdressForm() {
  return (
    <form className="mt-[1.25rem] mb-[10rem]">
      <section className="space-y-[1.25rem]">
        <InputInfo id="receiver" name="receiver" title="주소별칭" />
        <InputInfo id="receiver" name="receiver" title="받는 분" required />
        <div className="flex justify-between gap-5">
          <InputInfo id="receiver" name="receiver" title="우편번호" required />
          <Button size="hug">주소검색</Button>
        </div>
        <InputInfo id="receiver" name="receiver" title="기본주소" required />
        <InputInfo id="receiver" name="receiver" title="상세주소" required />
        <InputInfo id="receiver" name="receiver" title="연락처1" required />
        <InputInfo id="receiver" name="receiver" title="연락처2" />
        <SelectMemo />
        <DefaultCheck id="배송지등록" optional>
          기본배송지로 저장합니다.
        </DefaultCheck>
      </section>
      <ButtonWrapper>
        <Button color="gray" className="w-full mx-auto">
          등록하기
        </Button>
      </ButtonWrapper>
    </form>
  );
}
