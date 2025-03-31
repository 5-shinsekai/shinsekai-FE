'use client';

import { Checkbox } from '@/components/ui/checkbox';

export default function AdressAgreeCheck() {
  return (
    <div className="flex mt-[30px] items-center space-x-2">
      <Checkbox id="terms" className="border-[#01A862] size-[22px]" />
      <label
        htmlFor="terms"
        className="text-[0.875rem] text-[#727272] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        배송지 정보 수집 및 이용동의 안내(필수)
      </label>
    </div>
  );
}
