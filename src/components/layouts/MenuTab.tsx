import React, { Suspense } from 'react';
import MenuTabModule from './MenuTabModule';
import { MenuBarType } from '@/types/MenuTypes';

export default function MenuTab({
  data,
  isDefault,
  isMultiple,
  className,
}: Readonly<MenuBarType & { className?: string }>) {
  return (
    <Suspense>
      <MenuTabModule
        data={data}
        isMultiple={isMultiple}
        isDefault={isDefault}
        className={className}
      />
    </Suspense>
  );
}
