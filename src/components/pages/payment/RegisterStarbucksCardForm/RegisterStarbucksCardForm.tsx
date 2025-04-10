'use client';

import { tempService } from '@/action/input-check';
import { Button } from '@/components/ui/button';
import DefaultCheck from '@/components/ui/forms/defaultCheck';
import RightArrowIcon from '@/components/ui/icons/RightArrowIcon';
import { InputType } from '@/components/ui/InputInfo';
import { Modal } from '@/components/ui/Modal';
import ButtonWrapper from '@/components/ui/wrapper/buttonWrapper';
import { registerCardSchema } from '@/schemas/registerCardSchema';
import { ExternalStarbucksCardDataType } from '@/types/PaymentDataType';
import React, { useEffect, useState } from 'react';
import RegisterStarbucksCardTerm from './RegisterStarbucksCardTerm';
import { cn } from '@/lib/utils';
import AutoTabInput from '@/components/ui/forms/autoTabInput';

export default function RegisterStarbucksCardForm({
  action,
}: {
  action: (starbuckscardForm: FormData) => void;
}) {
  const [isValid, setIsValid] = useState(false);
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
  const [modal, setModal] = useState(false);
  const handle = () => {
    setModal(!modal);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(name, value);

    setInputValues((prev) => ({
      ...prev,
      [name]: value,
    }));
    // console.log(inputValues);
    const res = registerCardSchema.safeParse({
      ...inputValues,
      [name]: value,
    });
    if (!res.success) {
      const fieldErrors: Partial<ExternalStarbucksCardDataType> = {};
      res.error.errors.forEach((error) => {
        const fieldName = error.path[0] as keyof ExternalStarbucksCardDataType;
        fieldErrors[fieldName] = error.message;
      });
      setErrorMessages(fieldErrors);
    }
  };

  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    if (isFirstLoad) {
      setIsFirstLoad(false);
      return; // 첫 마운트 시에는 검사하지 않음
    }

    const res = registerCardSchema.safeParse(inputValues);
    // console.log(res);
    if (!res.success) {
      const fieldErrors: Partial<ExternalStarbucksCardDataType> = {};
      res.error.errors.forEach((error) => {
        const fieldName = error.path[0] as keyof ExternalStarbucksCardDataType;
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
    <form action={action} className="mx-4 my-10">
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
        <InputType.FormInputInfo
          id="cardNumber"
          name="cardNumber"
          title="스타벅스 카드번호 16자리 (필수)"
          onChange={handleChange}
          defaultValue={inputValues.cardNumber}
          type="text"
          errorMessage={errorMessages.cardNumber}
        />
        {/* <AutoTabInput
          id="cardNumber"
          name="cardNumber"
          title="스타벅스 카드번호 16자리 (필수)"
          onChange={handleChange}
          defaultValue={inputValues.cardNumber}
          // type="text"
          errorMessage={errorMessages.cardNumber}
          className=" mx-auto"
        /> */}
        <InputType.FormInputInfo
          id="pinNumber"
          name="pinNumber"
          title="pin번호 8자리 (필수)"
          onChange={handleChange}
          defaultValue={inputValues.pinNumber}
          type="text"
          errorMessage={errorMessages.pinNumber}
        />
      </div>

      <ButtonWrapper>
        <div className="flex justify-between content-center pb-4 pt-1 px-1">
          <DefaultCheck
            id="RegisterCardAgreeCheck"
            name="RegisterCardAgreeCheck"
            onChange={handleChange}
          >
            '스타벅스 카드 이용약관 동의 [필수]'
          </DefaultCheck>

          <button
            title="modal-button"
            type="button"
            onClick={handle}
            className={cn(
              'text-gray-400 size-3 scale-130',
              'hover:text-accent-foreground/70'
            )}
          >
            <RightArrowIcon />
          </button>
          {modal && (
            <Modal title="카드 등록 이용약관" setModal={handle} className="">
              <RegisterStarbucksCardTerm />
            </Modal>
          )}
        </div>
        <Button type="submit" className="w-full" disabled={!isValid}>
          등록하기
        </Button>
      </ButtonWrapper>
    </form>
  );
}
