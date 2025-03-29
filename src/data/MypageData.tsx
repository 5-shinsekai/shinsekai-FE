import { myPageInfoType } from '@/types/mypageDataType';
import CartIcon from '@/components/ui/icons/CartIcon';
import { deliveryStatusType } from '@/types/mypageDataType';


export const shoppingInfoData: myPageInfoType[] = [
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

export const settingData: myPageInfoType[] = [
  {
    id: 1,
    title: '배송지 정보 수집 및 이용 동의',
    link: './ 배송지정보수집동의',
    icon: CartIcon,
  }
];

export const deliveryStatusData: deliveryStatusType[] = [
  {
    id: 1,
    title: '결제완료',
    count: 1,
    link: './결제완료'
  },
  {
    id: 2,
    title: '상품준비중',
    count: 2,
    link: './상품준비중'
  },
  {
    id: 3,
    title: '배송중',
    count: 1,
    link: './배송중'
  },
  {
    id: 4,
    title: '배송완료',
    count: 4,
    link: './배송완료'
  },
];

