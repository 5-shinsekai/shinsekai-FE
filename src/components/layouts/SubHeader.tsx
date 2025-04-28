'use client';

import LeftArrowIcon from '../ui/icons/LeftArrowIcon';
import CloseIcon from '../ui/icons/CloseIcon';
import { useRouter } from 'next/navigation';
import React from 'react';
import { SubHeaderPropsType } from '@/types/InitialDataTypes';

export default function SubHeader({
  backButtonLink,
  closeButtonLink,
  title,
  showBackButton = false,
  showCloseButton = false,
}: SubHeaderPropsType) {
  const router = useRouter();
  const close = () => {
    router.back();
  };
  const handleBack = () => {
    if (backButtonLink) {
      router.push(`/${backButtonLink}`);
    } else {
      close();
    }
  };

  const handleClose = () => {
    if (closeButtonLink) {
      router.push(`/${closeButtonLink}`);
    } else {
      close();
    }
  };

  return (
    <header className="sticky top-0 bg-white w-full h-14 content-center px-4 shadow-md z-50">
      <nav className="">
        <ul className="relative flex justify-between items-center">
          <li>
            {showBackButton ? (
              <button onClick={handleBack}>
                <LeftArrowIcon className="" />
              </button>
            ) : null}
          </li>
          <li className="absolute left-1/2 -translate-x-1/2 text-[0.875rem] font-semibold">
            {title}
          </li>
          <li>
            {showCloseButton ? (
              <button onClick={handleClose}>
                <CloseIcon className="" />
              </button>
            ) : null}
          </li>
        </ul>
      </nav>
    </header>
  );
}
