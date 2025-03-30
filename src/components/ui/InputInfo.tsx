import React from 'react';

interface InputInfoPropsType {
  id: string;
  name: string;
  title: string;
  optional?: boolean;
}

export default function InputInfo({
  id,
  name,
  title,
  optional = false,
}: InputInfoPropsType) {
  return (
    <form className="border-b-1 content-center w-full h-[38px]">
      <label className="text-[0.625rem] font-medium pr-1">
        {title}
        <span className="text-[#00A862]">{optional ? null : '*'}</span>
      </label>
      <input
        type="text"
        id={id}
        name={name}
        placeholder=" "
        className="outline-none text-[0.625rem]"
      />
    </form>
  );
}
