export interface MyAddressListType {
  id: number;
  addressNickname: string;
  receiverName: string;
  zipNo: string;
  roadAddr: string;
  detailAddress: string;
  firstPhoneNumber: string;
  secondPhoneNumber: string;
  deliveryMemo: string;
  isMainAddress: string;
}

export interface RegisterAddressFormType {
  addressNickname: string;
  receiverName: string;
  zipNo: string;
  roadAddress: string;
  detailAddress: string;
  firstPhoneNumber: string;
  secondPhoneNumber: string;
  deliveryMemo: string;
  isMainAddress: string;
}

export interface AddressDataType {
  addressUuid: string;
  addressNickname: string;
  receiverName: string;
  zipNo: string;
  roadAddress: string;
  detailAddress: string;
  totalAddress: string;
  firstPhoneNumber: string;
  secondPhoneNumber: string;
  deliveryMemo: string;
  isPersonalMemo: boolean;
  isMainAddress: boolean;
}
