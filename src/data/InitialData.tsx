import cartIcon from "@/components/ui/icons/CartIcon";
import gnbMenuIcon from "@/components/ui/icons/GnbMenuIcon";
import searchIcon from "@/components/ui/icons/SearchIcon";
import { gnbMenuType } from "@/types/InitialDataTypes";

export const navMenuData: gnbMenuType[] = [
  {
    id: 1,
    title: "gnb",
    icon: gnbMenuIcon,
  },
  {
    id: 2,
    title: "search",
    icon: searchIcon,
  },
  {
    id: 3,
    title: "cart",
    icon: cartIcon,
  },
];
