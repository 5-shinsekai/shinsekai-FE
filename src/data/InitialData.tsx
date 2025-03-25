import CartIcon from "@/components/ui/icons/CartIcon";
import cartIcon from "@/components/ui/icons/CartIcon";
import CloseIcon from "@/components/ui/icons/CloseIcon";
import gnbMenuIcon from "@/components/ui/icons/GnbMenuIcon";
import SearchIcon from "@/components/ui/icons/SearchIcon";
import searchIcon from "@/components/ui/icons/SearchIcon";
import { gnbMenuType } from "@/types/InitialDataTypes";

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
