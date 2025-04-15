export interface myAddressListType {
  id: number;
  addressNickname: string;
  receiverName: string;
  zipNo: string;
  roadAddr: string;
  detailedAddress: string;
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
  detailedAddress: string;
  firstPhoneNumber: string;
  secondPhoneNumber: string;
  deliveryMemo: string;
  isMainAddress: string;
}

// export interface GetAddressDataType {
//   addressUuid: string;
//   zipNo: string;
//   roadAddress: string;
//   detailedAddress: string;
//   addressNickname: string;
//   deliveryMemo: string;
//   totalAddress: string;
//   firstPhoneNumber: string;
//   secondPhoneNumber: string;
//   receiverName: string;
//   ismainAddress: boolean;
// }

export interface AddressDataType {
  addressUuid: string;
  addressNickname: string;
  receiverName: string;
  zipNo: string;
  roadAddress: string;
  detailedAddress: string;
  totalAddress: string;
  firstPhoneNumber: string;
  secondPhoneNumber: string;
  deliveryMemo: string;
  isPersonalMemo: boolean;
  isMainAddress: boolean;
}
