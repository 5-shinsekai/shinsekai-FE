import { z } from 'zod';

export const registerCardSchema = z.object({
  cardName: z.string().max(20, '카드명은 최대 20자입니다.'),
  cardNumber: z
    .string()
    .trim()
    .regex(/^\d{16}$/, '카드번호는 숫자 16자리여야 합니다.'),
  pinNumber: z.string().min(1, 'Pin번호를 입력해주세요'),
});
