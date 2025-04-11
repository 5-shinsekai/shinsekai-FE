'use client';

import { tempService } from '@/action/input-check';
import { Button } from '@/components/ui/button';
import DefaultCheck from '@/components/ui/forms/defaultCheck';
import { InputType } from '@/components/ui/InputInfo';
import ButtonWrapper from '@/components/ui/wrapper/buttonWrapper';
import { registerCardSchema } from '@/schemas/registerCardSchema';
import React, { useState } from 'react';

interface RegisterStarbucksCardFormType {
  cardName: string;
  cardNumber: string;
  pinNumber: string;
}

export default function RegisterStarbucksCardForm() {
  const [inputValues, setInputValues] = useState<RegisterStarbucksCardFormType>(
    {
      cardName: '',
      cardNumber: '',
      pinNumber: '',
    }
  );
  const [validCheck, setvalidCheck] = useState<RegisterStarbucksCardFormType>({
    cardName: '0',
    cardNumber: '0',
    pinNumber: '0',
  });

  const [errorMessages, setErrorMessages] =
    useState<RegisterStarbucksCardFormType>({
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

    const current = {
      ...inputValues,
      [name]: value,
    };

    setInputValues(current);

    setvalidCheck((prev) => ({
      ...prev,
      [name]: '1',
    }));

    if (validCheck[name as keyof RegisterStarbucksCardFormType] === '1') {
      const res = registerCardSchema.safeParse(current);

      if (!res.success) {
        const fieldErrors: Partial<RegisterStarbucksCardFormType> = {};
        res.error.errors.forEach((error) => {
          const fieldName = error
            .path[0] as keyof RegisterStarbucksCardFormType;
          fieldErrors[fieldName] = error.message;
        });

        setErrorMessages((prev) => ({
          ...prev,
          ...fieldErrors,
        }));

        console.log(errorMessages);
      } else {
        setErrorMessages((prev) => ({
          ...prev,
          [name]: '',
        }));
      }
    }
  };

  return (
    <form action={tempService} className="mx-4 my-10 space-y-15">
      <InputType.FormInputInfo
        id="cardName"
        name="cardName"
        title="카드명 최대 20자 (선택)"
        onChange={handleChange}
        defaultValue={inputValues.cardName ? inputValues.cardName : ''}
        type="text"
        errorMessage={errorMessages.cardName ? errorMessages.cardName : ''}
      />
      <InputType.FormInputInfo
        id="cardNumber"
        name="cardNumber"
        title="스타벅스 카드번호 16자리 (필수)"
        onChange={handleChange}
        defaultValue={inputValues.cardNumber ? inputValues.cardNumber : ''}
        type="text"
        errorMessage={errorMessages.cardNumber ? errorMessages.cardNumber : ''}
      />
      <InputType.FormInputInfo
        id="pinNumber"
        name="pinNumber"
        title="pin번호 8자리 (필수)"
        onChange={handleChange}
        defaultValue={inputValues.pinNumber ? inputValues.pinNumber : ''}
        type="text"
        errorMessage={errorMessages.pinNumber ? errorMessages.pinNumber : ''}
      />

      <ButtonWrapper>
        <DefaultCheck
          id="RegisterCardAgreeCheck"
          name="RegisterCardAgreeCheck"
          className="pb-4 pt-1"
        >
          {'스타벅스 카드 이용약관 동의 [필수]'}
        </DefaultCheck>
        <Button type="submit" className="w-full">
          등록하기
        </Button>
      </ButtonWrapper>
    </form>
  );
}
