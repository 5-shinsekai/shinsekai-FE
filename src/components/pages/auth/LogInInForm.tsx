import React from 'react';

export default function LogInForm() {
  return (
    <>
      {/* div */}
      <input
        placeholder="아이디"
        className="w-full h-[28px] border-b border-[#bdbdbd] placeholder-black focus:outline-none"
      />
      <input
        type="password"
        placeholder="패스워드"
        className="w-full h-[28px] mt-[24px] border-b border-[#bdbdbd] placeholder-black focus:outline-none"
      />
    </>
  );
}
