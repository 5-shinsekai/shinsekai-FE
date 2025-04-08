import { Button } from './Button';
import { Checkbox } from './Checkbox';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import { Input } from './input';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function SignUpStep3() {
  return (
    <main className="px-7 group tracking-tighter">
      <p className="font-[Pretendard] text-[22px] font-medium leading-[30px] text-black pt-16 pb-6">
        본인확인을 위해
        <br />
        인증을 진행해 주세요
      </p>

      {/* 체크박스 그룹 + 링크 항목들 */}
      <div className="text-sm/normal font-semibold tracking-tighter">
        <div className="flex items-center gap-2 py-4 relative">
          <Checkbox className="" data-required={true} />
          <label>[필수] 본인 인증 서비스 약관 전체 동의</label>
        </div>

        {[
          '휴대폰 본인 인증 서비스 이용약관 동의',
          '휴대폰 통신사 이용약관 동의',
          '개인정보 제공 및 이용 동의',
          '고유식별정보 처리',
        ].map((label, i) => (
          <div key={i} className="flex items-center gap-2 py-4 relative">
            <label className="font-medium">{label}</label>
            <Link href="/" className={cn('absolute right-0')}>
              <ChevronRight size={16} />
            </Link>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <hr className="border-[1px]" />
        <Input placeholder="이름" />
        <Input placeholder="생년월일" />

        <div className="w-full flex items-center space-x-3">
          <Select defaultValue="skt">
            <SelectTrigger className="w-1/3 px-0 py-4 text-sm/normal text-[#6e6e6e] border-none">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="skt">SKT</SelectItem>
              <SelectItem value="kt">KT</SelectItem>
              <SelectItem value="lg">LG U+</SelectItem>
            </SelectContent>
          </Select>

          <Input placeholder="전화번호" className="border-none" />

          <Button type="submit" color="white" className="py-0 px-0">
            인증요청
          </Button>
        </div>
      </div>

      <hr />

      {/* 안내 문구 */}
      <ul className="text-sm/normal font-thin tracking-tighter text-[#A0A0A0] list-disc py-5">
        <li>
          타인의 개인정보를 도용하여 가입한 경우, 서비스 이용 제한 및 법적
          제재를 받으실 수 있습니다.
        </li>
      </ul>

      {/* 하단 버튼 */}
      <div className="w-full fixed bottom-0 pb-5 left-0 bg-white px-7 pt-5 shadow-[0_0_10px_rgba(0,0,0,0.1)]">
        <Button
          type="submit"
          size="lg"
          className="
              w-full text-lg font-bold py-6
              group-has-[button[data-state=unchecked][data-required=true]]:bg-[#E0E0E0]
              group-has-[button[data-state=unchecked][data-required=true]]:pointer-events-none
            "
        >
          다음
        </Button>
      </div>
    </main>
  );
}
