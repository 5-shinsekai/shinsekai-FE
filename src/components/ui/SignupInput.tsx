import { cn } from '@/lib/utils';
import React from 'react';

export default function SignupInput({
  type = 'text',
  name,
  className,
  onChange,
  value,
  placeholder,
}: {
  type?: string;
  name?: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  placeholder?: string;
}) {
  return (
    <>
      <input
        name={name}
        type={type}
        className={cn(
          'border-b-2 p-3 w-full text-xl  focus:outline-0 focus:bg-blue-50',
          className
        )}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
    </>
  );
}
