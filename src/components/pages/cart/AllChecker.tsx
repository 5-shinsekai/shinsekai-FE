'use client';
import CustomCheckbox from '@/components/ui/CustomCheckbox';
import React from 'react';
import { updateAllChecked } from '@/action/cart-service';

export default function AllChecker({
  id,
  name,
  checked,
}: {
  id: string;
  name: string;
  checked: boolean;
}) {
  const CheckerType = {
    전체: 'ALL',
    일반: 'ORDINARY',
    냉동: 'FROZEN',
  };
  const handleChange = () => {
    updateAllChecked(CheckerType[name as keyof typeof CheckerType], !checked);
  };
  return (
    <CustomCheckbox
      id={id}
      name={name}
      checked={checked}
      onChange={handleChange}
    />
  );
}
