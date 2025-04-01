import React from 'react';

interface InputInfoPropsType {
  id: string;
  name: string;
  title: string;
  required?: boolean;
}

export default function InputInfo({
  id,
  name,
  title,
  required = false,
}: InputInfoPropsType) {
  return (
    <div className="border-b-1 content-center w-full h-[2.375rem]">
      <label className="text-[0.938rem] font-medium pr-1">
        {title}
        {required && <span className="text-custom-green-200">*</span>}
      </label>
      <input
        type="text"
        id={id}
        name={name}
        placeholder=" "
        className="outline-none text-[0.9375rem]"
      />
    </div>
  );
}
