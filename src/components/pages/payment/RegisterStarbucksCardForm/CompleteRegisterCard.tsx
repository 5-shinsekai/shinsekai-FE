'use client';

import { Button } from '@/components/ui/Button';
import ButtonWrapper from '@/components/ui/wrapper/ButtonWrapper';
import { StarbuckscardInfoType } from '@/types/PaymentDataType';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface Props {
  card: StarbuckscardInfoType;
}

export default function CompleteRegisterCard({ card }: Props) {
  const router = useRouter();

  return (
    <>
      <main className="flex flex-col items-center px-10 py-15">
        <h1 className="py-5 text-2xl text-custom-gray-700 font-semibold">
          카드 등록이 완료되었습니다.
        </h1>
        <Image
          src={card.cardImageUrl}
          alt="starbucksCard"
          width={250}
          height={250}
          className="shadow-lg my-4"
        />
        <p className="py-1">카드별칭: {card.cardName}</p>
        <p className="py-1">
          카드번호: ****-****-****-{card.cardNumber.slice(-4)}
        </p>
        <p className="py-1">잔액: {card.remainAmount.toLocaleString()}원</p>
      </main>
      <ButtonWrapper>
        <Button
          color="green"
          onClick={() => {
            router.push('/payment');
            router.refresh();
          }}
        >
          확인
        </Button>
      </ButtonWrapper>
    </>
  );
}
