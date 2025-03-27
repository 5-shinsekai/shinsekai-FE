import React from 'react';
import LogInForm from './LogInInForm';
import AuthMenu from './AuthMenu';
import { Button } from '@/components/ui/button';

export default function LogInSection() {
  return (
    <form className="">
      <LogInForm />
      <nav>
        <AuthMenu />
      </nav>
      <div className="w-full fixed bottom-5 right-0 px-[28px]">
        <Button size="default" color="green" className="w-full">
          로그인
        </Button>
      </div>
    </form>
  );
}
