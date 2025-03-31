import CartIcon from '@/components/ui/icons/CartIcon';
import CloseIcon from '@/components/ui/icons/CloseIcon';
import gnbMenuIcon from '@/components/ui/icons/GnbMenuIcon';
import SearchIcon from '@/components/ui/icons/SearchIcon';
import LeftArrowIcon from '@/components/ui/icons/LeftArrowIcon';
import { gnbMenuType, mainTabMenuType } from '@/types/InitialDataTypes';

export const navLeftMenuData: gnbMenuType[] = [
  {
    id: 1,
    title: 'gnb',
    icon: gnbMenuIcon,
  },
];

export const navRightMenuData: gnbMenuType[] = [
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

export const navBackButton: gnbMenuType[] = [
  {
    id: 1,
    title: 'back',
    icon: LeftArrowIcon,
  },
];

export const mainTabMenuData: mainTabMenuType[] = [
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

export const authMenuData: mainTabMenuType[] = [
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
