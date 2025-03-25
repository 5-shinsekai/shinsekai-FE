import { navMenuData } from "@/data/InitialData";
import { gnbMenuType } from "@/types/InitialDataTypes";
import React from "react";

export default function MainHeader() {
  return (
    <header>
      <p>헤더입니다.</p>
      <nav className="w-full px-[16px] py-3">
        <ul className="w-full flex justify-between items-center">
          {navMenuData.map((menu: gnbMenuType) => (
            <li key={menu.id}>
              <menu.icon className="" />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
