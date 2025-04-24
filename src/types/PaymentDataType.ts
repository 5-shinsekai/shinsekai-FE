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

export interface CartOrderItemInfoType {
  cartUuid: string;
  productCode: string;
  productOptionListId: number;
  quantity: number;
  checked: boolean;
  engravingMessage: string;
}

export interface CartCheckedDataType {
  ordinaryProducts: Partial<CartOrderItemInfoType>[];
  frozenProducts: Partial<CartOrderItemInfoType>[];
}

export interface ProductDataType {
  productCode: string;
  productName: string;
  productPrice: number;
  productSummary: string;
  contentImages: string;
  thumbnailUrl: string;
  userPurchaseLimit: number;
  discountRate: number;
  productOptionIds: [number];
  frozen: boolean;
  new: boolean;
  best: boolean;
  engraving: boolean;
}

export interface ShowOrderProductDataType {
  cartUuid: string;
  productCode: string;
  productName: string;
  productPrice: number;
  discountRate: number;
  productOptionId: number;
  quantity: number;
  productImageUrl: string;
  productTotalPrice: number;
}

export interface ProductOptionDataType {
  id: number;
  productCode: string;
  sizeId: number;
  colorId: number;
  optionStatus: string;
  optionPrice: number;
  stockCount: number;
  minStockCount: number;
}

export interface ProductOutlineDataType {
  productCode: string;
  productName: string;
  productPrice: number;
  thumbnailUrl: string;
  discountRate: number;
  new: boolean;
  best: boolean;
}

export interface PurchaseProductLogDataType {
  productOptionId: number;
  productCode: string;
  productName: string;
  productPrice: number;
  quantity: number;
  productImageUrl: string;
  productImageDescription: string;
}

export interface PurchaseDataType {
  purchaseStatus: string;
  giftCertificationUuid: string;
  couponUuid: string;
  shipmentFee: number;
  productTotalPrice: number;
  addressUuid: string;
  orderName: string;
  paymentPrice: number;
  paymentMethod: string;
  paymentStatus: string;
  receiptUrl: string;
  memberStarbucksCardUuid: string;
  orderProductList: PurchaseProductLogDataType[];
}

export interface MyOrderInfoDataType {
  purchaseCode: string;
  paymentCode: string;
  purchaseStatus: string;
  addressUuid: string;
  giftCertificationUuid: string;
  couponUuid: string;
  shipmentFee: number;
  productTotalPrice: number;
  orderProductList: PurchaseProductLogDataType[];
}
