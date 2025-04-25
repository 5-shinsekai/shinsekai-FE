'use client';

import { StarbuckscardInfoType } from '@/types/PaymentDataType';
import { MypageStarbucksCards } from '../payment/OrderInfo/StarbucksCard';
import EmptyStarbuckscard from '@/components/ui/EmptyStarbuckscard';
import { useRouter } from 'next/navigation';
import PlusIcon from '@/components/ui/icons/PlusIcon';

export default function MyStarbuckscards({
  cardList,
}: {
  cardList: StarbuckscardInfoType[];
}) {
  console.log(cardList, '테스트');
  const router = useRouter();

  const handleClick = () => {
    router.push('/register-starbucksCard?redirect=myStarbuckscard');
  };

  return (
    <section className="">
      <header className="flex justify-between items-center py-10  px-6 fixed w-full top-13 z-50 bg-white shadow-md">
        <h1 className="text-xl font-semibold">
          스타벅스 카드
          <span className="font-medium px-1">({cardList.length})</span>
        </h1>
        <button onClick={handleClick} className="text-custom-green-200">
          + 새 카드 추가
        </button>
      </header>
      <div
        className="px-6 py-35 flex flex-col items-center gap-4
       mx-2"
      >
        {/* 등록된 카드 리스트 */}
        <>
          {cardList.length > 0 &&
            cardList.map((card, index) => (
              <div
                key={card.memberStarbucksCardListUuid}
                className="relative flex-shrink-0 w-full"
              >
                <MypageStarbucksCards card={card} index={index} />
              </div>
            ))}
          <button
            onClick={handleClick}
            className="w-full py-10 flex justify-center items-center rounded-2xl shadow-xl "
          >
            <PlusIcon className="stroke-black size-10" />
          </button>
        </>

        {/* 카드 등록 버튼 */}
        {cardList.length === 0 && (
          <section className="flex flex-col items-center w-full pt-2 pb-4 bg-white rounded-2xl shadow-2xl">
            <EmptyStarbuckscard redirectPage="myStarbuckscard" />
          </section>
        )}
      </div>
    </section>
  );
}
