import { navLeftMenuData, navRightMenuData } from "@/data/InitialData";
import { gnbMenuType } from "@/types/InitialDataTypes";
import React from "react";

export default function MainHeader() {
  return (
    <header>
      <nav className="w-full px-[16px] py-3 grid grid-cols-3 gap-4">
      <ul className="w-full flex justify-between items-center">
          {navLeftMenuData.map((menu: gnbMenuType) => (
            <li key={menu.id}>
              <menu.icon className="" />
            </li>
          ))}
        </ul>
        <p className=" text-center items-center">메인 페이지</p>
        <ul className="w-full flex justify-between items-center">
          {navRightMenuData.map((menu: gnbMenuType) => (
            <li key={menu.id}>
              <menu.icon className="" />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
