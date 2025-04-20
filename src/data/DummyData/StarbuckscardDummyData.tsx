import {
  StarbuckscardChargeOptionType,
  StarbuckscardInfoType,
} from '@/types/PaymentDataType';

export const starbuckscardInfoData: StarbuckscardInfoType = {
  memberStarbucksCardListUuid: 'MS20250414-76ebab32',
  cardName: '카드번호테스트',
  cardNumber: '345678',
  cardImageUrl: '/starbucksCard1.png',
  remainAmount: 80000,
};

export const chargeOptionsData: StarbuckscardChargeOptionType[] = [
  { option: '1만원', amount: 10000 },
  { option: '3만원', amount: 30000 },
  { option: '5만원', amount: 50000 },
  { option: '7만원', amount: 70000 },
  { option: '10만원', amount: 100000 },
  { option: '다른 금액', amount: 0 },
];
