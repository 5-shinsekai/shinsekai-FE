export interface AddressResultType {
  detBdNmList: string;
  engAddr: string;
  rn: string;
  emdNm: string;
  zipNo: string;
  roadAddrPart2: string;
  emdNo: number;
  sggNm: string;
  jibunAddr: string;
  siNm: string;
  roadAddrPart1: string;
  bdNm: string;
  admCd: number;
  udrtYn: number;
  lnbrMnnm: number;
  roadAddr: string;
  lnbrSlno: number;
  buldMnnm: number;
  bdKdcd: number;
  liNm: string;
  rnMgtSn: number;
  mtYn: number;
  bdMgtSn: number;
  buldSlno: number;
}
export interface SearchResultType {
  errorMessage: string;
  countPerPage: string;
  totalCount: string;
  errorCode: string;
  currentPage: string;
}
export interface AddressApiType {
  results: {
    common: SearchResultType;
    juso: AddressResultType[];
  };
}

export interface PostAddressDataType {
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
