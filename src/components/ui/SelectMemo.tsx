'use client';

import * as React from 'react';
import { useEffect, useState } from 'react';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/Select';

export function SelectMemo({
  onChange,
  defaultValue,
  directDefaultValue,
}: {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  directDefaultValue?: string;
  defaultValue?: string;
}) {
  const [isDirectInput, setIsDirectInput] = useState(false);

  const handleSelectMemo = (value: string) => {
    console.log(value);
    if (defaultValue === '직접입력') {
      setIsDirectInput(true);
    } else {
      setIsDirectInput(false);
    }
  };

  useEffect(() => {
    if (defaultValue === '직접입력' || directDefaultValue) {
      setIsDirectInput(true);
    }
  }, [defaultValue, directDefaultValue]);

  return (
    <div className="w-full">
      <label className="font-medium text-[0.75rem]">배송메모</label>
      <Select
        name="deliveryMemo"
        onValueChange={(value) => {
          handleSelectMemo(value);
          if (onChange) {
            onChange({
              target: {
                name: 'deliveryMemo',
                value,
              },
            } as React.ChangeEvent<HTMLInputElement>);
          }
        }}
      >
        <SelectTrigger className="w-full text-[0.938rem] font-medium border-b-1 border-t-0 border-x-0 rounded-none *outline-none p-0">
          <SelectValue placeholder="배송 메모를 선택해 주세요." className="" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel className="">배송 메모를 선택해 주세요.</SelectLabel>
            <SelectItem value="배송 전 연락 바랍니다.">
              배송 전 연락 바랍니다.
            </SelectItem>
            <SelectItem value="부재 시 경비실에 맡겨주세요.">
              부재 시 경비실에 맡겨주세요.
            </SelectItem>
            <SelectItem value="부재 시 문 앞에 놓아주세요.">
              부재 시 문 앞에 놓아주세요.
            </SelectItem>
            <SelectItem value="부재 시 전화 또는 문자 남겨주세요.">
              부재 시 전화 또는 문자 남겨주세요.
            </SelectItem>
            <SelectItem value="직접입력">직접입력</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      {isDirectInput && (
        <input
          id="isDirectInputMemo"
          name="isDirectInputMemo"
          placeholder="배송 시 요청사항을 기재해 주세요."
          className="w-full pt-6 border-b outline-none text-[0.938rem] 3ease-in-out duration-150 border-gray-300 focus:border-custom-green-200"
          onChange={
            onChange &&
            ((e) => {
              onChange({
                target: {
                  name: 'isDirectInputMemo',
                  value: e.target.value,
                },
              } as React.ChangeEvent<HTMLInputElement>);
            })
          }
          defaultValue={directDefaultValue}
          type="text"
        />
      )}
    </div>
  );
}
