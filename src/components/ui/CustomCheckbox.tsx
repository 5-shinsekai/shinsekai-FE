'use client';
import React from 'react';
import { Checkbox } from './checkbox';

export default function CustomCheckbox({
  name,
  size = 1.375,
  value,
  id,
}: {
  id?: string;
  name?: string;
  size?: number;
  value?: string | number;
}) {
  return (
    <Checkbox
      id={id}
      name={name}
      value={value}
      className={`size-[${size}rem] data-[state=checked]:bg-custom-green-300
         data-[state=checked]:border-custom-green-300 border-custom-green-100 rounded-sm`}
    />
  );
}
