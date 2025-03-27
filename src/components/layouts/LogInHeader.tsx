import { navBackButton } from '@/data/InitialData';
import { gnbMenuType } from '@/types/InitialDataTypes';
import React from 'react';

export default function LogInHeader() {
  return (
    <header className="w-full h-[56px]">
      <nav className="w-full">
        <ul className="py-[6px]">
          {navBackButton.map((menu: gnbMenuType) => (
            <li key={menu.id}>
              <menu.icon className="w-[48px] h-[44px]" />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
