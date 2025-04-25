import { MyPageInfoType, DeliveryStatusType } from '@/types/MypageDataType';
import AgreementIcon from '@/components/ui/icons/AgreementIcon';
import AlarmIcon from '@/components/ui/icons/AlarmIcon';
import CouponIcon from '@/components/ui/icons/CouponIcon';
import DeliveryIcon from '@/components/ui/icons/DeliveryIcon';
import OrderLogIcon from '@/components/ui/icons/OrderLogIcon';

export const shoppingInfoData: MyPageInfoType[] = [
  {
    id: 1,
    title: '주문 내역',
    link: './myorder',
    icon: OrderLogIcon,
  },

  {
    id: 2,
    title: '배송지 관리',
    link: './management-address',
    icon: DeliveryIcon,
  },
  {
    id: 3,
    title: '알림 신청 내역',
    link: './mypage/myalert',
    icon: AlarmIcon,
  },
  {
    id: 4,
    title: '스타벅스 카드',
    link: './myStarbuckscard',
    icon: CouponIcon,
  },
];

export const settingData: MyPageInfoType[] = [
  {
    id: 1,
    title: '배송지 정보 수집 및 이용 동의',
    link: './ 배송지정보수집동의',
    icon: AgreementIcon,
  },
];

export const deliveryStatusData: DeliveryStatusType[] = [
  {
    id: 1,
    title: '결제완료',
    count: 0,
    link: './결제완료',
  },
  {
    id: 2,
    title: '상품준비중',
    count: 2,
    link: './상품준비중',
  },
  {
    id: 3,
    title: '배송중',
    count: 1,
    link: './배송중',
  },
  {
    id: 4,
    title: '배송완료',
    count: 4,
    link: './배송완료',
  },
];
