'use client';

import React, { useState } from 'react';
import { InputType } from '@/components/ui/InputInfo';
import { Button } from '@/components/ui/button';
import { SelectMemo } from '@/components/ui/selectMemo';
import ButtonWrapper from '@/components/ui/wrapper/buttonWrapper';
import DefaultCheck from '@/components/ui/forms/defaultCheck';
import { registerAddressSchema } from '@/schemas/registerAddressSchema';
import { tempService } from '@/action/input-check';

interface RegisterAddressFormType {
  addressNickname: string;
  receiverName: string;
  detailedAddress: string;
  firstPhoneNumber: string;
  secondPhoneNumber: string;
  roadAddr: string;
  zipNo: string;
}

export default function RegisterAddressForm({
  addressNickname,
  receiverName,
  detailedAddress,
  firstPhoneNumber,
  secondPhoneNumber,
  roadAddr,
  zipNo,
  // roadAddr,
  // zipNo,
}: // roadAddr: string;
// zipNo: string;
RegisterAddressFormType) {
  const [inputValues, setInputValues] = useState<
    Partial<RegisterAddressFormType>
  >({
    addressNickname: '',
    receiverName: '',
    detailedAddress: '',
    firstPhoneNumber: '',
    secondPhoneNumber: '',
  });

  const [errorMessages, setErrorMessages] = useState<
    Partial<RegisterAddressFormType>
  >({});
  const [isActive, setIsActive] = useState(false);
  const [queryString, setQueryString] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;

    setInputValues({ ...inputValues, [name]: value });
    const res = registerAddressSchema.safeParse({
      ...inputValues,
      [name]: value,
    });
    const searchParams = new URLSearchParams(Object.entries(inputValues));
    setQueryString(searchParams.toString());
    console.log(queryString);
    if (!res.success) {
      const fieldErros: Partial<RegisterAddressFormType> = {};
      res.error.errors.forEach((error) => {
        const fieldName = error.path[0] as keyof RegisterAddressFormType;
        fieldErros[fieldName] = error.message;
      });
      setErrorMessages(fieldErros);
      setIsActive(false);
      console.log('에러');
      // console.log(errorMessages);
    } else {
      setErrorMessages({});
      setIsActive(true);
      console.log('성공');
    }
  };

  return (
    <form
      action={tempService}
      className="mt-[1.25rem] mb-[10rem] space-y-[1.25rem]"
    >
      <InputType.FormInputInfo
        id="addressNickname"
        name="addressNickname"
        defaultValue={addressNickname}
        title="주소별칭"
        onChange={handleChange}
        type="text"
        errorMessage={
          errorMessages.addressNickname ? errorMessages.addressNickname : ''
        }
      />
      <InputType.FormInputInfo
        type="text"
        id="receiverName"
        name="receiverName"
        defaultValue={receiverName}
        title="받는 분"
        onChange={handleChange}
        required
        errorMessage={
          errorMessages.receiverName ? errorMessages.receiverName : ''
        }
      />
      <InputType.HasButtonInputInfo
        type="text"
        id="zipNo"
        name="zipNo"
        defaultValue={zipNo}
        title="우편번호"
        buttonText="주소검색"
        link={`search-address?${queryString}`}
        readonly={true}
      />
      <InputType.InputInfo
        type="text"
        id="roadAddr"
        name="roadAddr"
        title="기본주소"
        defaultValue={roadAddr}
        readonly={true}
        required
      />
      <InputType.FormInputInfo
        type="text"
        id="detailedAddress"
        name="detailedAddress"
        defaultValue={detailedAddress}
        title="상세주소"
        onChange={handleChange}
        required
      />
      <InputType.FormInputInfo
        type="text"
        id="firstPhoneNumber"
        name="firstPhoneNumber"
        defaultValue={firstPhoneNumber}
        title="연락처1"
        onChange={handleChange}
        required
        errorMessage={
          errorMessages.firstPhoneNumber ? errorMessages.firstPhoneNumber : ''
        }
      />
      <InputType.FormInputInfo
        type="text"
        id="secondPhoneNumber"
        name="secondPhoneNumber"
        defaultValue={secondPhoneNumber}
        onChange={handleChange}
        title="연락처2"
        errorMessage={
          errorMessages.secondPhoneNumber ? errorMessages.secondPhoneNumber : ''
        }
      />
      <SelectMemo />
      <DefaultCheck id="defaultAddress" name="defaultAddress">
        기본배송지로 저장합니다.
      </DefaultCheck>
      <ButtonWrapper>
        <Button
          type="submit"
          disabled={!isActive}
          color={isActive ? 'green' : 'gray'}
          className="w-full mx-auto"
        >
          등록하기
        </Button>
      </ButtonWrapper>
    </form>
  );
}
