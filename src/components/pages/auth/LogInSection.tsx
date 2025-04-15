import React from 'react';
import LogInForm from './LogInInForm';
import AuthMenu from './AuthMenu';
import { Button } from '@/components/ui/button';
import ButtonWrapper from '@/components/ui/wrapper/buttonWrapper';
import { login } from '@/action/login-service';

export default function LogInSection() {
  return (
    <form action={login} className="h-full">
      {/* 버튼까지 포함해서 */}
      <LogInForm />
      <AuthMenu />
      <ButtonWrapper>
        <Button
          type="submit"
          size="default"
          color="green"
          className="w-full h-10"
        >
          로그인
        </Button>
      </ButtonWrapper>
    </form>
  );
}
