'use client';

import React, { useEffect } from 'react';
import { cn } from '@/lib/utils';

interface props {
  title?: string;
  children?: React.ReactNode;
  className?: string;
}

export const Modal = ({ title, children, className }: props) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'; // 모달 띄워졌을 때 스크롤 막기
    return () => {
      document.body.style.overflow = 'auto';
    };
  });

  return (
    <div
      id="모달 외부"
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
          </ul>
        </header>
        <main className="w-full">
          <div className="text-black">{children}</div>
        </main>
      </div>
    </div>
  );
};
