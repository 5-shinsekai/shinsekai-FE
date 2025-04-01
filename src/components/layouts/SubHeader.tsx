import { navBackButton, navRightMenuData } from '@/data/InitialData';
import { gnbMenuType } from '@/types/InitialDataTypes';
import LeftArrowIcon from '../ui/icons/LeftArrowIcon';
import CloseIcon from '../ui/icons/CloseIcon';
import React from 'react';

interface SubHeaderPropsType {
  title: string;
  showBackButton?: boolean;
}

export default function SubHeader({
  title,
  showBackButton = false,
}: SubHeaderPropsType) {
  return (
    <header className="sticky top-0 bg-white w-full h-14 content-center px-4 shadow-sm">
      <nav className="relative">
        <ul className="flex justify-between items-center">
          <li>{showBackButton ? <LeftArrowIcon /> : null}</li>
          <li className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[0.875rem] font-semibold">
            {title}
          </li>
          <li>
            <CloseIcon className="" />
          </li>
        </ul>
      </nav>
    </header>
  );
}
