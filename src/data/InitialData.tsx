import CartIcon from "@/components/ui/icons/CartIcon";
import CloseIcon from "@/components/ui/icons/CloseIcon";
import gnbMenuIcon from "@/components/ui/icons/GnbMenuIcon";
import SearchIcon from "@/components/ui/icons/SearchIcon";
import { gnbMenuType,mainTabMenuType } from "@/types/InitialDataTypes";

export const navLeftMenuData: gnbMenuType[] = [
  {
    id: 1,
    title: "gnb",
    icon: gnbMenuIcon,
  }
];

export const navRightMenuData: gnbMenuType[] = [
  {
    id: 1,
    title: "gnb",
    icon: SearchIcon,
  },
  {
    id: 2,
    title: "search",
    icon: CartIcon,
  },
  {
    id: 3,
    title: "cart",
    icon: CloseIcon,
  },
];

export const mainTabMenuData: mainTabMenuType[] = [
  {
    id: 1,
    title: "메인",
    link: "/main",
  },
  {
    id: 2,
    title: "기획전",
    link: "/event",
  },
  {
    id: 3,
    title: "베스트",
    link: "/best",
  },
  {
    id: 4,
    title: "마이페이지",
    link: "/mypage",
  },
];