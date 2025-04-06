import { z } from 'zod';

export const registerAddressSchema = z.object({
  addressNickname: z
    .string()
    .min(1, '필수 입력항목 입니다')
    .max(10, '10자 이하'),
  receiverName: z.string().min(1, '필수 입력항목 입니다').max(10, '10자 이하'),
  detailedAddress: z.string(),
  firstPhoneNumber: z
    .string()
    .regex(/^\d{3}\d{3,4}\d{4}$/, '전화번호 형식이 아닙니다.'),
  secondPhoneNumber: z
    .string()
    .regex(/^\d{3}\d{3,4}\d{4}$/, '전화번호 형식이 아닙니다.'),
});
