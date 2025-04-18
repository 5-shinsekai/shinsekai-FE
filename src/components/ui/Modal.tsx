'use client';

import React, { useEffect } from 'react';
import { Button } from './Button';
import { cn } from '@/lib/utils';

interface props {
  title?: string;
  setModal?: () => void;
  children?: React.ReactNode;
  className?: string;
}

export const Modal = ({ title, setModal, children, className }: props) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'; // 모달 띄워졌을 때 스크롤 막기
    return () => {
      document.body.style.overflow = 'auto';
    };
  });

  return (
    <div
      id="모달 외부"
      // onClick={setModal}
      className="fixed inset-0 flex justify-center items-center w-full h-full bg-gray-500/50 z-[50]"
    >
      <div
        id="모달"
        onClick={(e) => e.stopPropagation()}
        className={cn(
          'bg-white w-3/4 rounded-md p-2 h-1/2 overflow-y-auto z-[100]',
          'transition-all duration-300 ease-out',
          'opacity-100 translate-y-0',
          className
        )}
      >
        <header>
          <ul className="flex justify-between">
            <li className="text-gray-400">{title}</li>
            {/* <li onClick={setModal}> X </li> */}
          </ul>
        </header>
        <main>
          <div className="text-black">{children}</div>
        </main>
        <Button
          color="green"
          size="hug"
          className="text-[1rem] px-6 block mx-auto mb-5"
          onClick={setModal}
        >
          확인
        </Button>
      </div>
    </div>
  );
};
