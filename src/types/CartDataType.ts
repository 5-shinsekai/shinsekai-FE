export interface CartDataType {
  cartUuid: string;
  productCode: string;
  productOptionListId: number;
  quantity: number;
  checked: boolean;
  engravingMessage: string | null;
}

export interface CartListType {
  ordinaryProducts: CartDataType[];
  frozenProducts: CartDataType[];
}
