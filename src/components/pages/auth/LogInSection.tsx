import React from 'react';
import LogInForm from './LogInInForm';
import AuthMenu from './AuthMenu';
import { Button } from '@/components/ui/button';
import ButtonWrapper from '@/components/ui/wrapper/buttonWrapper';

export default function LogInSection() {
  return (
    <form className="h-full">
      {/* 버튼까지 포함해서 */}
      <LogInForm />
      <AuthMenu />
      <ButtonWrapper>
        <Button size="default" color="green" className="w-full h-[40px]">
          로그인
        </Button>
      </ButtonWrapper>
    </form>
  );
}
