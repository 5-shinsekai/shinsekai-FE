import React, { Suspense } from 'react';
import MenuTabModule from './MenuTabModule';
import { MenuBarType } from '@/types/MenuTypes';

export default function MenuTab({
  category,
  keyname,
  isDefault,
  isMultiple,
  className,
}: Readonly<MenuBarType & { className?: string }>) {
  return (
    <Suspense>
      <MenuTabModule
        keyname={keyname}
        category={category}
        isMultiple={isMultiple}
        isDefault={isDefault}
        className={className}
      />
    </Suspense>
  );
}
