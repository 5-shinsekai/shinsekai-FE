import { starbuckscardInfoType } from '@/types/PaymentDataType';

export const paymentMethodDummyData: starbuckscardInfoType[] = [
  {
    memberStarbucksCardListUuid: 'starbucksCardUuida1',
    cardName: '테스트1',
    cardNumber: '234576',
    cardImageUrl: '/starbucksCard2.png',
    remainAmount: 50000,
  },
  {
    memberStarbucksCardListUuid: 'starbucksCardUuida2',
    cardName: '테스트2',
    cardNumber: '123456',
    cardImageUrl: '/starbucksCard3.png',
    remainAmount: 30000,
  },
  {
    memberStarbucksCardListUuid: 'starbucksCardUuida3',
    cardName: '테스트3',
    cardNumber: '345678',
    cardImageUrl: '/starbucksCard4.png',
    remainAmount: 20000,
  },
  {
    memberStarbucksCardListUuid: 'starbucksCardUuida4',
    cardName: '테스트4',
    cardNumber: '654321',
    cardImageUrl: '/starbucksCard5.png',
    remainAmount: 10000,
  },
];
