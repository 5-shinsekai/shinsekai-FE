// import { getStarbuckscard } from '@/action/payment-service';
import CompleteRegisterCard from '@/components/pages/payment/RegisterStarbucksCardForm/CompleteRegisterCard';
import { starbuckscardInfoData } from '@/data/DummyData/StarbuckscardDummyData';

// interface Props {
//   searchParams: {
//     cardName: string;
//     cardNumber: string;
//   };
// }

// export default async function CardCompletePage({ searchParams }: Props) {
//   const { cardName, cardNumber } = searchParams; //카드 uuid로 변경

//   const cardList = await getStarbuckscard();
//   console.log(cardList);
//   const matchedCard = cardList.find(
//     (card: { cardName: string; cardNumber: string }) =>
//       card.cardName == cardName && card.cardNumber == cardNumber.slice(-6)
//   );

//   if (!matchedCard) return <div>등록된 카드 정보를 찾을 수 없습니다.</div>;

//   return <CompleteRegisterCard card={matchedCard} />;
// }

// 카드 등록 페이지 test
export default async function CardCompletePage() {
  // const { cardName, cardNumber } = searchParams; //카드 uuid로 변경

  // const cardList = await getStarbuckscard();
  // console.log(cardList);
  // const matchedCard = cardList.find(
  //   (card: { cardName: string; cardNumber: string }) =>
  //     card.cardName == cardName && card.cardNumber == cardNumber.slice(-6)
  // );

  // if (!matchedCard) return <div>등록된 카드 정보를 찾을 수 없습니다.</div>;
  const matchedCard = starbuckscardInfoData;

  return <CompleteRegisterCard card={matchedCard} />;
}
