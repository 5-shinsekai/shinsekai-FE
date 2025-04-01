import * as React from 'react';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function SelectMemo() {
  return (
    <form className="w-full flex flex-col mt-[22px]">
      <label
        className="font-medium *:**:
      text-[0.75rem]"
      >
        배송메모
      </label>
      <Select>
        <SelectTrigger className="w-full text-[0.938rem] font-medium border-b-1 border-t-0 border-x-0 rounded-none">
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
    </form>
  );
}
