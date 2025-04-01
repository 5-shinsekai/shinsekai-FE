import { navBackButton } from '@/data/InitialData';
import { gnbMenuType } from '@/types/InitialDataTypes';
import React from 'react';

export default function LogInHeader() {
  return (
    <header className="w-full h-14">
      <nav className="fixed">
        <ul className="py-[0.375rem]">
          {navBackButton.map((menu: gnbMenuType) => (
            <li key={menu.id}>
              <menu.icon className="mx-3 my-2.5" />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
