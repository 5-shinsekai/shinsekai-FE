'use client';

import * as React from 'react';
import { useState } from 'react';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import InputInfo from './InputInfo';

export function SelectMemo() {
  const [selectMemo, setSelectMemo] = useState<string | null>(null);

  const handleSelectMemo = (value: string) => {
    setSelectMemo(value);
  };

  return (
    <div className="w-full">
      <label
        className="font-medium *:**:
      text-[0.75rem]"
      >
        배송메모
      </label>
      <Select onValueChange={handleSelectMemo}>
        <SelectTrigger className="w-full text-[0.938rem] font-medium border-b-1 border-t-0 border-x-0 rounded-none p-0">
          <SelectValue placeholder="배송 메모를 선택해 주세요." className="" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel className="">배송 메모를 선택해 주세요.</SelectLabel>
            <SelectItem value="1">배송 전 연락 바랍니다.</SelectItem>
            <SelectItem value="2">부재 시 경비실에 맡겨주세요.</SelectItem>
            <SelectItem value="3">부재 시 문 앞에 놓아주세요.</SelectItem>
            <SelectItem value="4">
              부재 시 전화 또는 문자 남겨주세요.
            </SelectItem>
            <SelectItem value="5">직접입력</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      {selectMemo == '5' && (
        <input
          id="1"
          name="1"
          placeholder="배송 시 요청사항을 기재해 주세요."
          className="w-full pt-6 border-b outline-none text-[0.938rem] ease-in-out duration-150 border-gray-300 focus:border-custom-green-200"
        />
      )}
    </div>
  );
}
