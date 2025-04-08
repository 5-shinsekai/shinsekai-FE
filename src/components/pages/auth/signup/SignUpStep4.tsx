import Link from 'next/link';
import Image from 'next/image';
import { Button } from './Button';
import { ChevronRight } from 'lucide-react';

export default function SignUpStep4() {
  return (
    <main className="px-7">
      <section className="pt-20 space-y-6 text-center tracking-tighter">
        <div className="w-full px-16">
          <Image
            src="/lockImg.png"
            alt="자물쇠 이미지"
            width={200}
            height={140}
          />
        </div>
        <div className="text-base/normal font-semibold text-[#6B6B6B]">
          <p>
            본인인증을 위하여 토스로 이동해 주세요.
            <br />
            아래 버튼을 눌러 인증해 주세요.
          </p>
        </div>
        <Button className="w-[134px]">토스로 인증하기</Button>
        <Link
          href={'/'}
          className="flex pt-54 space-x-[2px] justify-center items-center"
        >
          <p className="text-xs text-[#9E9E9E] font-medium underline">
            토스앱이 없을 경우 휴대폰 인증도 가능해요
          </p>
          <ChevronRight size={20} color="#9E9E9E" />
        </Link>
        <div className="px-4 py-3 text-start bg-[#F7F7F7] text-xs tracking-tighter text-[#6B6B6B]">
          <p className="text-sm">문제 발생 시 조치방법</p>
          <ul className="mt-1 list-disc pl-5 space-y-1">
            <li>휴대폰에서 토스앱 설치가 되어있는지 확인해 주세요.</li>
            <li>
              토스앱 &gt; 우측하단 전체 &gt; 보안과 인증 &gt; 토스인증서에서
              인증요청 내용을 확인하실 수 있습니다.
            </li>
            <li>문제가 계속된다면, 토스 고객센터: 1599-4905로 문의바랍니다.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
