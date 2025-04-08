import Image from 'next/image';
import { Button } from './Button';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function SignUpStep2() {
  const dummyInfo = {
    avatarname: '토스로 인증할께요',
    avatarUrl: '/TossLogo.png',
    greeting: '스타벅스에서',
  };

  const avatarSize = 60;

  return (
    <main className="px-7 pb-[120px]">
      <div className="flex items-center gap-4 py-6">
        <div
          className="relative"
          style={{ width: avatarSize, height: avatarSize }}
        >
          <Image
            src={dummyInfo.avatarUrl}
            alt={dummyInfo.avatarname}
            fill
            className="rounded-full object-cover"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-lg font-semibold">{dummyInfo.avatarname}</span>
          <span className="text-sm text-gray-500">{dummyInfo.greeting}</span>
        </div>
      </div>

      <div className="group space-y-2 mt-6">
        <div className="flex items-center gap-2 py-4 relative">
          <label>[필수] 개인정보 제 3자 제공 동의</label>
          <Link href="/" className="absolute right-0">
            <ChevronRight size={16} />
          </Link>
        </div>
      </div>

      <div className="w-full fixed bottom-0 pb-5 left-0 bg-white px-7 space-y-2">
        <Button
          className="w-full group-has-[button[data-state=unchecked][data-required=true]]:bg-[#E0E0E0] group-has-[button[data-state=unchecked][data-required=true]]:pointer-events-none"
          color="blue"
        >
          동의하기
        </Button>
        <Button className="w-full text-black shadow-none" color="white">
          닫기
        </Button>
      </div>
    </main>
  );
}
