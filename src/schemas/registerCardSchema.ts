import { z } from 'zod';

export const registerCardSchema = z.object({
  // cardName: z.string().min(1, '필수 입력항목 입니다').max(20, '20자 이하'),
  cardNumber: z
    .string()
    .min(1, '카드번호를 입력해주세요')
    .refine(
      (val) => /^\d{16}$/.test(val),
      '스타벅스 카드는 16자리 숫자 형식이어야 합니다.'
    ),
  pinNumber: z
    .string()
    .min(1, 'Pin번호를 입력해주세요')
    .refine((val) => val.length === 8, 'Pin번호는 8자리입니다.'),
});
