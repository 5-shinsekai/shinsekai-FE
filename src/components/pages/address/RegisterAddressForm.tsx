'use client';

import React, { useEffect, useState } from 'react';
import { InputType } from '@/components/ui/InputInfo';
import { Button } from '@/components/ui/button';
import { SelectMemo } from '@/components/ui/selectMemo';
import ButtonWrapper from '@/components/ui/wrapper/buttonWrapper';
import DefaultCheck from '@/components/ui/forms/defaultCheck';
import { registerAddressSchema } from '@/schemas/registerAddressSchema';
import { tempService } from '@/action/input-check';
import { useRouter, useSearchParams } from 'next/navigation';

interface RegisterAddressFormType {
  addressNickname: string;
  receiverName: string;
  zipNo: string;
  roadAddr: string;
  detailedAddress: string;
  firstPhoneNumber: string;
  secondPhoneNumber: string;
  deliveryMemo: string;
  defaultAddress: string;
}

export default function RegisterAddressForm({
  setAddress,
}: {
  setAddress: (addressForm: FormData) => void;
}) {
  // const searchParams = useSearchParams();
  // useEffect(() => {
  //   const addressNickname = searchParams.get('addressNickname');
  //   const receiverName = searchParams.get('receiverName');
  //   const zipNo = searchParams.get('zipNo');
  //   const roadAddr = searchParams.get('roadAddr');
  //   const detailedAddress = searchParams.get('detailedAddress');
  //   const firstPhoneNumber = searchParams.get('firstPhoneNumber');
  //   const secondPhoneNumber = searchParams.get('secondPhoneNumber');
  //   setInputValues({
  //     addressNickname: addressNickname || '',
  //     receiverName: receiverName || '',
  //     zipNo: zipNo || '',
  //     roadAddr: roadAddr || '',
  //     detailedAddress: detailedAddress || '',
  //     firstPhoneNumber: firstPhoneNumber || '',
  //     secondPhoneNumber: secondPhoneNumber || '',
  //   });
  // }, [searchParams]);

  const [errorMessages, setErrorMessages] = useState<
    Partial<RegisterAddressFormType>
  >({});

  const router = useRouter();

  const searchParams = useSearchParams();
  // const [inputValues, setInputValues] = useState({
  //   addressNickname: '',
  //   receiverName: '',
  //   zipNo: '',
  //   roadAddr: '',
  //   detailedAddress: '',
  //   firstPhoneNumber: '',
  //   secondPhoneNumber: '',
  // });

  // useEffect(() => {
  //   const addressNickname = searchParams.get('addressNickname');
  //   const receiverName = searchParams.get('receiverName');
  //   const zipNo = searchParams.get('zipNo');
  //   const roadAddr = searchParams.get('roadAddr');
  //   const detailedAddress = searchParams.get('detailedAddress');
  //   const firstPhoneNumber = searchParams.get('firstPhoneNumber');
  //   const secondPhoneNumber = searchParams.get('secondPhoneNumber');
  //   setInputValues({
  //     addressNickname: addressNickname || '',
  //     receiverName: receiverName || '',
  //     zipNo: zipNo || '',
  //     roadAddr: roadAddr || '',
  //     detailedAddress: detailedAddress || '',
  //     firstPhoneNumber: firstPhoneNumber || '',
  //     secondPhoneNumber: secondPhoneNumber || '',
  //   });
  //   console.log(
  //     addressNickname,
  //     receiverName,
  //     zipNo,
  //     roadAddr,
  //     detailedAddress,
  //     firstPhoneNumber,
  //     secondPhoneNumber
  //   );
  // }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    const updatedSearchParams = new URLSearchParams(searchParams.toString());
    if (updatedSearchParams.get(name) !== value) {
      updatedSearchParams.set(name, value);
      router.push(`/register-address?${updatedSearchParams.toString()}`);
    }

    const res = registerAddressSchema.safeParse({
      ...Object.fromEntries(searchParams.entries()),
      [name]: value,
    });
    console.log(res);
    if (!res.success) {
      const fieldErrors: Partial<RegisterAddressFormType> = {};
      res.error.errors.forEach((error) => {
        const fieldName = error.path[0] as keyof RegisterAddressFormType;
        fieldErrors[fieldName] = error.message;
      });
      setErrorMessages(fieldErrors);
      setIsActive(false);
    } else {
      setErrorMessages({});
      setIsActive(true);
    }
  };

  const [isActive, setIsActive] = useState(false);
  const [queryString, setQueryString] = useState('');

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   e.preventDefault();
  //   const { name, value } = e.target;

  //   setInputValues({ ...inputValues, [name]: value });
  //   const res = registerAddressSchema.safeParse({
  //     ...inputValues,
  //     [name]: value,
  //   });
  //   const searchParams = new URLSearchParams(Object.entries(inputValues));
  //   setQueryString(searchParams.toString());
  //   console.log(queryString);
  //   if (!res.success) {
  //     const fieldErros: Partial<RegisterAddressFormType> = {};
  //     res.error.errors.forEach((error) => {
  //       const fieldName = error.path[0] as keyof RegisterAddressFormType;
  //       fieldErros[fieldName] = error.message;
  //     });
  //     setErrorMessages(fieldErros);
  //     setIsActive(false);
  //     console.log('에러');
  //     // console.log(errorMessages);
  //   } else {
  //     setErrorMessages({});
  //     setIsActive(true);
  //     console.log('성공');
  //   }
  // };

  // return (
  //   <form
  //     action={tempService}
  //     className="mt-[1.25rem] mb-[10rem] space-y-[1.25rem]"
  //   >
  //     <InputType.FormInputInfo
  //       id="addressNickname"
  //       name="addressNickname"
  //       defaultValue={addressNickname}
  //       title="주소별칭"
  //       onChange={handleChange}
  //       type="text"
  //       errorMessage={
  //         errorMessages.addressNickname ? errorMessages.addressNickname : ''
  //       }
  //     />
  //     <InputType.FormInputInfo
  //       type="text"
  //       id="receiverName"
  //       name="receiverName"
  //       defaultValue={receiverName}
  //       title="받는 분"
  //       onChange={handleChange}
  //       required
  //       errorMessage={
  //         errorMessages.receiverName ? errorMessages.receiverName : ''
  //       }
  //     />
  //     <InputType.HasButtonInputInfo
  //       type="text"
  //       id="zipNo"
  //       name="zipNo"
  //       defaultValue={zipNo}
  //       title="우편번호"
  //       buttonText="주소검색"
  //       link={`search-address?${queryString}`}
  //       readonly={true}
  //     />
  //     <InputType.InputInfo
  //       type="text"
  //       id="roadAddr"
  //       name="roadAddr"
  //       title="기본주소"
  //       defaultValue={roadAddr}
  //       readonly={true}
  //       required
  //     />
  //     <InputType.FormInputInfo
  //       type="text"
  //       id="detailedAddress"
  //       name="detailedAddress"
  //       defaultValue={detailedAddress}
  //       title="상세주소"
  //       onChange={handleChange}
  //       required
  //     />
  //     <InputType.FormInputInfo
  //       type="text"
  //       id="firstPhoneNumber"
  //       name="firstPhoneNumber"
  //       defaultValue={firstPhoneNumber}
  //       title="연락처1"
  //       onChange={handleChange}
  //       required
  //       errorMessage={
  //         errorMessages.firstPhoneNumber ? errorMessages.firstPhoneNumber : ''
  //       }
  //     />
  //     <InputType.FormInputInfo
  //       type="text"
  //       id="secondPhoneNumber"
  //       name="secondPhoneNumber"
  //       defaultValue={secondPhoneNumber}
  //       onChange={handleChange}
  //       title="연락처2"
  //       errorMessage={
  //         errorMessages.secondPhoneNumber ? errorMessages.secondPhoneNumber : ''
  //       }
  //     />
  //     <SelectMemo />
  //     <DefaultCheck id="defaultAddress" name="defaultAddress">
  //       기본배송지로 저장합니다.
  //     </DefaultCheck>
  //     <ButtonWrapper>
  //       <Button
  //         type="submit"
  //         disabled={!isActive}
  //         color={isActive ? 'green' : 'gray'}
  //         className="w-full mx-auto"
  //       >
  //         등록하기
  //       </Button>
  //     </ButtonWrapper>
  //   </form>
  // );
  return (
    <form
      action={setAddress}
      className="mt-[1.25rem] mb-[10rem] space-y-[1.25rem]"
    >
      <InputType.FormInputInfo
        id="addressNickname"
        name="addressNickname"
        title="주소별칭"
        onChange={handleChange}
        defaultValue={searchParams.get('addressNickname') || ''}
        // value={inputValues.addressNickname}
        type="text"
        errorMessage={
          errorMessages.addressNickname ? errorMessages.addressNickname : ''
        }
      />
      <InputType.FormInputInfo
        type="text"
        id="receiverName"
        name="receiverName"
        title="받는 분"
        onChange={handleChange}
        defaultValue={searchParams.get('receiverName') || ''}
        required
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
      />
      <InputType.InputInfo
        type="text"
        id="roadAddr"
        name="roadAddr"
        title="기본주소"
        readonly={true}
        defaultValue={searchParams.get('roadAddr') || ''}
        required
      />
      <InputType.FormInputInfo
        type="text"
        id="detailedAddress"
        name="detailedAddress"
        title="상세주소"
        onChange={handleChange}
        defaultValue={searchParams.get('detailedAddress') || ''}
        required
      />
      <InputType.FormInputInfo
        type="text"
        id="firstPhoneNumber"
        name="firstPhoneNumber"
        title="연락처1"
        onChange={handleChange}
        defaultValue={searchParams.get('firstPhoneNumber') || ''}
        required
      />
      <InputType.FormInputInfo
        type="text"
        id="secondPhoneNumber"
        name="secondPhoneNumber"
        onChange={handleChange}
        defaultValue={searchParams.get('secondPhoneNumber') || ''}
        title="연락처2"
      />
      <SelectMemo />
      <DefaultCheck id="defaultAddress" name="defaultAddress">
        기본배송지로 저장합니다.
      </DefaultCheck>
      <ButtonWrapper>
        <Button
          type="submit"
          color="green"
          className="w-full mx-auto"
          disabled={!isActive}
        >
          등록하기
        </Button>
      </ButtonWrapper>
    </form>
  );
}
