import { cn } from '@/lib/utils';
import React from 'react';
import RadioInputItem from './RadioInputItem';

export default function RadioInput({
  wrapperClassName,
  ItemClassName,
  comparer,
  values,
  onChange,
  name,
  checkedClass,
}: {
  checkedClass?: string;
  name?: string;
  wrapperClassName?: string;
  ItemClassName?: string;
  comparer?: string;
  values: string[];
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div
      className={cn(
        'space-x-2 flex p-6 h-10 items-center text-center',
        wrapperClassName
      )}
    >
      {values.map((value) => (
        <RadioInputItem
          key={value}
          value={value}
          onChange={onChange}
          className={ItemClassName}
          checkedClassName={checkedClass}
          comparer={comparer}
          name={name}
        />
      ))}
    </div>
  );
}
