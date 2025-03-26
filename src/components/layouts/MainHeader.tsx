import { navLeftMenuData, navRightMenuData } from "@/data/InitialData";
import { gnbMenuType } from "@/types/InitialDataTypes";
import React from "react";

export default function MainHeader() {
  return (
    <header className="h-14 flex items-center w-full">
      <nav className="w-full px-4 py-2 grid grid-cols-3">
      <ul className="w-full flex justify-between items-center">
          {navLeftMenuData.map((menu: gnbMenuType) => (
            <li key={menu.id}>
              <menu.icon className="" />
            </li>
          ))}
        </ul>
        <p className=" text-center my-auto font-semibold">메인 페이지</p>
        <ul className="w-full flex justify-evenly items-center">
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
