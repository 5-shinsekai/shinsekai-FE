import React from 'react';

export default function ButtonWrapper({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="w-full border-t-2 border-custom-gray-200 bg-white fixed bottom-0 pb-[1.875rem] pt-2 right-0 px-[1.75rem]">
      {children}
    </div>
  );
}
