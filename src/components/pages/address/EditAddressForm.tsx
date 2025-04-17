'use client';

import React, { useEffect, useState } from 'react';
import { InputType } from '@/components/ui/InputInfo';
import { Button } from '@/components/ui/Button';
import { SelectMemo } from '@/components/ui/SelectMemo';
import ButtonWrapper from '@/components/ui/wrapper/ButtonWrapper';
// import DefaultCheck from '@/components/ui/forms/defaultCheck';
import { registerAddressSchema } from '@/schemas/registerAddressSchema';
import { useSearchParams } from 'next/navigation';
import {
  AddressDataType,
  RegisterAddressFormType,
} from '@/types/AddressDataType';
import AutoTabInput from '@/components/ui/forms/AutoTabInput';
import { DefaultCheck } from '@/components/ui/forms/DefaultCheck';
import { cn } from '@/lib/utils';

export default function EditAddressForm({
  addressData,
  action,
}: {
  addressData: AddressDataType;
  action: (addressForm: FormData) => void;
}) {
  // console.log(addressData);
  const [isActive, setIsActive] = useState(false);
  const [isChange, setIsChange] = useState(false);
  const searchParams = useSearchParams();
  const [editAddressData, setEditAddressData] =
    useState<AddressDataType>(addressData);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    console.log(e.target.name, e.target.value);
    setEditAddressData((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log('수정 정보', editAddressData);
    // console.log(editAddressData);
    console.log('name', name, typeof name, 'value', value, typeof value);
    const key = name as keyof typeof registerAddressSchema.shape;
    const res = registerAddressSchema.shape[key].safeParse(value);

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
      setIsChange(true);
      setIsActive(true);
    }
  };

  useEffect(() => {
    const res = registerAddressSchema.safeParse(editAddressData);
    if (res.success) {
      setErrorMessages({});
      setIsActive(true);
    }
  }, [editAddressData, isChange]);

  return (
    <form action={action} className="mb-[10rem] space-y-[1.25rem]">
      <input
        name="addressUuid"
        type="hidden"
        value={editAddressData.addressUuid}
      />
      <InputType.FormInputInfo
        id="addressNickname"
        name="addressNickname"
        title="주소별칭"
        onChange={handleChange}
        defaultValue={editAddressData.addressNickname}
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
        defaultValue={editAddressData.receiverName}
        required
        errorMessage={errorMessages.receiverName}
      />
      <InputType.HasButtonInputInfo
        type="text"
        id="zipNo"
        name="zipNo"
        title="우편번호"
        buttonText="주소검색"
        defaultValue={editAddressData.zipNo}
        link={`search-address?${new URLSearchParams(searchParams.toString())}`}
        readonly={true}
        required
        className="text-custom-gray-400 font-semibold"
      />
      <InputType.InputInfo
        type="text"
        id="roadAddress"
        name="roadAddress"
        title="기본주소"
        readonly={true}
        defaultValue={editAddressData.roadAddress}
        required
        className="text-custom-gray-400 font-semibold"
      />
      <InputType.FormInputInfo
        type="text"
        id="detailAddress"
        name="detailAddress"
        title="상세주소"
        onChange={handleChange}
        defaultValue={editAddressData.detailAddress}
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
        defaultValue={editAddressData.firstPhoneNumber}
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
        defaultValue={editAddressData.secondPhoneNumber}
        errorMessage={errorMessages.secondPhoneNumber}
        className="pt-4"
      />
      <SelectMemo
        onChange={handleChange}
        directDefaultValue={
          editAddressData.isPersonalMemo ? editAddressData.deliveryMemo : ''
        }
        defaultValue={
          editAddressData.isPersonalMemo
            ? '직접입력'
            : editAddressData.deliveryMemo
        }
      />
      <DefaultCheck
        id="isMainAddress"
        name="isMainAddress"
        // value="true"
        onChange={handleChange}
        defaultChecked={editAddressData.isMainAddress}
        className={cn(
          editAddressData.isMainAddress ? 'transition-all text-black' : ''
        )}
      >
        기본배송지로 저장합니다.
      </DefaultCheck>
      <ButtonWrapper>
        <Button
          type="submit"
          color={!isActive ? 'gray' : 'green'}
          className="w-full mx-auto"
          // disabled={!isActive}
        >
          수정하기
        </Button>
      </ButtonWrapper>
    </form>
  );
}
