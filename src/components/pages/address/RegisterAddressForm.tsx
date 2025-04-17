'use client';

import React, { useEffect, useState } from 'react';
import { InputType } from '@/components/ui/InputInfo';
import { Button } from '@/components/ui/Button';
import { SelectMemo } from '@/components/ui/SelectMemo';
import ButtonWrapper from '@/components/ui/wrapper/ButtonWrapper';
// import DefaultCheck from '@/components/ui/forms/defaultCheck';
import { registerAddressSchema } from '@/schemas/registerAddressSchema';
import { useRouter, useSearchParams } from 'next/navigation';
import { RegisterAddressFormType } from '@/types/AddressDataType';
import AutoTabInput from '@/components/ui/forms/AutoTabInput';
import { DefaultCheck } from '@/components/ui/forms/DefaultCheck';
import { cn } from '@/lib/utils';

export default function RegisterAddressForm({
  action,
}: {
  action: (addressForm: FormData) => void;
}) {
  const [errorMessages, setErrorMessages] = useState<
    Partial<RegisterAddressFormType>
  >({
    addressNickname: '',
    receiverName: '',
    zipNo: '',
    roadAddress: '',
    detailAddress: '',
    firstPhoneNumber: '',
    secondPhoneNumber: '',
    deliveryMemo: '',
    isMainAddress: '',
  });

  const router = useRouter();
  const searchParams = useSearchParams();
  const [isActive, setIsActive] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;

    const updatedSearchParams = new URLSearchParams(searchParams.toString());
    if (updatedSearchParams.get(name) !== value) {
      updatedSearchParams.set(name, value);
      router.push(`/register-address?${updatedSearchParams.toString()}`, {
        scroll: false,
      });
    }

    const key = name as keyof typeof registerAddressSchema.shape;
    const res = registerAddressSchema.shape[key].safeParse(value);

    // console.log(res);
    if (!res.success) {
      const errorMessage = res.error.errors[0].message;

      setErrorMessages((prev) => ({
        ...prev,
        [name]: errorMessage,
      }));
      setIsActive(false);
    } else {
      setErrorMessages((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  useEffect(() => {
    const res = registerAddressSchema.safeParse(
      Object.fromEntries(searchParams.entries())
    );
    if (res.success) {
      setErrorMessages({});
      setIsActive(true);
    }
  }, [searchParams]);

  return (
    <form action={action} className="mb-[10rem] space-y-[1.25rem]">
      <InputType.FormInputInfo
        id="addressNickname"
        name="addressNickname"
        title="주소별칭"
        onChange={handleChange}
        defaultValue={searchParams.get('addressNickname') || ''}
        // value={inputValues.addressNickname}
        type="text"
        errorMessage={errorMessages.addressNickname}
      />
      <InputType.FormInputInfo
        type="text"
        id="receiverName"
        name="receiverName"
        title="받는 분"
        onChange={handleChange}
        defaultValue={searchParams.get('receiverName') || ''}
        required
        errorMessage={errorMessages.receiverName}
      />
      <InputType.HasButtonInputInfo
        type="text"
        id="zipNo"
        name="zipNo"
        title="우편번호"
        buttonText="주소검색"
        defaultValue={searchParams.get('zipNo') || ''}
        link={`search-address?${new URLSearchParams(searchParams.toString())}`}
        readonly={true}
        required
      />
      <InputType.InputInfo
        type="text"
        id="roadAddress"
        name="roadAddress"
        title="기본주소"
        readonly={true}
        defaultValue={searchParams.get('roadAddress') || ''}
        required
      />
      <InputType.FormInputInfo
        type="text"
        id="detailAddress"
        name="detailAddress"
        title="상세주소"
        onChange={handleChange}
        defaultValue={searchParams.get('detailAddress') || ''}
        required
        errorMessage={errorMessages.detailAddress}
      />
      {/* <InputType.FormInputInfo
        type="text"
        id="firstPhoneNumber"
        name="firstPhoneNumber"
        title="연락처1"
        onChange={handleChange}
        defaultValue={searchParams.get('firstPhoneNumber') || ''}
        required
        errorMessage={
          errorMessages.firstPhoneNumber ? errorMessages.firstPhoneNumber : ''
        }
      /> */}
      <AutoTabInput
        type="text"
        inputbox={3}
        maxLength={[3, 4, 4]}
        id="firstPhoneNumber"
        name="firstPhoneNumber"
        title="연락처1"
        onChange={handleChange}
        defaultValue={searchParams.get('firstPhoneNumber') || ''}
        required
        errorMessage={errorMessages.firstPhoneNumber}
        className="pt-4"
      />
      {/* <InputType.FormInputInfo
        type="text"
        id="secondPhoneNumber"
        name="secondPhoneNumber"
        onChange={handleChange}
        defaultValue={searchParams.get('secondPhoneNumber') || ''}
        title="연락처2"
        errorMessage={errorMessages.secondPhoneNumber}
      /> */}
      <AutoTabInput
        type="text"
        inputbox={3}
        maxLength={[3, 4, 4]}
        id="secondPhoneNumber"
        name="secondPhoneNumber"
        title="연락처2"
        onChange={handleChange}
        defaultValue={searchParams.get('secondPhoneNumber') || ''}
        errorMessage={errorMessages.secondPhoneNumber}
        className="pt-4"
      />
      <SelectMemo
        onChange={handleChange}
        directDefaultValue={searchParams.get('isDirectInputMemo') || ''}
        defaultValue={searchParams.get('deliveryMemo') || ''}
      />
      <DefaultCheck
        id="isMainAddress"
        name="isMainAddress"
        value="true"
        onChange={handleChange}
        defaultChecked={
          searchParams.get('isMainAddress') === 'true' ? true : false
        }
        className={cn(
          searchParams.get('isMainAddress') ? 'transition-all text-black' : ''
        )}
      >
        기본배송지로 저장합니다.
      </DefaultCheck>
      <ButtonWrapper>
        <Button
          type="submit"
          color={!isActive ? 'gray' : 'green'}
          className="w-full mx-auto"
          disabled={!isActive}
        >
          등록하기
        </Button>
      </ButtonWrapper>
    </form>
  );
}
