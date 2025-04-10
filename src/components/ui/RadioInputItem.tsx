import { cn } from '@/lib/utils';
import React from 'react';

export default function RadioInputItem({
  value,
  comparer,
  checkedClassName,
  className,
  name,
  onChange,
}: {
  name?: string;
  value?: string;
  comparer?: string;
  checkedClassName?: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <label
      className={cn(
        'block border-2 w-full rounded-4xl p-2',
        className,
        comparer === value
          ? ` bg-custom-blue-100/10 border-custom-blue-100/30 ${checkedClassName}`
          : ''
      )}
    >
      <input
        type="radio"
        name={name}
        value={value}
        className=" hidden"
        checked={comparer === value}
        onChange={onChange}
      />
      {value}
    </label>
  );
}
