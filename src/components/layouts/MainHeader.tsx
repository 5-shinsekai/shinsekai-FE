import { navLeftMenuData, navRightMenuData } from '@/data/InitialData';
import { gnbMenuType } from '@/types/InitialDataTypes';
import React from 'react';
import Image from 'next/image';
import mainlogo from '@/components/ui/mainlogo.png';
import Link from 'next/link';
import { cn } from '@/lib/utils';
export default function MainHeader({
  className,
}: Readonly<{ className?: string }>) {
  return (
    <nav
      className={cn(
        'h-14 items-center w-full px-4 py-2 grid grid-cols-3',
        className
      )}
    >
      <ul className="w-full flex justify-between items-center">
        {navLeftMenuData.map((menu: gnbMenuType) => (
          <li key={menu.id}>
            <menu.icon />
          </li>
        ))}
      </ul>
      <Link href="/">
        <Image src={mainlogo} alt="mainlogo" width={120} className="mx-auto" />
      </Link>
      <ul className="w-full flex justify-around items-center">
        {navRightMenuData.map((menu: gnbMenuType) => (
          <li key={menu.id}>
            <menu.icon />
          </li>
        ))}
      </ul>
    </nav>
  );
}
