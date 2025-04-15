'use client';

import { Checkbox } from '@/components/ui/checkbox';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import RightArrowIcon from '../icons/RightArrowIcon';
import { Modal } from '../Modal';

interface AgreeCheckPropsType {
  id: string;
  name: string;
  children?: React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  defaultChecked?: boolean;
  className?: string;
  termLink?: React.ReactNode;
}

export function DefaultCheck({
  id,
  children,
  name,
  onChange,
  className,
  defaultChecked = false,
}: AgreeCheckPropsType) {
  return (
    <div className="flex items-center">
      <div className="flex items-center space-x-2 flex-1">
        <Checkbox
          id={id}
          name={name}
          checked={defaultChecked}
          onCheckedChange={(checked) => {
            if (onChange) {
              onChange({
                target: {
                  name,
                  value: checked,
                },
              } as React.ChangeEvent<HTMLInputElement>);
            }
          }}
          className="border-custom-green-300 data-[state=checked]:border-custom-green-300  data-[state=checked]:bg-custom-green-300 size-[1.375rem] rounded-[0.2rem]"
        />
        <label
          id={id}
          htmlFor={id}
          className={cn(
            'text-[0.875rem] text-custom-gray-600 font-medium ',
            className
          )}
        >
          {children}
        </label>
      </div>
    </div>
  );
}
export function HasTermCheck({
  id,
  children,
  name,
  onChange,
  className,
  defaultChecked = false,
  termLink,
}: AgreeCheckPropsType) {
  const [modal, setModal] = useState(false);
  const handle = () => {
    setModal(!modal);
  };
  return (
    <div className="flex justify-between">
      <div className="flex space-x-2">
        <Checkbox
          id={id}
          name={name}
          checked={defaultChecked}
          onCheckedChange={(checked) => {
            if (onChange) {
              onChange({
                target: {
                  name,
                  value: checked,
                },
              } as React.ChangeEvent<HTMLInputElement>);
            }
          }}
          className="border-custom-green-300 data-[state=checked]:border-custom-green-300  data-[state=checked]:bg-custom-green-300 size-[1.375rem] rounded-[0.2rem]"
        />
        <label
          id={id}
          htmlFor={id}
          className={cn(
            'text-[0.875rem] text-custom-gray-600 font-medium ',
            className
          )}
        >
          {children}
        </label>
      </div>
      <button
        title="modal-button"
        type="button"
        onClick={handle}
        className={cn(
          'text-gray-400 size-3 scale-130',
          'hover:text-accent-foreground/70'
        )}
      >
        <RightArrowIcon />
      </button>
      {modal && (
        <Modal
          title="카드 등록 이용약관"
          setModal={handle}
          className="h-full w-full "
        >
          {termLink}
        </Modal>
      )}
    </div>
  );
}
