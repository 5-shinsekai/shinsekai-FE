'use client';
import React from 'react';
import { Button } from './button';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useState } from 'react';

interface InputInfoPropsType {
  id: string;
  name: string;
  title: string;
  defaultValue?: string;
  value?: string;
  required?: boolean;
  buttonText?: string;
  link?: string;
  readonly?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  type: string;
  errorMessage?: string;
  maxLength?: number;
}

function HasButtonInputInfo({
  id,
  name,
  title,
  defaultValue = '',
  value,
  required = false,
  buttonText,
  link,
  readonly = false,
  className,
  maxLength = 100,
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
          value={value}
          placeholder=" "
          readOnly={readonly}
          required={required}
          onChange={onChange}
          className={cn(
            'peer w-full border-b outline-none text-[0.938rem] ease-in-out duration-150 border-gray-300 focus:border-custom-green-200',
            className
          )}
          maxLength={maxLength}
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
  maxLength = 100,
  onChange,
  className,
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
        required={required}
        maxLength={maxLength}
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
  );
}

// function FormInputInfo({
//   id,
//   name,
//   title,
//   required = false,
//   readonly = false,
//   type,
// }: InputInfoPropsType) {
//   const [value, setValue] = useState('');
//   // const [click, setClick] = useState(0);
//   // const [focus, setFocus] = useState(false);
//   // console.log(click);

//   return (
//     <div className="relative w-full pt-4 ">
//       <input
//         type={type}
//         id={id}
//         name={name}
//         placeholder=" "
//         readOnly={readonly}
//         // onClick={() => setClick(click + 1)}
//         // onFocus={() => setFocus(true)}
//         // onBlur={() => setFocus(false)}
//         onChange={(e) => setValue(e.target.value)}
//         // required={required}
//         className="peer w-full border-b outline-none text-[0.938rem] ease-in-out duration-150 border-gray-300 focus:border-custom-green-200"
//       />
//       <label
//         htmlFor={id}
//         className={cn(
//           'absolute left-0 text-[0.938rem] text-gray-600 font-medium ease-in-out duration-150',
//           value
//             ? 'top-0 text-xs text-custom-green-200'
//             : 'peer-focus:top-0 peer-focus:text-xs peer-focus:text-custom-green-200'
//         )}
//       >
//         {title}
//         {required && <span className="text-custom-green-200 px-0.5">*</span>}
//       </label>
//       {/* {click > 0 && !focus && value.trim() === '' && (
//         <p className="text-xs top-1 text-red-500">error 메시지 출력하기</p>
//       )} */}
//     </div>
//   );
// }

function FormInputInfo({
  id,
  name,
  title,
  required = false,
  readonly = false,
  defaultValue = '',
  onChange,
  errorMessage = '',
  maxLength = 100,
}: InputInfoPropsType) {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (onChange) onChange(e);
  };

  return (
    <div className="relative w-full pt-4">
      <input
        type="text"
        id={id}
        name={name}
        value={value}
        placeholder=" "
        readOnly={readonly}
        onChange={handleChange}
        required={required}
        maxLength={maxLength}
        className={cn(
          'peer w-full border-b outline-none text-[0.938rem] ease-in-out duration-150',
          'border-gray-300 focus:border-custom-green-200',
          readonly && 'bg-gray-100 cursor-not-allowed',
          errorMessage && 'border-red-500 focus:border-red-500'
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
      {errorMessage !== '' && (
        <p className="text-xs mt-1 text-red-500">{errorMessage}</p>
      )}
    </div>
  );
}

export const InputType = {
  HasButtonInputInfo,
  InputInfo,
  FormInputInfo,
};
