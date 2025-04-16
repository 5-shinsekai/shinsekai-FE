export interface commonResponseType<T> {
  httpStatus: string;
  isSuccess: boolean;
  message: string;
  code: number;
  result: T;
}

export interface userDataType {
  accessToken: string;
  refreshToken: string;
  name: string;
  memberUuid: string;
}
