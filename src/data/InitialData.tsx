import CartIcon from '@/components/ui/icons/CartIcon';
import gnbMenuIcon from '@/components/ui/icons/GnbMenuIcon';
import SearchIcon from '@/components/ui/icons/SearchIcon';
import LeftArrowIcon from '@/components/ui/icons/LeftArrowIcon';
import {
  GnbMenuType,
  MainTabMenuType,
  PolicyDataType,
} from '@/types/InitialDataTypes';

export const navLeftMenuData: GnbMenuType[] = [
  {
    id: 1,
    title: 'gnb',
    icon: gnbMenuIcon,
  },
];

export const navRightMenuData: GnbMenuType[] = [
  {
    id: 1,
    title: 'gnb',
    icon: SearchIcon,
  },
  {
    id: 2,
    title: 'search',
    icon: CartIcon,
  },
];

export const navBackButton: GnbMenuType[] = [
  {
    id: 1,
    title: 'back',
    icon: LeftArrowIcon,
  },
];

export const mainTabMenuData: MainTabMenuType[] = [
  {
    id: 1,
    title: '메인',
    link: '/main',
  },
  {
    id: 2,
    title: '기획전',
    link: '/event',
  },
  {
    id: 3,
    title: '베스트',
    link: '/best',
  },
  {
    id: 4,
    title: '마이페이지',
    link: '/mypage',
  },
];

export const authMenuData: MainTabMenuType[] = [
  {
    id: 1,
    title: '아이디 찾기',
    link: '/findid',
  },
  {
    id: 2,
    title: '비밀번호 찾기',
    link: '/findpw',
  },
  {
    id: 3,
    title: '회원가입',
    link: '/signup',
  },
];

export const policyData: PolicyDataType[] = [
  {
    id: 1,
    title: '[필수] 이용약관 동의',
    required: true,
  },
  {
    id: 2,
    title: '[필수] 개인정보 수집 및 이용동의',
    required: true,
  },
  {
    id: 3,
    title: '[필수] 스타벅스 카드 이용약관',
    required: true,
  },
  {
    id: 4,
    title: '[선택] 마케팅 활용 수집 • 이용 동의',
    required: false,
  },
];
