import React, { Suspense } from 'react';
import MenuTabModule from './MenuTabModule';
import { MenuBarType } from '@/types/MenuTypes';

export default function MenuTab({
  category,
  keyname,
  isDefault,
  isMultiple,
  className,
  highCategory,
}: Readonly<MenuBarType & { className?: string; highCategory?: boolean }>) {
  return (
    <Suspense>
      <MenuTabModule
        keyname={keyname}
        category={category}
        isMultiple={isMultiple}
        isDefault={isDefault}
        className={className}
        highCategory={highCategory}
      />
    </Suspense>
  );
}
