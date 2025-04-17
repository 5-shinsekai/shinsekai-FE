'use client';
import React from 'react';
import LogInForm from './LogInInForm';
import AuthMenu from './AuthMenu';
import ButtonWrapper from '@/components/ui/wrapper/ButtonWrapper';
import { signIn } from 'next-auth/react';
import { Button } from '@/components/ui/Button';

export default function LogInSection() {
  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    console.log('handleSignIn');
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const loginId = formData.get('loginId') as string;
    const password = formData.get('password') as string;
    console.log(loginId, password);
    signIn('credentials', {
      loginId,
      password,
      redirect: true,
    });
  };
  return (
    <form onSubmit={handleSignIn} className="h-full">
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
