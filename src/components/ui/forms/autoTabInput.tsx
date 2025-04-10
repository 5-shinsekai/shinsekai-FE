// components/AutoTabInput.tsx
'use client';

import { cn } from '@/lib/utils';
import React, { useRef, useState } from 'react';

interface AutoTabInputProps {
  inputbox?: number;
  maxLength?: number;
  id?: string;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string;
  defaultValue?: string;
  title?: string;
  required?: boolean;
}

export default function AutoTabInput({
  inputbox = 4,
  maxLength = 4,
  id,
  name,
  onChange,
  errorMessage = '',
  defaultValue = '',
  title = '',
  required = false,
}: AutoTabInputProps) {
  const inputRef = useRef<(HTMLInputElement | null)[]>([]);
  const [value, setValue] = useState('');

  const handleChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    console.log(e.target, e.target.value);
    console.log('값', value);
    if (e.target.value.length === maxLength && index < inputbox - 1) {
      inputRef.current[index + 1]?.focus();
      console.log(inputRef.current[index]);
    }
    if (onChange) onChange(e);
  };

  return (
    <div className="">
      <div className="relative w-full pt-6">
        {Array.from({ length: inputbox }).map((item, index) => (
          <input
            id={index === 0 ? id : undefined}
            name={name}
            key={index}
            type="text"
            maxLength={maxLength}
            ref={(e) => {
              inputRef.current[index] = e;
            }}
            onChange={(e) => handleChange(index, e)}
            className={cn(
              'peer border-b border-gray-300 rounded p-2 mr-1.5 text-center focus:outline-none focus:ring-2 focus:ring-custom-green-200'
            )}
          />
        ))}
        <label
          htmlFor={id}
          className={cn(
            'absolute left-0 top-1 text-[0.938rem] text-gray-600 font-medium ease-in-out duration-150',
            defaultValue
              ? 'top-0 text-xs text-custom-green-200'
              : 'peer-focus:top-0 peer-focus:text-xs peer-focus:text-custom-green-200'
          )}
        >
          {title}
          {required && <span className="text-custom-green-200 px-0.5">*</span>}
        </label>
      </div>

      {errorMessage && (
        <p className="text-xs text-red-500 mt-1">{errorMessage}</p>
      )}
    </div>
  );
}
