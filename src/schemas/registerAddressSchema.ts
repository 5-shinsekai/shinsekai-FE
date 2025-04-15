import { z } from 'zod';

export const registerAddressSchema = z.object({
  addressNickname: z
    .string()
    .min(1, '필수 입력항목 입니다')
    .max(10, '10자 이하'),
  receiverName: z.string().min(1, '필수 입력항목 입니다').max(10, '10자 이하'),
  zipNo: z.string().min(1, '필수 입력항목 입니다'),
  roadAddress: z.string().min(1, '필수 입력항목 입니다'),
  detailedAddress: z.string().min(1, '필수 입력항목 입니다'),
  firstPhoneNumber: z
    .string()
    .regex(/^\d{3}\d{3,4}\d{4}$/, '연락처 형식이 아닙니다.'),
  secondPhoneNumber: z
    .string()
    .optional()
    .refine((val) => !val || /^\d{3}\d{3,4}\d{4}$/.test(val), {
      message: '연락처 형식이 아닙니다.',
    }),
  deliveryMemo: z.string().optional(),
  isDirectInputMemo: z.string().optional(),
  defaultAddress: z.string().optional(),
});
