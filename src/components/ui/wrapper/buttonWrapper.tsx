import React from 'react';

export default function ButtonWrapper({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="w-full fixed bottom-[1.875rem] right-0 px-[1.75rem]">
      {children}
    </div>
  );
}
