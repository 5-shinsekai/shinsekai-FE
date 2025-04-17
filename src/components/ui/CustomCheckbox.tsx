'use client';
import React from 'react';
import { Checkbox } from './Checkbox';

export default function CustomCheckbox({
  name,
  size = 1.375,
  value,
  id,
  onChange,
  checked,
  required = false,
}: {
  id?: string;
  name?: string;
  size?: number;
  value?: string | number;
  required?: boolean;
  checked?: boolean;
  onChange?: (isChecked: boolean) => void;
}) {
  return (
    <Checkbox
      checked={checked}
      data-required={required}
      id={id}
      name={name}
      value={value}
      className={`size-[${size}rem] data-[state=checked]:bg-custom-green-300
         data-[state=checked]:border-custom-green-300 border-custom-green-100 rounded-sm`}
      onCheckedChange={(e) => onChange?.(typeof e === 'boolean' ? e : false)}
    />
  );
}
