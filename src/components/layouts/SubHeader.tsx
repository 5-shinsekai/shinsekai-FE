'use client';

import LeftArrowIcon from '../ui/icons/LeftArrowIcon';
import CloseIcon from '../ui/icons/CloseIcon';
import { useRouter } from 'next/navigation';
import React from 'react';

interface SubHeaderPropsType {
  title: string;
  showBackButton?: boolean;
  showCloseButton?: boolean;
  className?: string;
}

export default function SubHeader({
  title,
  showBackButton = false,
  showCloseButton = false,
}: SubHeaderPropsType) {
  const router = useRouter();

  const close = () => {
    router.back();
  };
  return (
    <header className="sticky top-0 bg-white w-full h-14 content-center px-4 shadow-sm z-50">
      <nav className="">
        <ul className="flex justify-between items-center">
          <li>
            {showBackButton ? (
              <button onClick={close}>
                <LeftArrowIcon className="" />
              </button>
            ) : null}
          </li>
          <li className="text-[0.875rem] font-semibold">{title}</li>
          <li>
            {showCloseButton ? (
              <button onClick={close}>
                <CloseIcon className="" />
              </button>
            ) : null}
          </li>
        </ul>
      </nav>
    </header>
  );
}
