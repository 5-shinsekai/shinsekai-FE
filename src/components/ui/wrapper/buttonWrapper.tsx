import React from 'react';

export default function ButtonWrapper({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="w-full fixed bottom-[30px] right-0 px-[28px]">
      {children}
    </div>
  );
}
