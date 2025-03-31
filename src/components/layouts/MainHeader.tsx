import { navLeftMenuData, navRightMenuData } from '@/data/InitialData';
import { gnbMenuType } from '@/types/InitialDataTypes';
import React from 'react';
import Image from 'next/image';
import mainlogo from '@/components/ui/mainlogo.png';
import Link from 'next/link';
export default function MainHeader() {
  return (
    <header className="h-14 flex items-center w-full">
      <nav className="w-full px-4 py-2 grid grid-cols-3">
        <ul className="w-full flex justify-between items-center">
          {navLeftMenuData.map((menu: gnbMenuType) => (
            <li key={menu.id}>
              <menu.icon />
            </li>
          ))}
        </ul>
        <Link href="/">
          <Image
            src={mainlogo}
            alt="mainlogo"
            width={120}
            className="mx-auto"
          />
        </Link>
        <ul className="w-full flex justify-around items-center">
          {navRightMenuData.map((menu: gnbMenuType) => (
            <li key={menu.id}>
              <menu.icon />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
