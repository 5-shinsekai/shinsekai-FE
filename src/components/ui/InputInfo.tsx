// import React from 'react';

// interface InputInfoPropsType {
//   id: string;
//   name: string;
//   title: string;
//   required?: boolean;
// }
'use client';
import React from 'react';
import { Button } from './button';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';

interface InputInfoPropsType {
  id: string;
  name: string;
  title: string;
  defaultValue?: string;
  required?: boolean;
  buttonText?: string;
  link?: string;
  readonly?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

function HasButtonInputInfo({
  id,
  name,
  title,
  defaultValue = '',
  required = false,
  buttonText,
  link,
  readonly = false,
  className,
  onChange,
}: InputInfoPropsType) {
  const router = useRouter();
  return (
    <div className="flex justify-between gap-5">
      <div className="relative w-full pt-4 ">
        <input
          type="text"
          id={id}
          name={name}
          defaultValue={defaultValue ? defaultValue : ''}
          placeholder=" "
          readOnly={readonly}
          // required={required}
          onChange={onChange}
          className={cn(
            'peer w-full border-b outline-none text-[0.938rem] ease-in-out duration-150 border-gray-300 focus:border-custom-green-200',
            className
          )}
        />
        <label
          htmlFor={id}
          className={cn(
            'absolute left-0 text-[0.938rem] text-gray-600 font-medium ease-in-out duration-150',
            defaultValue
              ? 'top-0 text-xs text-custom-green-200'
              : 'peer-focus:top-0 peer-focus:text-xs peer-focus:text-custom-green-200'
          )}
        >
          {title}
          {required && <span className="text-custom-green-200 px-0.5">*</span>}
        </label>
      </div>
      <Button
        size="hug"
        type="button"
        color="default"
        className=" active:bg-custom-green-200/20"
        onClick={() => {
          if (link) {
            router.push(`/${link}`);
          }
        }}
      >
        {buttonText}
      </Button>
    </div>
  );
}

function InputInfo({
  id,
  name,
  title,
  required = false,
  defaultValue = '',
  readonly = false,
  onChange,
}: InputInfoPropsType) {
  return (
    <div className="relative w-full pt-4 ">
      <input
        type="text"
        id={id}
        name={name}
        defaultValue={defaultValue !== '' ? defaultValue : ''}
        placeholder=" "
        readOnly={readonly}
        onChange={onChange}
        // required={required}
        className="peer w-full border-b outline-none text-[0.938rem] ease-in-out duration-150 border-gray-300 focus:border-custom-green-200"
      />
      <label
        htmlFor={id}
        className={cn(
          'absolute left-0 text-[0.938rem] text-gray-600 font-medium ease-in-out duration-150',
          defaultValue
            ? 'top-0 text-xs text-custom-green-200'
            : 'peer-focus:top-0 peer-focus:text-xs peer-focus:text-custom-green-200'
        )}
      >
        {title}
        {required && <span className="text-custom-green-200 px-0.5">*</span>}
      </label>
    </div>
  );
}

export const InputType = {
  HasButtonInputInfo,
  InputInfo,
};
