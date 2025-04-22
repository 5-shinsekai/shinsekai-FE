export interface ExternalStarbucksCardDataType {
  cardName: string;
  cardNumber: string;
  pinNumber: string;
}

export interface ExternalStarbucksCardResponseType {
  cardName: string;
  cardNumber: string;
  remainAmount: number;
  cardImageUrl: string;
  cardDescription: string;
}

export interface RegisterStarbucksCardDataType {
  cardName: string;
  cardNumber: string;
  cardImageUrl: string;
  cardDescription: string;
  remainAmount: number;
  agreed: boolean;
}

export interface ChargeStarbucksCardApiType {
  memberStarbucksCardUuid: string;
  price: number;
}

export interface StarbuckscardInfoType {
  memberStarbucksCardListUuid: string;
  cardName: string;
  cardNumber: string;
  cardImageUrl: string;
  // cardDescription: string;
  remainAmount: number;
}

export interface StarbuckscardChargeOptionType {
  option: string;
  amount: number;
}
