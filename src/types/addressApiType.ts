export interface addressResultType {
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
export interface searchResultType {
  errorMessage: string;
  countPerPage: string;
  totalCount: string;
  errorCode: string;
  currentPage: string;
}
export interface addressApiType {
  results: {
    common: searchResultType;
    juso: addressResultType[];
  };
}
