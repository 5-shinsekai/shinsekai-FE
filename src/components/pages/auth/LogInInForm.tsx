import React from 'react';

export default function LogInForm() {
  return (
    <>
      {/* div */}
      <input
        placeholder="아이디"
        className="w-full h-[1.75rem] border-b border-custom-gray-400 placeholder-black focus:outline-none"
      />
      <input
        type="password"
        placeholder="패스워드"
        className="w-full h-[1.75rem] mt-[1.5rem] border-b border-custom-gray-400 placeholder-black focus:outline-none"
      />
    </>
  );
}
