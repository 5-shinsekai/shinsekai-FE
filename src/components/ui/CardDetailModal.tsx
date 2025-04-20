import { cn } from '@/lib/utils';
import React, { useEffect } from 'react';

interface props {
  title?: string;
  setModal?: () => void;
  children?: React.ReactNode;
  className?: string;
}
export const CardDetailModal = ({ title, children, className }: props) => {
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
          'bg-white w-full rounded-md h-full not-odd:overflow-y-auto z-[100]',
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
        <main>
          <div className="text-black">{children}</div>
        </main>
      </div>
    </div>
  );
};
