'use client';

import { tempService } from '@/action/input-check';
import { Button } from '@/components/ui/button';
import DefaultCheck from '@/components/ui/forms/defaultCheck';
import { InputType } from '@/components/ui/InputInfo';
import ButtonWrapper from '@/components/ui/wrapper/buttonWrapper';
import { registerCardSchema } from '@/schemas/registerCardSchema';
import React, { useEffect, useState } from 'react';

interface RegisterStarbucksCardFormType {
  cardName: string;
  cardNumber: string;
  pinNumber: string;
}

export default function RegisterStarbucksCardForm() {
  const [isValid, setIsValid] = useState(false);
  const [inputValues, setInputValues] = useState<RegisterStarbucksCardFormType>(
    {} as RegisterStarbucksCardFormType
  );

  const [errorMessages, setErrorMessages] = useState<
    Partial<RegisterStarbucksCardFormType>
  >({
    cardName: '',
    cardNumber: '',
    pinNumber: '',
  });
  //   useEffect(() => {
  //     const res = registerCardSchema.safeParse(inputValues);

  //     if (!res.success) {
  //       const fieldErrors: Partial<RegisterStarbucksCardFormType> = {};
  //       res.error.errors.forEach((error) => {
  //         const fieldName = error.path[0] as keyof RegisterStarbucksCardFormType;
  //         fieldErrors[fieldName] = error.message;
  //       });

  //       setErrorMessages((prev) => ({
  //         ...prev,
  //         ...fieldErrors,
  //       }));
  //     } else {
  //       setErrorMessages({
  //         cardName: '',
  //         cardNumber: '',
  //         pinNumber: '',
  //       });
  //     }
  //   }, [inputValues]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(name, value);

    setInputValues((prev) => ({
      ...prev,
      [name]: value,
    }));

    const res = registerCardSchema.safeParse({
      ...inputValues,
      [name]: value,
    });
    if (!res.success) {
      const fieldErrors: Partial<RegisterStarbucksCardFormType> = {};
      res.error.errors.forEach((error) => {
        const fieldName = error.path[0] as keyof RegisterStarbucksCardFormType;
        fieldErrors[fieldName] = error.message;
      });
      setErrorMessages(fieldErrors);
    }
  };

  useEffect(() => {
    const res = registerCardSchema.safeParse(inputValues);
    console.log(res);
    if (!res.success) {
      const fieldErrors: Partial<RegisterStarbucksCardFormType> = {};
      res.error.errors.forEach((error) => {
        const fieldName = error.path[0] as keyof RegisterStarbucksCardFormType;
        fieldErrors[fieldName] = error.message;
      });

      setErrorMessages((prev) => ({
        ...prev,
        ...fieldErrors,
      }));
      setIsValid(false);
    } else {
      setErrorMessages({
        cardName: '',
        cardNumber: '',
        pinNumber: '',
      });
      setIsValid(true);
    }
  }, [inputValues]);

  return (
    <form action={tempService} className="mx-4 my-10 space-y-15">
      <InputType.FormInputInfo
        id="cardName"
        name="cardName"
        title="카드명 최대 20자 (선택)"
        onChange={handleChange}
        defaultValue={inputValues.cardName}
        type="text"
        errorMessage={errorMessages.cardName}
      />
      <InputType.FormInputInfo
        id="cardNumber"
        name="cardNumber"
        title="스타벅스 카드번호 16자리 (필수)"
        onChange={handleChange}
        defaultValue={inputValues.cardNumber}
        type="text"
        errorMessage={errorMessages.cardNumber}
      />
      <InputType.FormInputInfo
        id="pinNumber"
        name="pinNumber"
        title="pin번호 8자리 (필수)"
        onChange={handleChange}
        defaultValue={inputValues.pinNumber}
        type="text"
        errorMessage={errorMessages.pinNumber}
      />

      <ButtonWrapper>
        <DefaultCheck
          id="RegisterCardAgreeCheck"
          name="RegisterCardAgreeCheck"
          className="pb-4 pt-1"
        >
          {'스타벅스 카드 이용약관 동의 [필수]'}
        </DefaultCheck>
        <Button type="submit" className="w-full" disabled={!isValid}>
          등록하기
        </Button>
      </ButtonWrapper>
    </form>
  );
}
