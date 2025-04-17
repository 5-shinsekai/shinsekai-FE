export interface CommonResponseType<T> {
  httpStatus: string;
  isSuccess: boolean;
  message: string;
  code: number;
  result: T;
}

export interface UserDataType {
  accessToken: string;
  refreshToken: string;
  name: string;
  memberUuid: string;
}
