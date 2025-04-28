import { cn } from '@/lib/utils';
import React, { useEffect } from 'react';
import CloseIcon from './icons/CloseIcon';

interface props {
  title?: string;
  setModal?: () => void;
  children?: React.ReactNode;
  className?: string;
}

export const CardDetailModal = ({
  title,
  children,
  className,
  setModal,
}: props) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
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
        <header className="relative">
          <h1 className="px-6 pt-10 pb-3 text-[1.625rem] font-semibold ">
            {title}
          </h1>
          <button onClick={setModal} className="absolute top-3 right-3">
            <CloseIcon className="size-9" />
          </button>
        </header>
        <main>
          <div className="text-black">{children}</div>
        </main>
      </div>
    </div>
  );
};
