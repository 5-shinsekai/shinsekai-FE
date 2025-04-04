'use client';

import React from 'react';
import { InputType } from '@/components/ui/InputInfo';
import { Button } from '@/components/ui/button';
import { SelectMemo } from '@/components/ui/selectMemo';
import ButtonWrapper from '@/components/ui/wrapper/buttonWrapper';
import DefaultCheck from '@/components/ui/forms/defaultCheck copy';

export default function RegisterAddressForm({
  roadAddr,
  zipCode,
}: {
  roadAddr: string;
  zipCode: string;
}) {
  return (
    <form className="mt-[1.25rem] mb-[10rem] space-y-[1.25rem]">
      <InputType.FormInputInfo
        id="address-nickname"
        name="address-nickname"
        title="주소별칭"
      />
      <InputType.FormInputInfo
        id="receiver-name"
        name="receiver-name"
        title="받는 분"
        required
      />
      <InputType.HasButtonInputInfo
        id="zipcode"
        name="zipcode"
        defaultValue={zipCode}
        title="우편번호"
        buttonText="주소검색"
        link="search-address"
        readonly={true}
      />
      <InputType.InputInfo
        id="default-address"
        name="default-address"
        title="기본주소"
        defaultValue={roadAddr}
        readonly={true}
        required
      />
      <InputType.FormInputInfo
        id="detailed-address"
        name="detailed-address"
        title="상세주소"
        required
      />
      <InputType.FormInputInfo
        id="phone-number-1"
        name="phone-number-1"
        title="연락처1"
        required
      />
      <InputType.FormInputInfo
        id="phone-number-2"
        name="phone-number-2"
        title="연락처2"
      />
      <SelectMemo />
      <DefaultCheck id="배송지등록" optional>
        기본배송지로 저장합니다.
      </DefaultCheck>
      <ButtonWrapper>
        <Button color="gray" className="w-full mx-auto">
          등록하기
        </Button>
      </ButtonWrapper>
    </form>
  );
}
