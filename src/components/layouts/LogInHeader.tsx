import { navBackButton } from '@/data/InitialData';
import { GnbMenuType } from '@/types/InitialDataTypes';
import React from 'react';
import Link from 'next/link';

export default function LogInHeader() {
  return (
    <header className="w-full h-14">
      <nav className="fixed">
        <ul className="py-[0.375rem]">
          {navBackButton.map((menu: GnbMenuType) => (
            <Link key={menu.id} href="/">
              <menu.icon className="mx-3 my-2.5" />
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
}
