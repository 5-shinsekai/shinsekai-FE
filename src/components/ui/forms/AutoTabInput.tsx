'use client';

import { cn } from '@/lib/utils';
import React, { useRef, useState } from 'react';

interface AutoTabInputProps {
  inputbox?: number;
  maxLength?: number[];
  id?: string;
  name?: string;
  type: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string;
  defaultValue?: string;
  title?: string;
  required?: boolean;
  className?: string;
}

export default function AutoTabInput({
  inputbox = 0,
  maxLength = [0],
  id,
  name,
  onChange,
  errorMessage = '',
  defaultValue = '',
  title = '',
  required = false,
  className,
  type = '',
}: AutoTabInputProps) {
  const inputRef = useRef<(HTMLInputElement | null)[]>([]);

  const initialValues = Array.from({ length: inputbox }, (_, i) => {
    if (!defaultValue) return '';
    const split = defaultValue.split('-');
    return split[i] || '';
  });

  const [values, setValues] = useState<string[]>(
    Array.from({ length: inputbox }, (_, i) => initialValues[i] || '')
  );
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const inputValue = e.target.value;

    const newValues = [...values];
    newValues[index] = inputValue;
    setValues(newValues);

    if (inputValue.length === maxLength[index] && index < inputbox - 1) {
      inputRef.current[index + 1]?.focus();
    }

    if (onChange) {
      const fullValue = newValues.join('-');
      const syntheticEvent = {
        ...e,
        target: {
          ...e.target,
          name: name ?? '',
          value: fullValue,
        },
      } as React.ChangeEvent<HTMLInputElement>;
      onChange(syntheticEvent);
    }
  };

  return (
    <div className={cn('relative pt-5', className)}>
      <div className="flex flex-wrap">
        {Array.from({ length: inputbox }).map((item, index) => (
          <div
            key={index}
            className={cn(
              '',
              index < inputbox - 1 &&
                "after:content-['-'] after:align-sub after:text-2xl after:text-gray-400 after:px-2"
            )}
          >
            <input
              id={index === 0 ? id : undefined}
              value={values[index]}
              type={type}
              maxLength={maxLength[index]}
              ref={(e) => {
                inputRef.current[index] = e;
              }}
              onChange={(e) => handleChange(index, e)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className={cn(
                ' w-15 md:w-30 border-b border-gray-300 py-0.5 text-center focus:outline-none focus:rounded focus:ring-1 focus:ring-custom-green-200'
              )}
            />
          </div>
        ))}
        <input type="hidden" name={name} value={values.join('-')} />

        <label
          htmlFor={id}
          className={cn(
            'absolute left-0 top-1 text-[0.938rem] text-gray-600 font-medium ease-in-out duration-150',
            isFocused || defaultValue
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
