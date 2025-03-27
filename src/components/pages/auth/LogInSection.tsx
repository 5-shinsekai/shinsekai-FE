import React from 'react';
import LogInInput from './LogInInput';
import { Button } from '@/components/ui/button';

export default function LogInSection() {
  return (
    <form className="">
      <LogInInput />
      <nav>...</nav>
      <div className="w-full absolute bottom-5 right-0 px-[28px]">
        <Button size="default" color="green" className="w-full">
          로그인
        </Button>
      </div>
    </form>
  );
}
