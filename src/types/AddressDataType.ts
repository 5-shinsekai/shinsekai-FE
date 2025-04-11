export interface myAddressListType {
  id: number;
  addressNickname: string;
  receiverName: string;
  zipNo: string;
  RoadAddress: string;
  detailedAddress: string;
  firstPhoneNumber: string;
  secondPhoneNumber: string;
  deliveryMemo: string;
  defaultAddress: string;
}

export interface RegisterAddressFormType {
  addressNickname: string;
  receiverName: string;
  zipNo: string;
  roadAddr: string;
  detailedAddress: string;
  firstPhoneNumber: string;
  secondPhoneNumber: string;
  deliveryMemo: string;
  defaultAddress: string;
}
