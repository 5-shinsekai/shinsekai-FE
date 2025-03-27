import React from 'react';

export default function LogInInput() {
  return (
    <form className="flex flex-col">
      <input
        placeholder="아이디"
        className="w-[334px] h-[28px] border-b border-[#bdbdbd] placeholder-black"
      />
      <input
        placeholder="패스워드"
        className="w-[334px] h-[28px] mt-[24px] border-b border-[#bdbdbd] placeholder-black"
      />
    </form>
  );
}
