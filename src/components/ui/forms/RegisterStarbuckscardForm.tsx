'use client';

import React, { useEffect, useState } from 'react';
import { InputType } from '../InputInfo';
import { ExternalStarbucksCardDataType } from '@/types/PaymentDataType';
import { registerCardSchema } from '@/schemas/registerCardSchema';
import AutoTabInput from './AutoTabInput';
import { HasTermCheck } from './DefaultCheck';
import ButtonWrapper from '../wrapper/ButtonWrapper';
import { Button } from '../Button';
import { cn } from '@/lib/utils';
import RegisterStarbucksCardTerm from '@/components/pages/payment/RegisterStarbucksCardForm/RegisterStarbucksCardTerm';

export default function RegisterStarbuckscardForm({
  action,
}: {
  action: (starbuckscardForm: FormData) => void;
}) {
  const [isValid, setIsValid] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [inputValues, setInputValues] = useState<ExternalStarbucksCardDataType>(
    {
      cardName: '',
      cardNumber: '',
      pinNumber: '',
    }
  );

  const [errorMessages, setErrorMessages] = useState<
    Partial<ExternalStarbucksCardDataType>
  >({
    cardName: '',
    cardNumber: '',
    pinNumber: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(name, value);

    setInputValues((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(inputValues);

    const key = name as keyof typeof registerCardSchema.shape;
    const res = registerCardSchema.shape[key].safeParse(value);

    if (!res.success) {
      const errorMessage = res.error.errors[0].message;

      setErrorMessages((prev) => ({
        ...prev,
        [name]: errorMessage,
      }));
      setIsValid(false);
    } else {
      setErrorMessages((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  useEffect(() => {
    const res = registerCardSchema.safeParse(inputValues);
    if (res.success && isChecked) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [inputValues, isChecked]);

  return (
    <form action={action} className="h-full mx-4 my-10">
      <div className="space-y-13">
        <InputType.FormInputInfo
          id="cardName"
          name="cardName"
          title="카드명 최대 20자 (선택)"
          onChange={handleChange}
          defaultValue={inputValues.cardName}
          type="text"
          errorMessage={errorMessages.cardName}
          maxLength={20}
        />
        <AutoTabInput
          type="text"
          id="cardNumber"
          name="cardNumber"
          inputbox={4}
          maxLength={[4, 4, 4, 4]}
          title="스타벅스 카드번호 16자리 (필수)"
          onChange={handleChange}
          defaultValue={inputValues.cardNumber}
          errorMessage={errorMessages.cardNumber}
          className="pt-6 mx-auto"
        />
        <InputType.FormInputInfo
          id="pinNumber"
          name="pinNumber"
          title="pin번호 8자리 (필수)"
          onChange={handleChange}
          maxLength={8}
          defaultValue={inputValues.pinNumber}
          type="text"
          errorMessage={errorMessages.pinNumber}
        />
      </div>
      <ButtonWrapper>
        <HasTermCheck
          id="RegisterCardAgreeCheck"
          name="RegisterCardAgreeCheck"
          onChange={() => setIsChecked(!isChecked)}
          defaultChecked={isChecked}
          className={cn(isChecked ? 'transition-all text-black' : '')}
          termLink={<RegisterStarbucksCardTerm />}
        >
          스타벅스 카드 이용약관 동의 [필수]
        </HasTermCheck>
        <Button
          type="submit"
          className="w-full"
          disabled={!isValid}
          color={!isValid ? 'gray' : 'green'}
        >
          등록하기
        </Button>
      </ButtonWrapper>
    </form>
  );
}
