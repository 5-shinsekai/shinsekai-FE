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
    <div className="border-b-1 content-center w-full h-[38px]">
      <label className="text-[0.938rem] font-medium pr-1">
        {title}
        {required && <span className="text-[#00A862]">*</span>}
      </label>
      <input
        type="text"
        id={id}
        name={name}
        placeholder=" "
        className="outline-none text-[0.938rem]"
      />
    </div>
  );
}
