import { shoppingInfoType } from '@/types/mypageDataType';
import CartIcon from '@/components/ui/icons/CartIcon';

export const shoppingInfoData: shoppingInfoType[] = [
  {
    id: 1,
    title: '주문 내역',
    link: './myorder',
    icon: CartIcon,
  },
  {
    id: 2,
    title: '선물함',
    link: './mygift',
    icon: CartIcon,
  },
  {
    id: 3,
    title: '쿠폰',
    link: './mycoupon',
    icon: CartIcon,
  },
  {
    id: 4,
    title: '배송지 관리',
    link: './myadress',
    icon: CartIcon,
  },
  {
    id: 5,
    title: '알림 신청 내역',
    link: './myalert',
    icon: CartIcon,
  },
];
