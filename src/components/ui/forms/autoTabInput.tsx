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
  className?: string;
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
  className,
}: AutoTabInputProps) {
  const inputRef = useRef<(HTMLInputElement | null)[]>([]);
  const [values, setValues] = useState<string[]>(Array(inputbox).fill(''));

  const handleChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const inputValue = e.target.value;

    const newValues = [...values];
    newValues[index] = inputValue;
    setValues(newValues);
    console.log(newValues);

    if (inputValue.length === maxLength && index < inputbox - 1) {
      inputRef.current[index + 1]?.focus();
    }
    if (onChange) onChange(e);
  };

  return (
    <div className={cn('relative pt-6', className)}>
      <div className="flex flex-wrap">
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
              'peer border-b border-gray-300 py-1 mr-4 text-center focus:outline-none focus:rounded focus:ring-2 focus:ring-custom-green-200 max-w-1/5'
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
