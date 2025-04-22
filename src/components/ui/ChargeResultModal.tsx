'use client';

import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { StarbuckscardInfoType } from '@/types/PaymentDataType';
import Image from 'next/image';
import React, { useEffect } from 'react';

interface props {
  title?: string;
  setModal?: (value: boolean) => void;
  message?: string;
  className?: string;
  success?: boolean;
  cardInfo?: StarbuckscardInfoType;
  totalAmount?: number;
  onClose?: () => void;
}

export const ChargeResultModal = ({
  title,
  message,
  className,
  setModal,
  success,
  cardInfo,
  totalAmount,
  onClose,
}: props) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'; // 모달 띄워졌을 때 스크롤 막기
    return () => {
      document.body.style.overflow = 'auto';
    };
  });
  return (
    <div
      id="모달 외부"
      className="fixed inset-0 flex justify-center items-center w-full h-full bg-gray-300/60 z-50"
    >
      <div
        id="모달"
        onClick={(e) => e.stopPropagation()}
        className={cn(
          'bg-white w-3/4 h-1/4 rounded-lg z-[100] shadow-xl',
          'transition-all duration-300 ease-out',
          'opacity-100 translate-y-0',
          'md:w-2/5 md:h-1/2',
          success === true && 'h-3/7 md:w-full md:h-2/3',
          className
        )}
      >
        <header>
          <ul className="flex justify-between">
            <li className="text-gray-400">{title}</li>
          </ul>
        </header>
        <main className="relative flex flex-col items-center justify-center">
          <div className="text-black text-[1.4rem]">
            {success ? (
              <div className="flex flex-col items-center justify-center">
                <p className="py-5.5 text-custom-gray-700 font-semibold text-2xl md:py-15">
                  {message}이 완료되었습니다
                </p>
                <Image
                  src={cardInfo?.cardImageUrl || ''}
                  alt={cardInfo?.cardName || ''}
                  width={250}
                  height={250}
                  className="mb-2 shadow-lg"
                />
                <p className="text-[1.1rem]">
                  {cardInfo?.cardName}({cardInfo?.cardNumber})
                </p>
                <p className=" leading-5">
                  <span className="text-[1.2rem]">현재 잔액:</span>{' '}
                  <strong>{totalAmount?.toLocaleString()}</strong>원
                </p>
              </div>
            ) : (
              <p className="text-center py-16 md:py-15 ">
                {message}에 실패했습니다
                <br />
                다시 시도해주세요
              </p>
            )}
          </div>
          <Button
            type="button"
            className={cn(
              success
                ? 'fixed text-[1.1rem] bottom-5'
                : 'fixed text-[1.3rem] pt-6 bottom-6 border-3 border-custom-gray-500 rounded-none  border-b-0 border-x-0 border-t rounded-b-md w-full'
            )}
            color={success ? 'green' : 'default'}
            size="hug"
            onClick={success ? () => onClose?.() : () => setModal?.(false)}
          >
            확인
          </Button>
        </main>
      </div>
    </div>
  );
};
