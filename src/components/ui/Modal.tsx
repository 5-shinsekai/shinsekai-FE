'use client';

import React, { useEffect } from 'react';
import { Button } from './button';
import { cn } from '@/lib/utils';

interface props {
  title?: string;
  setModal: () => void;
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
          'bg-white w-2/3 rounded-md p-10 max-h-[80vh] overflow-y-auto z-[100]',
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
          className="text-[1rem] px-6 block mx-auto"
          onClick={setModal}
        >
          확인
        </Button>
      </div>
    </div>
  );
};
