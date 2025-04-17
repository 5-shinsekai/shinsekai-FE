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

// export interface GetAddressDataType {
//   addressUuid: string;
//   zipNo: string;
//   roadAddress: string;
//   detailAddress: string;
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
  detailAddress: string;
  totalAddress: string;
  firstPhoneNumber: string;
  secondPhoneNumber: string;
  deliveryMemo: string;
  isPersonalMemo: boolean;
  isMainAddress: boolean;
}
