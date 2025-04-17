export interface ExternalStarbucksCardDataType {
  cardName: string;
  cardNumber: string;
  pinNumber: string;
}

export interface RegisterStarbucksCardDataType {
  cardName: string;
  cardNumber: string;
  cardImageUrl: string;
  cardDescription: string;
  remainAmount: number;
}

export interface StarbuckscardInfoType {
  memberStarbucksCardListUuid: string;
  cardName: string;
  cardNumber: string;
  cardImageUrl: string;
  // cardDescription: string;
  remainAmount: number;
}
