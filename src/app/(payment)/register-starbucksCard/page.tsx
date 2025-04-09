import { tempService } from '@/action/input-check';
import { Button } from '@/components/ui/button';
import DefaultCheck from '@/components/ui/forms/defaultCheck';
import ButtonWrapper from '@/components/ui/wrapper/buttonWrapper';
import React from 'react';

export default function Page() {
  return (
    <main>
      <form action={tempService} className="mx-4 my-10 space-y-15">
        <div>
          <input
            name="cardName"
            placeholder="카드명 최대 20자 (선택)"
            className="relative placeholder:text-black w-full border-b-2 outline-none"
          />
          <p className="mt-1 text-xs text-gray-400">
            카드명은 미입력 시 자동으로 부여됩니다.
          </p>
        </div>
        <input
          name="cardNumber"
          placeholder="스타벅스 카드번호 16자리 (필수)"
          className="placeholder:text-black w-full border-b-2 outline-none"
        />
        <input
          name="PinNumber"
          placeholder="Pin번호 8자리 (필수)"
          className="placeholder:text-black w-full border-b-2 outline-none"
        />
        <ButtonWrapper>
          <DefaultCheck
            id="RegisterCardAgreeCheck"
            name="RegisterCardAgreeCheck"
            children={'스타벅스 카드 이용약관 동의 [필수]'}
            className="pb-4 pt-1"
          />
          <Button type="submit" className="w-full">
            등록하기
          </Button>
        </ButtonWrapper>
      </form>
    </main>
  );
}
