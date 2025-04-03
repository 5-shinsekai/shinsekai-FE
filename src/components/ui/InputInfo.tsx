// import React from 'react';

// interface InputInfoPropsType {
//   id: string;
//   name: string;
//   title: string;
//   required?: boolean;
// }

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
    <div className="relative w-full pt-4 ">
      <input
        type="text"
        id={id}
        name={name}
        placeholder=" "
        // required={required}
        className="peer w-full border-b outline-none text-[0.938rem] ease-in-out duration-150 border-gray-300 focus:border-custom-green-200"
      />
      <label
        htmlFor={id}
        className="absolute left-0 text-[0.938rem] text-gray-600 font-medium ease-in-out duration-150
          peer-focus:top-0
          peer-focus:text-xs 
          peer-focus:text-custom-green-200"
      >
        {title}
        {required && <span className="text-custom-green-200 px-0.5">*</span>}
      </label>
    </div>
  );
}
